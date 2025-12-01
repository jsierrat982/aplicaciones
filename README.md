# 🚀 Dashboard de Aplicaciones

> Un portal centralizado y responsivo para acceder al portafolio de aplicaciones web y herramientas desarrolladas.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Activo-success?style=flat-square)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=flat-square)

## 📖 Descripción.

Este repositorio aloja el código fuente de una **Single Page Application (SPA)** ligera que actúa como centro de mando ("Dashboard"). Su objetivo es organizar y presentar de manera visual y accesible las diversas herramientas y juegos desarrollados, facilitando el acceso rápido a cada despliegue.

El diseño sigue una metodología **Mobile-First** y utiliza **CSS Grid** para adaptarse fluidamente a cualquier tamaño de pantalla.

---

## ✨ Características Técnicas

* **HTML5 Semántico:** Uso de etiquetas estructurales (`main`, `article`, `header`) y atributos de accesibilidad (`aria-label`, `alt`).
* **CSS3 Moderno:**
    * Diseño responsivo sin media queries excesivas gracias a `grid-template-columns: repeat(auto-fit, ...)`.
    * Uso de **CSS Variables** para facilitar la tematización y el mantenimiento.
    * Efectos de *hover* y transiciones suaves para mejorar la experiencia de usuario (UX).
* **JavaScript (ES6+):**
    * Renderizado dinámico del DOM mediante `DocumentFragment` para optimizar el rendimiento.
    * Configuración basada en objetos (JSON-like structure) para agregar nuevas aplicaciones fácilmente sin tocar el HTML.
    * Carga diferida de imágenes (`lazy loading`) para optimizar el ancho de banda.

---

## 🛠️ Tecnologías Utilizadas

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 📂 Estructura del Proyecto

```text
aplicaciones/
├── index.html      # Estructura semántica base
├── styles.css      # Estilos, variables y grid layout
├── app.js          # Lógica de renderizado y datos de las apps
└── README.md       # Documentación del proyecto
