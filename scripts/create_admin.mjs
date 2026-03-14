// Quick script to create an admin user in Supabase Auth
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://mkpnqhfrmaphwguntomg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rcG5xaGZybWFwaHdndW50b21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0ODE0OTUsImV4cCI6MjA4OTA1NzQ5NX0.MXko8ZJkwwhwo56bFvW7bSKEJU-h2aB1YNSW0Dx9Gsw'
);

async function createAdmin() {
  const { data, error } = await supabase.auth.signUp({
    email: 'admin@haqueresearchhub.com',
    password: 'Admin@2024!Secure'
  });

  if (error) {
    console.error('Error creating admin:', error.message);
  } else {
    console.log('Admin user created successfully!');
    console.log('Email: admin@haqueresearchhub.com');
    console.log('Password: Admin@2024!Secure');
    console.log('User ID:', data.user?.id);
  }
}

createAdmin();
