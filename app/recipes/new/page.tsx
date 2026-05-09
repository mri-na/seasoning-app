"use client";
import Header from "../../components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewPage() {

  const [title, setTitle] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  
  const categories = ["和食", "洋食", "中華", "韓国", "その他"];

  const [baseServing, setBaseServing] = useState(1);

  const [ingredients, setIngredients] = useState([
    { id: uuidv4(), name: "", amount: "", unit: "ml" }
  ]);
  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: uuidv4(), name: "", amount: "", unit: "ml" }
    ]);
  };

  const [memo, setMemo] = useState("");

  const handleSave = async () => {
    if (!title.trim()) {
      alert("料理名を入力してください");
      return;
    }
    if (!selectedCategory) {
      alert("カテゴリーを選択してください");
      return;
    }
    if (ingredients.some((i) => !i.name.trim() || !i.amount || !i.unit)) {
      alert("調味料名・分量・単位をすべて入力してください");
      return;
    }
    if (ingredients.some((i) => Number(i.amount) <= 0)) {
      alert("分量は0より大きい値を入力してください");
      return;
    }
    const newRecipe = {
      id: uuidv4(),
      title,
      category: selectedCategory,
      baseServing,
      ingredients: ingredients.map((i) => ({
        ...i,
        amount: Number(i.amount),
      })),
      memo,
    };

    await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
  };

  return (
    <div>
      <Header title="味付けテンプレ" backHref="/" />

      <main className="mx-4 my-[18px] border border-[#999999] rounded-[20px] overflow-hidden px-4 py-5">
        {/* 料理名 */}
        <section>
          <label 
            htmlFor="title"
            className="block text-[20px] tracking-[0.1em] font-normal mb-2"
          >
            料理名
          </label>

          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-[48px] border border-[#999999] rounded-[14px] px-4 outline-none focus:ring-2 focus:ring-[#999999]"
          />
        </section>

        {/* カテゴリー */}
        <section className="mt-6">
          <p className="text-[20px] tracking-[0.1em] font-normal mb-3">
            カテゴリー
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`h-[46px] rounded-full text-[18px] tracking-[0.1em] border
                  ${
                    selectedCategory === category
                      ? "bg-[#999999] text-white border-[#999999]"
                      : "border-[#999999]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        
        {/* 基準人数 */}
        <section className="mt-8 pt-5 border-t border-[#999999]">
          <p className="text-[20px] tracking-[0.1em] font-normal mb-4">
            基準人数
          </p>

          <div className="flex items-center justify-center gap-[32px] py-2">
            <button
              type="button"
              onClick={() => setBaseServing((prev) => Math.max(1, prev - 1))}
              className="w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center"
            >
              <img src="/icons/minus.svg" alt="minus" />
            </button>

            <span className="text-[20px] tracking-[0.1em] font-normal">
              {baseServing}人前
            </span>

            <button
              type="button"
              onClick={() => setBaseServing((prev) => prev + 1)}
              className="w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center"
            >
              <img src="/icons/plus.svg" alt="plus" />
            </button>
          </div>
        </section>

        {/* 調味料 */}
        <section className="mt-8 pt-5 border-t border-[#999999]">
          <p className="text-[20px] tracking-[0.1em] font-normal mb-2">
            調味料
          </p>

          {/* 調味料入力 */}
          {ingredients.map((item, index) => (
            <div key={item.id} className="mb-4">
    
            {/* 削除ボタン */}
            <div className="flex justify-end mb-2">
              <button
                type="button"
                onClick={() => {
                  const newList = ingredients.filter((i) => i.id !== item.id);
                  setIngredients(newList);
                }}
                className="w-10 h-10 rounded-full bg-[#999999] text-white flex items-center justify-center"
              >
                <img src="/icons/delete.svg" alt="delete" />
              </button>
            </div>

            {/* 名前 */}
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                const newList = ingredients.map((i) =>
                  i.id === item.id
                    ? { ...i, name: e.target.value }
                    : i
                );
                setIngredients(newList);
              }}
              className="w-full h-[48px] border border-[#999999] rounded-[14px] px-4 outline-none focus:ring-2 focus:ring-[#999999]"
            />

            {/* 数量 + 単位 */}
            <div className="flex justify-end gap-2 mt-2">
              <input
                type="number"
                value={item.amount}
                onChange={(e) => {
                  const newList = ingredients.map((i) =>
                    i.id === item.id
                      ? { ...i, amount: e.target.value }
                      : i
                  );
                  setIngredients(newList);
                }}
                className="w-[80px] h-[48px] border border-[#999999] rounded-[12px] px-3 outline-none focus:ring-2 focus:ring-[#999999]"
              />

              <div className="relative">
                <select
                  value={item.unit}
                  onChange={(e) => {
                    const newList = ingredients.map((i) =>
                      i.id === item.id
                        ? { ...i, unit: e.target.value }
                        : i
                    );
                    setIngredients(newList);
                  }}
                  className="appearance-none w-[100px] h-[48px] border border-[#999999] rounded-[12px] px-3 pr-8 outline-none focus:ring-2 focus:ring-[#999999]"
                >
                  <option>ml</option>
                  <option>g</option>
                  <option>大さじ</option>
                  <option>小さじ</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] pr-0.5">
                  ▼ 
                </span>
              </div>
            </div>

            {/* 点線（最後以外に表示） */}
            {index !== ingredients.length - 1 && (
              <div className="border-b border-dashed border-[#999999] my-4" />
            )}

            </div>
          ))}

          {/* 追加ボタン */}
          <button
            type="button"
            onClick={addIngredient}
            className="relative w-full h-[60px] border border-[#999999] rounded-full mt-6 flex items-center justify-center text-[21px] tracking-[0.18em] font-normal pl-[24px]
            active:bg-[#999999] active:text-white"
          >
  
            {/* プラスボタン */}
            <span className="absolute left-[8px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center">
              <img src="/icons/plus.svg" alt="plus" />
            </span>
            調味料を追加
          </button>
        </section>

        {/* MEMO */}
        <section className="mt-8 pt-5 border-t border-[#999999]">
          <p className="text-[20px] tracking-[0.2em] font-normal mb-3">MEMO</p>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="w-full h-[190px] border border-[#999999] rounded-[14px] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#999999]" 
          />
        </section>

        {/* 保存ボタン */}
        <button
          type="button"
          onClick={handleSave}
          className="w-full h-[58px] border border-[#999999] rounded-full mt-8 text-[20px] tracking-[0.1em] font-normal active:bg-[#999999] active:text-white"
        >
          保存する
        </button>
      </main>
    </div>
  );
}