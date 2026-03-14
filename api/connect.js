import mysql from 'mysql2';


export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'social'
})

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }
  console.log("Database connected successfully");
});
