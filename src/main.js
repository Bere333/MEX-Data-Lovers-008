const data = POKEMON.pokemon;
//Código para filtrar por tipos
let imSelection = document.getElementById("select-type");
imSelection.addEventListener("click", () => {
let imValue = imSelection.options[imSelection.selectedIndex].value;
//console.log(typeof imValue);
//console.log(imValue);

let pokeFilterData = window.data.filterData(data, imValue);
  
  
//Ordenar data filtrada
  
  let imOrdenation = document.getElementById("select-order");
  imOrdenation.addEventListener("click", () => {
  let imValueOrder = (imOrdenation.options[imOrdenation.selectedIndex].value);
  //console.log(imValueOrder);
  //console.log(typeof imValueOrder);

  let imAscent = document.getElementById("select-sortOrder");
  imAscent.addEventListener("click", () => {
    let sorValue = (imAscent.options[imAscent.selectedIndex].value);
    //console.log(sorValue);
    
    let pokeDataOrder = window.data.sortData(pokeFilterData, imValueOrder, sorValue);
    //console.log(pokeDataOrder);

    const root = document.getElementById("root");


  let str = " ";
  
  pokeDataOrder.forEach(element => {
    let pokeId = element.id;
    let pokeName = element.name;
    let pokeImg = element.img;
    let pokeType = element.type;
    let pokeWeaknesses = element.weaknesses;
   // let pokeEvolution = element.next_evolution;
    //let pokePrevol = element.prev_evolution;
    //let pokeE = () => {let evol = "";
   //for (let name in pokeEvolution ){
    // evol = pokeEvolution[name];
    // return evol;
   // }
 // };
   /*console.log(evol);
   let evolP = "";
   for (let name in pokePrevol){
    evolP = pokePrevol[name];
    return evolP;
   }*/
  
  
    str += `
    <div class="flip-container"><center>
    <div class="card">
    <div class="front">
    <img src="${pokeImg}" alt=""></img>
    <h2>${pokeName}</h2>
    </div>
    <div class="back">
    <p>Núm. de Pokémon: ${pokeId}</p>
    <p>Tipo de pokémon: ${pokeType}</p>
    <p>Debilidades: ${pokeWeaknesses}</p>
    </div>
    </div>
    </center></div>
    `;
  });
  root.innerHTML = str; 
    
  } );
  
  
  
  
  });
});

let imSelectCompute = document.getElementById("select-computestats");
imSelectCompute.addEventListener('click', () => {
  //let computeValue = (imSelectCompute.options[imSelectCompute.selectedIndex].value);
  const rootCompute = document.getElementById("rootCompute");
  let pokeDataCompute = window.data.computeStats(data);
  let str = `
    <div class="flip-container"><center>
    <div class="card">
    <div class="front">
    <h2>Promedio de Peso</h2>
    <img src="http://pixelartmaker.com/art/e0087f122eee65d.png" width:"10" heigth="10"></img>
    </div>
    <div class="back">
    <p><center>El promedio de peso entre pokemones es de: ${pokeDataCompute}<center></p>
    </div>
    </div>
    </center></div>
    `;
  rootCompute.innerHTML = str;
  //console.log(pokeDataCompute);
  //console.log(`${pokeDataCompute}`);
  
  //`${pokeDataCompute}`;
  
});

let modal= document.getElementById("miModal");
let flex= document.getElementById("flex");
let abrir= document.getElementById("abrir");
let cerrar= document.getElementById("close");


abrir.addEventListener("click", function(){
 modal.style.display = "block";

});

cerrar.addEventListener("click", function(){
 modal.style.display = "none";

});

window.addEventListener("click", function(e){
 if(e.target == flex){
   modal.style.display = "none";
 }
});