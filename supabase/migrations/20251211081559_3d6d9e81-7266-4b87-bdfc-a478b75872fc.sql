-- Drop the overly permissive policy that exposes PII
DROP POLICY IF EXISTS "Authenticated users can view reservations" ON public.reservas;

-- Ensure only admins can view all reservations (policy already exists but let's make sure)
-- The existing admin policy uses the correct function signature