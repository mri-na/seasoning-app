import Header from "./components/Header";
import RecipeListCard from "./components/RecipeListCard";
import Link from "next/link";

export default async function Home() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/recipes`, {
    cache: "no-store",
  });

  const recipes = await res.json();

  return (
    <main>
      <Header
        title="味付けテンプレ"
        rightIcon={
          <Link href="/recipes/new">
            <img src="/icons/plus.svg" alt="追加" className="w-7 h-7 mr-[10px] mt-[3px]" />
          </Link>
        }
        leftIcon={
          <img src="/icons/search.svg" alt="検索" className="w-[30px] h-[30px] ml-[10px] mt-[5px]" />
        }
      />

      <div className="mx-4 mt-[18px]">
        {recipes.map((recipe: any) => (
          <RecipeListCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  )
}