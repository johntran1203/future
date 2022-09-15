import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../App';
import { getFoods } from '../services';

export const Home = () => {
    const{ userName } = useContext(AppContext)
    const [allFoods, setAllFoods] = useState([]);
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
        <h3>Hello my name is {userName}</h3>
    </section>
    // 3. profit!
    )
  };