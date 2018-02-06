$('document').ready(function(){

  console.log("Sanity check");

  //Add event listener to form
  $('#comment-form').on('submit', function(e){
    e.preventDefault();
    console.log("In event listener");
    $('form input, form textarea').each(function(){
      if($(this).val() === ""){
        $(this).addClass("error");
        $(this).siblings(".error-message").fadeIn();
        return;
      }
       $(this).removeClass('error');
			 $(this).siblings('.error-message').hide();
    });
  });
});
