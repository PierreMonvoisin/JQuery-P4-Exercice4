$(function() {
  // valide les inputs textes
  $('input').not('#birthday').keyup(function nameCheck() {
    let input = ($(this).val()).trim()
    let pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð.'-_ ]*$/;
    if (pattern.test(input) && input != '') {
      $(this).css('border', '2px solid green')
    } else {
      $(this).css('border', '3px solid red')
    }
  });
  //valide l'input date de naissance
  $('#birthday').keyup(function dateCheck() {
    let input = ($(this).val()).trim();
    let pattern = /^([0-9]{2})+\/([0-9]{2})+\/([0-9]{2,4})$/;
    if (pattern.test(input) && input != ''){
      $(this).css('border', '2px solid green')
    } else {
      $(this).css('border', '3px solid red')
    }
  });
  // Vérifie si un input n'est pas bon, si non, affiche le texte
  $('button').click(function validate(){
    let colors = [
      $('#lName').css('border-color'),$('#fName').css('border-color'),$('#birthday').css('border-color'),$('#birthplace').css('border-color'),$('#job').css('border-color'),$('#workplace').css('border-color')
    ]
    console.log(colors)
    if (colors.includes("rgb(255, 0, 0)")){
      alert('Merci de bien rentrer vos informations')
    } else {
      alert($('#fName').val() + ' ' + ($('#lName').val()).toUpperCase() + ', né le ' + $('#birthday').val() + ' à ' + $('#birthplace').val() + ', actuellement ' + $('#job').val() + ' à ' + $('#workplace').val())
    }
  });
});
