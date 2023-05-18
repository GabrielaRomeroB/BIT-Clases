const diaHoy = new Date();

const año = diaHoy.getFullYear();
const mes = diaHoy.getMonth();
const dia = diaHoy.getDate();
const hora = diaHoy.getHours();
const munutos = diaHoy.getMinutes();
const segundos = diaHoy.getSeconds();

const diaFormateado = `${dia}/${mes}/${año}`;

const fecha = new Date();

fecha.setFullYear(2023);
fecha.setMonth(4);
fecha.setDate(17);

console.log(diaHoy.toString());

console.log("Este es el dia formateado", diaFormateado)
