
// Your JavaScript code goes here!

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function heartActions() {
  const likeButtons = document.querySelectorAll('.like-glyph');
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          button.classList.toggle('liked');
          if (button.classList.contains('liked')) {
            button.textContent = FULL_HEART;
            button.classList.add('activated-heart')
          } else {
            button.textContent = EMPTY_HEART;
            button.classList.remove('activated-heart')
          }
        })
        .catch(error => {
          const modal = document.getElementById('modal');
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
    heartActions();
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
