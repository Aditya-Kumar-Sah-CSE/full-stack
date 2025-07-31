const express = require('express');
const app = express();

// app.listen(4000,()=>{
//     // console.log('Server is running on port 4000');
// })

app.set('view engine','ejs');
app.use(express.json());  // for json
app.use(express.urlencoded({extended:false}));
/** app.get('/',(req,res)=>{
    res.send(
        {
            name: 'Aditya',
            age: 20,
            address: 'S24 Ultra, New York'
        }
    );
})*/
// send return array ,oject,text,html,file,json
app.get('/',(req,res)=>{
    res.send(
       [ {
            name: 'Aditya',
            age: 20,
            address: 'S24 Ultra, New York'
        },{
            name: 'John',
            age: 30,
            address: '123 Main St, Los Angeles'
        }]

    );
})

// same work jsonp for cross callback function;

//redirect to another page
app.get('/redirect',(req,res)=>{
    res.redirect(301,'https://www.google.com')
      //res.redirect('/user')
})

app.get('/user',(req,res)=>{
res.send('User Page');
})

app.get('/user1',(req,res)=>{

    res.render('user')
})

app.get('/download',(req,res)=>{
    res.download('./nodebook/NodeJS.pdf')
})

app.get('/download1',(req,res)=>{
    res.sendFile(__dirname + '/nodebook/NodeJS.pdf')
    // folder name only not .
})

app.get('/end',(req,res)=>{
    res.write('This is end page');
    res.end();
})

app.post('/about',(req,res)=>{
    res.send(req.body);
})