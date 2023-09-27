import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //for pagination
  const post = await prisma.post.findMany({
    take: 2, //Limit in SQL query
    skip: 2, //offset in SQL query
  });
  console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
