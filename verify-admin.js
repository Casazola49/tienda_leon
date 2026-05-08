require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT id, email, role, "createdAt", "updatedAt" FROM "User" WHERE email = $1', ['admin@leon.store']);
    if (rows.length === 0) {
      console.log('ERROR: Admin user not found');
      process.exit(1);
    }
    console.log('Admin user found:', rows[0]);
  } finally {
    client.release();
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
