export type Unit = "g" | "ml" | "大さじ" | "小さじ"

export type Ingredient = {
  id: string
  name: string
  amount: number
  unit: Unit
}

export type Recipe = {
  id: string
  title: string
  category: string
  baseServing: number
  ingredients: Ingredient[]
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "照り焼きソース",
    category: "和食",
    baseServing: 2,
    ingredients: [
      { id: "1-1", name: "酒", amount: 2, unit: "大さじ" },
      { id: "1-2", name: "醤油", amount: 2, unit: "大さじ" },
      { id: "1-3", name: "みりん", amount: 2, unit: "大さじ" },
      { id: "1-4", name: "砂糖", amount: 1, unit: "大さじ" }
    ]
  },

  {
    id: "2",
    title: "麻婆豆腐",
    category: "中華",
    baseServing: 2,
    ingredients: [
      { id: "2-1", name: "豆板醤", amount: 1, unit: "大さじ" },
      { id: "2-2", name: "甜麺醤", amount: 1, unit: "大さじ" },
      { id: "2-3", name: "醤油", amount: 1, unit: "大さじ" },
      { id: "2-4", name: "酒", amount: 1, unit: "大さじ" }
    ]
  },

  {
    id: "3",
    title: "冷麺ダレ",
    category: "韓国",
    baseServing: 2,
    ingredients: [
      { id: "3-1", name: "酢", amount: 2, unit: "大さじ" },
      { id: "3-2", name: "醤油", amount: 2, unit: "大さじ" },
      { id: "3-3", name: "砂糖", amount: 1, unit: "大さじ" },
      { id: "3-4", name: "ごま油", amount: 1, unit: "小さじ" }
    ]
  },

  {
    id: "4",
    title: "きんぴら",
    category: "和食",
    baseServing: 2,
    ingredients: [
      { id: "4-1", name: "醤油", amount: 1, unit: "大さじ" },
      { id: "4-2", name: "みりん", amount: 1, unit: "大さじ" },
      { id: "4-3", name: "砂糖", amount: 1, unit: "小さじ" },
      { id: "4-4", name: "酒", amount: 1, unit: "大さじ" }
    ]
  }
]