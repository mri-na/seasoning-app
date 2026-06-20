export type HeaderProps = {
  title: React.ReactNode;
  backHref?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export type Unit = "g" | "ml" | "大さじ" | "小さじ" | "カップ"

export type Ingredient = {
  id: string
  name: string
  amount: number
  unit: Unit
}

export type Recipe = {
  id: string
  title: string
  category: string
  baseServing: number
  ingredients: Ingredient[]
  memo?: string | null;
  isFavorite: boolean;
}

export type RecipeCardProps = {
  id: string;
  category: string;
  title: string;
  serving: number;
  ingredients: Ingredient[];
  memo?: string | null;
  isFavorite: boolean;
};

export type RecipeListCardProps = {
  recipe: Recipe;
};

export type RecipeSearchProps = {
  recipes: Recipe[];
};

export type SearchHeaderProps = {
  searchText: string;
  setSearchText: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  onClose: () => void;
  favoriteOnly: boolean;
  setFavoriteOnly: (value: boolean) => void;
};

export type FavoriteButtonProps = {
  recipeId: string;
  isFavorite: boolean;
};