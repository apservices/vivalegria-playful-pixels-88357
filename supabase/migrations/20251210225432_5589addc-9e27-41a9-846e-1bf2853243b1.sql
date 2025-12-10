-- Create candidaturas table for job applications
CREATE TABLE public.candidaturas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  cidade TEXT NOT NULL,
  experiencia TEXT,
  disponibilidade TEXT[],
  sobre_voce TEXT,
  status TEXT NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.candidaturas ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert
CREATE POLICY "Anyone can submit job applications"
ON public.candidaturas
FOR INSERT
WITH CHECK (true);

-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles (only admins can view)
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policies for candidaturas (only admins can view)
CREATE POLICY "Admins can view all applications"
ON public.candidaturas
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can update candidaturas
CREATE POLICY "Admins can update applications"
ON public.candidaturas
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can delete candidaturas
CREATE POLICY "Admins can delete applications"
ON public.candidaturas
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Update reservas policies to use admin role
DROP POLICY IF EXISTS "Authenticated users can view reservations " ON public.reservas;

CREATE POLICY "Admins can view all reservations"
ON public.reservas
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can update reservas
CREATE POLICY "Admins can update reservations"
ON public.reservas
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can delete reservas
CREATE POLICY "Admins can delete reservations"
ON public.reservas
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));