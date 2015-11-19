'use strict';

describe('Service: endpointConfigService', function () {

  // load the service's module
  beforeEach(module('zhidaoApp'));

  // instantiate service
  var endpointConfigService;
  beforeEach(inject(function (_endpointConfigService_) {
    endpointConfigService = _endpointConfigService_;
  }));

  it('should do something', function () {
    expect(!!endpointConfigService).toBe(true);
  });

});
