const express = require("express");
const connectdb = require("./connection/connectDB");
const Widgets = require("./models/Widgets");
const app = express();
require('dotenv').config();
app.use(express.json());


app.get("/widgets", async(req,res)=>{
    const data = await Widgets.findOne();
    return res.json({data, success: true})
});

app.post("/widgets", async(req,res)=>{
    const {fisrtColumnWidgets, secondColumnWidgets}= req.body;
    const newdata = await Widgets.findOneAndUpdate({firstcolumn: fisrtColumnWidgets, secondcolumn: secondColumnWidgets});
  if (!newdata){
    const savedata = new Widgets({firstcolumn: fisrtColumnWidgets, secondcolumn: secondColumnWidgets});
    await savedata.save();
  }

    return res.json({success: true})
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(
        path.resolve(__dirname + "/client/build/index.html"),
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    });
  }

connectdb();
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`server is running at ${PORT}`)});