    // scroll top button ============================
    let mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    
    }
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    // ============= menu icon ===============
    const menuicon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    menuicon.addEventListener("click", function () {
      menuicon.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    
    $(document).ready(function () {
      $().UItoTop({ easingType: "easeOutQuart" });
    });

    // ==========================================
   