import { ICategory } from "@/interface/category";

const initialState: ICategory = {
  category_data: [],
};

const categoryReducer = (state: ICategory = initialState, action: any) => {
  switch (action.type) {
    case "GET_CATEGORY_DATA":
      console.log("a", action.payload);
      return { ...state, category_data: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
