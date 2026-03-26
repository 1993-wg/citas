import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Datos de conexión de Supabase (Proporcionados por el usuario)
const supabaseUrl = 'https://gqiyedsgdzwtkkisckqj.supabase.co';
const supabaseKey = 'sb_publishable_FS4a7UD9EmXQfPGM8r3qow_FrDAPFwf';

// Inicializar y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
