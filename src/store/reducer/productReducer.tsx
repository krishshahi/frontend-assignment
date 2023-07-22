import { IProductData } from "@/interface/product";

const initialState: IProductData = {
  product_data: [],
  one_product_data: {},
};

const productReducer = (state: IProductData = initialState, action: any) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...state, product_data: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, one_product_data: action.payload };
    default:
      return state;
  }
};

export default productReducer;
