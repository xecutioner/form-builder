$(document).ready(function (){
  $('.submitter').click(function(event){
    date_field = $('input[name="output[technician_date]"]');
    if (check_nil() && checkDate(date_field)){
      $('form').submit();
    }  
  });

  function checkDate(field){
    var allowBlank = true;
    var minYear = 1950;
    var maxYear = (new Date()).getFullYear();
    var errorMsg = "";
    // regular expression to match required date format
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if(field.val() != '') { if(regs = field.val().match(re)) {
      if(regs[2] < 1 || regs[2] > 31) {
        errorMsg = "Invalid value for day: " + regs[2];
      }
      else if(regs[1] < 1 || regs[1] > 12) {
        errorMsg = "Invalid value for month: " + regs[1];
      }
      else if(regs[3] < minYear || regs[3] > maxYear) {
        errorMsg = "Invalid value for year: " + regs[3] + " - must be between " + minYear + " and " + maxYear;
      }
    }
    else {
      if (field.val()!="---"){errorMsg = "Invalid date format: " + field.val();}
    }
  }
  else if(allowBlank) {
    if(field.val()!="---"){errorMsg = "Empty date not allowed!";}
  }
  if(errorMsg != "") {
    alert(errorMsg);
    field.focus();
    return false;
  }
  return true;
}

  function check_nil(){
    var errorMsg = "";
    var signature = $("input[name='output[technician_signature]']:checked").val();
    var inputs = $("input[type=text]");
    inputs.each(function(i,v){
      if (v['value'] == ""){
        errorMsg = "Required Field is not filled, If the information in image is not clear or absent then please click the cross icon.";
        field = v;
      }
    });

    if (signature == undefined){
      errorMsg = "Required Field signature is not selected.";
    }
    if (errorMsg != ""){
      alert(errorMsg);
      if (field){field.focus();}
      return false;
    }
    return true;
  }

  $(".input-xlarge").live('click',function() {
    if($(this).attr('value') == "---" || $(this).attr('value') == "XXX"){$(this).attr('value',"");}
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
  
});