import { useGetProductById, useGetProductQuery } from "@/services/productApi";
import { RootState } from "@/store/types";
import { stat } from "fs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Cards = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const prodData = useSelector(
    (state: RootState) => state.productList.product_data
  );
  const { isLoading, error, data: productData } = useGetProductQuery();
  const {
    isLoading: loading,
    error: err,
    data: data,
    refetch,
  } = useGetProductById(value);
  useEffect(() => {
    if (productData) {
      dispatch({ type: "SET_PRODUCT", payload: productData });
    }
  }, [dispatch, productData]);
  useEffect(() => {
    if (value) {
      dispatch({ type: "GET_ONE_PRODUCT", payload: data });
    }
  }, [dispatch, value, data]);
  useEffect(() => {
    refetch();
  }, [value, refetch]);
  const handleClick = (id: number) => {
    setValue(id);
    router.push(`category/${id}`);
  };
  return (
    <>
      <div className=" m-4  grid lg:grid-cols-4   justify-center items-center gap-4  border-gray-300 my-8 rounded-lg h-full">
        {prodData &&
          prodData.map((item: any) => {
            return (
              <div
                onClick={() => handleClick(item.id)}
                key={item.id}
                className=" rounded-xl py-2 bg-white  hover:shadow-2xl shadow-lg w-84 relative overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  className="w-full p-2 -mt-2  h-60 object-cover hover:scale-125  duration-500 rounded-t-2xl"
                />
                <div className="mt-4 px-4 py-2 flex item-center justify-between ">
                  <div className="">
                    <h2 className=" font-bold">{item.title}</h2>
                    <span className="flex text-xs">Rs. {item.price}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm">Ratings</span>
                    <span className="text-xs font-bold py-1">
                      {item.rating.rate}
                    </span>
                    <span className="text-xs font-bold py-1">
                      {item.rating.count}
                    </span>
                  </div>
                </div>
                <div className="flex  border-t-2 p-1 px-4 font-semibold">
                  {item.category}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Cards;
