//Navbar
// NAVBAR++++++++++++
           // Mobile menu toggle
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.querySelector(".nav-links");
      
      // Handle dropdowns in mobile view
      const dropdowns = document.querySelectorAll(".dropdown");
      
      dropdowns.forEach(dropdown => {
        const selected = dropdown.querySelector(".selected");
        
        selected.addEventListener("click", (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle("active");
          }
        });
      });
      
      // Close dropdowns when clicking outside
      document.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
              dropdown.classList.remove("active");
            }
          });
          
          // Also close the mobile menu if clicking outside
          if (!e.target.closest(".nav-container") && menuToggle.checked) {
            menuToggle.checked = false;
            navLinks.style.display = "none";
          }
        }
      });

const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.card');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;

        cards.forEach(card => {
          card.classList.remove('active');
          if (card.id === target) {
            card.classList.add('active');
          }
        });
      });
    });

    // %%%%%%%%%%%%%    FAQ     %%%%%%%%%%%%
         document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('.faq-icon');
        icon.textContent = item.classList.contains('active') ? '-' : '+';
      });
    });