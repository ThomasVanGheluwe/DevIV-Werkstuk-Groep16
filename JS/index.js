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
        console.log("Alle data: ", objectData);
        //Map data according to type
        loopOverData(objectData);
        console.log("Huizen: ", huis);
        console.log("Villa's: ", villa);
        console.log("Appartementen: ", appartement);
        //Get 1 element
        element = getElement(1);
        console.log("Element with index 1: ", element);
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

//COMPOSITE PATTERN

let huis = [];
let appartement = [];
let villa = [];

function add(array){
    if(array.type === "huis"){
        huis.push(array);
    }else if(array.type === "appartement"){
        appartement.push(array);
    }else if(array.type === "villa"){
        villa.push(array);
    }
}

function getElement(index){
    return objectData[index];
}


function loopOverData(array){
    array.map(add);
}