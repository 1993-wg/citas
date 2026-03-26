-- Ejecuta este script en el editor SQL de tu panel de Supabase

-- 1. Tabla de Pacientes
CREATE TABLE IF NOT EXISTS pacientes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    documento VARCHAR(50) NOT NULL UNIQUE,
    telefono VARCHAR(50),
    email VARCHAR(255),
    fecha_nacimiento DATE,
    fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabla de Médicos
CREATE TABLE IF NOT EXISTS medicos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    especialidad VARCHAR(255) NOT NULL,
    telefono VARCHAR(50),
    email VARCHAR(255),
    fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabla de Personal
CREATE TABLE IF NOT EXISTS personal (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    cargo VARCHAR(255),
    departamento VARCHAR(255),
    fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Permitir acceso público de inserción para nuestras pruebas desde JS sin autenticación (RLS policies)
-- Nota: En un entorno de producción, nunca se debe permitir inserción anónima sin restricciones.
ALTER TABLE pacientes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on pacientes" ON pacientes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on pacientes" ON pacientes FOR SELECT USING (true);

ALTER TABLE medicos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on medicos" ON medicos FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on medicos" ON medicos FOR SELECT USING (true);

ALTER TABLE personal ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on personal" ON personal FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on personal" ON personal FOR SELECT USING (true);
