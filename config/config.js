module.exports = {
  port: process.env.PORT || 5000,
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/konta'
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}