// services/userApi.js
import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
const fetchProductById = async (id: any) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};
export const useGetProductQuery = () => {
  return useQuery("product", fetchProducts);
};
export const useGetProductById = (id: any) => {
  return useQuery("productById", () => fetchProductById(id));
};
