import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@leon.store'
  const password = 'admin123'
  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      passwordHash: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('Admin user ensured')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
