console.log('Hello world')
const URL = 'https://api.thecatapi.com/v1/images/search'
const body = document.querySelector('body')
const button = document.querySelector('button')
body.style = 'background-color: #000000'
const img = document.querySelector('img1');



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
    const img = document.querySelector('img');
    img.src = data[0].url;
    img.style = 'height: 500px; width: 500px; object-fit: cover;';
  } catch (error) {
    console.log(error);
  }
}

button.onclick = fetchData
fetchData() 
