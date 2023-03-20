const mongoose = require("mongoose");
 
CodeSchema = new mongoose.Schema({
    code: { type: Number },
    email: { type: String },
    used: { type: Boolean , default: false},
    createdAt: { type: Date },
    
});

CodeSchema.methods.compareCode = async function (candidateCode) {
        if(candidateCode == this.code){
            return true;
        }else{
            return false;
    } 
  };

module.exports = mongoose.model("Code", CodeSchema);