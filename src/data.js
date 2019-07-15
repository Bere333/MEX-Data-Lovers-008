// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//Filtar data 
window.data = {
filterData: (data, condition) => {
  
  let pokeTrueCondition = data.filter(dataPoke => dataPoke.type[0] == condition || dataPoke.type[1] == condition);
  //console.log(pokeTrueCondition);
  //console.log(typeof pokeTrueCondition);
  
  
  return pokeTrueCondition;
},

//Ordenar data filtrada

sortData: (data, sortBy, sortOrder) => {
  let orderCamp = data.sort((a,b) => {
    if (sortOrder == "menor-mayor") {
      if(sortBy == "name"){
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        //return 0;
      }
      
      if (sortBy == "id") {
        if (a.id > b.id) {
          //return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        //return 0;
      }
      
    }
    if (sortOrder == "mayor-menor") {
      if(sortBy == "name"){
        return b.name.localeCompare(a.name);
      }
      
      if (sortBy == "id") {
        return b.id - a.id;
      }
      
    }
  });
  //console.log(orderCamp);
  
  return orderCamp;
  
},

//Obtener un cálculo agregado
computeStats:(data) => {
  let sumCompute = data.reduce((a, b) => {
    let suma = parseInt(a.weight);
    let sumb = parseInt(b.weight);
    return {
      weight: suma + sumb
    };                                                                       
  }, {weight: 0});
  let sumPromedio = sumCompute.weight / data.length;
  return sumPromedio;
  //Intento
  //console.log(sumCompute);
  /*
  let sumP = "";
    let suma = parseInt(a.weight);
    let sumb = parseInt(b.weight);
    sumP = sumP + suma + sumb;
    sumP = parseInt(sumP);
    let promedioPeso = sumP/data.length;
    console.log(promedioPeso);
    console.log(sumP);
    return sumP/data.length;
   */
  
  
}
};
