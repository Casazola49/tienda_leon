require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  const client = await pool.connect();
  try {
    const now = new Date().toISOString();
    const { rows } = await client.query('SELECT * FROM "User" WHERE email = $1', ['admin@leon.store']);
    if (rows.length === 0) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await client.query(
        'INSERT INTO "User" (email, "passwordHash", role, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)',
        ['admin@leon.store', hashedPassword, 'ADMIN', now, now]
      );
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }
  } finally {
    client.release();
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
