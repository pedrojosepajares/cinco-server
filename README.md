# Cinco Server
Servidor para el juego de cartas Cinco. Almacena las posibles barajas de juego y las envía al cliente.

## Cómo empezar
Instrucciones para que el usuario pueda tener el servidor corriendo en su máquina local.

### Prerrequisitos e instalación
La aplicación puede funcionar en cualquier máquina con Linux. Para una distribución Ubuntu, el único requisito es tener instalado NodeJS en el sistema
```sh
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```
## Ejecutando la apliación
Para poner en marcha el servidor es necesario utilizar la siguiente orden

```sh
node cinco-server.js
```
El servidor comienza a escuchar peticiones en el puerto 3000.

Para detener la ejecución del servidor basta con pulsar la combinación de teclas **Ctrl+C**

## Tecnologías
Las tecnologías utilizadas para la construcción de este proyecto son:
* [NodeJS](https://nodejs.org/en/)

## Autores
* Pedro José Pajares Ramírez