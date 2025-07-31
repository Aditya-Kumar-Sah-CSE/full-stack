

const express = require('express')
const app = express()  
// object app

// // app.listen(3000, () => {
//     console.log('successfully connected on 3000!');
// });


// rout
app.get('/',(req,res) => {
    res.send("<h1>Hello! world </h1>");
})

app.get('/about',(req,res) => {
    res.send("<h1>About page </h1>")
})

app.get('/about/user',(req,res) => {
    res.send("<h1>About page -user</h1>")
})

app.get('/random.text',(req,res) => {
    res.send("<h1>random</h1>");
});

app.get('/user/:id',(req,res) => {
res.send("<h1>User ID </h1>"+req.params.id);    
});

// app.get('/user/:id/book/:bookid',(req,res) => {
app.get('/user/:id-:bookid',(req,res) => {
//res.send("<h1>User ID </h1>"+req.params.id+" <h1>Book ID </h1>"+req.params.bookid+" <h1>Other params </h1>"
res.send(req.params);       
})

app.get('/search',(req,res) => {
res.send("<h1>User ID </h1>"+req.params.id);    
});

app.get('/search1',(req,res) => {
res.send(req.query);    
});

app.get('/search2',(req,res) => {
    const name = req.query.name;
    const age = req.query.age;
res.send(`Search result for name :${name} ,Age : ${age}`);        
});


// respond
app.get('/home1',(req,res) => {
    // res.send('Home page 1');

    //  res.send(
    //     ['Apples', 'Oranges', 'Bananas']
    //  );

    //  res.json({
    //     name: 'John Doe',
    //     age: 30,
    //     city: 'New York'
    // });

    //array of objects
    const users = [{
        name: 'John Doe',
        age: 30,
        city: 'New York'
    },
    {
        name: 'Jane Doe',
        age: 25,
        city: 'Los Angeles'
    }];
     res.send(users);
});

app.get('/about1',(req,res) => {
res.redirect('/home1');
});
