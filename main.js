const toggleBtn = document.getElementById("theme-toggle");
const htmlSelector = document.querySelector('html');

// Get the stored theme from local storage and apply it
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    htmlSelector.setAttribute('data-theme', storedTheme);
}

toggleBtn.addEventListener('click', function () {
    const currentTheme = htmlSelector.getAttribute('data-theme');
    console.log(currentTheme);

    let newTheme;
    if (!currentTheme || currentTheme === 'light') {
        newTheme = 'dark';
    } else {
        newTheme = 'light';
    }

    // Update the theme on the html element
    htmlSelector.setAttribute('data-theme', newTheme);

    // Save the new theme in local storage
    localStorage.setItem('theme', newTheme);
});

