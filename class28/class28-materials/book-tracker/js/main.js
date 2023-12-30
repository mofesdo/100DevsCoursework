//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
localStorage.clear();


function getFetch(){
  const isbn = document.querySelector('input').value
  console.log(isbn)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        if(!localStorage.getItem("books")){
          let addBook = localStorage.setItem("books", data.title)
        }
        else{
          let addBook = localStorage.getItem("books") + "; " + data.title
          localStorage.setItem("books", addBook);
        }
        document.querySelector(".books").innerHTML = localStorage.getItem("books");

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

