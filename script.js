document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☀️";
    toggleButton.classList.add("toggle-theme");
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.innerText = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
    });
});