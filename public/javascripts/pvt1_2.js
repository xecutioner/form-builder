$(document).ready(function(){

  $('.submitter').click(function(event){
     $('form').submit();
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
    $('.icon-remove').siblings('input').attr('value',"---");
  });
  
});