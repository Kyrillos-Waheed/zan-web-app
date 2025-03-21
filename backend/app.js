import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sql from 'mssql';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Database Configuration
const dbConfig =
{
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options:
  {
    encrypt: true, // Use encryption
    trustServerCertificate: true, // Required for self-signed certificates
  },
};

// Connect to Database
sql.connect(dbConfig)
  .then(() => console.log('Connected to SQL Server'))
  .catch(err => console.error('Database Connection Failed', err));

// Routes
app.get('/', (req, res) => res.send('API is running...'));

// Users Route
app.get('/users', async (req, res) =>
{
  try
  {
    const result = await sql.query('SELECT UserID, FullName, Email, Role, CreatedAt FROM Users');
    res.json(result.recordset);
  } catch (err)
  {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Products Route
app.get('/products', async (req, res) =>
{
  try
  {
    const result = await sql.query('SELECT * FROM Products');
    res.json(result.recordset);
  } catch (err)
  {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Orders Route
app.get('/orders', async (req, res) =>
{
  try
  {
    const result = await sql.query('SELECT * FROM Orders');
    res.json(result.recordset);
  } catch (err)
  {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));