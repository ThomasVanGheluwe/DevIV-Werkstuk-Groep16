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


async function init(){
        //Fetch the data
        await fetchData();
        //Sort the data
        bubbleSort(objectData);
}

/************************************************************/

//ALGORITME

const bubbleSort = (unsorted) => {
    let isSorted = false;
    let length = unsorted.length - 1;
    while(!isSorted){
        isSorted = true;

        for(let i = 0; i < length; i++){
            if(unsorted[i].type > unsorted[i + 1].type){
                let swap = unsorted[i].type;
                unsorted[i].type = unsorted[i + 1].type;
                unsorted[i + 1].type = swap;
                isSorted = false;
            }
        }
    }
    return unsorted;
}

/************************************************************/