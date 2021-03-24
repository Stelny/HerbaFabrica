$(document).ready(function(){



  $(".toggle-drop").click(function() {
    var data = $(this).attr("data-id");
    console.log(data);
    var dropdown = $("#"+data);
    var hasClass = dropdown.hasClass("open");
    if (hasClass) {
       dropdown.removeClass("open");
    } else {
      dropdown.addClass("open");
    }


  })
})
