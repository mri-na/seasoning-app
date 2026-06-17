import Header from "../../components/Header";
import RecipeCard from "../../components/RecipeCard";
import Link from "next/link";

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/recipes/${id}`, {
    cache: "no-store",
  });

  const recipe = await res.json();

  if (!recipe) {
    return <p>レシピが見つかりません</p>;
  }

  return (
    <div>
      <Header
        title="味付けテンプレ"
        backHref="/"
        rightIcon={
          <Link href={`/recipes/${id}/edit`}>
            <img src="/icons/pen.svg" alt="編集" className="w-[30px] h-[30px] mr-[10px] mt-[2px]" />
          </Link>
        }
      />

      <main>
        <RecipeCard
          id={recipe.id}
          category={recipe.category}
          title={recipe.title}
          serving={recipe.baseServing}
          ingredients={recipe.ingredients}
          memo={recipe.memo}
          isFavorite={recipe.isFavorite}
        />
      </main>
    </div>
  );
}