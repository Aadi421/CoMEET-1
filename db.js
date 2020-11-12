let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/post',{useNewUrlParser : true})
mongoose.connection.once('open',()=>{
    console.log('db connected')
})
let posSchema = mongoose.Schema({
        title : String,
        name : String,
        specialist : String,
        body : String,
        like : Number,
        comment : Array,
        media : String

})
let post = mongoose.model('post',posSchema)
module.exports = {
    post
}