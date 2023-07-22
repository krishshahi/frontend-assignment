import { combineReducers } from "redux";
import productReducer from "./reducer/productReducer";
import categoryReducer from "./reducer/categoryReducer";

const rootReducer = combineReducers({
  productList: productReducer,
  categoryList: categoryReducer,
});

export default rootReducer;
