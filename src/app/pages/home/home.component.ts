import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ApiStubService } from '../../core/services/api/api-stub.service';
import { BehaviorSubject } from 'rxjs';
import {ProductItemResponce, ProductItems} from '../../core/services/api/api-service.interface';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  productItems$: BehaviorSubject<ProductItems[]> = new BehaviorSubject(null);


  constructor(
    private apiService: ApiStubService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.apiService.getProductItem().pipe(
      filter(data => data !== undefined),
      filter(data => data !== null),
  ).subscribe((data:ProductItemResponce) => {
      this.productItems$.next(data.items);
    });
  }

  minusItem(id: number) {
    
  }

  plusItem(id: number) {
    
  }

  checkAmountItem(id: number) {
  }

  buyItem(id: number, amount: string) {
    console.log(id, amount);
  }
}
