import { Injectable } from '@angular/core';
import { CommonserviceService } from './commonservice.service';

@Injectable()
export class UtilityService {

  constructor(private commonS: CommonserviceService) { }
  subscription: any;

  init() {
    return new Promise<void>((resolve, reject) => {
      this.subscription = this.commonS.getSpaceXServerdata().subscribe((result)=>
      {
        this.commonS.setSpaceXdata(result);
        resolve();
      },(error)=>{
        reject();
      });
    });
  }
}
