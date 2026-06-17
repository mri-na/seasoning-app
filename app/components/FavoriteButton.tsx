"use client";
import { useState } from "react";
import type { FavoriteButtonProps } from "../lib/types";

export default function FavoriteButton({
  recipeId,
  isFavorite,
}: FavoriteButtonProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = async () => {
    const nextFavorite = !favorite;

    const res = await fetch(`/api/recipes/${recipeId}/favorite`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFavorite: nextFavorite,
      }),
    });

    if (!res.ok) {
      alert("お気に入りの更新に失敗しました");
      return;
    }
    const updatedRecipe = await res.json();
    setFavorite(updatedRecipe.isFavorite);
  };
  
  return (
    <button
      type="button"
      onClick={toggleFavorite}
      className="w-[36px] h-[36px] flex items-center justify-center flex-shrink-0"
    >
      <img
        src={
          favorite
            ? "/icons/favorite-on.svg"
            : "/icons/favorite-off.svg"
        }
        alt={
          favorite
            ? "お気に入り解除"
            : "お気に入り登録"
        }
        className="w-7 h-7"
      />
    </button>
  );
}