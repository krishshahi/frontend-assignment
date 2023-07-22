import { useDispatch } from "react-redux";
import Cards from "../organisms/cards";
import Slide from "@/components/atoms/Slider";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { useGetProductQuery } from "@/services/productApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Banner from "@/../../public/banner.jpg";

const MainComponent = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const { isLoading, error, data: productData } = useGetProductQuery();
  useEffect(() => {
    if (productData) {
      dispatch({ type: "SET_PRODUCT", payload: productData });
    }
  }, [dispatch, productData]);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 849,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 759,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 719,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 669,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 599,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 492,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 449,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 399,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 345,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 298,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-gray-300">
  <div className="px-5 mt-5 border-b-2 relative bg-white border-black ">
    <Image
      src={Banner}
      alt="Banner"
      className="absolute h-96 w-3/4 object-cover"
    />
    <div className="flex flex-col lg:flex-row rounded-lg w-full  justify-between items-center">
      <div className="flex justify-center relative w-full h-full items-center lg:w-3/5">
        <h1 className="lg:p-24 text-center lg:text-left">
          <p className="font-bold text-xl text-gray-300 lg:absolute lg:top-0 lg:left-0">
            You can find it here
          </p>
          <p className="py-6 font-bold text-4xl">Everything You need</p>
        </h1>
      </div>
      <div className="w-full lg:w-1/5 relative mt-5 lg:mt-0">
        <Slider {...settings} ref={sliderRef} className="h-2/6">
          {productData &&
            productData.map((item: any) => {
              return (
                <div key={item.id}>
                  <Slide productData={item} />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  </div>
  <Cards />
</div>
    </>
  );
};
export default MainComponent;
