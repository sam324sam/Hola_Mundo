let holamundo;
let texto = "Hola Mundo";
let prueba;
let i = 0;
let abcMinus = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '
];
let abcMayus = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

document.addEventListener("DOMContentLoaded", function () {
    holamundo = document.getElementById("hola");
    prueba = document.getElementById("prueba");
    efecto(0);
});

function efecto(contador) {
    setTimeout(() => {
        let span = document.createElement('span');
        if (!esMayuscula(texto.charAt(contador))) {
            if (abcMinus[i] == texto.charAt(contador)) {
                prueba.textContent = "";
                let colorClass = 'color' + ((i % 5) + 1);
                span.className = colorClass;
                span.textContent += abcMinus[i];
                holamundo.appendChild(span);
                i = 0;
                if (contador >= texto.length) { /* empty */ } else {
                    efecto(contador + 1);
                }
            } else {
                let colorClass = 'color' + ((i % 5) + 1);
                prueba.className = colorClass;
                prueba.textContent = abcMinus[i];
                i++;
                efecto(contador);
            }
        } else if (abcMayus[i] == texto.charAt(contador)) {
                prueba.textContent = "";
                let colorClass = 'color' + ((i % 5) + 1);
                span.className = colorClass;
                span.textContent += abcMayus[i];
                holamundo.appendChild(span);
                i = 0;
                if (contador >= texto.length) { /* empty */ } else {
                    efecto(contador + 1);
                }
            } else {
                let colorClass = 'color' + ((i % 5) + 1);
                prueba.className = colorClass;
                prueba.textContent = abcMayus[i];
                i++;
                efecto(contador);
            }
    }, 60);
}

function esMayuscula(caracter) {
    return /^[A-Z]/.test(caracter);
}