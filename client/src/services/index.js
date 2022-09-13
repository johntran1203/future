import axios from "axios";

const apiURL = 
    process.env.NODE_ENV === 'development'
        ? "http://localhost:3001/foods"
        : "http://localhost:3001/foods";

// registerUser should be and exported async function thast takes in a user and requests the api's /api/auth/register post route with a body of userInfo (passed in a via a param)
export const registerUser = async (userInfo) => {
    try {
        const response = await axios.get(`${apiURL}/api/auth/register`, userInfo);
        // set an item via localStorage
        // localStorage.setItem("someky", somevalue);
        localStorage.setItem("token", response.data.token);
        return response.data.user;
    } catch (error) {
        console.error(error.message);
    }
}

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

// Delete FoodById (make a DELTE call to our DELETE /foods/:id endppoint)

export const deleteFood = async (id) => {
    try {
        const response = await axios.delete(`${apiURL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error.message)
    }
}