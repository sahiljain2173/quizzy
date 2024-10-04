
// src/api/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vqceaepytvyfowqdtxhz.supabase.co'; // Your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxY2VhZXB5dHZ5Zm93cWR0eGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNDAwNDAsImV4cCI6MjA0MzYxNjA0MH0.jCA-rD4S0UtlFHdCoQSRDWiaZrnGzJz39902WqJ_bqQ'; // Your Supabase Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
