$(document).keypress("a", function(e){
  if(e.ctrlKey){
    $("#touch-text").html("you found an easter egg maybe?")
    $(".jumbotron, .touch-icon").attr("style", "color: red !important;")
    $(".touch-list").append(
      '<a href="http://wa.me/6289601012200" target="_blank" class="touch-icon"><i class="fa fa-2x fa-whatsapp"></i></a>'
    )
  }
})
