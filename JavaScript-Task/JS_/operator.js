let indexQurban;
let indexKenan;

const kqQurban = 70;
const kqKenan = 60;

const heightQurban = 1.7;
const heightKenan = 1.5;

indexQurban = kqQurban / (heightQurban * heightQurban);
indexKenan = kqKenan / (heightKenan * heightKenan);

console.log(indexQurban.toFixed(2), indexKenan);

let boyuk = indexQurban > indexKenan;
console.log("kenanin kq indeksi coxdur");
