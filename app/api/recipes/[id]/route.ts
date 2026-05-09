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