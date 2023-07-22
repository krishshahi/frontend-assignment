import { useQuery } from "react-query";
import axios from "axios";

const fetchCategory = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
};
const fetchCategoryById = async (category: string) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );

  return response.data;
};

export const useGetCategory = () => {
  return useQuery("category", fetchCategory);
};
export const useCategoryById = (category: string) => {
  return useQuery("oneCategory", () => fetchCategoryById(category));
};
