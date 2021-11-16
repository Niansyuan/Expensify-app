const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public'); //'..' 是因為public folder在上一層資料夾
const port = process.env.PORT || 3000;

//use the public directory to serve up all of our static assets
app.use(express.static(publicPath))

//if what the person requested isn't in the public folder, give them back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

//start on port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})