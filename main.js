//
window.onload = function(){
alert("hoklallala");
// Declaramos las variables de operacion
  var resultado;
  var op_a;
  var op_b;
  var operacion;

  // Obetenemos los elementos
var display = document.getElementById('display');
var button_division = document.getElementById('button_division');
var button_multiplicacion = document.getElementById('button_multiplicacion');
var button_suma = document.getElementById('button_suma');
var button_restar = document.getElementById('button_restar');
var button_Igual = document.getElementById('button_Igual');
var button_Reset = document.getElementById('button_Reset');
var button_0 = document.getElementById('button_0');
var button_1 = document.getElementById('button_1');
var button_2 = document.getElementById('button_2');
var button_3 = document.getElementById('button_3');
var button_4 = document.getElementById('button_4');
var button_5 = document.getElementById('button_5');
var button_6 = document.getElementById('button_6');
var button_7 = document.getElementById('button_7');
var button_8 = document.getElementById('button_8');
var button_9 = document.getElementById('button_9');

// Eventos

button_1.onclick = function(e){
  display.textContent = display.textContent + "1";
}
button_2.onclick = function(e){
  display.textContent = display.textContent + "2";
}
button_3.onclick = function(e){
  display.textContent = display.textContent + "3";
}
button_4.onclick = function(e){
  display.textContent = display.textContent + "4";
}
button_5.onclick = function(e){
  display.textContent = display.textContent + "5";
}
button_6.onclick = function(e){
  display.textContent = display.textContent + "6";
}
button_7.onclick = function(e){
  display.textContent = display.textContent + "7";
}
button_8.onclick = function(e){
  display.textContent = display.textContent + "8";
}
button_9.onclick = function(e){
  display.textContent = display.textContent + "9";
}
button_0.onclick = function(e){
  display.textContent = display.textContent + "0";
}

button_Reset.onclick = function(e){
  resetear(); // definir la funcion
}

button_suma.onclick = function(e){
  op_a = display.textContent;
  operacion = "s";
  limpiar();
}

button_division.onclick = function(e){
  op_a = display.textContent;
  operacion = "d";
  limpiar();
}

button_multiplicacion.onclick = function(e){
  op_a = display.textContent;
  operacion = "m";
  limpiar();
}

button_restar.onclick = function(e){
  op_a = display.textContent;
  operacion = "r";
  limpiar();
}
button_Igual.onclick = function(e){
  op_b = display.textContent;
  resolver();
}

// funciones
function resetear() {
  display.textContent = "";
  op_a = 0;
  op_b = 0;
  operacion = "";
}
function limpiar(){
  display.textContent = "";
}

function resolver() {
  switch (operacion) {
    case "s":
      res = parseFloat(op_a) + parseFloat(op_b);
      break;
    case "r":
      res = parseFloat(op_a) - parseFloat(op_b);
      break;
    case "m":
      res = parseFloat(op_a) * parseFloat(op_b);
      break;
    case "d":
      res = parseFloat(op_a) / parseFloat(op_b);
      break;


  }// fin switch
  resetear();
  display.textContent = res;
} // fin funcion resolver

} // function onload
