const fs = require("fs");

const onRead = (err, buf) => {
  if (err) {
    console.log("houve um erro");
  } else {
    console.log(buf.toString());
  }
};

const filename =
  "/home/jimmytri0/repos/pos-pucrs/DesenvolvimentoFullStack/D02-ProgramacaoOrientadaAObjetos/aula-03/parte-4/temp/text.txt";

fs.readFile(filename, onRead);
