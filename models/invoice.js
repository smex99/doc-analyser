const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  invoiceNumer: {
    type: String
  },
  taxTotal: {
    type: Number
  },
  legalMonetaryTotal: {
    type: Number
  },
  totalAmount: {
    type: Number
  }
});

const Invoice = mongoose.model('invoice', invoiceSchema);
module.exports = Invoice;