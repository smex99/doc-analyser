//Models
const Invoice = require('../models/invoice');

module.exports = {
  Index: async (req, res, next) => {
    const invoices = await Invoice.find({});
    res.status(200).json({ invoices });
  },

  getInvoice: async (req, res, next) => {
    const { invoiceId } = req.value.params;
    const invoice = await Invoice.findById(invoiceId);
    res.status(200).json({ invoice });
  },

  updateInvoice: async (req, res, next) => {
    const { invoiceId } = req.value.params;
    const newInvoice = req.body;
    const invoice = await Invoice.findByIdAndUpdate(invoiceId, newInvoice);
    res.status(200).json({ sucsess: true });
  },

  replaceInvoice: async (req, res, next) => {
    const { invoiceId } = req.value.params;
    const newInvoice = req.body;
    const invoice = await Invoice.findByIdAndUpdate(invoiceId, newInvoice);
    res.status(200).json({ sucsess: true });
  },
}