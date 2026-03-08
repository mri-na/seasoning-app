import Link from "next/link"
import { recipes } from "./lib/data"

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">レシピ一覧</h1>

      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="block border rounded-lg p-4 mb-4 shadow"
        >
          <h2 className="text-lg font-semibold">{recipe.title}</h2>
          <p>カテゴリ: {recipe.category}</p>
          <p>基準人数: {recipe.baseServing}人分</p>
        </Link>
      ))}
    </main>
  )
}