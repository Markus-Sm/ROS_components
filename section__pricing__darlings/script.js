const text__services = document.querySelectorAll('.square__services-title');
const imgDarlings = document.querySelectorAll('.square__services-darlings img');
const square__servicesDarlings = document.querySelectorAll(".square__services-darlings");

square__servicesDarlings.forEach((square, index) => {
  square.addEventListener('mouseover', () => {
    text__services[index].style.color = '#f78da7';
    imgDarlings[index].style.filter = 'grayscale(0%)';
  });

  square.addEventListener('mouseout', () => {
    text__services[index].style.color = ''; // Przywrócenie domyślnego koloru
    imgDarlings[index].style.filter = ''; // Przywrócenie domyślnego filtra
  });
});