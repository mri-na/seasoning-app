import type { SearchHeaderProps } from "../lib/types";

export default function SearchHeader({
  searchText,
  setSearchText,
  selectedCategory,
  setSelectedCategory,
  onClose,
}: SearchHeaderProps) {
const categories = [
  "和食",
  "洋食",
  "中華",
  "韓国",
  "その他",
];

  return (
    <header className="py-4">
      <div className="flex items-center gap-3 h-[71px] px-6">
        <img src="/icons/search.svg" alt="検索" className="w-[30px] h-[30px]" />

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="レシピを検索"
          className="flex-1 min-w-0 h-[40px] border border-[#999999] rounded-full px-4 text-[18px] outline-none"
          autoFocus
        />

        <button
          type="button"
          onClick={onClose}
          className="w-[32px] h-[32px] flex items-center justify-center flex-shrink-0"
        >
          <img src="/icons/search-delete.svg" alt="検索を閉じる" className="w-10 h-10" />
        </button>
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto px-4 pb-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
              ? "px-4 py-2 rounded-full bg-[#999999] text-white"
              : "px-4 py-2 rounded-full border border-[#999999]"
            }
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="px-4">
        <div className="h-[1px] bg-[#999999] rounded-full"></div>
      </div>
    </header>
  );
}