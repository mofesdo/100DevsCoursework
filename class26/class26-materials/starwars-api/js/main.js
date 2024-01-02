//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let max = 82;
  let min = 1
  let randomChoice =  Math.floor(Math.random() * (max - min + 1) + min);
  const url = 'https://swapi.dev/api/people/'+ randomChoice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}