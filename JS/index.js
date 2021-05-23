let objectData = [];

window.onload = () => init();

async function fetchData(){
    await fetch('https://dev4werkstukapi.herokuapp.com/')
    .then(response => {
        if(!response.ok){
          throw Error(response.statusText);
          }

          return response.json();
      })
    .then(data => objectData = data);
}