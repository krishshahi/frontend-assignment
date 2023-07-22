// services/userApi.js
import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");

  return response.data;
};

export const useGetProductQuery = () => {
  return useQuery("product", fetchUsers);
};
