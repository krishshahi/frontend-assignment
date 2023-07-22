import { ICategory } from "@/interface/category";

const initialState: ICategory = {
  category_data: [],
  category_one_data: {},
};

const categoryReducer = (state: ICategory = initialState, action: any) => {
  switch (action.type) {
    case "GET_CATEGORY_DATA":
      return { ...state, category_data: action.payload };
    case "GET_CATEGORY_DATA_ID":
      return { ...state, category_one_data: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
