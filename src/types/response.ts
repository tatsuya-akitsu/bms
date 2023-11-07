type tag = {
  createdAt: string;
  has_effect: boolean;
  id: string;
  publishedAt: string;
  revisedAt: string;
  tag: string;
  tag_effect: Array<{
    effect: string;
    fieldId: 'tagEffect';
    level: number;
  }>;
  updatedAt: string;
};

export interface Characters {
  attributes: Array<string>;
  createdAt: string;
  id: string;
  is_multi_attribute: boolean;
  is_multi_character: boolean;
  is_multi_type: boolean;
  label: string;
  name: string;
  publishedAt: string;
  revisedAt: string;
  tags: Array<tag>;
  total_score: number;
  type: Array<string>;
  updatedAt: string;
}

export interface UserState {
  uid: string;
  email: string | null;
  password?: string;
  displayName: string | null;
}
