"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import RecipeListCard from "./RecipeListCard";
import type { RecipeSearchProps } from "../lib/types";
import SearchHeader from "./SearchHeader";

export default function RecipeSearch({ recipes }: RecipeSearchProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesTitle = recipe.title.includes(searchText);
    const matchesCategory =
      selectedCategory === "" || recipe.category === selectedCategory;
    const matchesFavorite =
      !favoriteOnly || recipe.isFavorite;
    return matchesTitle && matchesCategory && matchesFavorite;
  });
  
  return (
    <main>
      {isSearching ? (
        <SearchHeader
          searchText={searchText}
          setSearchText={setSearchText}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          favoriteOnly={favoriteOnly}
          setFavoriteOnly={setFavoriteOnly}
          onClose={() => {
            setSearchText("");
            setSelectedCategory("");
            setFavoriteOnly(false);
            setIsSearching(false);
          }}
        />
      ) : (
        <Header
          title="味付けテンプレ"
          rightIcon={
            <Link href="/recipes/new">
              <img
                src="/icons/plus.svg"
                alt="追加"
                className="w-7 h-7 mr-[10px] mt-[3px]"
              />
            </Link>
          }
          leftIcon={
            <button
              type="button"
              onClick={() => setIsSearching(true)}
              className="flex items-center justify-center w-[44px] h-[44px]"
            >
              <img
                src="/icons/search.svg"
                alt="検索"
                className="w-[30px] h-[30px]"
              />
            </button>
          }
        />
      )}

      <div className="mx-4 mt-[18px]">
        {filteredRecipes.map((recipe) => (
          <RecipeListCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}