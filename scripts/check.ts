const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.blog.findMany().then(blogs => {
  console.log(JSON.stringify(blogs, null, 2));
}).finally(() => {
  prisma.$disconnect();
});
