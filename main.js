/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

function getRandomNumber(x){
    let num = Math.ceil(Math.random()*x);
    return num;
}
// function to calculate median
// function median(array){
//     if(array.length%2===1){
//         array.sort(function(a, b){return a-b});
//             console.log(array.sort(function(a,b){return a-b}))
//                 let pos1 = Math.ceil((array.length-1)/2);
//                     return array[pos1];
//     }else if (array.length%2===0){
//                     array.sort(function(a, b){return a-b});
//                 console.log(array.sort(function(a,b){return a-b}))
//             let pos2 = array.length/2;
//         return ((array[pos2-1]+array[pos2])/2)
//     }};

//-----------------Single Die ---------------
let d6Roll = document.querySelector("#d6-roll");
d6Roll.src = "images/start/d6.png"

let d6Mean = document.querySelector("#d6-rolls-mean");
d6Mean.innerText = "NA"

let d6Median = document.querySelector("#d6-rolls-median");
d6Median.innerText = "NA"

let x = 0;

d6Roll.addEventListener("click",function(){
    x = getRandomNumber(6);           // gives random number 1-6
    d6Roll.src = `images/d6/${x}.png` // selects an image for the die
    sixes.push(x);                    // add number to the array sixes
    d6MeanSingle(sixes);              // calculates Mean
    console.log(`unsorted array ${sixes}`) // shows unsorted array to compare to sorted printed out in the median function
    medianD6(sixes);                  // calculates Median    
    
});
function medianD6(array){
    if(array.length%2===1){
        array.sort(function(a, b){return a-b});
            console.log(`sorted array ${array.sort(function(a,b){return a-b})}`)
                let pos1 = Math.ceil((array.length-1)/2);
                    d6Median.innerText=array[pos1];
    
    }else if (array.length%2===0){
                    array.sort(function(a, b){return a-b});
                console.log(`sorted array ${array.sort(function(a,b){return a-b})}`)
            let pos2 = array.length/2;
        d6Median.innerText=((array[pos2-1]+array[pos2])/2)
    }
};
function d6MeanSingle(array){
    let sum = 0;
    let mean = 0;
    for (let i = 0; i<array.length;i++){
        sum+=array[i];
        mean = sum/array.length;
    }
    d6Mean.innerText=mean.toFixed(2);
};

//-----------------Double Die-----------------
let d6RollDouble1 = document.querySelector("#double-d6-roll-1");
d6RollDouble1.src = "images/start/d6.png";

let d6RollDouble2 = document.querySelector("#double-d6-roll-2");
d6RollDouble2.src = "images/start/d6.png";

          //--- to click the area of the dices
let d6DoubleArea = document.querySelector("#double-d6-buttons");

let d6MeanDoubleM = document.querySelector("#double-d6-rolls-mean");
d6MeanDoubleM.innerText = "NA"

let d6DoubleMedian = document.querySelector("#d6Double-rolls-median");//-------
d6DoubleMedian.innerText = "NA"

let y = 0;

d6DoubleArea.addEventListener("click",function(){
    //------- first die
    y = getRandomNumber(6);
    d6RollDouble1.src = `images/d6/${y}.png`
    doubleSixes.push(y);
    d6MeanDouble();
    medianD6Double(doubleSixes);
    //------ second die
    y = getRandomNumber(6);
    d6RollDouble2.src = `images/d6/${y}.png`
    doubleSixes.push(y);
    d6MeanDouble();
    console.log(`unsorted array ${doubleSixes}`) // shows unsorted array to compare to sorted printed out in the median function
    medianD6Double(doubleSixes);   
});

function medianD6Double(array){
    if(array.length%2===1){
        array.sort(function(a, b){return a-b});
                let pos1 = Math.ceil((array.length-1)/2);
                d6DoubleMedian.innerText=array[pos1];
    
    }else if (array.length%2===0){
                    array.sort(function(a, b){return a-b});
                console.log(`sorted array ${array.sort(function(a,b){return a-b})}`)
            let pos2 = array.length/2;
            d6DoubleMedian.innerText=((array[pos2-1]+array[pos2])/2)
    }
};

function d6MeanDouble(){
    let sum = 0;
    let mean = 0;
    for (let i = 0; i<doubleSixes.length;i++){
        sum+=doubleSixes[i];
        mean = sum/doubleSixes.length;
    }
    d6MeanDoubleM.innerText=mean.toFixed(2);
};

//-----------------D12-----------------
let d12 = document.querySelector("#d12-roll");
d12.src = "images/start/d12.jpeg"

let d12M = document.querySelector("#d12-rolls-mean");
d12M.innerText = "NA";

let z = 0;

d12.addEventListener("click",function(){
    z = getRandomNumber(12);
    d12.src = `images/numbers/${z}.png`
    twelves.push(z);
    d12Mean();
    console.log(twelves);
});

function d12Mean(){
    let sum = 0;
    let mean = 0;
    for (let i = 0; i<twelves.length;i++){
        sum+=twelves[i];
        mean = sum/twelves.length;
    }
    d12M.innerText=mean.toFixed(2);
};
//-----------------D20------------------
let d20 = document.querySelector("#d20-roll");
d20.src = "images/start/d20.jpg"

let d20Mean = document.querySelector("#d20-rolls-mean");
d20Mean.innerText = "NA"
let w = 0;

d20.addEventListener("click",function(){
    w = getRandomNumber(20);
    d20.src = `images/numbers/${w}.png`
    twenties.push(w);
    d20MeanF();
    console.log(twenties);
    
});

function d20MeanF(){
    let sum = 0;
    let mean = 0;
    for (let i = 0; i<twenties.length;i++){
        sum+=twenties[i];
        mean = sum/twenties.length;
    }
    d20Mean.innerText=mean.toFixed(2);
};
//-----------------Reset Button -----------------
let button = document.querySelector("#reset-button");
button.addEventListener("click",function(){
    //-----single-----------------------
    while(sixes.length>0){
        sixes.pop();
    }
    d6Roll.src = "images/start/d6.png";
    d6Mean.innerText = "NA";
    d6Median.innerText = "NA";

    //-----double-----------------------
    while(doubleSixes.length>0){
        doubleSixes.pop();
    }
    d6RollDouble1.src = "images/start/d6.png";
    d6RollDouble2.src = "images/start/d6.png";
    d6MeanDoubleM.innerText = "NA"
    d6DoubleMedian.innerText = "NA"
    //-----D12-----------------------
     while(twelves.length>0){
        twelves.pop();
    }
    d12.src = "images/start/d12.jpeg";
    d12M.innerText = "NA";
    //-----D20-----------------------
    while(twenties.length>0){
        twenties.pop();
    }
    d20.src = "images/start/d20.jpg"    
    d20Mean.innerText = "NA"
});


   

