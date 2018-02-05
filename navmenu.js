$(document).ready(function(){

  $(this).scrollTop(0);

  /************************ to highlight on which section you are ****************/



  /********************* highlight active link when scrolled **************************/

   


  /**************** to change from trans to black when scrolled *************/

    console.log( $(document).scrollTop() );

    $(document).scroll(function(){
      if( $(document).scrollTop() > 95 )
      {
        $('.nav-transform').addClass("notonhomepage");
        $('.navbar-brand').removeClass("hideme");  
        
      }
      else{
        $('.nav-transform').removeClass("notonhomepage");
        $('.navbar-brand').addClass("hideme");
        
      }

    });
  /******************** hide n show nav *************************/

  

  /************************* menu scales when scrolled ****************************/
    
  });

  function myFunction() {
    $('.navbar-brand').addClass("hideme");
    $("barChart__barFill").css("height","24px");
    $("barChart__barFill div").css("height", "24px");
}