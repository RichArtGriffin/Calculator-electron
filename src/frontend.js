document.addEventListener('DOMContentLoaded', () => {
  const pantalla = document.querySelector('.pantalla');
  const botones = document.querySelectorAll('.botones button');
  let resetPantalla = false;

  const esOperador = (caracter) => {
    return caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/';
  };

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const contenidoBoton = boton.textContent;

      if (contenidoBoton === '=') {
        try {
          const resultado = eval(pantalla.value);
          pantalla.value = resultado;
          resetPantalla = true;
        } catch (error) {
          pantalla.value = 'Error';
          resetPantalla = true;
        }
      } else {
        if (resetPantalla) {
          pantalla.value = '';
          resetPantalla = false;
        }

        if (contenidoBoton === 'C') {
          pantalla.value = '';
        } else if (contenidoBoton === '←') {
          pantalla.value = pantalla.value.slice(0, -1);
        } else {
          if (esOperador(contenidoBoton) && esOperador(pantalla.value.slice(-1))) {
            pantalla.value = pantalla.value.slice(0, -1);
          }
          pantalla.value += contenidoBoton;
        }
      }
    });
  });
});