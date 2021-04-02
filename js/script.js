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


  $(".map-left-heading").click(function(){
    $('#firemni-herbashare').removeClass("open");
    if ($("#map-left").hasClass("open")) {
        $("#map-left").removeClass("open");
    } else {
        $("#map-left").addClass("open");
    }
  })

  $(".firma-heading").click(function(){
    $('#map-left').removeClass("open");
    if ($("#firemni-herbashare").hasClass("open")) {
        $("#firemni-herbashare").removeClass("open");
    } else {
        $("#firemni-herbashare").addClass("open");
    }
  })
})
