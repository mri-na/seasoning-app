import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const recipe = await prisma.recipe.findUnique({
    where: {
      id,
    },
    include: {
      ingredients: true,
    },
  });

  if (!recipe) {
    return Response.json(
      { message: "レシピが見つかりません" },
      { status: 404 }
    );
  }

  return Response.json(recipe);
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();

  const recipe = await prisma.recipe.update({
    where: { id },
    data: {
      title: data.title,
      category: data.category,
      baseServing: data.baseServing,
      memo: data.memo,
      ingredients: {
        deleteMany: {},
        create: data.ingredients.map((i: any) => ({
          name: i.name,
          amount: i.amount,
          unit: i.unit,
        })),
      },
    },
    include: {
      ingredients: true,
    },
  });

  return Response.json(recipe);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const recipe = await prisma.recipe.delete({
    where: { id }
  });

  return Response.json(recipe);
}