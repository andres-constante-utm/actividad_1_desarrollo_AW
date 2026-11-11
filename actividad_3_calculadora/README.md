# Calculadora Web — Actividad 3

**Materia:** Desarrollo de Aplicaciones Web · **Universidad Técnica de Manabí**
**Carrera:** Ingeniería en Tecnologías de la Información · 6.º nivel
**Docente:** Ing. Manuel Geovanny Bravo Pico
**Grupo:** APP_J · **Periodo:** 2026-2

## Integrantes

1. Andrés Gonzalo Constante Murillo
2. Jessenia Belén Cruz Rojas
3. Solange Dayanara Iñiguez Páraga
4. Francisco Xavier Reyes Muñoz
5. Alba Alexandra Silva Pila
6. Ronnie Guillermo Tirira Morales

## Descripción

Calculadora web que hicimos solo con HTML, CSS y JavaScript, sin frameworks ni librerías. Se puede usar con el mouse o con el teclado.

## Tecnologías

- HTML5
- CSS3
- JavaScript

## Funcionalidades

- Suma, resta, multiplicación y división con números enteros y decimales.
- Operaciones seguidas (por ejemplo `2 + 3 + 4`) y seguir operando con el resultado.
- Botón **C** para limpiar todo y botón **⌫** para borrar el último dígito.
- Soporte de teclado: números, `.`, `+`, `-`, `*`, `/`, `Enter` o `=` para calcular, `Backspace` para borrar y `Esc` para limpiar.
- Diseño que se adapta a pantallas pequeñas.

## Validaciones

- La división para cero muestra "Error".
- No se permiten dos puntos decimales en el mismo número.
- No se calcula si falta un número o la operación.
- Los resultados se redondean para evitar cosas como `0.30000000000000004`.
- No se usa `eval()`: las operaciones se hacen con `if/else` y `parseFloat`.

## Cómo ejecutarla

**Opción A:** abrir el archivo `index.html` con doble clic en el navegador.

**Opción B:** servirla desde el contenedor `daw-dev` en el puerto 4200 (que ya está publicado y no ocupa el 3000 de NestJS):

```bash
docker exec -it daw-dev npx http-server /workspace/actividad_1_desarrollo_AW -p 4200
```

Luego abrir <http://localhost:4200/actividad_3_calculadora/> en el navegador. Para detener el servidor se presiona `Ctrl + C`.

## Estructura de archivos

```
actividad_3_calculadora/
├── index.html   → estructura y botones
├── styles.css   → estilos de la calculadora
├── script.js    → lógica en JavaScript
└── README.md    → este archivo
```

## Secciones del código e integrantes

| Sección | Contenido | Archivo | Integrante que la explica en el video |
|---------|-----------|---------|----------------------------------------|
| 1 | Estructura HTML y pantalla | `index.html` | Andrés Gonzalo Constante Murillo |
| 2 | Estilos de la calculadora | `styles.css` | Jessenia Belén Cruz Rojas |
| 3 | Variables y funciones para agregar números y el punto | `script.js` | Solange Dayanara Iñiguez Páraga |
| 4 | Selección de la operación | `script.js` | Francisco Xavier Reyes Muñoz |
| 5 | Función calcular: las 4 operaciones y la división para cero | `script.js` | Alba Alexandra Silva Pila |
| 6 | Limpiar, borrar el último dígito y soporte de teclado | `script.js` | Ronnie Guillermo Tirira Morales |
