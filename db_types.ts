// To update db_types:
// 1. update supanase CLI: npm update supabase --save-dev
// 2. supabase login: npx supabase login
// 3. follow url and generate new token
// 4. npx supabase gen types typescript --project-id "pfzibtpzgizjtozjylmz" --schema public > db_types.ts

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      materials: {
        Row: {
          company: string | null;
          id: number;
          primary_material: string | null;
          primary_minimum_percentage: number | null;
          recycler_id: number | null;
          secondary_material: string | null;
          secondary_minimum_percentage: number | null;
          source: string[] | null;
        };
        Insert: {
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_minimum_percentage?: number | null;
          recycler_id?: number | null;
          secondary_material?: string | null;
          secondary_minimum_percentage?: number | null;
          source?: string[] | null;
        };
        Update: {
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_minimum_percentage?: number | null;
          recycler_id?: number | null;
          secondary_material?: string | null;
          secondary_minimum_percentage?: number | null;
          source?: string[] | null;
        };
      };
      recyclers: {
        Row: {
          acc_circ_url: string | null;
          comercialization_for_post_consumer: string | null;
          company: string | null;
          id: number;
          material_source: string | null;
          location: string | null;
          output_material: string | null;
          primary_material_type_list: string | null;
          recycling_type: string | null;
          status: string | null;
        };
        Insert: {
          acc_circ_url?: string | null;
          comercialization_for_post_consumer?: string | null;
          company?: string | null;
          id?: number;
          material_source?: string | null;
          location?: string | null;
          output_material?: string | null;
          primary_material_type_list?: string | null;
          recycling_type?: string | null;
          status?: string | null;
        };
        Update: {
          acc_circ_url?: string | null;
          comercialization_for_post_consumer?: string | null;
          company?: string | null;
          id?: number;
          material_source?: string | null;
          location?: string | null;
          output_material?: string | null;
          primary_material_type_list?: string | null;
          recycling_type?: string | null;
          status?: string | null;
        };
      };
    };
    Views: {
      distinct_materials: {
        Row: {
          primary_material: string | null;
        };
      };
      matched_recyclers: {
        Row: {
          company: string | null;
        };
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
