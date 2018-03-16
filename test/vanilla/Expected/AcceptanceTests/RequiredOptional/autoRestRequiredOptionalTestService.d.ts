/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

/**
 * AutoRestRequiredOptionalTestServiceOptions for AutoRestRequiredOptionalTestService.
 */
declare interface AutoRestRequiredOptionalTestServiceOptions extends ServiceClientOptions {
  /**
   * @property {number} [optionalGlobalQuery] - number of items to skip
   */
  optionalGlobalQuery?: number;
}

export default class AutoRestRequiredOptionalTestService extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the AutoRestRequiredOptionalTestService class.
   * @constructor
   *
   * @param {string} requiredGlobalPath - number of items to skip
   *
   * @param {string} requiredGlobalQuery - number of items to skip
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {number} [options.optionalGlobalQuery] - number of items to skip
   *
   */
  constructor(requiredGlobalPath: string, requiredGlobalQuery: string, baseUri?: string, options?: AutoRestRequiredOptionalTestServiceOptions);

  requiredGlobalPath: string;

  requiredGlobalQuery: string;

  optionalGlobalQuery: number;

  // Operation groups
  implicit: operations.Implicit;
  explicit: operations.Explicit;
}

export { AutoRestRequiredOptionalTestService, models as AutoRestRequiredOptionalTestServiceModels };
