var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2;
var numeros = [1, 23, 3];
numeros.map(function (valor) {
    return valor * 2;
});
console.log(numeros.map(function (valor) { return valor * 2; }));
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
