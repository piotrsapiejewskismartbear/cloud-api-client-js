import APIEntity from "./APIEntity";
import {APIList, CollectionQueryParams} from './APIList'
import APIResourceUser from "./APIResourceUser";
import {BasicDeviceTime, UserDeviceTime} from "./models/UserDeviceTime";


export interface DeviceTimeQueryParams extends CollectionQueryParams {
  forWholeAccount: boolean;
}


export class APIListDeviceTime extends APIList<UserDeviceTime, DeviceTimeQueryParams, void> {

  /**
   * /device-time
   */
  constructor(parent: APIResourceUser) {
    super(parent);
    this.push('device-time');
  }

  // /device-time/reserved
  reserved() {
    return new APIEntity<BasicDeviceTime>(this).push('reserved');
  }

  // /device-time/used
  used() {
    return new APIEntity<BasicDeviceTime>(this).push('used');
  }

}

export default APIListDeviceTime;
