import { supabase } from '@/lib/supabaseClient';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Generic hook factory for Supabase CRUD operations
function useSupabaseTable<T extends { id?: number }>(
  tableName: string,
  orderBy: string = 'created_at',
  ascending: boolean = false
) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: [tableName],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order(orderBy, { ascending });
      if (error) throw error;
      return data as T[];
    },
  });

  const insertMutation = useMutation({
    mutationFn: async (item: Omit<T, 'id' | 'created_at'>) => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(item)
        .select()
        .single();
      if (error) throw error;
      return data as T;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...updates }: T & { id: number }) => {
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data as T;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
    },
  });

  return {
    data: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
    insert: insertMutation.mutateAsync,
    update: updateMutation.mutateAsync,
    remove: deleteMutation.mutateAsync,
    isInserting: insertMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}

// Specific hooks for each table
export function usePublications() {
  return useSupabaseTable('publications', 'number', false);
}

export function useBookChapters() {
  return useSupabaseTable('book_chapters', 'number', false);
}

export function useBooks() {
  return useSupabaseTable('books', 'created_at', false);
}

export function useBlogPosts() {
  return useSupabaseTable('blog_posts', 'date', false);
}

export function usePhdStudents() {
  return useSupabaseTable('phd_students', 'year', false);
}

export function useResearchProjects() {
  return useSupabaseTable('research_projects', 'created_at', false);
}

export function useCollaborators() {
  return useSupabaseTable('collaborators', 'created_at', false);
}

export function useWorkshopActivities() {
  return useSupabaseTable('workshop_activities', 'year', false);
}

// Auth hook
export function useAuth() {
  const query = useQuery({
    queryKey: ['auth-session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return {
    session: query.data,
    isLoading: query.isLoading,
    login,
    logout,
  };
}

// File upload hook
export function useFileUpload() {
  const uploadFile = async (file: File, path: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { data, error } = await supabase.storage
      .from('media')
      .upload(filePath, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(data.path);

    return publicUrl;
  };

  return { uploadFile };
}
