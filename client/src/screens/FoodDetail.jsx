import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFoodById, deleteFood } from "../services";

export const FoodDetail = () => {
    const [food, setFood] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    // 1. whe this component mouts, it will getfood with the id inside of the params and set it to some state

    useEffect(() => {

        getFoodById(params.id).then((fetchedFood) => setFood(fetchedFood))

    },[params.id]);
    // 2. render the foods's information!
    // 3. profit

    // make an async function that
    const handleDelete =  async() => {
    // delete the place with an id of params.id
        await deleteFood(params.id)
    // pushes the user to the main page
    navigate('/');

    }

    return ( 
        <section>
            <h3>{food?.location}</h3>
            <ul>
               {food?.food?.map((foodtype, id) => (
                <li key={id}>{foodtype}</li>
               ))}
            </ul>
            <h4>{food?.rating}/10</h4>
            {/* <h4>{new Array(food?.rating || 0).fill('🥠')}</h4> */}
            <button onClick={handleDelete}>DELETE REVIEW 🤮</button>
        </section>
     );
}
 


