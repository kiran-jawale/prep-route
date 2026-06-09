import {CONFIG} from '../constants/config.js'

const formatUptime = (seconds) => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
};
const healthController = (req, res) => {
  const uptime = process.uptime();

  return res.status(200).json({
    success: true,
    message: "Server healthy",
    data: {
      appName: CONFIG.APP_NAME,
      apiVersion: CONFIG.API_VERSION,
      environment: process.env.NODE_ENV,
      uptimeSeconds: Math.floor(uptime),
      uptimeHuman: formatUptime(uptime),
      timestamp: new Date().toISOString(),
    },
  });
};

export default healthController