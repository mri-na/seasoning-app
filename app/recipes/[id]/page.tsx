import Header from "../../components/Header";
import RecipeCard from "../../components/RecipeCard";
import Link from "next/link";

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
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
          category={recipe.category}
          title={recipe.title}
          serving={recipe.baseServing}
          ingredients={recipe.ingredients}
          memo={recipe.memo}
        />
      </main>
    </div>
  );
}