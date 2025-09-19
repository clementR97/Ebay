const mongoose = require('mongoose');
const uinqueValidator = require('mongoose-unique-validator');
const userShema = mongoose.Schema({
    email : {type:String, required:true, unique:true},
    password : {type:String, required:true}
});
userShema.plugin(uinqueValidator);
module.exports = mongoose.model('User',userShema);