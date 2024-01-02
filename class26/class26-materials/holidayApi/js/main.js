//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const year = document.querySelector('.year').value
  const countryCode = document.querySelector('.country').value
  const url = `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        for(let i = 0; i < data.length; i++){
          document.querySelector('h3').innerText += data[i].date + " : " + data[i].localName + "\n"
          
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}