import {API} from "../API";
import {APIAdminListNotificationPlans} from "./APIAdminListNotificationPlans";
import {APIAdminResource} from "./APIAdminResource";
import {APIList} from "./APIList";


describe('APIAdminListNotificationPlans', () => {
  const cloudUrl = 'https://cloud.bitbar.com';
  let service: APIAdminListNotificationPlans;
  let api: API;
  let adminResource: APIAdminResource;

  beforeEach(() => {
    api = new API({
      baseURL: '',
      cloudUrl
    });
    adminResource = new APIAdminResource(api);
    service = new APIAdminListNotificationPlans(adminResource);
  });

  it('should initialize proper endpoint path', () => {
    expect(service.toUrl()).toEqual('/admin/notification-plans');
  });

  describe('@channels', () => {
    it('should return APIListCleanupConfigurations', () => {
      const call = service.channels();
      expect(call).toBeInstanceOf(APIList);
      expect(call.toUrl()).toEqual('/admin/notification-plans/channels');
    });
  });

  describe('@scopes', () => {
    it('should initialize proper endpoint path', () => {
      const call = service.scopes();
      expect(call).toBeInstanceOf(APIList);
      expect(call.toUrl()).toEqual('/admin/notification-plans/scopes');
    });
  });

});
