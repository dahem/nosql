const mongoose = require('mongoose');

module.exports = {
  connectDB : () => {
    return mongoose.connect("mongodb+srv://root:duvetlain@cluster0.uinzq.mongodb.net/RedSocialAcademica?retryWrites=true&w=majority");
  }
}