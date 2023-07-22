import React from "react";

type IProduct={
    title:string;
    image:string;
}

interface ISlider{
    productData?:IProduct,
    onClick?:React.MouseEventHandler
}

const Slide:React.FC<ISlider> = ({ productData, onClick }) => {
    
    return (
        <div className='cursor-pointer' onClick={onClick}  >
            <img src={productData?.image} className="w-full object-contain rounded-lg" />
        </div>


    );
};
export default Slide;