import { recipes } from "../../data";
import Header from "../../components/Header";
import RecipeCard from "../../components/RecipeCard";

export default function RecipeDetail() {
  const recipe = recipes[0];

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