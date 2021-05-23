let objectData = [];
const woningenWithTuin = [];

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
    //Delete 1 element
    removeElement(5);
    console.log("Delete element with index5: ", objectData);
    //Add garden depending the price
    const woningenWithTuin = objectData.map(addEenTuin(woningType));
    console.log("Tuin toevoegen aan woning afhankelijk van de prijs: ", woningenWithTuin)
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

function removeElement(index){
    objectData.splice(index); 
 }


function loopOverData(array){
    array.map(add);
}


/************************************************************/

//STRATEGY PATTERN

const woningType = {
    appartement:{
        tuin: 'Geen tuin.'
    },
    huis:{
        tuin: 'een simpele tuin.'
    },
    villa:{
        tuin: 'een majestueuze tuin.'
    }
}

function getPrijs(prijs){
    if (prijs >= 500000 ) {
        return 'villa'
    }else if(prijs >= 300000){
        return 'huis'
    }else{
        return 'appartement'
    }
}

function addEenTuin(woningtypes){
    return function(woning){
        const prijs = getPrijs(woning.prijs)
        const woningtype = woningtypes[prijs];
        const woningWithTuin = {
            ...woning,
            tuin: woningtype.tuin
        };
        return woningWithTuin;
    }
}

/************************************************************/