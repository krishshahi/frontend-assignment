import { useGetProductQuery } from "@/services/productApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Cards = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data: productData } = useGetProductQuery();
  useEffect(() => {
    if (productData) {
      dispatch({ type: "SET_PRODUCT", payload: productData });
    }
  }, [dispatch, productData]);
  console.log("prodd", productData);
  return (
    <>
       <div className=" m-4  grid grid-cols-3  justify-center items-center gap-4  border-gray-300 my-8 rounded-lg h-full">
        {productData && productData.map((item:any) => {
          return (
            <div key={item.id} className=' rounded-xl py-2 bg-white  hover:shadow-2xl shadow-lg w-84 relative overflow-hidden cursor-pointer'>
              <img src={item.image} className="w-full p-2 -mt-2  h-60 object-cover hover:scale-125  duration-500 rounded-t-2xl" />
              <div className='mt-4 px-4 py-2 flex item-center justify-between '>
                <div className=''>
                  <h2 className=' font-bold'>
                    {item.title}
                  </h2>
                  <span className='flex text-xs'>
                  Rs. {item.price}
                  </span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm'>
                    Ratings
                  </span>
                  <span className='text-xs font-bold py-1'>
                    {item.rating.rate}
                  </span>
                  <span className='text-xs font-bold py-1'>
                    {item.rating.count}
                  </span>
                </div>            
              </div>
              <div className='flex  border-t-2 p-1 px-4 font-semibold'>
                {item.category}
              
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};
export default Cards;
