const {Feed} = require("../models/feed")

const getHomePage = (req ,res) => {
    Feed.find().sort({create_at : -1 })
    .then(result =>
        res.render ('index' , {result}))
        .catch(err => console.log(err))
}
const addMessage = (req ,res) => {
    if(req.method === 'GET'){
        res.render('addMessage', {err:false})
    }
    if(req.method === 'POST'){
        //add new post
        console.log(req.body)
        const message = new Feed(req.body)
        message.save()
          .then(result => res.redirect('/'))
          .catch(err =>res.render('addMessage', { err :err.errors}))
    }  
}
const oneMessage = (req ,res) => {
    Feed.findById({_id:req.params.id})
    .then(result =>
        res.render ('oneMessage' , {result}))
        .catch(err => console.log(err))
    }
    const updateMessage = (req ,res) => {
        if(req.method === 'GET'){
            Feed.findById({_id:req.params.id})
           .then(result =>
            res.render ('editMessage' , {result}))
        .catch(err => console.log(err))
    
        }
        if(req.method === 'POST'){
            Feed.findByIdAndUpdate({_id:req.params.id})
            .then(result =>{
                result.name = req.body.name
                result.message = req.body.message
                result.save()
                .then(() =>
                res.redirect('/'))
                .catch(err => console.log(err))

            }
            )
            .catch(err => console.log(err))
        }
        }

const deleteMessage = (req ,res) => {
    Feed.findByIdAndDelete({_id:req.params.id})
    .then(result => res.redirect('/'))
        .catch(err => console.log(err))
}

module.exports = {
    getHomePage,
    addMessage,
    oneMessage,
    updateMessage,
    deleteMessage
    
}
