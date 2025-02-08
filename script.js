// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('content');
    const displayContent = document.getElementById('displayContent');
    const saveBtn = document.getElementById('saveBtn');
    const saveStatus = document.getElementById('saveStatus');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Load saved data
    const savedTextareaContent = localStorage.getItem('textareaContent');
    const savedDisplayContent = localStorage.getItem('displayContent');
    const savedTheme = localStorage.getItem('theme') || 'light-theme';

    // Initialize UI
    body.className = savedTheme;
    themeToggle.textContent = savedTheme === 'dark-theme' ? '🌞' : '🌙';
    textarea.value = savedTextareaContent || '';
    displayContent.textContent = savedDisplayContent || '';

    // Auto-save textarea content
    textarea.addEventListener('input', () => {
        localStorage.setItem('textareaContent', textarea.value);
    });

    // Save & Show button
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentText = textarea.value;
        localStorage.setItem('displayContent', currentText);
        displayContent.textContent = currentText;
        showStatus('Content saved and displayed!');
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark-theme' : 'light-theme');
        themeToggle.textContent = isDark ? '🌞' : '🌙';
    });

    // Show save status
    function showStatus(message) {
        saveStatus.textContent = `${message} (${new Date().toLocaleTimeString()})`;
        saveStatus.style.opacity = 1;
        setTimeout(() => {
            saveStatus.style.opacity = 0;
        }, 2000);
    }
});