import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Contact = () => {
  const { data, isLoading, isError }  = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  // const {isLoading, data, isError} = useQuery(['super-heroes'], () => {
//     return axios.get("http://localhost:4000/superheroes")
// })


  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>Contact Me</h2>
      <p>{data?.fact}</p>
    </div>
  );
};
