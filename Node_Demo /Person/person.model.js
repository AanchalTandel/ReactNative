var mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    first_name:{
       type:String,
       ref:'User',
       required: true
    },
    last_name: {
        type:String,
        ref:'User',
        required: true
    },
    username: {
        type:String,
        ref:'User',
        required: false
    }
});

//personSchema.method({});

personSchema.statics = {
    /*** List person ***/
    list() {
        return this.find()
    }
};


module.exports = mongoose.model('Person_Data', personSchema);