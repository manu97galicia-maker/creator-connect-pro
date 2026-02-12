CREATE TABLE public.exit_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reason TEXT NOT NULL,
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.exit_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.exit_feedback
  FOR INSERT WITH CHECK (true);

CREATE POLICY "No public reads" ON public.exit_feedback
  FOR SELECT USING (false);