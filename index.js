// faz o require do modulo countstream
const CountStream = require("./countstream");
// instancia a classe CountStream que conta o texto 'book'
const countStream = new CountStream("São Paulo");
const http = require("http");
// faz a requisição no site
http.get("http://www.saopaulofc.net/", function (res) {
  // faz o pipe dos dados do site para coutStream, contando o texto
  res.pipe(countStream);
});

// resultado de 4 correspondências
countStream.on("total", function (count) {
  console.log("Total matches", count);
});
