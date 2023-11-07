// Import the CSS file for styling. This assumes there is a "movielist.css" file in the same directory.
import "./movielist.css";
// Import the MovieCard component from a file called "MovieCard" in the same directory.
import MovieCard from "./MovieCard";

// Define a functional component called MovieList that takes a single prop called 'list'.
function MovieList({list}){
    return(
        // Render a <div> element with the class name "MovieList".
        <div className="MovieList">{
        // Use the JavaScript map() function to iterate over the 'list' array and create
        // MovieCard components for each element in the array.

        list.map( (ele,index)=>(

            // Each MovieCard component is given a 'key' prop to uniquely identify it.
            // The 'ele' prop is used to pass the current element from the 'list' array to the MovieCard component.
           
            <MovieCard key={index} ele={ele} />
        ))
        }
        </div>
    );
}

// Export the MovieList component so it can be used in other parts of the application.
export default MovieList;