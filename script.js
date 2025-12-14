const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('site-theme');

if (savedTheme === 'light')
{
    body.classList.add('light-theme');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () =>
{
    if (themeToggle.checked)
    {
        body.classList.add('light-theme');
        localStorage.setItem('site-theme', 'light');
    }
    else
    {
        body.classList.remove('light-theme');
        localStorage.setItem('site-theme', 'dark');
    }
});