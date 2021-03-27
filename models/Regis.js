const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const regisSchema = new mongoose.Schema({
    transaction: String,
    desc: String,
    value: Number,
    status: Boolean,
    category: String,
    box: String,
    date: Date,
    repeat: Boolean,
    repeatKey: Number,
    fix: String,
    installments: Number,
    tags: String,
    late: String,
    
});

regisSchema.pre('save', function(next) {
    this.repeatKey = new Date().getTime();
    next();
});

module.exports = mongoose.model('Regis', regisSchema);