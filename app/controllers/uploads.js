const { TesseractWorker } = require('tesseract.js');
const worker = new TesseractWorker();

module.exports = {
	uploadImage: async (req, res, next) => {
		// Get the uploaded image from the request.
		const file = req.files.image;

		// Store file on the server in the upload directory.
		file.mv(__dirname + '/uploads/' + file.name, err => {
			if (err) {
				res.status(500).json({ err });
			} else {
				// Run tesseract OCR text extraction from the image.
				worker
					.recognize(`${__dirname}/uploads/${file.name}`)
					.progress(progress => {
						console.log('progress', progress);
					})
					.then(result => {
						console.log('result', result);
					});
			}
		});
	}
};
