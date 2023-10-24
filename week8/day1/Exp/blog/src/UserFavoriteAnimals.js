import React from 'react';

function UserFavoriteAnimals(props) {
  // !!! props functionun parametr hissesine dusur
  // !!! ozu object oldugu ucun hemin keyword altinda props deyerler yazili
  console.log(props);
  console.log(props.animalList);
  const animals = props.animalList;
  return (
    <div>
      <h4>Favorite Animals</h4>
      {/* <ul> */}
      {/* {animals.map((animal, index) => (
                        <li key={index}>{animal}</li>
                    ))}
                </ul> */}
    </div>
  );
}

export default UserFavoriteAnimals;
