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
          recycler_id: number;
          secondary_material: string | null;
          secondary_minimum_percentage: number | null;
          source: string[] | null;
        };
        Insert: {
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_minimum_percentage?: number | null;
          recycler_id: number;
          secondary_material?: string | null;
          secondary_minimum_percentage?: number | null;
          source?: string[] | null;
        };
        Update: {
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_minimum_percentage?: number | null;
          recycler_id?: number;
          secondary_material?: string | null;
          secondary_minimum_percentage?: number | null;
          source?: string[] | null;
        };
      };
      materials_v2: {
        Row: {
          company: string | null;
          id: number;
          primary_material: string | null;
          primary_minimum_percentage: number | null;
          recyclers_id: number | null;
          secondary_material: string | null;
          secondary_minimum_percentage: string | null;
        };
        Insert: {
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_minimum_percentage?: number | null;
          recyclers_id?: number | null;
          secondary_material?: string | null;
          secondary_minimum_percentage?: string | null;
        };
        Update: {
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_minimum_percentage?: number | null;
          recyclers_id?: number | null;
          secondary_material?: string | null;
          secondary_minimum_percentage?: string | null;
        };
      };
      recyclers: {
        Row: {
          acc_circ_url: string | null;
          comercialization_for_post_consumer: string | null;
          company: string | null;
          id: number;
          location: string | null;
          material_source: string | null;
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
          location?: string | null;
          material_source?: string | null;
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
          location?: string | null;
          material_source?: string | null;
          output_material?: string | null;
          primary_material_type_list?: string | null;
          recycling_type?: string | null;
          status?: string | null;
        };
      };
      recyclers_v2: {
        Row: {
          acc_circ_url: string | null;
          comercialization_for_post_consumer: string | null;
          company: string | null;
          id: number;
          location: string | null;
          material_source: string | null;
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
          location?: string | null;
          material_source?: string | null;
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
          location?: string | null;
          material_source?: string | null;
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
      distinct_materials_v2: {
        Row: {
          company: string | null;
          id: number | null;
          primary_material: string | null;
          primary_minimum_percentage: number | null;
          recycler_id: number | null;
          secondary_material: string | null;
          secondary_minimum_percentage: number | null;
          source: string[] | null;
        };
      };
      distinct_materials_v2_0: {
        Row: {
          primary_material: string | null;
        };
      };
      distinct_secondary_materials: {
        Row: {
          company: string | null;
          id: number | null;
          primary_material: string | null;
          primary_minimum_percentage: number | null;
          recycler_id: number | null;
          secondary_material: string | null;
          secondary_minimum_percentage: number | null;
          source: string[] | null;
        };
      };
      distinct_secondary_materials_v2: {
        Row: {
          secondary_material: string | null;
        };
      };
      distinct_secondary_materials_v2_0: {
        Row: {
          secondary_material: string | null;
        };
      };
      distinct_secondary_materials2: {
        Row: {
          secondary_material: string | null;
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
