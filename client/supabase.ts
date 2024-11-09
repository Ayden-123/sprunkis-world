import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_PROJECT_URL
const supabaseKey = process.env.SUPABASE_API_KEY

let supabase: SupabaseClient;
export function getSupabase() {
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseKey)
  }
  return supabase;
}

export default supabase;