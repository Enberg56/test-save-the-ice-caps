const details = document.querySelector('.container-details')
const physicaldetails = document.querySelector('.physical-details')
const digitaldetails = document.querySelector('.digital-details')
const donationtext = document.querySelector('.donation_text')
const inputareas = document.querySelectorAll('input')
let frequenzy = 'Monthly donation of '

physicaldetails.classList.add('hidden')
digitaldetails.classList.add('hidden')


function handleClick(e) {
  const newsletterType = e.target.dataset.type
  const donationFrequency = e.target.name
  let inputValue = document.querySelector('[name="donation_amount"]').value

console.log(frequenzy)
  if (newsletterType == 'physical'){
    digitaldetails.classList.toggle('hidden');
};
  if (newsletterType == 'digital'){
    physicaldetails.classList.toggle('hidden');
};
  if (donationFrequency == 'donation_frequency' ) {


    if (e.target.id=='monthly_frequency') {
       frequenzy ='Monthly donation of '
      } else {
       frequenzy ='One time donation of '
    }

  }
  donationtext.innerHTML=frequenzy + inputValue
}

inputareas.forEach((input) =>
input.addEventListener('click', handleClick)
)