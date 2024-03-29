document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const colorModeKey = 'colorMode';

    const savedColorMode = localStorage.getItem(colorModeKey);
    if (savedColorMode) {
        changeColorMode(savedColorMode);
    }

    document.getElementById("original").addEventListener("click", () => {
        changeColorMode("original-mode");
    });

    document.getElementById("dark").addEventListener("click", () => {
        changeColorMode("dark-mode");
    });

    document.getElementById("happy").addEventListener("click", () => {
        changeColorMode("happy-mode");
    });

    document.getElementById("minimal").addEventListener("click", () => {
        changeColorMode("minimal-mode");
    });

    function changeColorMode(newMode) {
        body.classList.remove("original-mode", "dark-mode", "happy-mode", "minimal-mode");
        body.classList.add(newMode);

        localStorage.setItem(colorModeKey, newMode);
    }
});
