import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vfrxlmbepvmdknajormv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcnhsbWJlcHZtZGtuYWpvcm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MjI1MzYsImV4cCI6MjA1Mzk5ODUzNn0.Ep7w_WfzJ0rSymO371yFLurIOJqsvhH9NhNnSPR3OxA'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;