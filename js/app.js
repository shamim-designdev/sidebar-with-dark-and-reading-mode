document.addEventListener("DOMContentLoaded", function() {
    const lightDarkToggle = document.getElementById("light-dark-toggle");
    const readingModeToggle = document.getElementById("reading-mode-toggle");
    const body = document.body;
    const sidebar = document.getElementById("sidebar");
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");
    const cancelIcon = document.getElementById("cancel-icon");

    // Toggle Light/Dark Mode
    lightDarkToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        body.classList.remove("reading-mode");
        updateLightDarkIcon();
    });

    // Toggle Reading Mode
    readingModeToggle.addEventListener("click", function() {
        body.classList.toggle("reading-mode");
        body.classList.remove("dark-mode");
        updateLightDarkIcon();
    });

    // Update the Light/Dark Icon
    function updateLightDarkIcon() {
        if (body.classList.contains("dark-mode")) {
            lightDarkToggle.textContent = "🌙";
        } else {
            lightDarkToggle.textContent = "🌞";
        }
    }

    // Open Sidebar
    mobileMenuIcon.addEventListener("click", function() {
        sidebar.classList.add("open");
    });

    // Close Sidebar
    cancelIcon.addEventListener("click", function() {
        sidebar.classList.remove("open");
    });

    // Close Sidebar on outside click
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });

    // Prevent sidebar closing when clicking inside the sidebar
    sidebar.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
