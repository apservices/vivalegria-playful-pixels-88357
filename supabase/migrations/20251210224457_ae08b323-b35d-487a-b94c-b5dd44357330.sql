-- Create enum for client type
CREATE TYPE public.tipo_cliente AS ENUM ('existente', 'novo');

-- Create enum for cadastro type
CREATE TYPE public.tipo_cadastro AS ENUM ('pf', 'pj');

-- Create table for reservations
CREATE TABLE public.reservas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Etapa 1: Identificação
  tipo_cliente tipo_cliente NOT NULL,
  tipo_cadastro tipo_cadastro NOT NULL,
  cpf_cnpj TEXT NOT NULL,
  
  -- Etapa 2: Dados do Contratante
  nome_completo TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email TEXT NOT NULL,
  cep TEXT,
  endereco TEXT,
  complemento TEXT,
  cidade TEXT,
  
  -- Etapa 3: Dados do Evento
  data_evento DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  local_evento TEXT NOT NULL,
  
  -- Dados do Configurador
  pacote_tipo TEXT NOT NULL,
  numero_criancas INTEGER NOT NULL DEFAULT 15,
  oficinas_selecionadas TEXT[] DEFAULT '{}',
  extras_selecionados TEXT[] DEFAULT '{}',
  total_calculado DECIMAL(10,2) NOT NULL,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'pendente'
);

-- Enable RLS
ALTER TABLE public.reservas ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (public form)
CREATE POLICY "Anyone can create reservations"
ON public.reservas
FOR INSERT
WITH CHECK (true);

-- Policy: Only authenticated users can view all (for admin later)
CREATE POLICY "Authenticated users can view reservations"
ON public.reservas
FOR SELECT
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_reservas_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_reservas_updated_at
BEFORE UPDATE ON public.reservas
FOR EACH ROW
EXECUTE FUNCTION public.update_reservas_updated_at();