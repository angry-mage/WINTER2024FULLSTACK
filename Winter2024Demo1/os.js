var os = require('os');

console.log()
console.log('OS CPU Architecture: ' + os.arch());
console.log('Free memory of the system: ' + os.freemem());
console.log('Total memory of the system: ' + os.totalmem());
console.log('OS Platform: ' + os.platform());
console.log('Information about the current user: ' + os.userInfo().username);
console.log('OS Type: ' + os.type());
console.log('Current directory: ' + os.homedir());
console.log('Uptime: ' + os.uptime());
console.log('Hostname: ' + os.hostname());
console.log()
