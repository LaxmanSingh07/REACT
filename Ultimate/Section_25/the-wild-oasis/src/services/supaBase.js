import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://coflxnluofzrhctscwpu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZmx4bmx1b2Z6cmhjdHNjd3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNTYwMzUsImV4cCI6MjAwNjgzMjAzNX0.jr1zZZQ4IPrtErmz2pUllQFH0ESxcKL79VXsi0lT-xk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
