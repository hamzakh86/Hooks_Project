// Import the CSS file for styling the MovieCard component.
import "./moviecard.css";
// Define a functional React component called MovieCard that takes a single prop called 'ele'.
export default function MovieCard({ele}) {
    return (
        // Render the MovieCard component with the provided data.
        <div className="MovieCard">  {/* The component's root div with a CSS class. */}
                <div>  {/* Nested div for organizing content. */}
                    <div> {/* Nested div for displaying the movie image. */}
                    <img width="300" src={ele.img} /> {/* Display the movie's image. */}
                    </div>
                    <div >  {/* Nested div for displaying movie details. */}
                    <h2>{ele.title}</h2>  {/* Display the movie title. */}
                    <p>{ele.description}</p> {/* Display the movie description. */}
                    <h3>Rate : {ele.rating}</h3> {/* Display the movie rating. */}
                    <h4>{ele.posterURL}</h4>   {/* Display the movie poster URL. */}
                    </div>
                </div>
            </div>
    )
}