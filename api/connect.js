import mysql from 'mysql2';


export const db = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '12345678',
    // database: 'social',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }
  console.log("Database connected successfully");
});
