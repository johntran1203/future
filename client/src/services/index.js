import axios from "axios";

const apiURL = 
    process.env.NODE_ENV === 'development'
        ? "http://localhost:3001/foods"
        : "http://localhost:3001/foods";


// getFood
export const getFoods = async () => {
    try {
       const response = await axios.get(`${apiURL}`)
       return response.data;
    } catch (error) {
        console.error(error.message);
    }
}
// getFoodById (make a GET call to our Get /foods/:id endppoint)

export const getFoodById = async (id) => {
    try {
        const response = await axios.get(`${apiURL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error.message)
    }
}

//createFood (make a post call to our post /foods endpoint with a body)
export const createFood = async (newFood) => {
    try {
        const response = await axios.post(apiURL, newFood);
        return response.data;
    } catch (error) {
        console.error(error.message)
    }
}