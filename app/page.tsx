import RecipeSearch from "./components/RecipeSearch";

export default async function Home() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/recipes`, {
    cache: "no-store",
  });

  const recipes = await res.json();

  return  <RecipeSearch recipes={recipes} />;
}