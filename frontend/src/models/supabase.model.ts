/* eslint-disable @typescript-eslint/indent */
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string | null
          plan_id: string | null
          product_id: string | null
          quantity: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          order_id?: string | null
          plan_id?: string | null
          product_id?: string | null
          quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string | null
          plan_id?: string | null
          product_id?: string | null
          quantity?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'order_items_order_id_fkey'
            columns: ['order_id']
            isOneToOne: false
            referencedRelation: 'orders'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'order_items_plan_id_fkey'
            columns: ['plan_id']
            isOneToOne: false
            referencedRelation: 'plans'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'order_items_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          }
        ]
      }
      orders: {
        Row: {
          created_at: string
          discount: number | null
          fee: number | null
          id: string
          status: Database['public']['Enums']['OrderStatus'] | null
          subtotal: number | null
          total: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          discount?: number | null
          fee?: number | null
          id?: string
          status?: Database['public']['Enums']['OrderStatus'] | null
          subtotal?: number | null
          total?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          discount?: number | null
          fee?: number | null
          id?: string
          status?: Database['public']['Enums']['OrderStatus'] | null
          subtotal?: number | null
          total?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'orders_user_id_fkey1'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      plan_features: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: Database['public']['Enums']['PlanFeatureName'] | null
          plan_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name?: Database['public']['Enums']['PlanFeatureName'] | null
          plan_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: Database['public']['Enums']['PlanFeatureName'] | null
          plan_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'plan_features_plan_id_fkey'
            columns: ['plan_id']
            isOneToOne: false
            referencedRelation: 'plans'
            referencedColumns: ['id']
          }
        ]
      }
      plans: {
        Row: {
          created_at: string
          id: string
          name: string | null
          price: number | null
          type: Database['public']['Enums']['PlanType'] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          price?: number | null
          type?: Database['public']['Enums']['PlanType'] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          price?: number | null
          type?: Database['public']['Enums']['PlanType'] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          about_application: string | null
          aditional_information: string | null
          combined_product_discount: number | null
          combined_product_id: string | null
          created_at: string
          description: string | null
          functionalities: string[] | null
          id: string
          images_url: string[] | null
          languages: string[] | null
          name: string | null
          platform: Database['public']['Enums']['PlatformType'] | null
          price: number | null
          purchase_information: string | null
          rating: number | null
          sectors: string[] | null
          seller_id: string | null
          tags: string[] | null
          thumbnail_url: string | null
          tools: string[] | null
          type: Database['public']['Enums']['ProductType'] | null
          updated_at: string | null
        }
        Insert: {
          about_application?: string | null
          aditional_information?: string | null
          combined_product_discount?: number | null
          combined_product_id?: string | null
          created_at?: string
          description?: string | null
          functionalities?: string[] | null
          id?: string
          images_url?: string[] | null
          languages?: string[] | null
          name?: string | null
          platform?: Database['public']['Enums']['PlatformType'] | null
          price?: number | null
          purchase_information?: string | null
          rating?: number | null
          sectors?: string[] | null
          seller_id?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          tools?: string[] | null
          type?: Database['public']['Enums']['ProductType'] | null
          updated_at?: string | null
        }
        Update: {
          about_application?: string | null
          aditional_information?: string | null
          combined_product_discount?: number | null
          combined_product_id?: string | null
          created_at?: string
          description?: string | null
          functionalities?: string[] | null
          id?: string
          images_url?: string[] | null
          languages?: string[] | null
          name?: string | null
          platform?: Database['public']['Enums']['PlatformType'] | null
          price?: number | null
          purchase_information?: string | null
          rating?: number | null
          sectors?: string[] | null
          seller_id?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          tools?: string[] | null
          type?: Database['public']['Enums']['ProductType'] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'products_combined_product_id_fkey'
            columns: ['combined_product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'products_seller_id_fkey1'
            columns: ['seller_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          id: number
          product_id: string | null
          rating: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: number
          product_id?: string | null
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: number
          product_id?: string | null
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'reviews_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reviews_user_id_fkey1'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      user_plans: {
        Row: {
          active: boolean | null
          created_at: string
          expires_at: string | null
          id: string
          plan_id: string | null
          started_at: string | null
          type: Database['public']['Enums']['BillingCycle'] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_id?: string | null
          started_at?: string | null
          type?: Database['public']['Enums']['BillingCycle'] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_id?: string | null
          started_at?: string | null
          type?: Database['public']['Enums']['BillingCycle'] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'user_plans_plan_id_fkey'
            columns: ['plan_id']
            isOneToOne: false
            referencedRelation: 'plans'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_plans_user_id_fkey1'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          description: string | null
          email: string
          id: string
          name: string
          preferred_payment_method: Database['public']['Enums']['PaymentMethod'] | null
          role: Database['public']['Enums']['UserRole']
          seller_type: Database['public']['Enums']['SellerType'] | null
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          description?: string | null
          email: string
          id: string
          name: string
          preferred_payment_method?: Database['public']['Enums']['PaymentMethod'] | null
          role?: Database['public']['Enums']['UserRole']
          seller_type?: Database['public']['Enums']['SellerType'] | null
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          description?: string | null
          email?: string
          id?: string
          name?: string
          preferred_payment_method?: Database['public']['Enums']['PaymentMethod'] | null
          role?: Database['public']['Enums']['UserRole']
          seller_type?: Database['public']['Enums']['SellerType'] | null
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      BillingCycle: 'monthly' | 'yearly'
      OrderStatus: 'pending' | 'processing' | 'completed' | 'cancelled'
      PaymentMethod: 'stripe' | 'paypal' | 'crypto'
      PlanFeatureName: 'product_limit' | 'email_support' | 'exclusive_support' | 'analytics'
      PlanType: 'basic' | 'professional' | 'expert'
      PlatformType: 'appsheet' | 'powerapps'
      ProductType: 'lesson' | 'course' | 'app'
      SellerType: 'content_creator' | 'development_team' | 'appsheet_expert' | 'powerapps_expert'
      UserRole: 'explorer' | 'seller'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes'] | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
