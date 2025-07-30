import express from 'express'

const app = express();


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
   res.send("Home page");
});
app.get('/about', (req, res) => {
   res.render("profile");
});

app.get('/contact', (req, res) => {
   res.render("message",{title:'About title', message:'Welcome to EJS'})
}
);
app.get('/form', (req, res) => {
res.render('form',{message:'null'});
})

// app.post('/submit', (req, res) => {
//     const name = req.body.myname;
//     const message = `Hello ${name}! You submitted`
//     res.send(message);
//new page 
// })
app.post('/submit', (req, res) => {
    const name = req.body.myname;
    const message = `Hello ${name}! You submitted`
    res.render('form',{message:message}  );
new page 
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
});