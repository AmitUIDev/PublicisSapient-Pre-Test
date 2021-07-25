import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.scss']
})
export class DatafilterComponent {
  @Output() filterEvent = new EventEmitter<any>();
  filter = {
    yearFilter: null,
    sucessLanding: null,
    sucessLaunch: null
  }

  onFilterYear(event: any) {
    this.filter.yearFilter = event;
    this.filterEvent.emit(this.filter);
  }

  onFilterSuccess(event: any) {
    this.filter.sucessLanding = event;
    this.filterEvent.emit(this.filter);
  }

  onFilterLaunch(event: any) {
    this.filter.sucessLaunch = event;
    this.filterEvent.emit(this.filter);
  }
}
