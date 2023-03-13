import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../db_types';
//converting URL & KEY to string so that it can be used in createClient
const configSupabaseURLValue: string = process.env.REACT_APP_SUPABASE_URL as string;
const configSupabaseKeyValue: string = process.env.REACT_APP_SUPABASE_KEY as string;

export const client = createClient<Database>(configSupabaseURLValue, configSupabaseKeyValue);

// export function checkError({ data, error }) {
//   if (error) {
//     throw error;
//   }
//   return data;
// }
