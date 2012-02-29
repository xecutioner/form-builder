$(document).ready(function (){
  $('.submitter').click(function(event){
    activation_time = $('#activation_time');
    reading_time = $('#reading_time');
    if(check_format(activation_time)&& check_format(reading_time)){
      $('form').submit();
    }
  });
  
  $(".input-xlarge").live('click',function() {
    if($(this).attr('value')=="---" || $(this).attr('value')=="XXX"){$(this).attr('value',"");}
  });

  $(".controls").live('mouseenter',function() {
    $(this).find("i").show();
  });
  $(".controls").live('mouseleave',function() {
    $(this).find("i").hide();
  });
  $('.icon-remove').live('click',function(){
    $(this).siblings('input').first().attr('value',"---");
  });
  
  function check_format(field){
    
    re = /^[0-2][0-3]:[0-5][0-9]$/;
    var allowblank = true;
    var errorMsg="";
    
    if (!field.val().match(re) && field.val() !="---"){
      if (field.val() !=""){
        errorMsg = "Invalid format for time: "+ field.val();
      }
    }
    if(errorMsg != "") {
      alert(errorMsg);
      field.focus();
      return false;
    }
    return true;
  }
  
  
});