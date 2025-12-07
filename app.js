// Configuración de las aplicaciones
const appsConfig = [
       {
        name: "King",
        url: "https://jsierrat982.github.io/king/",
        image: "./assets/king.png",   // <--- CAMBIO AQUÍ
        alt: "Interfaz de la aplicación King"
    },
    {
        name: "Prudencia Game",
        url: "https://jsierrat982.github.io/prudencia-game/",
        image: "./assets/prudencia.png", // <--- CAMBIO AQUÍ
        alt: "Juego de Prudencia"
    },
    {
        name: "Bingo",
        url: "https://jsierrat982.github.io/bingo/",
        image: "./assets/bingo.png",   // <--- CAMBIO AQUÍ
        alt: "Juego de Bingo"
    }
    {
        name: "Calculadora",
        url: "https://jsierrat982.github.io/calculadora/",
        image: "./assets/calculadora.png", // <--- CAMBIO AQUÍ
        alt: "Herramienta de Calculadora"
    },
    {
        name: "Control Pagos",
        url: "https://jsierrat982.github.io/control-pagos/",
        image: "./assets/pagos.png",   // <--- CAMBIO AQUÍ
        alt: "Sistema de control de pagos"
    },
     {
        name: "Ahorro",
        url: "https://jsierrat982.github.io/ahorro/",
        image: "./assets/ahorro.png", // <--- CAMBIO AQUÍ
        alt: "Interfaz de la aplicación de Ahorro"
    },
];

// Función constructora de tarjetas (Arrow Function)
const createCard = (app) => {
    // Usamos 'article' semántico para cada item independiente
    const article = document.createElement('article');
    article.className = 'app-card';

    // Construcción del HTML interno usando Template Literals
    // Nota: Usamos <a> envolvente para mejorar el área de clic en UX móvil
    article.innerHTML = `
        <a href="${app.url}" class="card-link" target="_blank" rel="noopener noreferrer" aria-label="Ir a la aplicación ${app.name}">
            <img src="${app.image}" alt="${app.alt}" class="card-image" loading="lazy">
            <div class="card-content">
                <h3 class="card-title">${app.name}</h3>
                <span class="card-cta">Abrir Aplicación &rarr;</span>
            </div>
        </a>
    `;
    return article;
};

// Renderizado asíncrono
const renderDashboard = async () => {
    const gridContainer = document.getElementById('app-grid');
    
    // Fragmento de documento para minimizar reflujos (Repaints) en el DOM
    const fragment = document.createDocumentFragment();

    try {
        appsConfig.forEach(app => {
            const card = createCard(app);
            fragment.appendChild(card);
        });
        
        gridContainer.appendChild(fragment);
    } catch (error) {
        console.error("Error al renderizar el dashboard:", error);
        gridContainer.innerHTML = '<p>Lo sentimos, hubo un error cargando las aplicaciones.</p>';
    }
};

// Inicialización cuando el DOM esté listo

document.addEventListener('DOMContentLoaded', renderDashboard);

