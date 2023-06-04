// function toggleContainer() {
//     const wrapperContainer = document.querySelector(".wrapper__container-seo");
//     const expandButton = document.querySelector(".expandButton_seo");

//     if (wrapperContainer.clientHeight > 765) {
//         wrapperContainer.style.height = "765px";
//         expandButton.textContent = "Zobacz cały plan ↓";
//     } else {
//         wrapperContainer.style.height = "1400px";
//         expandButton.textContent = "Zwiń ↑";
//     }
// }

function toggleContainer() {
	const wrapperContainer = document.querySelector('.wrapper__container-seo')
	const expandButton = document.querySelector('.expandButton_seo')

	if (wrapperContainer.clientHeight > 765) {
		wrapperContainer.style.height = '765px'
		wrapperContainer.classList.remove('expanded')
		expandButton.textContent = 'Zobacz cały plan ↓'
	} else {
		wrapperContainer.style.height = '1420px'
		wrapperContainer.classList.add('expanded')
		expandButton.textContent = 'Zwiń ↑'
	}
}

/* scroll top btn */


window.addEventListener("scroll", function() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.getElementById("scrollToTop").addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});