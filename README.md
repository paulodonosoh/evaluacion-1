# evaluacion-1
descripcion del proyecto
el proyecto es una pagina tipo blog en la que se mostraran perros diponibles para adopcion y se le ofrecera a los interesados la opcion de dejar sus datos de contacto para que la organizacion se ponga en contacto con ellos 

estructura de carpetas
hay una carpeta css donde se guardan los archivos .css usados para darle el diseño visual a la pagina
hay una carpeta img en la que se uardan las imagenes a utilizar en la pagina
no se incluyo la carpeta jss ya que java no entrava en esta evaluacion

promt
crea una estructura html basica con header, nav, main, section y footer para una pagina que ofrece perros en adopcion

prompt
en la seccion id="perros" genera una lista de perros con nombre raza y edad

prompt
en la seccion id="proceso" crea un formulario para pedir al usuario su informacion de contacto

prompt
crea una estructura para base para modificar el estilo del archivo index.html que esta enlazado a este archivo

prompt 
haz que la lista contenida en la seccion id="perros" del archivo index.html enlazado a este archivo se muestren como una cuadricula usando mejor el espacio de la pagina

prompt
modifica la lista de la sección "" para que muestre 2 elementos por fila

promt
agrega un pequeño parrafo describiendo la personalidad del perro en cada elemento de la lista de perros

prompt
haz que los nombre raza y edad de los perros esten contenidos en una clase llamada atributos par usarla en styles.css

--------EVALUCION 2---------
se crea la rama validacionf
promt
sugiereme una estructura de archivos para aplicar una validacion a los formularios de la pagina

en base a las sugerencias de la ia se decide usar la siguiente estructura:
js 
 formHandlers.js :Maneja lo que pasa cuando el usuario envía el formulario
 main.js: Controla la página principal
 validation.js: Verifica que los datos del formulario esten correctos antes de ser enviados

se le pide a la ia aplicar codiog para las siguiientes funcionalidades a cada archivo

formHandlers.js: 
-Valida todos los campos usando validation.js
-Si hay errores, los muestra
-Si está todo en correcto, marca los campos en verde y muestra "Enviado correctamente"
 Luego borra el formulario

main: controlador principal de la pagina

validations.js:
mediante expresiones regulares valida los siguientes campos
-El nombre tenga mínimo 3 caracteres
-El email tenga formato válido
-El teléfono tenga 7-15 dígitos
-La dirección tenga mínimo 5 caracteres
-Si hay errores, muestra mensajes rojos debajo de cada campo.

se crea la rama "buscador"

promp principal 
mediante un arreglo de objetos que incluya los atributos: nombre, raza, edad y descripcion genera la estructura para un buscador de los perros que esten dentro del arreglo mediante su nombre o raza, ademas modifica el archivo index.html par que en la seccion id="perros" muestre la informacion  de los perros extrayendola de este arreglo

notamos que el la funcionalidad del buscador se creo en el archivo validation.js por lo que para un mejor diseño y aplicacion de modularidad lo separamos en un archivo diferente llamado buscador.js y actualizamos el main.js para para importar y usar las funciones de buscador.js, ademas actualizamos index.html para cargar buscador.js antes de main.js ya que desde el arreglo creado en buscador renderizaremos y mostraremos los perros, esto ultimo permite agregar o quitar perros del arreglo sin tener que modificar el archivo index.html lo que facilita la mantenibilidad del codigo


promt
agrega mas perros al arreglo

esto se hizo para corroborar que la pagina funciona correctamente variando la cantidad de perros del arreglo

si bien funciona, notamos que al bajar por la pagina la barra de navegacion queda oculta por lo que la corregimos para que se mantenga fija en la parte superior de la pagina
además en la barra de navegación los links de "inicio" y "contacto" no estaban conectados a ninguna sección
al ser correciones simples que solo requeria unas pocas líneas de código en index.html y en styles.css se decidio no hacer una rama nueva y corregirlo dentro de esta misma rama

prompt
para la seccion nav los links  href="#inicio" y  href="#contacto" genera secciones,conectalas y agrega estilos acorde en el archivo styles.css


se crea la nueva rama agregarFavoritos
 prompt principal
 agrega una funcion en un nuevo archivo llamado favoritos.js para que los usuarios puedan marcar a  un perro como favorito mediante un boton,ademas que el archivo index.html tenga una opcion tipo checkbox para que la pagina le muestre solo los que tiene marcados, aprovecha para esto la propiedad localstorage del navegador

ahora la rama main tambien maneja el evento de click en favoritos y de el filtro "solo favoritos" para luego llamar a renderizado

ademaas se agregaron estilos para el boton de favoritos y el filtro de solo favoritos en styles.css

finalmete se agregan las fotos faltantes y se realizan testeos finales para que la pagina funcione correctamente
los formularoios se validan correctaemnte
se se pueden marcar favoritos y filtrar solo los favoritos incluso aunque se actualice la pagina o se cierre el navegador
el buscador permite correctamente buscar perros por nombre o raza y renderiza la lista de perros filtrada en tiempo real