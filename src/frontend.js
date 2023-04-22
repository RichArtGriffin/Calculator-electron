document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.querySelector('.pantalla');
    const botones = document.querySelectorAll('.botones button');
  
    botones.forEach((boton) => {
      boton.addEventListener('click', () => {
        const contenidoBoton = boton.textContent;
  
        // Si el botón es igual a "=", realiza la operación
        if (contenidoBoton === '=') {
          try {
            const resultado = eval(pantalla.value);
            pantalla.value = resultado;
          } catch (error) {
            pantalla.value = 'Error';
          }
        } else {
          // Si no es "=", escribe el contenido del botón en la pantalla
          pantalla.value += contenidoBoton;
        }
      });
    });
  });