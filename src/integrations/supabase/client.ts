// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://acgejtvhwqmegdfxmnln.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjZ2VqdHZod3FtZWdkZnhtbmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDEyMTEsImV4cCI6MjA1ODMxNzIxMX0.5oc9NMjlGyZq5GYsSbz_E0DX63aXEguMrwYTagBIyYo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);