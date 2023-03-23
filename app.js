const express=require("express");
const app=express();
const port =3000;
const bodyParser =require("body-parser")
const morgan= require("morgan")
const fs= require("fs");
const mysql=require("mysql2")

let pool=mysql.createPool({
    host: "localhost",
    user: "root",
    password:"040292Th!",
    database: "user_schema",
});
let db=pool.promise();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  app.get("/api/v1/users/post", (req, res) => {
    fs.readFile("./dev-data/users.json", "utf8", (err, data) => {
      if (err) throw err;
      let dataPar = JSON.parse(data);
  
      for (let i = 0; i < dataPar.length; i++) {
        let value = [
          dataPar[i].userID,
          dataPar[i].name,
          dataPar[i].username,
          dataPar[i].email,
          dataPar[i].phone,
          dataPar[i].website,
        ];
        db.query("INSERT INTO tbl_user VALUES (?,?,?,?,?,?)", value);
      }
      res.json({ mes: "ok" });
    });
  });
  
  app.get("/api/v1/blogs/post", (req, res) => {
    fs.readFile("./dev-data/blogs.json", "utf8", (err, data) => {
      if (err) throw err;
      let dataPar = JSON.parse(data);
      for (let i = 0; i < dataPar.length; i++) {
        let value = [
          dataPar[i].id,       
          dataPar[i].userId,
          dataPar[i].title,
          dataPar[i].body,
        ];
        db.query("INSERT INTO tbl_blogID VALUES (?,?,?,?)", value);
      }
      res.json({ mes: "ok" });
    });
  });
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })