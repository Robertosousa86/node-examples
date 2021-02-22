const assert = require("assert");
const CountStream = require("./countstream");
const countStream = new CountStream("example");
const fs = require("fs");

var passed = 0;

/*
 * o evento 'total' será emitido
 * quando o stream for finalizado
 */
countStream.on("total", function (count) {
  // faz o teste se o 'total' de count é mesmo 1
  assert.strictEqual(count, 1);
  passed++;
});
/*
 * cria um fluxo legível
 * do arquivo atual e
 * da um pipe(canaliza) os dados por meio de countStream
 */
fs.createReadStream(__filename).pipe(countStream);
/*
 * antes do programa acabar faz um
 * console.log com a quantidade de testes passados
 */
process.on("exit", function () {
  console.log(`assertions passed: ${passed}`);
});
