const details = document.querySelector('.container-details')
const physicaldetails = document.querySelector('.physical-details')
const inputareas = document.querySelectorAll('input')

function handleClick(event) {
  const checkmark = event.target;
  if (checkmark.dataset.type = 'digital'){
    physicaldetails.classList.remove('hidden')
  }
  if (checkmark.dataset.type = 'physical'){
    physicaldetails.classList.remove('hidden')
  }
  else{
    details.classList.add('hidden');

  }
  console.log(checkmark.dataset.type)
};

inputareas.forEach((input) =>
input.addEventListener('click', handleClick)
);