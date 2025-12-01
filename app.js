// Configuración de las aplicaciones
const appsConfig = [
    {
        name: "Ahorro",
        url: "https://jsierrat982.github.io/ahorro/",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Ahorro", // Reemplazar con captura real
        alt: "Interfaz de la aplicación de Ahorro"
    },
    {
        name: "King",
        url: "https://jsierrat982.github.io/king/",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=King",
        alt: "Interfaz de la aplicación King"
    },
    {
        name: "Prudencia Game",
        url: "https://jsierrat982.github.io/prudencia-game/",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Prudencia",
        alt: "Juego de Prudencia"
    },
    {
        name: "Calculadora",
        url: "https://jsierrat982.github.io/calculadora/",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Calculadora",
        alt: "Herramienta de Calculadora"
    },
    {
        name: "Control Pagos",
        url: "https://jsierrat982.github.io/control-pagos/",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Control+Pagos",
        alt: "Sistema de control de pagos"
    },
    {
        name: "Bingo",
        url: "https://jsierrat982.github.io/bingo/",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Bingo",
        alt: "Juego de Bingo"
    }
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