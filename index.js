const express = require("express");
const app = express();
const cors = require("cors");
const ytdl = require("ytdl-core");

const bodyParser = require('body-parser');
const {exec} = require('child_process');
const { stderr } = require("process");


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());


const port = 3000;

app.listen(port, () => {
          console.log(`Server Listening at port ${port}`);
});

app.get("/", (req, res) => {
          res.sendFile(__dirname + "/index.html");
});




app.get("/download", (req, res) => {
          let URL = req.query.URL;

          ytdl.getInfo(URL, (err, info) => {
                    res.send(info)
          } )


          //IMPORTANT
          // res.header('Content-Disposition', 'attachment; filename=video.mp4');
          // ytdl(URL, {
          //           format: 'mp4'
          // }).pipe(res);
});