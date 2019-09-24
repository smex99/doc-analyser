const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
  company: {
    type: String,
  },
  legalForm: {
    type: String
  },
  description: {
    type: String,
  }
});

const Workspace = mongoose.model('workspace', workspaceSchema);
module.exports = Workspace;