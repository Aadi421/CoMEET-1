//requiring files
const exp = require('express')
const app = exp()
const multer =require('multer')
const session = require('express-session')
app.use(session({
    saveUninitialized : true,
    resave : true,
    secret : 'sfdcghbjkm'
}))

let {post} = require('./db')
let storage = multer.diskStorage({
    destination : __dirname + '/media', 
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
let upload = multer({
    storage : storage
})

// settings exp
app.use('/',exp.static(__dirname + '/public'))
app.use('/images',exp.static(__dirname + '/media'))
app.use(exp.json())
app.use(exp.urlencoded({extended : true}))
app.set('view engine','hbs')
app.set('views',__dirname + '/public')

// multer


// handling apis
app.get('/',async (req,res)=>{
    req.session.count = 0
    console.log(req.session)
    // let data = await 
    res.render('feed.hbs')
})

app.get('/s',(req,res)=>{
console.log(req.session.count++)
    res.send('req.session.count')
})
app.post('/',upload.single('avatar'),(req,res)=>{

})
app.listen(3333,()=>{
    console.log('server started at http://localhost:3333')
})