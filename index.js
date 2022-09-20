const details = document.querySelector('.container-details')
const physicaldetails = document.querySelector('.physical-details')
const digitaldetails = document.querySelector('.digital-details')
const inputareas = document.querySelectorAll('input')

physicaldetails.classList.add('hidden')
digitaldetails.classList.add('hidden')


function handleClick(e) {
  const newsletter_type = e.target.dataset.type

  if (newsletter_type == 'physical'){
    digitaldetails.classList.toggle('hidden');
};
  if (newsletter_type == 'digital'){
    physicaldetails.classList.toggle('hidden');
};
}

inputareas.forEach((input) =>
input.addEventListener('click', handleClick)
)