export type Unit = "g" | "ml" | "大さじ" | "小さじ"

export type Ingredient = {
  id: string
  name: string
  amount: number
  unit: Unit
}

export type Recipe = {
  id: string
  name: string
  category: string
  baseServing: number
  ingredients: Ingredient[]
}

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "照り焼きソース",
    category: "和食",
    baseServing: 2,
    ingredients: [
      { id: "1-1", name: "醤油", amount: 2, unit: "大さじ" },
      { id: "1-2", name: "みりん", amount: 2, unit: "大さじ" },
      { id: "1-3", name: "砂糖", amount: 1, unit: "大さじ" }
    ]
  }
]