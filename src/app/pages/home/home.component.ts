import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ApiStubService } from '../../core/services/api/api-stub.service';
import {BehaviorSubject, of, timer} from 'rxjs';
import {ProductItemResponce, ProductItems} from '../../core/services/api/api-service.interface';
import {delay, filter, skip, tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  productItems$: BehaviorSubject<ProductItems[]> = new BehaviorSubject(null);
  qwe1 = 1;
  qwe2 = 10;
  qwe1Bool = false;
  qwe1Boo2 = false;
  sub: any;
  backdata = {
    qwe1: this.qwe1,
    qwe2: this.qwe2,
  };

  constructor(
    private apiService: ApiStubService
  ) {
  }

  ngOnInit() {
    this.apiService.getProductItem().pipe(
      filter(data => data !== undefined),
      filter(data => data !== null),
  ).subscribe((data: ProductItemResponce ) => {
      this.productItems$.next(data.items);
    });
  }



//   quick way to govnokod
plusData() {
  const source = timer(1000, 1000);
  this.sub = source.subscribe(data => {
    if (!this.qwe1Bool) {
      this.qwe1--;
    } else {
      this.qwe1++;
    }
    if (!this.qwe1Boo2) {
      this.qwe2--;
    } else {
      this.qwe2++;
    }
    if (this.qwe1 === -5) {
      this.qwe1Bool = true;
    } else if (this.qwe1 === 10) {
      this.qwe1Bool = false;
    }
    if (this.qwe2 === -5) {
      this.qwe1Boo2 = true;
    } else if (this.qwe2 === 10) {
      this.qwe1Boo2 = false;
    }
  });
}

  stopData() {
    this.sub.unsubscribe();
  }

  resetData() {
    this.qwe1 = this.backdata.qwe1;
    this.qwe2 = this.backdata.qwe2;
  }
// end govnokod


// there we cant gat id and amount
  checkAmountItem(id: number) {
  }

  buyItem(id: number, amount: string) {
    console.log(id, amount);
  }
}
