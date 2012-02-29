$(document).ready(function (){
  $('.submitter').click(function(event){
    activation_time = $('#activation_time');
    reading_time = $('#reading_time');
    if(check_format(activation_time) && check_format(reading_time) && check_nil()){
      $('form').submit();
    }
  });

  function check_nil(){
    var errorMsg = "";
    var field = "";
    var technician = $("input[name='output[technician]']:checked").val();
    var devise = $("input[name='output[device]']:checked").val();
    var wait = $("input[name='output[fifteen_minute_wait]']:checked").val();
    var text_inputs = $("input[type=text]");

    if (technician == undefined){
      errorMsg = "Required Field technician is not selected.";
    }
    else if (devise == undefined){
      errorMsg = "Required Field devise is not selected.";
    }
    else if (wait == undefined){
      errorMsg = "Required Field 15 minute wait is not selected.";
    }

    if (errorMsg != ""){
      alert(errorMsg);
      if (field){field.focus();}
      return false;
    }
    return true;
  }

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