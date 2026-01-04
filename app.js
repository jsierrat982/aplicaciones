// Configuración de las aplicaciones - ACTUALIZADO
// Se han eliminado: Ahorro, Calculadora y Control Pagos
const appsConfig = [
    {
        name: "Prudencia Game",
        url: "https://jsierrat982.github.io/prudencia-game/",
        image: "./assets/prudencia.png", 
        alt: "Juego de Prudencia"
    },
    {
        name: "King",
        url: "https://jsierrat982.github.io/king/",
        image: "./assets/king.png",   
        alt: "Interfaz de la aplicación King"
    },
    {
        name: "Bingo",
        url: "https://jsierrat982.github.io/bingo/",
        image: "./assets/bingo.png",   
        alt: "Juego de Bingo"
    }
];

// Función constructora de tarjetas (Arrow Function)
const createCard = (app) => {
    // Usamos 'article' semántico para cada item independiente
    const article = document.createElement('article');
    article.className = 'app-card';

    // Construcción del HTML interno usando Template Literals
    // Nota: El manejo de errores en la imagen asegura que no se rompa el layout si falta un asset
    article.innerHTML = `
        <a href="${app.url}" class="card-link" target="_blank" rel="noopener noreferrer" aria-label="Ir a la aplicación ${app.name}">
            <img src="${app.image}" alt="${app.alt}" class="card-image" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=${encodeURIComponent(app.name)}'">
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
        // Limpiamos el contenedor por seguridad antes de renderizar
        gridContainer.innerHTML = ''; 

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
