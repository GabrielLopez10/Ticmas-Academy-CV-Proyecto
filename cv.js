function showInfo() {
    var x = document.getElementById("info");
    var expandBtn = document.getElementById("expandBtn");
    if (x.style.display === "none") {
      x.style.display = "block";
      expandBtn.textContent = 'Ocultar Información';
    } else {
      x.style.display = "none"; 
      expandBtn.textContent = 'Ver Información';
    }
  }

  function showDescription() {
    var x = document.getElementById("description");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });