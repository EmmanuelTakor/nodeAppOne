const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./views/about.html";

//   if (req.url = "/") {
//     path += "index.html";
//   }
//   if (req.url = "/about") {
//     path += "about.html";
//   }
//   else {
//       path += "404.html"
//   }
//   console.log("request made!");

  fs.readFile(path, (err, data) => {
    if (err) { 
      console.log(err);
    } else {
      res.write(data);
      res.end()
    }
  });
});



server.listen(4000,'localhost',()=>{
    console.log("request received!")
})