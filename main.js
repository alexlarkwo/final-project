var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function submitDetails(){

  let submit = document.getElementById('submitButton').value;
  console.log(submit)

  alert("Details submitted");

}
