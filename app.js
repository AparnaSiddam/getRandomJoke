const btn = document.querySelector('button');
const box = document.querySelector('.box');

      btn.addEventListener('click', function(){
          getJoke();
      });

      function getJoke(){
          let xhr = new XMLHttpRequest();
              xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
              xhr.onreadystatechange = function(){
                  if(this.readyState === 4){
                      if(this.status === 200){
                          box.style.display = 'block';
                          box.textContent = JSON.parse(this.responseText).value;
                      }else{
                          box.style.display = 'block';
                          box.textContent = 'Something went wrong';
                      }
                  }
              }
              xhr.send();
      }

