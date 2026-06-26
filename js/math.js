/* js/math.js */

const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-category');
        // Logic to load specific math modules
        renderMathContent(category);
    });
});

function renderMathContent(category) {
    const container = document.getElementById('math-content');
    container.innerHTML = `<p style="text-align:center;">Loading ${category} modules...</p>`;
    // Add fetch() logic here later to pull from api/lessons.json
}
