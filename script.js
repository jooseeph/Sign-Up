const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.green-bg button');

signUpBtn.addEventListener('click', 
() => {
    console.log('signUp')
  container.classList.toggle('change');
  
});
