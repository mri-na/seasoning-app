import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function POST(req: Request) {
  const data = await req.json();

  const recipe = await prisma.recipe.create({
    data: {
      title: data.title,
      category: data.category,
      baseServing: data.baseServing,
      memo: data.memo,
      ingredients: {
        create: data.ingredients.map((i: any) => ({
          name: i.name,
          amount: i.amount,
          unit: i.unit,
        })),
      },
    },
  });

  return Response.json(recipe);
}

export async function GET() {
  const recipes = await prisma.recipe.findMany({
    include: {
      ingredients: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return Response.json(recipes);
}