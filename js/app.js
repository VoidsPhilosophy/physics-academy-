/* js/app.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Physics Universe Initialized");
    
    // 1. Initialize Mobile Navigation
    initMobileMenu();
    
    // 2. Load Dynamic Content if on Home Page
    const lessonContainer = document.getElementById('recent-lessons-container');
    if (lessonContainer) {
        loadLessons();
    }
});

/**
 * Handles the mobile hamburger menu toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle visibility for mobile
            navLinks.style.display = isExpanded ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'var(--bg-primary)';
            navLinks.style.padding = '20px';
        });
    }
}

/**
 * Fetches data from your local API folder
 */
async function loadLessons() {
    const grid = document.getElementById('dynamic-grid');
    
    try {
        const response = await fetch('./api/lessons.json');
        const data = await response.json();
        
        // Clear loading text
        grid.innerHTML = '';
        
        // Populate the grid
        data.data.recent_lessons.forEach(lesson => {
            const card = document.createElement('article');
            card.className = 'card feature-card';
            card.innerHTML = `
                <h3>${lesson.title}</h3>
                <p>Category: ${lesson.category}</p>
                <a href="${lesson.url}" class="card-link">Start Lesson &rarr;</a>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading lessons:", error);
        grid.innerHTML = '<p>Unable to load lessons at this time.</p>';
    }
}
