'use strict';

const os = require('os');
const Controller = require('egg').Controller;

class MonitorController extends Controller {
  async info() {
    const { ctx } = this;
    const type = os.type();
    const uptime = os.uptime();
    const platform = os.platform();
    const arch = os.arch();
    const release = os.release();
    const cpus = os.cpus();
    const totalmem = os.totalmem();
    const freemem = os.freemem();
    const hostname = os.hostname();
    const loadavg = os.loadavg();
    const networkInterfaces = os.networkInterfaces();
    const info = {
      type,
      uptime,
      platform,
      arch,
      release,
      cpus,
      totalmem,
      freemem,
      hostname,
      loadavg,
      networkInterfaces,
    };
    ctx.body = JSON.stringify(info);
  }
}

module.exports = MonitorController;
