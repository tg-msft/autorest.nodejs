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
import * as operations from "./operations";

/**
 * AutoRestUrlTestServiceOptions for AutoRestUrlTestService.
 */
declare interface AutoRestUrlTestServiceOptions extends ServiceClientOptions {
  /**
   * @property {string} [globalStringQuery] - should contain value null
   */
  globalStringQuery?: string;
}

declare class AutoRestUrlTestService extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the AutoRestUrlTestService class.
   * @constructor
   *
   * @param {string} globalStringPath - A string value 'globalItemStringPath' that appears in the path
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
   * @param {string} [options.globalStringQuery] - should contain value null
   *
   */
  constructor(globalStringPath: string, baseUri?: string, options?: AutoRestUrlTestServiceOptions);

  globalStringPath: string;

  globalStringQuery: string;

  // Operation groups
  paths: operations.Paths;
  queries: operations.Queries;
  pathItems: operations.PathItems;
}

export = AutoRestUrlTestService;
