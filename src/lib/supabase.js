/**
 * Shared Supabase client for the game.
 *
 * Delete this file (and the @supabase/supabase-js dependency in package.json)
 * if your game doesn't need a database.
 */
import { createClient } from '@supabase/supabase-js';

export const db = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
