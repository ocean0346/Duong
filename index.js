const fs = require('fs');
const os = require('os');
function getWindowsVersion() {
    const release = os.release();
    if (release.startsWith('10.0.22000')) {
        return 'Windows 11';
    } else if (release.startsWith('10.0')) {
        return 'Windows 10';
    } else {
        return 'Unknown Windows version';
    }
}
console.log("Operating System: ", getWindowsVersion());
const path = require('path');
const EventEmitter = require('events');

// Khởi tạo EventEmitter
const eventEmitter = new EventEmitter();

// Lấy thông tin cấu hình
const systemInfo = {
  OSType: os.type(),
  Platform: os.platform(),
  RAM: os.totalmem(),
  USEDRAM: os.totalmem() - os.freemem(),
  CPU: os.cpus()
};

// In ra console thông tin cấu hình
console.log(systemInfo);

// Lưu thông tin vào file
const filePath = path.join('D:\Homework');
fs.writeFile(filePath, JSON.stringify(systemInfo, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  // Phát sự kiện sau khi ghi file thành công
  eventEmitter.emit('fileSaved');
});

// Đăng ký sự kiện khi file được lưu
eventEmitter.on('fileSaved', () => {
  console.log('Completed task!');
});
