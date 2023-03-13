export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      materials: {
        Row: {
          comercialization_for_post_consumer: string | null;
          company: string | null;
          id: number;
          primary_material: string | null;
          primary_material_type_list: string | null;
          primary_minimum_percentage: number | null;
          recycler_id: number | null;
          secondary_material: string | null;
          secondary_minimum_percentage: number | null;
        };
        Insert: {
          comercialization_for_post_consumer?: string | null;
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_material_type_list?: string | null;
          primary_minimum_percentage?: number | null;
          recycler_id?: number | null;
          secondary_material?: string | null;
          secondary_minimum_percentage?: number | null;
        };
        Update: {
          comercialization_for_post_consumer?: string | null;
          company?: string | null;
          id?: number;
          primary_material?: string | null;
          primary_material_type_list?: string | null;
          primary_minimum_percentage?: number | null;
          recycler_id?: number | null;
          secondary_material?: string | null;
          secondary_minimum_percentage?: number | null;
        };
      };
      recyclers: {
        Row: {
          acc_circ_feedstock_data: string | null;
          acc_circ_url: string | null;
          acrylic: boolean | null;
          comercialization_for_post_consumer: string | null;
          company: string | null;
          cotton: boolean | null;
          cotton_polyester: boolean | null;
          id: number;
          input_material: string | null;
          location: string | null;
          minimum_percentage: number | null;
          nylon: boolean | null;
          other: boolean | null;
          output_material: string | null;
          polyester: boolean | null;
          primary_material_type_list: string | null;
          recycling_type: string | null;
          status: string | null;
          wool: boolean | null;
        };
        Insert: {
          acc_circ_feedstock_data?: string | null;
          acc_circ_url?: string | null;
          acrylic?: boolean | null;
          comercialization_for_post_consumer?: string | null;
          company?: string | null;
          cotton?: boolean | null;
          cotton_polyester?: boolean | null;
          id?: number;
          input_material?: string | null;
          location?: string | null;
          minimum_percentage?: number | null;
          nylon?: boolean | null;
          other?: boolean | null;
          output_material?: string | null;
          polyester?: boolean | null;
          primary_material_type_list?: string | null;
          recycling_type?: string | null;
          status?: string | null;
          wool?: boolean | null;
        };
        Update: {
          acc_circ_feedstock_data?: string | null;
          acc_circ_url?: string | null;
          acrylic?: boolean | null;
          comercialization_for_post_consumer?: string | null;
          company?: string | null;
          cotton?: boolean | null;
          cotton_polyester?: boolean | null;
          id?: number;
          input_material?: string | null;
          location?: string | null;
          minimum_percentage?: number | null;
          nylon?: boolean | null;
          other?: boolean | null;
          output_material?: string | null;
          polyester?: boolean | null;
          primary_material_type_list?: string | null;
          recycling_type?: string | null;
          status?: string | null;
          wool?: boolean | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
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
