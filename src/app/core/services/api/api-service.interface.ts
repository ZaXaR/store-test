import { Observable } from 'rxjs';

export interface ProductItemResponce {
  items: ProductItems[]
}

export interface ProductItems {
  id: number,
  name: string,
  price: number,
  amount: number,
}

export interface ApiServiceInterface {
  getProductItem(): Observable<ProductItemResponce>;
}
