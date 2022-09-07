import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFood } from "../services";


export const NewLocation = () => {
    const [location, setLocation] = useState("");
    const [food, setFood] = useState("");
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();


const handleSubmit = async (e) =>{
    // prevent default
    e.preventDefault();
    // create object for place
    const place = {
        location,
        food: food.split("\n"),
        rating,
    }
    // pass the place object to createFood dunction from service
    await createFood(place);
    // push users to home route
    navigate("/");
    // view for people pleasure
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">Name of the Place:</label>
      <input type="text" id='location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
      <label htmlFor="food">Summary:</label>
      <textarea name="" id="food" cols="30" rows="10" value={food} onChange={(e)=>setFood(e.target.value)}></textarea>
      <label htmlFor="rating">Rating:</label>
      <input type="range" id="rating" min={0} max={10} step={1}  value={rating} onChange={(e)=>setRating(e.target.valueAsNumber)}/>
      <button type="submit">Submit!</button>
    </form>
  );
};



// navigate('/login')