import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabaseClient';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { Plus, Pencil, Trash2, Save, X, Upload, Image, Video, ChevronDown, ChevronUp } from 'lucide-react';
import { useFileUpload } from '@/hooks/useSupabaseData';

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  defaultValue?: string;
}

interface ContentManagerProps {
  tableName: string;
  title: string;
  fields: FieldConfig[];
  displayFields: string[];
  orderBy?: string;
  hasMedia?: boolean;
}

const ContentManager = ({ tableName, title, fields, displayFields, orderBy = 'created_at', hasMedia }: ContentManagerProps) => {
  const queryClient = useQueryClient();
  const { uploadFile } = useFileUpload();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);
  const [mediaVideoUrls, setMediaVideoUrls] = useState<string[]>([]);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  // Fetch data
  const { data: items = [], isLoading } = useQuery({
    queryKey: [tableName],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order(orderBy, { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  // Insert
  const insertMutation = useMutation({
    mutationFn: async (item: any) => {
      const { data, error } = await supabase.from(tableName).insert(item).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
      resetForm();
    },
  });

  // Update
  const updateMutation = useMutation({
    mutationFn: async ({ id, ...updates }: any) => {
      const { data, error } = await supabase.from(tableName).update(updates).eq('id', id).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
      resetForm();
    },
  });

  // Delete
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase.from(tableName).delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
    },
  });

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({});
    setMediaUrls([]);
    setMediaVideoUrls([]);
    setThumbnailUrl('');
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    const data: any = {};
    fields.forEach(field => {
      if (field.type === 'tags' && Array.isArray(item[field.name])) {
        data[field.name] = item[field.name].join(', ');
      } else {
        data[field.name] = item[field.name] ?? '';
      }
    });
    setFormData(data);

    // Load media for blog posts
    if (hasMedia && item.media) {
      setMediaUrls(item.media.images || []);
      setMediaVideoUrls(item.media.videos || []);
      setThumbnailUrl(item.media.thumbnail || '');
    }

    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submitData: any = {};
    fields.forEach(field => {
      let value = formData[field.name];
      if (field.type === 'number' && value !== '' && value !== undefined) {
        value = Number(value);
      } else if (field.type === 'checkbox') {
        value = Boolean(value);
      } else if (field.type === 'tags' && typeof value === 'string') {
        value = value.split(',').map((t: string) => t.trim()).filter(Boolean);
      }
      if (value !== '' && value !== undefined) {
        submitData[field.name] = value;
      }
    });

    // Add media data for blog posts
    if (hasMedia) {
      submitData.media = {
        type: mediaUrls.length > 1 ? 'gallery' : mediaVideoUrls.length > 0 ? 'video' : 'image',
        images: mediaUrls,
        videos: mediaVideoUrls,
        thumbnail: thumbnailUrl || mediaUrls[0] || '',
      };
    }

    if (editingId) {
      await updateMutation.mutateAsync({ id: editingId, ...submitData });
    } else {
      await insertMutation.mutateAsync(submitData);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setUploading(true);
    try {
      const file = e.target.files[0];
      const url = await uploadFile(file, 'blog-images');
      setMediaUrls(prev => [...prev, url]);
      if (!thumbnailUrl) setThumbnailUrl(url);
    } catch (err) {
      console.error('Upload failed:', err);
    }
    setUploading(false);
  };

  const removeMediaUrl = (index: number) => {
    setMediaUrls(prev => prev.filter((_, i) => i !== index));
  };

  const toggleRow = (id: number) => {
    setExpandedRows(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderField = (field: FieldConfig) => {
    const value = formData[field.name] ?? field.defaultValue ?? '';

    if (field.type === 'select') {
      return (
        <select
          value={value}
          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          required={field.required}
        >
          <option value="">Select {field.label}</option>
          {field.options?.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      );
    }

    if (field.type === 'textarea') {
      return (
        <textarea
          value={value}
          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
          required={field.required}
          placeholder={`Enter ${field.label.toLowerCase()}`}
        />
      );
    }

    if (field.type === 'checkbox') {
      return (
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.checked })}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Yes</span>
        </label>
      );
    }

    return (
      <input
        type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
        value={value}
        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        required={field.required}
        placeholder={field.type === 'tags' ? 'Tag1, Tag2, Tag3' : `Enter ${field.label.toLowerCase()}`}
      />
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-500 text-sm">{items.length} items total</p>
        </div>
        <Button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <Card className="border-2 border-blue-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {editingId ? `Edit ${title}` : `Add New ${title}`}
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={resetForm}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map(field => (
                  <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {renderField(field)}
                  </div>
                ))}
              </div>

              {/* Media Section for Blog Posts */}
              {hasMedia && (
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Image className="w-4 h-4 mr-2" /> Media (Images & Videos)
                  </h3>

                  {/* Image Upload */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
                    <div className="flex items-center space-x-3">
                      <label className="cursor-pointer bg-blue-50 hover:bg-blue-100 border-2 border-dashed border-blue-300 rounded-lg px-4 py-3 text-sm text-blue-600 font-medium transition-colors">
                        <Upload className="w-4 h-4 inline mr-2" />
                        {uploading ? 'Uploading...' : 'Choose Image'}
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                      </label>
                    </div>

                    {/* Image URL input (manual) */}
                    <div className="mt-2 flex space-x-2">
                      <input
                        type="text"
                        placeholder="Or paste image URL here"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const input = e.target as HTMLInputElement;
                            if (input.value.trim()) {
                              setMediaUrls(prev => [...prev, input.value.trim()]);
                              if (!thumbnailUrl) setThumbnailUrl(input.value.trim());
                              input.value = '';
                            }
                          }
                        }}
                      />
                    </div>

                    {/* Display added images */}
                    {mediaUrls.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {mediaUrls.map((url, idx) => (
                          <div key={idx} className="relative group">
                            <img src={url} alt="" className="w-20 h-20 object-cover rounded-lg border" />
                            <button
                              type="button"
                              onClick={() => removeMediaUrl(idx)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Video URLs */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Video className="w-4 h-4 inline mr-1" /> Video URLs
                    </label>
                    <input
                      type="text"
                      placeholder="Paste video URL and press Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const input = e.target as HTMLInputElement;
                          if (input.value.trim()) {
                            setMediaVideoUrls(prev => [...prev, input.value.trim()]);
                            input.value = '';
                          }
                        }
                      }}
                    />
                    {mediaVideoUrls.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {mediaVideoUrls.map((url, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm bg-gray-50 px-3 py-1 rounded">
                            <Video className="w-3 h-3 text-gray-400" />
                            <span className="truncate flex-1">{url}</span>
                            <button
                              type="button"
                              onClick={() => setMediaVideoUrls(prev => prev.filter((_, i) => i !== idx))}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
                    <input
                      type="text"
                      value={thumbnailUrl}
                      onChange={(e) => setThumbnailUrl(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Thumbnail image URL (auto-set from first image)"
                    />
                  </div>
                </div>
              )}

              <div className="flex space-x-3 pt-4 border-t">
                <Button
                  type="submit"
                  disabled={insertMutation.isPending || updateMutation.isPending}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {insertMutation.isPending || updateMutation.isPending ? 'Saving...' : editingId ? 'Update' : 'Save'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>

              {(insertMutation.isError || updateMutation.isError) && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  Error: {(insertMutation.error || updateMutation.error)?.message}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      )}

      {/* Items List */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading...</p>
        </div>
      ) : items.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-gray-500 mb-4">No {title.toLowerCase()} added yet.</p>
            <Button
              onClick={() => { resetForm(); setShowForm(true); }}
              variant="outline"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add your first entry
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {items.map((item: any) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => toggleRow(item.id)}
                  >
                    <div className="flex items-center space-x-4 flex-wrap">
                      {displayFields.map((field, idx) => (
                        <span key={field} className={idx === 0 ? 'font-semibold text-gray-900' : 'text-sm text-gray-600'}>
                          {field === 'status' || field === 'type' || field === 'role' ? (
                            <Badge variant="outline" className="text-xs">{String(item[field] || '')}</Badge>
                          ) : (
                            String(item[field] || '')
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="sm" onClick={() => toggleRow(item.id)}>
                      {expandedRows.has(item.id) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(item)}>
                      <Pencil className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this item?')) {
                          deleteMutation.mutate(item.id);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>

                {/* Expanded details */}
                {expandedRows.has(item.id) && (
                  <div className="mt-3 pt-3 border-t grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {fields.map(field => (
                      item[field.name] != null && item[field.name] !== '' && (
                        <div key={field.name}>
                          <span className="font-medium text-gray-500">{field.label}:</span>{' '}
                          <span className="text-gray-900">
                            {field.type === 'checkbox' ? (item[field.name] ? 'Yes' : 'No') :
                             Array.isArray(item[field.name]) ? item[field.name].join(', ') :
                             String(item[field.name])}
                          </span>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentManager;
