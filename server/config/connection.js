const mongoose = require("mongoose");

process.env.MONGODB_URI || "mongodb://localhost:27017/deep-thoughts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
module.exports = mongoose.connection;
