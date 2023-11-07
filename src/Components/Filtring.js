// Import the CSS file for styling.
import "./filtring.css";  
// Import ReactStars for displaying a star rating component.
import ReactStars from "react-rating-stars-component";
// Import useRef and useState hooks from the React library.
import {useRef,useState} from "react";

// Define a functional component called Filtring that takes a filter function as a prop.
export default function Filtring({filter}) {
    // Create a reference to the input field using useRef.
    let searchRef = useRef();
     // Create a state variable 'rate' and a function 'setRate' to manage the star rating value
    const [rate, setRate] = useState(0);
     // Define a function 'ratingChanged' to handle changes in the star rating.
    const ratingChanged = (newRating) => {
        // Call the 'filter' function with the search query and the new rating.
         filter(searchRef.current.value,newRating);
         // Update the 'rate' state with the new rating.
        setRate(newRating)
    };

 // Define a function 'submitted' to handle form submissions.
    function submitted(ev){
        // Prevent the default form submission behavior.
        ev.preventDefault();
         // Call the 'filter' function with the search query and the current rating.
        filter(searchRef.current.value,rate);
    }

    // Render the filter bar as a form.
    return (
        <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <h3> FILTER BAR </h3>
              {/* Input field for searching films, with a reference to 'searchRef'. */}
           
            <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." aria-label=".form-control-lg example" />

             {/* Submit button for searching. */}
            <button className="btn btn-primary searchbtn" type="submit" >Search</button>

            
            <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
        </form>
    )
}