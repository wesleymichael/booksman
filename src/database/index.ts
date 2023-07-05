import pg from "pg";

const { Pool } = pg;
const connection = new Pool({
  connectionString: `postgresql://postgres:postgres@localhost:5432/books`
});

export default connection;