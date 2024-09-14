const express = require('express');
const os = require('os');

const app = express();

// Lấy thông tin cấu hình
const systemInfo = {
  OSType: os.type(),
  Platform: os.platform(),
  Release: os.release(),
  TotalRAM: os.totalmem(),
  UsedRAM: os.totalmem() - os.freemem(),
  CPU: os.cpus(),
};

// Thiết lập route chính để hiển thị thông tin hệ thống
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(systemInfo, null, 2));
});

// Lắng nghe trên port 3000
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
