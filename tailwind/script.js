document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
    });
});