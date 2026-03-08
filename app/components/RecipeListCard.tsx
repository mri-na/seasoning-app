import Link from "next/link";

type Recipe = {
  id: string;
  title: string;
  category: string;
  baseServing: number;
};

type Props = {
  recipe: Recipe;
};

export default function RecipeListCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="flex items-center h-[60px] border border-[#999999] rounded-full px-4 py-3 mb-[20px]"
    >
      {/* カテゴリ */}
      <span className="flex items-center justify-center w-[60px] h-[36px] border border-[#D9D9D9] bg-[#D9D9D9] rounded-full">
        <span className="text-base tracking-[0.1em] font-normal relative -top-[1px]">
          {recipe.category}
        </span>
      </span>

      {/* 区切り線 */}
      <div className="w-px h-[40px] bg-[#999999] mx-[17px]"></div>

      {/* タイトル */}
      <h2 className="text-xl tracking-[0.06em] font-normal">{recipe.title}</h2>
    </Link>
  );
}