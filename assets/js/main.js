// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // Implement search functionality here
        console.log('Searching for:', this.value);
    }
});

// Newsletter form
const emailInput = document.querySelector('input[type="email"]');
const subscribeButton = emailInput?.nextElementSibling;

if (subscribeButton) {
    subscribeButton.addEventListener('click', function () {
        const email = emailInput.value;
        if (email && email.includes('@')) {
            alert('Bedankt voor je inschrijving!');
            emailInput.value = '';
        } else {
            alert('Voer een geldig e-mailadres in');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    function openMenu() {
        mobileMenu.classList.remove("hidden");
    }

    function closeMenuFn() {
        mobileMenu.classList.add("hidden");
    }

    menuToggle.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeMenuFn);

})



// Open Sidebar and add 'sidebar-open' class when filterButton is clicked
document.getElementById('filterButton')?.addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('sidebar-open');
    document.getElementById('sidebar').classList.remove('hidden');
});

// Close Sidebar and remove 'sidebar-open' class when closeSidebar is clicked
document.getElementById('closeSidebar')?.addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('sidebar-open');
    document.getElementById('sidebar').classList.add('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = [
        { button: "aanbodToggle", menu: "aanbodMenu" },
        { button: "doelgroepToggle", menu: "doelgroepMenu" }
    ];

    dropdowns.forEach(({ button, menu }) => {
        const btn = document.getElementById(button);
        const dropdown = document.getElementById(menu);

        function showDropdown() {
            dropdown.classList.remove("hidden");
            btn.classList.add("bg-white", "text-black");
        }

        function hideDropdown() {
            dropdown.classList.add("hidden");
            btn.classList.remove("bg-white", "text-black");
        }

        // Show dropdown on mouse enter
        btn.addEventListener("mouseenter", showDropdown);
        dropdown.addEventListener("mouseenter", showDropdown);

        // Hide dropdown on mouse leave
        btn.addEventListener("mouseleave", hideDropdown);
        dropdown.addEventListener("mouseleave", hideDropdown);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item a');

    // Get the current URL path
    const currentPath = window.location.pathname;

    navItems.forEach(item => {
        // Extract the href attribute
        const itemPath = item.getAttribute('href');

        // Compare the href with the current path
        if (itemPath === currentPath) {
            item.classList.add('bg-gray-200');
        } else {
            item.classList.remove('bg-gray-200');
        }
    });
});
