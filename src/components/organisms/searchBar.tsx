import { useGetCategory } from "@/services/categoryApi";
import SelectComponent from "../atoms/select";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const SearchBar = () => {
  const dispatch = useDispatch();
  const {
    isLoading: loading,
    error: err,
    data: categoryData,
  } = useGetCategory();

  useEffect(() => {
    if (categoryData) {
      dispatch({ type: "GET_CATEGORY_DATA", payload: categoryData });
    }
  }, [dispatch, categoryData]);
  const data =
    categoryData &&
    categoryData.map((item: any) => {
      return { name: item, value: item };
    });
  return (
    <>
      {" "}
      <SelectComponent options={data} />{" "}
    </>
  );
};
export default SearchBar;
