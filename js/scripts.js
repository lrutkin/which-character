$(document).ready(function(){
  $("#character").submit(function(event){
    event.preventDefault();

      let qOneInput=parseInt($("#color").val());
      let qTwoInput=parseInt($("#season").val());
      let qThreeInput=parseInt($("#pet").val());

      $("#color").text(qOneInput);
      $("#season").text(qTwoInput);
      $("#pet").text(qThreeInput);

      let final=qOneInput+qTwoInput+qThreeInput
        if (final <=3) {
          $("#result1").show();
        } else if (final <7){
          $("#result2").show();
        } else if (final <10){
          $("#result3").show();
        } else 
          $("#result4").show();

 
          

  });
});