$(function() {
  $('input').not('#birthday').keyup(function nameCheck() {
    let input = ($(this).val()).trim()
    let pattern = /^[a-zA-Z.'-_ ]*$/;
    if (pattern.test(input) && input != '') {
      $(this).css('border', '2px solid green')
    } else {
      $(this).css('border', '3px solid red')
    }
  });
  $('#birthday').keyup(function mailCheck() {
    let input = ($(this).val()).trim();
    let pattern = /^([0-9]{2})+\/([0-9]{2})+\/([0-9]{2,4})$/;
    if (pattern.test(input) && input != ''){
      $(this).css('border', '2px solid green')
    } else {
      $(this).css('border', '3px solid red')
    }
  });
  $('button').click(function validate(){
    console.log($(':input').css('border-color'))
    if ($(':input').css('border-color') == 'rgb(255, 0, 0)'){
      alert('Veuillez bien remplir tous les champs')
    }
  });
});
