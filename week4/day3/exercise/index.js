let party = [
    {
      dessert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      dessert: 'Apple Pie',
      calories: 15,
    },
    {
      dessert: 'Croissant',
      calories: 50,
    },
    {
      dessert: 'Strawberry Icecream',
      calories: 5,
    },
  ];
  
  const calori = party.reduce((total, dessert) => {
    if (dessert) {
      return total + dessert.calories;
    } 
  }, 0);
  
  console.log(calori);