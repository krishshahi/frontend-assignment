"use-client";
import { RootState } from "@/store/types";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useGetProductById } from "@/services/productApi";
import { useEffect, useState } from "react";
import useCounter from "@/hooks/counter";
import CounterComponent from "@/components/molecules/counter";
import Header from "@/components/templates/Header";
const Category = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { count, increment, decrement } = useCounter(0);
  const [countNumber, setCountNumber] = useState(count);
  const prodData = useSelector(
    (state: RootState) => state.productList.one_product_data
  );
  const {
    isLoading,
    error,
    data: productData,
    refetch,
  } = useGetProductById(router.query.slug);
  useEffect(() => {
    if (productData) {
      dispatch({ type: "GET_ONE_PRODUCT", payload: productData });
    }
  }, [dispatch, prodData, productData]);
  useEffect(() => {
    refetch();
  }, [router.query.slug, refetch]);
  useEffect(() => {
    setCountNumber(count);
  }, [count]);
  console.log("num", countNumber);
  if (!prodData) {
    return <h1>Please wait for a moment data is loading...</h1>;
  }
  const onBack = () => {
    router.back();
  };
  return (
    <>
      <Header />
      <div className="category-container gap-10">
        <button onClick={onBack} className="absolute left-0 px-5">
          Back
        </button>
        <div className="img-container">
          <img src={prodData.image} alt="loading" className="img" />
        </div>

        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold">{prodData.title}</h1>
          <span>
            <h4 className="text-xl font-bold text-red-600 py-5">
              Price: ${count > 0 ? prodData.price * count : prodData.price}
            </h4>
          </span>
          <p>{prodData.description}</p>
          <CounterComponent
            increment={increment}
            decrement={decrement}
            count={count}
          />
          <div className="border border-solid border-gray-300"></div>
          <div className="flex gap-2 py-3">
            <h4 className="font-bold">Category: </h4>
            <h4>{prodData.category}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
