import * as fromRoot from '../../state/app.state';
import { Product } from "./../product";

export interface State extends fromRoot.State{
  products: ProductState;
}

export interface ProductState {
  products: Product[];
  currentProduct: Product;
  showProductCode: boolean;
}

const initialState =  {
  products: null,
  currentProduct: null,
  showProductCode: true,
}

export function ProductReduce(state: ProductState = initialState , action): ProductState {
  switch (action.type) {
    case "TOGGLE_PRODUCT_CODE":
      return {
        ...state,
        showProductCode: action.payload,
      };

    default:
      return state;
  }
}
