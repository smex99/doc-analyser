// Model
const Workspace = require('../models/workspace');

module.exports = {
  Index: async (req, res, next) => {
    const workspaces = await Workspace.find({});
    res.status(200).json({ workspaces });
  },

  getWorkspace: async (req, res, next) => {
    const { workspaceId } = req.value.params;
    const workspace = await Workspace.findById(workspaceId);
    res.status(200).json({ workspace });
  },

  updateWorkspace: async (req, res, next) => {
    const { workspaceId } = req.value.params;
    const newWorkspace = req.body;
    const workspace = await Workspace.findByIdAndUpdate(workspaceId, newWorkspace);
    res.status(200).json({ sucsess: true });
  },

  replaceWorkspace: async (req, res, next) => {
    const { workspaceId } = req.value.params;
    const newWorkspace = req.body;
    const workspace = await Workspace.findByIdAndUpdate(workspaceId, newWorkspace);
    res.status(200).json({ sucsess: true });
  },

  createWorkspace: async (req, res, next) => {
    const {company, legalForm } = req.value.params;
    const newWorkspace = new Workspace({ 
      company: company,
      legalForm: legalForm
    })
    await newWorkspace.save();
    res.status(200).json({ newWorkspace });
  },
}