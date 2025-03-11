// filepath: /e:/RCSLandings/landing_pages/src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lirjgzheyluzldehhshq.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Use Vite's environment variable

if (!supabaseKey) {
  console.error('Supabase key is missing. Please check your environment variables.');
} else {
  console.log('Supabase key found:', supabaseKey);
}

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase client created:', supabase);

export { supabase };