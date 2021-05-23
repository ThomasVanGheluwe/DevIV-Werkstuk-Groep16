//Alle console logs zijn side effects, maar ze zijn noodzakelijk voor het tonen van informatie

let objectData = [];
const woningenWithTuin = [];

window.onload = () => fetchData();

async function fetchData(){
    await fetch('https://dev4werkstukapi.herokuapp.com/')
    .then(response => {
        if(!response.ok){
          throw Error(response.statusText);
          }

          return response.json();
      })

    //Dit is een side effect, de state van objectData wordt aangepast (de data van de fetch wordt in de objectData array geplaatst)
    .then(data => objectData = data);

    init();
}


/************************************************************/

async function init(){
    //Sort the data, we plaatsen de data van onze fetch in dataToSort en sorten de data met het bubleSort algoritme
    let dataToSort = objectData.map(x => x);
    bubbleSort(dataToSort);
    console.log("Sorted data: ", dataToSort);
    //Map data according to type, we kopiëren de data uit de objectData array en naar gelang het type van de woning plaatsen we de data in de bijhorende array
    loopOverData(objectData);
    console.log("Huizen: ", huis);
    console.log("Villa's: ", villa);
    console.log("Appartementen: ", appartement);
    //Get 1 element, we halen een element uit onze dataObject array en tonen dit met een console.log
    element = getElement(1);
    console.log("Element with index 1: ", element);
    //Delete element with index 5, we deleten het element met index 5 en tonen onze nieuwe array met console.log
    const removedList = removeElement(5);
    console.log("Delete element with index 5: ", removedList);
    //Add garden depending the price, we voegen een tuin toe aan de woningen naar gelang hun prijs en we tonen een nieuwe array met de woningen met hun tuin toegevoegd
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
    //Dit is een side effect, de state van de huis, appartement en villa array wordt aangepast met de bijhorende data
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
    //We maken een nieuwe array zodat de staat van objectData niet verandert
    const newData = objectData.map(x => x);
    newData.splice(index); 
    return newData;
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

/* BRONVERMELDING VOLGENS APA STIJL

- Arora, S. (2019, March 27). Understanding Higher-Order Functions in JavaScript - Bits and Pieces. Medium. https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

- C.N. (2020, January 25). Keep it Simple with the Strategy Design Pattern - Bits and Pieces. Medium. https://blog.bitsrc.io/keep-it-simple-with-the-strategy-design-pattern-c36a14c985e9

- JavaScript Composite Pattern - Dofactory. (n.d.). Dofactory. https://www.dofactory.com/javascript/design-patterns/composite#:%7E:text=Summary,example%20of%20a%20Composite%20pattern.

- Nested objects in javascript, best practices. (2011, October 29). Stack Overflow. https://stackoverflow.com/questions/7942398/nested-objects-in-javascript-best-practices/7942424 

- S. (2019, August 11). How do I build a nested object in Javascript dynamically? The FreeCodeCamp Forum. https://forum.freecodecamp.org/t/how-do-i-build-a-nested-object-in-javascript-dynamically/304543

- Cursus Canvas over algoritmes door De Borger Joni.  https://ehb.instructure.com/courses/19925/modules

- Lessen over Functional programming door Lauwaerts Maarten. https://ehb.instructure.com/courses/19925/modules

*/