try {
  const { PrismaClient } = require('@prisma/client');
  console.log('PrismaClient loaded:', PrismaClient);
} catch (e) {
  console.error(e);
}
