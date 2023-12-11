# Aplicación de Búsqueda de Cartas de Yu-Gi-Oh

## Visión General

Esta aplicación web utiliza la API de Yu-Gi-Oh para proporcionar una interfaz amigable para buscar y filtrar cartas de Yu-Gi-Oh. El proyecto está construido con JavaScript y presenta componentes modulares para obtener cartas, configurar paginación y aplicar filtros según varios criterios.

## Tabla de Contenidos

- [Uso](#uso)
- [Filtros](#filtros)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Fuente de la API](#fuente-de-la-api)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Uso

Visita la aplicación alojada en GitHub Pages: [Búsqueda de Cartas de Yu-Gi-Oh](https://francorossids.github.io/Proyecto-Api-Yugioh/)

## Filtros

La aplicación admite una variedad de filtros para refinar tu búsqueda de cartas:

- **Filtros Generales**
  - Nombre de la Carta
  - ID de la Carta

- **Filtros de Monstruos**
  - Atributo
  - Tipo
  - Clase
  - Nivel

- **Filtros de Magias**
  - Tipo de Magia

- **Filtros de Trampas**
  - Tipo de Trampa

Para restablecer todos los filtros y comenzar una nueva búsqueda, haz clic en el botón "Reset".

## Estructura del Proyecto

El proyecto está organizado en varios módulos:

- **main.mjs**: El script principal que integra diferentes módulos y maneja las interacciones del usuario.
- **getCards.mjs**: Módulo para obtener cartas de Yu-Gi-Oh desde la API.
- **pagination.mjs**: Módulo para configurar y gestionar la paginación.
- **typeCards.mjs**: Módulo para aplicar filtros basados en tipos de cartas.

## Fuente de la API

La API de Yu-Gi-Oh utilizada en este proyecto es proporcionada por [YGOPRODeck]([https://ygoprodeck.com/api-guide/](https://francorossids.github.io/Proyecto-Api-Yugioh/)).

## Contribución

¡Las contribuciones a este proyecto son bienvenidas! Si tienes ideas para mejorar o encuentras problemas, no dudes en abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
