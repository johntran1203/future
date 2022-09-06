import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFoodById } from "../services";

export const FoodDetail = () => {
    const [food, setFood] = useState({});
    const params = useParams()
    // 1. whe this component mouts, it will getfood with the id inside of the params and set it to some state

    useEffect(() => {

        getFoodById(params.id).then((fetchedFood) => setFood(fetchedFood))

    },[params.id]);
    // 2. render the foods's information!
    // 3. profit
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

        </section>
     );
}
 


