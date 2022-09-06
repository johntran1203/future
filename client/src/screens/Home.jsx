import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getFoods } from '../services';

export const Home = () => {
    const [allFoods, setAllFoods] = useState([]);
    console.log(allFoods)
    // 1. on mount this component should fetch all cakes and save it to some state
    useEffect(() => {
        // call getFoods and save into state (async)
        const fetchAllFoods = async () => {
            const fetchFoods = await getFoods();
            setAllFoods(fetchFoods)
        }
        fetchAllFoods();

    }, []);
    // 2. map through all the foods in state and render a Link for each one, leading to the food detail page
    return (
    <section>
        {allFoods.map((food) => (
            <Link to={`/foods/${food._id}`}>{food.location}</Link>
            // <h2 key={food}>{food.location}</h2>
        ))}
    </section>
    // 3. profit!
    )
  };