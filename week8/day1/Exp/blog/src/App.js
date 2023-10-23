
// function App() {
//   {const myelement = <h1>I Love JSX!</h1>;}
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>

     
   
//     </div>
   
//   );
// } 

// function App() {

//   const sum = 5 + 5;
//   return (
//     <div> {`React is ${sum} times better with JSX `} </div>
//   )
// }
import UserFavoriteAnimals from  './UserFavoriteAnimals';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (

    <>
    <UserFavoriteAnimals/>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
    </>
  )
}

export default App;












