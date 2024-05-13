function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Researcher", "Teacher", "Problem Solver", "Critical Thinker"],
      typeSpeed: 150,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Researcher", "Teacher", "Problem Solver", "Critical Thinker"],
      typeSpeed: 150,
      backSpeed: 60,
      loop: true
  });

  // Scroll navbar
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('desktop-nav');
    if (window.scrollY > 0) { // Change 0 to the desired scroll position
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });
  
