import { Injectable } from '@angular/core';
import {ApiServiceInterface, ProductItemResponce, ProductItems} from './api-service.interface';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { delay, dematerialize, materialize } from 'rxjs/operators';
import { StubConstants } from '../../../constant/stub-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiStubService implements  ApiServiceInterface {

  delayedResponse<T>(res: Observable<T>): Observable<T> {
    return res.pipe(
      materialize(),
      delay(environment.stub.responseDelay),
      dematerialize()
    );
  }

  getProductItem(): Observable<ProductItemResponce> {
    return this.delayedResponse(of({
      items: StubConstants.items as ProductItems[],
    })
    );
  }

  constructor() { }
}
