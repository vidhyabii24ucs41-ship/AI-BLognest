const dotenv = require('dotenv');
const dns = require('dns');
const app = require('./app');
const connectDB = require('./config/db');

dotenv.config();

dns.setServers(['8.8.8.8', '8.8.4.4']);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
