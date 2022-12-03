//データベースにアクセスするためのクライアントライブラリ
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const main = async () => {
  const newLink = await prisma.link.create({
    data: {
      description: "GraphQLチュートリアルをUdemyで学ぶ",
      url: "https://www.udemy.com/graphql-bootcamp/",
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
