import { useQuery } from "react-query";
import axios from "axios";

const fetchCategory = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
};

export const useGetCategory = () => {
  return useQuery("category", fetchCategory);
};
