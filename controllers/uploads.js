const recognize = require('tesseractocr');

module.exports = {
  uploadImage: async (req, res, next) => {
    // get the uploaded image from the request.
    const file = req.files.image;   
    
    //store the file in the upload folder on the server.
    file.mv(__dirname + '/uploads/' + file.name, (err) => {
      if (err) {
        res.status(500).json({ err })
      } else {
        // extracting text from the image.
        recognize(`${__dirname}/uploads/${file.name}`, (err, text) => {
          if (err)
            res.status(500).json({ err })
          else
            res.status(200).json({ text })
        });
      }
    });    
  }
}