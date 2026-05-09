import Header from "../../components/Header";
import RecipeCard from "../../components/RecipeCard";

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
      <Header title="味付けテンプレ" backHref="/" />

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