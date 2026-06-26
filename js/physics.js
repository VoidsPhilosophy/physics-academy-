/* js/physics.js */

const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all
        tabs.forEach(t => t.classList.remove('active'));
        // Add to clicked
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-category');
        renderPhysicsContent(category);
    });
});

function renderPhysicsContent(category) {
    const container = document.getElementById('physics-content');
    // Here you would fetch from api/lessons.json 
    // and filter based on the 'category' variable.
    container.innerHTML = `<p>Displaying modules for: ${category}</p>`;
}
