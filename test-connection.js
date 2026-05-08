require('dotenv').config();
const { PrismaClient } = require('./generated/prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const version = await prisma.$queryRaw`SELECT version()`;
    console.log('PostgreSQL version:', version);
    const userCount = await prisma.user.count();
    console.log('User count:', userCount);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
