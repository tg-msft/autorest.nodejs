/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @property {number} [status]
 * @property {string} [message]
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the PetAPTrue class.
 * @constructor
 * @property {number} id
 * @property {string} [name]
 * @property {boolean} [status]
 */
export interface PetAPTrue {
  id: number;
  name?: string;
  readonly status?: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the CatAPTrue class.
 * @constructor
 * @property {boolean} [friendly]
 */
export interface CatAPTrue extends PetAPTrue {
  friendly?: boolean;
}

/**
 * @class
 * Initializes a new instance of the PetAPObject class.
 * @constructor
 * @property {number} id
 * @property {string} [name]
 * @property {boolean} [status]
 */
export interface PetAPObject {
  id: number;
  name?: string;
  readonly status?: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the PetAPString class.
 * @constructor
 * @property {number} id
 * @property {string} [name]
 * @property {boolean} [status]
 */
export interface PetAPString {
  id: number;
  name?: string;
  readonly status?: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * MUST be of type "string". Due to valid TS constraints we have modeled this
   * as a union of `string | any`.
   */
  [property: string]: string | any;
}

/**
 * @class
 * Initializes a new instance of the PetAPInProperties class.
 * @constructor
 * @property {number} id
 * @property {string} [name]
 * @property {boolean} [status]
 * @property {object} [additionalProperties]
 */
export interface PetAPInProperties {
  id: number;
  name?: string;
  readonly status?: boolean;
  additionalProperties?: { [propertyName: string]: number };
}

/**
 * @class
 * Initializes a new instance of the PetAPInPropertiesWithAPString class.
 * @constructor
 * @property {number} id
 * @property {string} [name]
 * @property {boolean} [status]
 * @property {string} odatalocation
 * @property {object} [additionalProperties1]
 */
export interface PetAPInPropertiesWithAPString {
  id: number;
  name?: string;
  readonly status?: boolean;
  odatalocation: string;
  additionalProperties1?: { [propertyName: string]: number };
  /**
   * @property Describes unknown properties. The value of an unknown property
   * MUST be of type "string". Due to valid TS constraints we have modeled this
   * as a union of `string | any`.
   */
  [property: string]: string | any;
}
