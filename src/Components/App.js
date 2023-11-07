import { useState,useEffect } from 'react';   // Importing necessary dependencies from React.
import AddMovie from "./AddMovie"; // Importing the AddMovie component.
import "./app.css"; // Importing the CSS styles for the component.
import MovieList from './MovieList'; // Importing the MovieList component.
import Filtring from './Filtring'; // Importing the Filtring component.

// An array of initial movie information.
const info = [
  { title:'La Casa De Papel', img:'https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg', description:"Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.", posterURL:"www.lacasadepapel.com", rating:9.4 },
  { title:'Extinction', img:'https://fr.web.img6.acsta.net/pictures/18/07/11/17/39/5071594.jpg', description:"Un père hanté par l'idée de perdre sa famille voit son pire cauchemar se réaliser quand une puissance destructrice venue d'une autre planète débarque sur Terre. Alors qu'il lutte pour leur survie, il se découvre une force inconnue pour protéger sa famille du danger.", posterURL:"www.extinction.com", rating:9.3 },
  { title:'Red Notice', img:'https://cinedweller.com/wp-content/uploads/2021/11/red-notice-affiche-400x650.jpg.webp', description:"Mélangeant film de casse, comédie et aventure, Red Notice est un blockbuster invraisemblable, mais qui bénéficie dun trio dacteurs qui fonctionne. Lensemble est aussi vain que divertissant.", posterURL:"www.redntice.com", rating:8.5 },
  { title:'Tempête ', img:'https://fr.web.img6.acsta.net/pictures/22/10/24/17/14/4700907.jpg', description:"Née dans le haras de ses parents, Zoé a grandi au milieu des chevaux et na quun rêve : devenir jockey ! Tempête, une pouliche quelle voit naître, va devenir son alter ego. Mais un soir dorage, Tempête, affolée, renverse Zoé et vient briser son rêve. Elle va pourtant saccrocher et tenter l'impossible pour renouer avec son destin.", posterURL:"www.secretsofthesaqqaratomb.com", rating:9.4 },
  { title:'Secrets of the Saqqara Tomb', img:'https://m.media-amazon.com/images/M/MV5BNDQyMDMxNzUtMTkwMC00ZTk1LWIxYzYtYTBlZGQ3Yjg2Mjc0XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg', description:"Secrets of the Saqqara Tomb est un film documentaire britannique de 2020 réalisé par James Tovell. Le film suit une équipe d'archéologues égyptiens qui découvrent une tombe du XXVᵉ siècle avant notre ère dans la nécropole de Saqqarah, qui était restée intacte depuis 4 400 ans.", posterURL:"www.tempete.com", rating:8.3 },
  { title:'Oxygène', img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUaUYclvaujXgNi1duSujX-6JuuOIIAu-IzjfMZN5xBEES35vd', description:"Une jeune femme se réveille seule dans une capsule cryogénique.Elle a perdu la mémoire et ne sait pas comment elle a pu finir enfermée dans un coffre de la taille d'un cercueil. Alors que l'oxygène commence à manquer, il va lui falloir retrouver la mémoire pour sortir de ce cauchemar.", posterURL:"www.oxygene.com", rating:6.9 },
  { title:'The Game Changers', img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlGlCB4OxuiukGhjuwGlcDWiDJlM9ogDlPiGfQQ_DkEMnY4_7m', description:"Le monde de James Wilks, un combattant de l'UFC, est bouleversé lorsqu'il découvre un groupe d'élite d'athlètes et de scientifiques de renommée mondiale qui prouvent que tout ce qu'il avait appris sur les protéines était un mensonge. James parcourt le monde à la recherche de la vérité.", posterURL:"www.thegamechangers.com", rating:8.5 },
  { title:'Born in Gaza', img:'https://m.media-amazon.com/images/M/MV5BYzdiYzk5ZTItODQ2NS00ZTU3LWI1YzctNmMzYjEwYTg4YTc2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', description:"Filmed shortly after the 2014 Gaza war, this documentary examines how violence has transformed the lives of 10 Palestinian children.", posterURL:"www.borningaza.com", rating:8.2 },
  { title:'The Wall', img:'https://m.media-amazon.com/images/M/MV5BMTc5ODMyNzE4OF5BMl5BanBnXkFtZTgwNTM0Mzc4MTI@._V1_.jpg', description:"Irak, 2007. Les États-Unis sont convaincus que la guerre est terminée, mais des combats continuent à faire rage. Lorsque la construction d'un pipeline tourne mal et que des gens sont tués, deux soldats américains sont envoyés sur le terrain. Après 22 heures d'observation, ils concluent que la zone est déserte.", posterURL:"thewall.com", rating:8.1 },
];
// The main component for the application.
function App(){
  
  const [list,setList] = useState(info); // State for the list of movies.
  const [filtredList, setFiltredList] = useState(list); // State for the filtered list of movies.
  const [rate,setRate] = useState(0); // State for filtering by rating.
  const [keyword, setKeyword] = useState(""); // State for filtering by keyword.

   // Function to add a new movie to the list.
  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }

// Function to filter the list of movies based on keyword and rating.
  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

 // Use the useEffect hook to apply the filtering effect whenever the list changes.
  useEffect(()=>{ filter(keyword,rate); },[list]);

// The components render method.
  return(
    <div className="App">
        <Filtring filter={filter}/>      {/* Render the Filtring component and pass the filter function as a prop. */}
        <MovieList list={filtredList} /> {/* Render the MovieList component and pass the filtered movie list as a prop. */}
        <AddMovie adding={adding} />     {/* Render the AddMovie component and pass the adding function as a prop. */}
    </div>
      );
}

export default App;   // Export the App component as the default export of this module.