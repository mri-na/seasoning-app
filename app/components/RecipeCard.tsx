type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};

type RecipeCardProps = {
  category: string;
  title: string;
  serving: number;
  ingredients: Ingredient[];
};

export default function RecipeCard({
  category,
  title,
  serving,
  ingredients,
}: RecipeCardProps) {
  return (
    <div className="mx-4 mt-[18px] border border-[#999999] rounded-[20px] overflow-hidden">

      {/* 上部：カテゴリとタイトル */}
      <div className="px-[9px]">
        <div className="flex items-center px-[9px] py-3 border-b border-[#999999]">
          <span className="px-3 py-1 h-[36px] inline-flex items-center justify-center items-start pt-[4px] border border-[#D9D9D9] bg-[#D9D9D9] rounded-full text-base tracking-[0.1em] font-normal">
            {category}
          </span>

          <div className="w-px h-[40px] bg-[#999999] mx-[18px]" />

          <span className="text-[22px] tracking-[0.06em] font-normal">
           {title}
          </span>
        </div>
      </div>

      {/* 人数 */}
      <div className="px-[9px]">
        <div className="flex items-center justify-center gap-[32px] py-4 border-b border-[#999999]">
          <button className="w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center">
            <img src="/icons/minus.svg" alt="minus" />
          </button>

          <span className="text-[20px] tracking-[0.1em] font-normal">
           {serving}人前
          </span>

          <button className="w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center">
            <img src="/icons/plus.svg" alt="plus" />
          </button>
        </div>
      </div>

      {/* 材料 */}
      <ul className="px-[18px]">
        {ingredients.map((item, index) => (
          <li
            key={index}
            className="flex justify-between px-[10px] py-4 text-[20px] tracking-[0.1em] font-normal border-b border-dashed border-[#999999] last:border-none"
          >
            <span>{item.name}</span>
            <span>{item.unit}{item.amount}</span>
          </li>
        ))}
      </ul>

      {/* MEMO */}
      <div className="px-[9px]">
        <div className="flex items-center px-[9px] py-4 border-t border-[#999999]">
          <div className="px-[10px] py-0 text-[20px] tracking-[0.1em] font-normal min-h-[110px]">
            MEMO
          </div>
        </div>
      </div>
    </div>
  );
}