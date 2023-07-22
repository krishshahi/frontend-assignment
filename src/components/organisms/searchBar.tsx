import { useCategoryById, useGetCategory } from "@/services/categoryApi";
import SelectComponent from "../atoms/select";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
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

  const { isLoading, error, data: category, refetch } = useCategoryById(value);

  useEffect(() => {
    if (value) {
      dispatch({ type: "SET_PRODUCT", payload: category });
    }
  }, [dispatch, value, category]);
  useEffect(() => {
    refetch();
  }, [value, refetch]);
  console.log("category is", category);
  const data =
    categoryData &&
    categoryData.map((item: any) => {
      return { name: item, value: item };
    });

  const onClick = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
      {" "}
      <SelectComponent
        value={value}
        options={data}
        onChange={(e) => onClick(e)}
      />{" "}
    </>
  );
};
export default SearchBar;
