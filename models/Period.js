const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const periodSchema = new mongooseSchema({
    month:String,
    year:Number,
    nEntries:Number,
    expenses:Number,
    incoming:Number,
    balance:Number
});


module.exports = mongoose.model('Period', periodSchema);