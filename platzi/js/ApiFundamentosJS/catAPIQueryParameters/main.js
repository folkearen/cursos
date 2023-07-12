console.log('Hello world')
const URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_xCIMnqLZzM6t8iZOPu4esqph9yZ4Y3alevjxaoSJ2S27Ki6N1uHPxjDIpPGLRWkD'
const body = document.querySelector('body')
const button = document.querySelector('button')
body.style = 'background-color: #000000'
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');


// function otroGato() {
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//         // const img = document.querySelector('img');
//         img.src = data[0].url;
//         img.style = 'height: 500px; width: 500px; object-fit: cover;'
// });
    
// }
//button.addEventListener('click', fetchData)
async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    img1.src = data[0].url;
    img1.style = 'height: 500px; width: 500px; object-fit: cover;';
    img2.src = data[1].url;
    img2.style = 'height: 500px; width: 500px; object-fit: cover;';
    img3.src = data[2].url;
    img3.style = 'height: 500px; width: 500px; object-fit: cover;';
  } catch (error) {
    console.log(error);
  }
}

button.onclick = fetchData
fetchData() 
