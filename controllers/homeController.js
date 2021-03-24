const mongoose = require('mongoose');
const Regis = mongoose.model('Regis');

exports.index = (req, res)=>{
    
    let responseJson = {
        sample:'sample',/*
        pageTitle:'HOME',
        posts:[]*/
    };
    /*
    const posts = await Post.find();
    responseJson.posts = posts;
    */
    res.render('home', responseJson);
};

exports.new = (req, res) => {
    res.render('new');
}

exports.newAction = async (req, res) => {
    //res.send(req.body);
    
    const regis = new Regis(req.body);
    

    try { // evitar envio formulário vazio, pagina em loading sem resposta
        await regis.save();
    } catch(error) {
        return res.redirect('/new');
    }
    
    res.redirect('/');

};