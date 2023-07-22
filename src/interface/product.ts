type IRating = {
  rate: number;
  count: number;
};
interface IProducts {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: IRating;
}

export interface IProductData {
  product_data: IProducts[];
}
