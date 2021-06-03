# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

####################################################################################################################################################################
                                                                   
                                                                   Bird Domain 
                                                                    
####################################################################################################################################################################

http://birdomain.herokuapp.com/

El objetivo de la página era crear un espacio donde el usuario pueda obtener información sobre especies de aves y tours de aves que se pueden realizar con una empresa de guias especializados en la observación de aves dentro de Argentina.  
La página cuenta con: 
1. Header y footer
A. Header: 
El header es de doble renglón y con propiedad sticky haciendo la navegabilidad del sitio simple en todo momento. El primer renglón cuenta con dos botones “Ingresa” y “Registrate” que despliegan modales diferentes para realizar dichas acciones. Un usuario loguedo puede comprar tours y acceder a su propia sección de favoritos, mientras que un usuario no logueado puede visualizar información sin acceder a estas funcionalidades. Por otro lado, si el usuario se encuentra logueado se despliega un logo de un observador de aves y la opción salir para desloguearse. 
En ambos casos se conectan a la base de datos que se accede con una palabra secreta colocada como variable de entorno desde heroku para realizar los request a la base de datos.
El segundo renglón del header tiene un recuadro de búsqueda donde se pueden buscar los tours, un acceso a la lista de Aves, una pagina de contacto, la lista de favoritos de usuarios y un FAQs que se despliega como modal. 
B. Footer
El footer cuenta con el logo, una dirección recreada un numero de teléfono de contacto y un acceso a las redes sociales
2. Contenido según la dirección que el usuario este navegando
A. Home
Es la pagina principal a la que llega el usuario donde se encuentra un carousel con los tours destacados. El administrador puede decidir que tour es considerado “destacado” y cada tour tiene una imagen de un ave asociada que es la que se ubica como la imagen destacada de ese tour (diferente a la imagen del tour en si mismo que muestra el paisaje con el que se encontraría el usuario).
Luego del carousel con los tours destacados se encuentra un carousel con todos los tours que ofrece la empresa de guiado, cada ítem del carousel es clickeable y redirecciona a la información particular de cada tour 
Luego mas abajo se encuentra la galería de imaganes con fotografías de las especies de aves, al hacer un click en alguna de las imágenes pequeñas, la imagen seleccionada se muestra en el casillero de mayor tamaño ubicado a la izquierda y al realizar doble click la imagen se agranda mostrándose en toda la pantalla
B. Aves
En esta pagina se muestran cards con las aves emblemáticas que pueden ser observadas en los tours, de momento se presentan 12, con la idea de ampliar la base de datos según requiera la empresa. 
Cada card contiene el nombre vernáculo del ave, una imagen, el nombre científico, información sobre donde puede ser observada el ave e información sobre si se trata de una especie endémica o no. 
C. Página de Contacto 
La pagina de contacto muestra un formulario donde el usuario completa sus datos, selecciona la parte de la empresa con la que le gustaría contactase y completa el mensaje, al enviar el mensaje se despliega un toggle que muestra si el mensaje fue enviado con éxito o si falto algún dato. 
D. Favoritos
Esta pagina solo se habilita para los usuarios logueados y muestra los tours favoritos que agrego. Como parte del titulo se muestra Favoritos de “Nombre del usuario” que lo toma por context. En esta sección se observa el titulo del o los tours que agrego, una imagen y la opción de eliminar el tour de su lista de favoritos. 
E. FAQs
Es un modal que muestra las preguntas frecuentes y detalla brevemente la filosofía de la empresa en un “acordeon” desplegable con información extra para cada pregunta
F. Carrito de compras
Esta pagina solo es accesible si el usuario se encuentra logueado.
Muestra la bolsa de compras en el margen superior derecho con el numero de tours comprado que va sumando aditivamente de acuerdo al numero que haya seleccionado el usuario. 
Muestra además los 9 tours que ofrece la empresa, con la opción para agregarlo a la bolsa de compras e información breve sobre el tour como la duración en días, el precio por persona y el nombre del tour. 
Al clickear en la bolsa de compras se despliega una breve información donde puedes clickear para finalizar la compra. Esto lleva a la pagina de “Finalizar Compras” 
G. Finalizar compras
Se muestra un formulario para completar con los datos del usuario, y de la tarjeta de crédito/debtio del mismo. (Para poder realizar la compra la tarjeta de crédito no debe estar vencida). Si la compra fue exitosa se muestra un toggle de éxito, en caso contrario se detalla que hubo un error para q el usuario pueda corregir los datos de carga 
H. Pagina de cada tour
En la pagina de cada tour (que se puede acceder desde diversos lugares como el carousel de tours destacados, el carousel con todos los tours o desde el carrito de compras) se muestra el nombre del tour, una imagen con un paisaje que hace referencia al tour y un mapa (utilizando la librería react leaflet) que detalla el punto del retiro del cliente (aeropuerto con un icono de avión) y el punto de observación de aves (parque nacional o área protegida con un icono de binoculares) 
Luego se detalla breve información del área donde se observan las aves, información sobre la disponibilidad de los guias y posibilidades de modificar el tour para personalizarlo de acuerdo a las necesidades del cliente. Asimismo, se aclara adonde llega y se retira al cliente. 
Finalmente se muestra de manera clara el costo del tour, duración en días del tour, y el número de especies de aves probables a registrar en el mismo (todos corresponden a datos verídicos y calculados por la empresa). Se agrega un icono de estrella, para que el usuario pueda agregarlo a su página de favoritos y dos botones para comprar tour o finalizar compra que se habilitan si el usuario esta logueado. 
I. Panel Administrador
Si el Administrador es quien se loguea (se reconoce por una propiedad admin en el modelo de usuario que solo es true en el admin) se habilita la opción “Admin” donde se accede al panel de administración, en este panel de administración están las funciones para crear, modificar, borrar y editar los tours. 
Al crear un nuevo tour se muestra un modal con un formulario donde se solicitan los campos necesarios. El campo más “especial” es en el que se ingresan las coordenadas, donde las mismas deben ser datos de latitud y longitud verdaderos ingresados según el sistema de coordenadas decimales por ejemplo: 
Punto de Retiro:
Latitud: -26.8358
Longitud: -65.1077
Punto de observación:
Latitud: -27.2927
Longitud: -65.8625
Si el tour se creó exitosamente se muestra un toggle de éxito, en caso contrario un toggle de error. 




