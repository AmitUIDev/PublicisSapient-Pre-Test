import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonserviceService } from './common/commonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  products: any[] = [];
  subscription: any;
  constructor(private commonS: CommonserviceService) { }

  ngOnInit(): void {
    this.products = this.commonS.getSpaceXdata();
    // this.commonS.getSpaceXdata().subscribe((result) => {
    //   this.products = result;
    //   console.log(result);
    // })
  }

  onFilterChanged(event: any) {
    this.subscription = this.commonS.getSpaceXfilterddata(event).subscribe((result) => {
      this.products = result;
      console.log(result);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
