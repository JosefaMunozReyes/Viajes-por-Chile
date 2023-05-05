$(document).ready(function(){
    $("a").on('click', function(event){
        if (this.hash !== ""){
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },800, function(){
                window.location.hash = hash;
            })
        }
    }) 
    $("#flip").click(function(){
        $("#text").hide("slow");
      });   
      $("#flip").dblclick(function(){
        $("#text").show("slow");
      }); 
      /*segundo div en destacados*/
      $("#flip1").click(function(){
        $("#text1").hide("slow");
      });   
      $("#flip1").dblclick(function(){
        $("#text1").show("slow");
      }); 
      /* tercer div en destacados*/
      $("#flip2").click(function(){
        $("#text2").hide("slow");
      });   
      $("#flip2").dblclick(function(){
        $("#text2").show("slow");
      }); 
       
});