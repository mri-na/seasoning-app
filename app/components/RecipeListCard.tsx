import Link from "next/link";
import type { RecipeListCardProps } from "../lib/types";
import FavoriteButton from "./FavoriteButton";

export default function RecipeListCard({ recipe }: RecipeListCardProps) {
  return (
    <div className="flex items-center h-[60px] border border-[#999999] rounded-full px-4 py-3 mb-[20px]">
      <Link
        href={`/recipes/${recipe.id}`}
        className="flex items-center flex-1 min-w-0 h-full"
      >
      {/* カテゴリ */}
        <span className="flex items-center justify-center w-[60px] h-[36px] border border-[#D9D9D9] bg-[#D9D9D9] rounded-full flex-shrink-0">
          <span className="text-base tracking-[0.1em] font-normal relative -top-[1px]">
            {recipe.category}
          </span>
        </span>

      {/* 区切り線 */}
        <div className="w-px h-[40px] bg-[#999999] mx-[17px] flex-shrink-0"></div>

      {/* タイトル */}
        <h2 className="text-xl tracking-[0.06em] font-normal truncate">{recipe.title}</h2>
      </Link>
      
      <FavoriteButton
        recipeId={recipe.id}
        isFavorite={recipe.isFavorite}
      />
    </div>
  );
}