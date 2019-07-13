require('../src/data.js');


//Test de filtrado
//Es una función
describe('función filtrar', () => {
  it('es una función', () => {
    expect(typeof window.data.filterData).toBe('function');
  });
//Funciona filtrado para dragones
  it('Debería retornar para filtrado de dragones un objeto de tres elementos', () => {
    const data = [
      {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
          "Dragon"
        ],
        "height": "1.80 m",
        "weight": "3.3 kg",
        "candy": "Dratini Candy",
        "candy_count": 25,
        "egg": "10 km",
        "spawn_chance": 0.30,
        "avg_spawns": 30,
        "spawn_time": "06:41",
        "multipliers": [
          1.83,
          1.84
        ],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "next_evolution": [{
          "num": "148",
          "name": "Dragonair"
        }, {
          "num": "149",
          "name": "Dragonite"
        }]
      },
      {
        "id": 148,
        "num": "148",
        "name": "Dragonair",
        "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
        "type": [
          "Dragon"
        ],
        "height": "3.99 m",
        "weight": "16.5 kg",
        "candy": "Dratini Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "11:57",
        "multipliers": [2.05],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }],
        "next_evolution": [{
          "num": "149",
          "name": "Dragonite"
        }]
      },
      {
        "id": 149,
        "num": "149",
        "name": "Dragonite",
        "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
        "type": [
          "Dragon",
          "Flying"
        ],
        "height": "2.21 m",
        "weight": "210.0 kg",
        "candy": "Dratini Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0011,
        "avg_spawns": 0.11,
        "spawn_time": "23:38",
        "multipliers": null,
        "weaknesses": [
          "Ice",
          "Rock",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }, {
          "num": "148",
          "name": "Dragonair"
        }]
      },
      {
        "id": 150,
        "num": "150",
        "name": "Mewtwo",
        "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
        "type": [
          "Psychic"
        ],
        "height": "2.01 m",
        "weight": "122.0 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "multipliers": null,
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      },
      {
        "id": 151,
        "num": "151",
        "name": "Mew",
        "img": "http://www.serebii.net/pokemongo/pokemon/151.png",
        "type": [
          "Psychic"
        ],
        "height": "0.41 m",
        "weight": "4.0 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "multipliers": null,
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }
    ];
    expect(window.data.filterData(data,'Dragon')).toEqual([{
      "id": 147,
      "num": "147",
      "name": "Dratini",
      "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
      "type": [
        "Dragon"
      ],
      "height": "1.80 m",
      "weight": "3.3 kg",
      "candy": "Dratini Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 0.30,
      "avg_spawns": 30,
      "spawn_time": "06:41",
      "multipliers": [
        1.83,
        1.84
      ],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "next_evolution": [{
        "num": "148",
        "name": "Dragonair"
      }, {
        "num": "149",
        "name": "Dragonite"
      }]
    },
    {
      "id": 148,
      "num": "148",
      "name": "Dragonair",
      "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
      "type": [
        "Dragon"
      ],
      "height": "3.99 m",
      "weight": "16.5 kg",
      "candy": "Dratini Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "11:57",
      "multipliers": [2.05],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }],
      "next_evolution": [{
        "num": "149",
        "name": "Dragonite"
      }]
    },
    {
      "id": 149,
      "num": "149",
      "name": "Dragonite",
      "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
      "type": [
        "Dragon",
        "Flying"
      ],
      "height": "2.21 m",
      "weight": "210.0 kg",
      "candy": "Dratini Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0011,
      "avg_spawns": 0.11,
      "spawn_time": "23:38",
      "multipliers": null,
      "weaknesses": [
        "Ice",
        "Rock",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }, {
        "num": "148",
        "name": "Dragonair"
      }]
    }]);
  });
});
//Ordenar data filtrada
//Es una función
describe("función ordenar", () => {
  it('es una función', () => {expect(typeof window.data.sortData).toBe('function');
  });
//Oderna data filtrada de dragones: Alfabeticamente y ascendente
it('Debería retornar el siguiente ordenado alfabetico ascendente de dragones: Dragonair,Dragonite y Dratini', () => {
  const data = [
    {
    "id": 147,
    "num": "147",
    "name": "Dratini",
    "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
    "type": [
      "Dragon"
    ],
    "height": "1.80 m",
    "weight": "3.3 kg",
    "candy": "Dratini Candy",
    "candy_count": 25,
    "egg": "10 km",
    "spawn_chance": 0.30,
    "avg_spawns": 30,
    "spawn_time": "06:41",
    "multipliers": [
      1.83,
      1.84
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "148",
      "name": "Dragonair"
    }, {
      "num": "149",
      "name": "Dragonite"
    }]},
  {
    "id": 148,
    "num": "148",
    "name": "Dragonair",
    "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
    "type": [
      "Dragon"
    ],
    "height": "3.99 m",
    "weight": "16.5 kg",
    "candy": "Dratini Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "11:57",
    "multipliers": [2.05],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }],
    "next_evolution": [{
      "num": "149",
      "name": "Dragonite"
    }]},
  {
    "id": 149,
    "num": "149",
    "name": "Dragonite",
    "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
    "type": [
      "Dragon",
      "Flying"
    ],
    "height": "2.21 m",
    "weight": "210.0 kg",
    "candy": "Dratini Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0011,
    "avg_spawns": 0.11,
    "spawn_time": "23:38",
    "multipliers": null,
    "weaknesses": [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }, {
      "num": "148",
      "name": "Dragonair"
    }]
  }];
  const sortBy = "name";
  const sortOrder = "menor-mayor";
  expect(window.data.sortData(data, sortBy, sortOrder)).toEqual([
    {
    "id": 148,
    "num": "148",
    "name": "Dragonair",
    "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
    "type": [
      "Dragon"
    ],
    "height": "3.99 m",
    "weight": "16.5 kg",
    "candy": "Dratini Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "11:57",
    "multipliers": [2.05],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }],
    "next_evolution": [{
      "num": "149",
      "name": "Dragonite"
    }]
  },
  {
    "id": 149,
    "num": "149",
    "name": "Dragonite",
    "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
    "type": [
      "Dragon",
      "Flying"
    ],
    "height": "2.21 m",
    "weight": "210.0 kg",
    "candy": "Dratini Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0011,
    "avg_spawns": 0.11,
    "spawn_time": "23:38",
    "multipliers": null,
    "weaknesses": [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }, {
      "num": "148",
      "name": "Dragonair"
    }]
  },
  {
    "id": 147,
    "num": "147",
    "name": "Dratini",
    "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
    "type": [
      "Dragon"
    ],
    "height": "1.80 m",
    "weight": "3.3 kg",
    "candy": "Dratini Candy",
    "candy_count": 25,
    "egg": "10 km",
    "spawn_chance": 0.30,
    "avg_spawns": 30,
    "spawn_time": "06:41",
    "multipliers": [
      1.83,
      1.84
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "148",
      "name": "Dragonair"
    }, {
      "num": "149",
      "name": "Dragonite"
    }]
  }
]);
});
//Ordena data filtrada de dragones: Alfabeticamente y descendente
  it('Debería retornar el siguiente ordenado alfabetico descendente de dragones: Dratini, Dragonite, Dragonair', () => {
    const data = [
      {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
          "Dragon"
        ],
        "height": "1.80 m",
        "weight": "3.3 kg",
        "candy": "Dratini Candy",
        "candy_count": 25,
        "egg": "10 km",
        "spawn_chance": 0.30,
        "avg_spawns": 30,
        "spawn_time": "06:41",
        "multipliers": [
          1.83,
          1.84
        ],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "next_evolution": [{
          "num": "148",
          "name": "Dragonair"
        }, {
          "num": "149",
          "name": "Dragonite"
        }]
      },
      {
        "id": 148,
        "num": "148",
        "name": "Dragonair",
        "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
        "type": [
          "Dragon"
        ],
        "height": "3.99 m",
        "weight": "16.5 kg",
        "candy": "Dratini Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "11:57",
        "multipliers": [2.05],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }],
        "next_evolution": [{
          "num": "149",
          "name": "Dragonite"
        }]
      },
      {
        "id": 149,
        "num": "149",
        "name": "Dragonite",
        "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
        "type": [
          "Dragon",
          "Flying"
        ],
        "height": "2.21 m",
        "weight": "210.0 kg",
        "candy": "Dratini Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0011,
        "avg_spawns": 0.11,
        "spawn_time": "23:38",
        "multipliers": null,
        "weaknesses": [
          "Ice",
          "Rock",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }, {
          "num": "148",
          "name": "Dragonair"
        }]
      }
    ];
    const sortBy = "name";
    const sortOrder = "mayor-menor";
    expect(window.data.sortData(data, sortBy, sortOrder)).toEqual([
      {
      "id": 147,
      "num": "147",
      "name": "Dratini",
      "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
      "type": [
        "Dragon"
      ],
      "height": "1.80 m",
      "weight": "3.3 kg",
      "candy": "Dratini Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 0.30,
      "avg_spawns": 30,
      "spawn_time": "06:41",
      "multipliers": [
        1.83,
        1.84
      ],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "next_evolution": [{
        "num": "148",
        "name": "Dragonair"
      }, {
        "num": "149",
        "name": "Dragonite"
}]},
    {
      "id": 149,
      "num": "149",
      "name": "Dragonite",
      "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
      "type": [
        "Dragon",
        "Flying"
      ],
      "height": "2.21 m",
      "weight": "210.0 kg",
      "candy": "Dratini Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0011,
      "avg_spawns": 0.11,
      "spawn_time": "23:38",
      "multipliers": null,
      "weaknesses": [
        "Ice",
        "Rock",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }, {
        "num": "148",
        "name": "Dragonair"
      }]},
    {
      "id": 148,
      "num": "148",
      "name": "Dragonair",
      "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
      "type": [
        "Dragon"
      ],
      "height": "3.99 m",
      "weight": "16.5 kg",
      "candy": "Dratini Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "11:57",
      "multipliers": [2.05],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }],
      "next_evolution": [{
        "num": "149",
        "name": "Dragonite"
      }]}
  ]);
  });
//Ordenar data filtrada de dragones: Por id y ascendente
  it('Debería retornar el siguiente ordenado por id ascendente de dragones: Dratini, Dragonite, Dragonair', () => {
    const data = [
      {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
          "Dragon"
        ],
        "height": "1.80 m",
        "weight": "3.3 kg",
        "candy": "Dratini Candy",
        "candy_count": 25,
        "egg": "10 km",
        "spawn_chance": 0.30,
        "avg_spawns": 30,
        "spawn_time": "06:41",
        "multipliers": [
          1.83,
          1.84
        ],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "next_evolution": [{
          "num": "148",
          "name": "Dragonair"
        }, {
          "num": "149",
          "name": "Dragonite"
        }]
      },
      {
        "id": 148,
        "num": "148",
        "name": "Dragonair",
        "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
        "type": [
          "Dragon"
        ],
        "height": "3.99 m",
        "weight": "16.5 kg",
        "candy": "Dratini Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "11:57",
        "multipliers": [2.05],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }],
        "next_evolution": [{
          "num": "149",
          "name": "Dragonite"
        }]
      },
      {
        "id": 149,
        "num": "149",
        "name": "Dragonite",
        "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
        "type": [
          "Dragon",
          "Flying"
        ],
        "height": "2.21 m",
        "weight": "210.0 kg",
        "candy": "Dratini Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0011,
        "avg_spawns": 0.11,
        "spawn_time": "23:38",
        "multipliers": null,
        "weaknesses": [
          "Ice",
          "Rock",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }, {
          "num": "148",
          "name": "Dragonair"
        }]
      }
    ];
    const sortBy = "id";
    const sortOrder = "menor-mayor";
    expect(window.data.sortData(data, sortBy, sortOrder)).toEqual([
      {
      "id": 147,
      "num": "147",
      "name": "Dratini",
      "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
      "type": [
        "Dragon"
      ],
      "height": "1.80 m",
      "weight": "3.3 kg",
      "candy": "Dratini Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 0.30,
      "avg_spawns": 30,
      "spawn_time": "06:41",
      "multipliers": [
        1.83,
        1.84
      ],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "next_evolution": [{
        "num": "148",
        "name": "Dragonair"
      }, {
        "num": "149",
        "name": "Dragonite"
      }]
    }, 
    {
      "id": 148,
      "num": "148",
      "name": "Dragonair",
      "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
      "type": [
        "Dragon"
      ],
      "height": "3.99 m",
      "weight": "16.5 kg",
      "candy": "Dratini Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "11:57",
      "multipliers": [2.05],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }],
      "next_evolution": [{
        "num": "149",
        "name": "Dragonite"
      }]
    }, 
    {
      "id": 149,
      "num": "149",
      "name": "Dragonite",
      "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
      "type": [
        "Dragon",
        "Flying"
      ],
      "height": "2.21 m",
      "weight": "210.0 kg",
      "candy": "Dratini Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0011,
      "avg_spawns": 0.11,
      "spawn_time": "23:38",
      "multipliers": null,
      "weaknesses": [
        "Ice",
        "Rock",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }, {
        "num": "148",
        "name": "Dragonair"
      }]
    }
  ]);
  });
//Ordenar data filtrada de dragones: Por id y descendente
  it('Debería retornar el siguiente ordenado por id descendente de dragones: Dragonair, Dragonite, Dratini', () => {
    const data = [
      {
      "id": 147,
      "num": "147",
      "name": "Dratini",
      "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
      "type": [
        "Dragon"
      ],
      "height": "1.80 m",
      "weight": "3.3 kg",
      "candy": "Dratini Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 0.30,
      "avg_spawns": 30,
      "spawn_time": "06:41",
      "multipliers": [
        1.83,
        1.84
      ],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "next_evolution": [{
        "num": "148",
        "name": "Dragonair"
      }, {
        "num": "149",
        "name": "Dragonite"
      }]
    }, 
    {
      "id": 148,
      "num": "148",
      "name": "Dragonair",
      "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
      "type": [
        "Dragon"
      ],
      "height": "3.99 m",
      "weight": "16.5 kg",
      "candy": "Dratini Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "11:57",
      "multipliers": [2.05],
      "weaknesses": [
        "Ice",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }],
      "next_evolution": [{
        "num": "149",
        "name": "Dragonite"
      }]
    }, 
    {
      "id": 149,
      "num": "149",
      "name": "Dragonite",
      "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
      "type": [
        "Dragon",
        "Flying"
      ],
      "height": "2.21 m",
      "weight": "210.0 kg",
      "candy": "Dratini Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0011,
      "avg_spawns": 0.11,
      "spawn_time": "23:38",
      "multipliers": null,
      "weaknesses": [
        "Ice",
        "Rock",
        "Dragon",
        "Fairy"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }, {
        "num": "148",
        "name": "Dragonair"
      }]
    }];
    const sortBy = 'id';
    const sortOrder = 'mayor-menor';
    expect(window.data.sortData(data, sortBy, sortOrder)).toEqual([
      {
        "id": 149,
        "num": "149",
        "name": "Dragonite",
        "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
        "type": [
          "Dragon",
          "Flying"
        ],
        "height": "2.21 m",
        "weight": "210.0 kg",
        "candy": "Dratini Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0011,
        "avg_spawns": 0.11,
        "spawn_time": "23:38",
        "multipliers": null,
        "weaknesses": [
          "Ice",
          "Rock",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }, {
          "num": "148",
          "name": "Dragonair"
        }]
      },
      {
        "id": 148,
        "num": "148",
        "name": "Dragonair",
        "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
        "type": [
          "Dragon"
        ],
        "height": "3.99 m",
        "weight": "16.5 kg",
        "candy": "Dratini Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "11:57",
        "multipliers": [2.05],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "prev_evolution": [{
          "num": "147",
          "name": "Dratini"
        }],
        "next_evolution": [{
          "num": "149",
          "name": "Dragonite"
        }]
      },
      {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
          "Dragon"
        ],
        "height": "1.80 m",
        "weight": "3.3 kg",
        "candy": "Dratini Candy",
        "candy_count": 25,
        "egg": "10 km",
        "spawn_chance": 0.30,
        "avg_spawns": 30,
        "spawn_time": "06:41",
        "multipliers": [
          1.83,
          1.84
        ],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "next_evolution": [{
          "num": "148",
          "name": "Dragonair"
        }, {
          "num": "149",
          "name": "Dragonite"
        }]
      }    
    ]);
  });
});