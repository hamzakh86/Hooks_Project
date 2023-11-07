// Importing the CSS file for styling.
import "./addmovie.css";
// Importing necessary components and hooks from React.
import ReactStars from "react-rating-stars-component";
import { useRef,useState } from "react";

// Define the functional component AddMovie that takes a prop 'adding'.
export default function AddMovie({adding}) {
  // Create useRef variables to reference input elements in the form
    let titleRef = useRef();
    let imgurlRef = useRef();
    let posurlRef = useRef();
    let descRef = useRef();
     // Define a state variable 'rate' and a function to update it.
    let [rate, setRate] = useState(0);
    // Define a function to handle the rating change.
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRate(newRating);
    };
// Define a function to handle form submission.
    function submitted(ev){
        ev.preventDefault();
         // Create a movieObject with input values and the rating.
        let movieObject = {title:titleRef.current.value, img:imgurlRef.current.value, description:descRef.current.value, posterURL:posurlRef.current.value, rating:rate};
        adding(movieObject);

        //save all this information in localStorage
        
    }
    // Render the form for adding a movie with input fields, a rating component, and a submit button.
    return (
        <div className="AddMovie">
            <form onSubmit={submitted}>
                  {/* Input field for the movie title */}
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                    <input name="title" ref={titleRef} type="text" className="form-control" id="colFormLabel" placeholder="Title" />
                    </div>
                </div>
                {/* Input field for the image URL */}
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                    <input ref={imgurlRef} type="text" className="form-control" id="colFormLabel" placeholder="image url" />
                    </div>
                </div>
                {/* Input field for the poster URL */}
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Your Poter URL </span>
                    <input ref={posurlRef} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div className="input-group">
                    <span className="input-group-text">Description</span>
                    <textarea ref={descRef} className="form-control" aria-label="With textarea"></textarea>
                </div>
                {/* Rating input using ReactStars component */}
                <div className="rating">
                <h6> Rating :  </h6>
                <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
                </div>
                {/* Submit button */}
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">ADD THE MOVIE</button>
                </div>
            </form>
        </div>
    )
}