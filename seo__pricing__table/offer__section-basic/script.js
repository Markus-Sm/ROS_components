const squareElements = document.querySelectorAll('.square__offer_subdomain')

squareElements.forEach(function (element) {
	const arrowElement = element.querySelector('.arrow__offer__subdomain')
    const titleSubdoman = element.querySelector('.title__offer_subdomain')
    const imgSubdomain = element.querySelector('.img__offer_subdomain')

	element.addEventListener('mouseenter', function () {
        arrowElement.classList.add("show");
        titleSubdoman.style.color = " rgb(150, 100, 227)";
        imgSubdomain.style.filter = "hue-rotate(15deg)";
	})

	element.addEventListener('mouseleave', function () {
        arrowElement.classList.remove("show");
        titleSubdoman.style.color = "rgb(88, 66, 188)";
        imgSubdomain.style.filter = "none";
	})
})

const squareElementsLink = document.querySelectorAll('.square__offer_subdomain')

squareElements.forEach(function (element) {
	const linkElement = element.querySelector('.square__link-offer')

	element.addEventListener('mouseenter', function () {
		linkElement.style.textDecoration = 'underline';
	})

	element.addEventListener('mouseleave', function () {
		linkElement.style.textDecoration = 'none';
	})
})