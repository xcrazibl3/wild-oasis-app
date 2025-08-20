import { createClient } from "@supabase/supabase-js";
if (
  process.env.SUPABASE_URL === undefined ||
  process.env.SUPABASE_KEY === undefined
) {
  throw new Error(
    "Supabase URL and Key must be defined in environment variables"
  );
}

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
