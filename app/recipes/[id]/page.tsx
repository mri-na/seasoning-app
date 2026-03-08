import { recipes } from "../../lib/data";
import Header from "../../components/Header";
import RecipeCard from "../../components/RecipeCard";

export default async function RecipeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) return <p>レシピが見つかりません</p>;

  return (
    <div>
      <Header title="味付けテンプレ" backHref="/" />

      <main>
        <RecipeCard
          category={recipe.category}
          title={recipe.title}
          serving={recipe.baseServing}
          ingredients={recipe.ingredients}
        />
      </main>
    </div>
  )
}