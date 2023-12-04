document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline li");
  
    function checkTimelineItems() {
      timelineItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (itemTop < windowHeight) {
          item.classList.add("animate-in");
        } else {
          item.classList.remove("animate-in");
        }
      });
    }
  
    window.addEventListener("scroll", checkTimelineItems);
    window.addEventListener("resize", checkTimelineItems);
  
    // Inicialmente, comprueba los elementos visibles en la página cargada.
    checkTimelineItems();
  });
  