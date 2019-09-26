module.exports = {
	port: process.env.PORT || 5000,
	db: {
		local: process.env.DB_URL || 'mongodb://localhost:27017/<dbname>',
		remote: process.env.DB_URL || 'mongodb://<dbadress>:27017/<dbname>'
	}
};
