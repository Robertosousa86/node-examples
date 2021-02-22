const Writable = require("stream").Writable;
const util = require("util");

module.exports = CountStream;
// herda de writable stream
util.inherits(CountStream, Writable); 

//
function CountStream(matchText, options) {
  Writable.call(this, options);
  this.count = 0;
  // cria um objeto de expressão regular que corresponda globalmente e ignore maiúsculas
  this.matcher = new RegExp(matchText, "ig"); 
}

CountStream.prototype._write = function (chunck, encoding, cb) {
  // converter o bloco atual de entradas em strings e as utiliza para contar igualdades
  const matches = chunck.toString().match(this.matcher); 

  if (matches) {
    this.count += matches.length;
  }
  cb();
};

CountStream.prototype.end = function () {
  // quando o total de linhas acaba, posta o total de correspondências(igualdades)
  this.emit("total", this.count); 
};
