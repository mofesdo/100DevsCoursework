//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://emojihub.yurace.pro/api/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.htmlCode[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}