const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

// Connect to mLab remote db service
mongoose.connect(config.db.url, {useNewUrlParser: true});

const app = express();

// Middleware
app.use(fileUpload());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authentication'));
app.use('/api/upload', require('./routes/uploads'))
app.use('/api/users', require('./routes/users'));
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/workspaces', require('./routes/workspaces'));

// Run the server on port 5000
app.listen(config.port);
console.log(`server started on port ${config.port}`);   