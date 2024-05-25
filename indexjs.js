document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        const mainContent = document.querySelector('.main-content');
        
        if (navbar.classList.contains('expanded')) {
            navbar.classList.remove('expanded');
            mainContent.classList.remove('shifted');
        } else {
            navbar.classList.add('expanded');
            mainContent.classList.add('shifted');
        }
    });
});