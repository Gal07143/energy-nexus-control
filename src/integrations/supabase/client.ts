// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yiziikahjjlusgptgmqo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpemlpa2FoampsdXNncHRnbXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4Nzg1MjYsImV4cCI6MjA1OTQ1NDUyNn0.irOe_2WNyQG8SV4wQZH4o22Wz9cYPrWdJCZYfg_e1yg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);