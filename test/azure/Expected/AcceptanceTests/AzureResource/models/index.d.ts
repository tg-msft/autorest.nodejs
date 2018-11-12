/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * Some resource
*/
export interface Resource extends BaseResource {
  /**
   * Resource Id
  */
  readonly id?: string;
  /**
   * Resource Type
  */
  readonly type?: string;
  tags?: { [propertyName: string]: string };
  /**
   * Resource Location
  */
  location?: string;
  /**
   * Resource Name
  */
  readonly name?: string;
}

export interface FlattenedProduct extends Resource {
  pname?: string;
  lsize?: number;
  provisioningState?: string;
}

export interface ResourceCollection {
  productresource?: FlattenedProduct;
  arrayofresources?: FlattenedProduct[];
  dictionaryofresources?: { [propertyName: string]: FlattenedProduct };
}
