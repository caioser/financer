const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const boxSchema = new mongoose.Schema({
    desc: { type:String, trim:true, required:'A caixa precisa de uma descrição' },
    type: String,
    value: Number,
    bankName: String ,
    deadline: { type:Date, default:5 },
    closing: { type:Date, default:1 },
    limit: {
        total: { type:Number, default:this.value },
        used: { type:Number, default:0 },
        available: { type:Number, default:this.total-this.used },
    },
    payBox:String
});
/*
regisSchema.pre('save', function(next) {
    if (this.isModified('title')) {
        this.slug = slug( this.title, {lower:true} );
    }

    next();
});
*/
module.exports = mongoose.model('Box', boxSchema);