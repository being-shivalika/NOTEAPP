const app = require('./src/App');
const dotenv = require('dotenv').config();


app.get('/', (req, res) => {
    res.send("hello world ")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`server is running at PORT ${PORT}`);
})