import * as React from 'react';

const Home = () =>{
  const [characterList, setCharacterList ]= react.
  useState(([]));

  React.useEffect( () => {
    const list = fetch( 'https://rickandmortyapi.com/api/character/?page=1'
    ).then((response) => response.json())
    .then((data) => console.log
    (data.results))
    .catch(console.error);

  },[]);
  
    return (
    <main>
      <ul>
        {
          characterList.map(
            (character) => (
              <li key ={caracter.id}>
            )
          )
        }
        <li>


      </ul>
      <Card;
    return(
    )
  
};
export default Home;