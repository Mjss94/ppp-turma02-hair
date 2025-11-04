const logs = require('../models/logModel');

function addLog({ userId, date, treatment, feedback }) {
  const log = { id: logs.length + 1, userId, date, treatment, feedback };
  logs.push(log);
  return log;
}

function listLogs(userId) {
  return logs.filter(l => l.userId === userId);
}

module.exports = { addLog, listLogs };
