require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@leon.store';
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    console.error('ADMIN_PASSWORD environment variable is required');
    process.exit(1);
  }

  const client = await pool.connect();
  try {
    const now = new Date().toISOString();
    const { rows } = await client.query('SELECT * FROM "User" WHERE email = $1', [email]);
    if (rows.length === 0) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash(password, 10);
      await client.query(
        'INSERT INTO "User" (email, "passwordHash", role, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)',
        [email, hashedPassword, 'ADMIN', now, now]
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
