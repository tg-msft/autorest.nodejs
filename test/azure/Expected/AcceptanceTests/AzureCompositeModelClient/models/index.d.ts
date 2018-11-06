/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Product class.
 * @constructor
 * The product documentation.
 *
 * @property {string} [productId] Unique identifier representing a specific
 * product for a given latitude & longitude. For example, uberX in San
 * Francisco will have a different product_id than uberX in Los Angeles.
 * @property {string} [description] Description of product.
 * @property {string} [displayName] Display name of product.
 * @property {string} [capacity] Capacity of product. For example, 4 people.
 * Default value: '100' .
 * @property {string} [image] Image URL representing the product.
 */
export interface Product {
  productId?: string;
  description?: string;
  displayName?: string;
  capacity?: string;
  image?: string;
}

/**
 * @class
 * Initializes a new instance of the CatalogDictionary class.
 * @constructor
 * @property {object} [productDictionary] Dictionary of products
 */
export interface CatalogDictionary {
  productDictionary?: { [propertyName: string]: Product };
}

/**
 * @class
 * Initializes a new instance of the CatalogArray class.
 * @constructor
 * @property {array} [productArray] Array of products
 */
export interface CatalogArray {
  productArray?: Product[];
}

/**
 * @class
 * Initializes a new instance of the CatalogArrayOfDictionary class.
 * @constructor
 * @property {array} [productArrayOfDictionary] Array of dictionary of products
 */
export interface CatalogArrayOfDictionary {
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}

/**
 * @class
 * Initializes a new instance of the CatalogDictionaryOfArray class.
 * @constructor
 * @property {object} [productDictionaryOfArray] Dictionary of Array of product
 */
export interface CatalogDictionaryOfArray {
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

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
 * Initializes a new instance of the Basic class.
 * @constructor
 * @property {number} [id] Basic Id
 * @property {string} [name] Name property with a very long description that
 * does not fit on a single line and a line break.
 * @property {string} [color] Possible values include: 'cyan', 'Magenta',
 * 'YELLOW', 'blacK'
 */
export interface Basic {
  id?: number;
  name?: string;
  color?: string;
}

/**
 * @class
 * Initializes a new instance of the Pet class.
 * @constructor
 * @property {number} [id]
 * @property {string} [name]
 */
export interface Pet {
  id?: number;
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the Dog class.
 * @constructor
 * @property {string} [food]
 */
export interface Dog extends Pet {
  food?: string;
}

/**
 * @class
 * Initializes a new instance of the Cat class.
 * @constructor
 * @property {string} [color]
 * @property {array} [hates]
 */
export interface Cat extends Pet {
  color?: string;
  hates?: Dog[];
}

/**
 * @class
 * Initializes a new instance of the Siamese class.
 * @constructor
 * @property {string} [breed]
 */
export interface Siamese extends Cat {
  breed?: string;
}

/**
 * @class
 * Initializes a new instance of the Fish class.
 * @constructor
 * @property {string} [species]
 * @property {number} length
 * @property {array} [siblings]
 * @property {string} fishtype Polymorphic Discriminator
 */
export interface Fish {
  species?: string;
  length: number;
  siblings?: Fish[];
  fishtype: string;
}

/**
 * @class
 * Initializes a new instance of the Salmon class.
 * @constructor
 * @property {string} [location]
 * @property {boolean} [iswild]
 */
export interface Salmon extends Fish {
  location?: string;
  iswild?: boolean;
}

/**
 * @class
 * Initializes a new instance of the SmartSalmon class.
 * @constructor
 * @property {string} [collegeDegree]
 */
export interface SmartSalmon extends Salmon {
  collegeDegree?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the Shark class.
 * @constructor
 * @property {number} [age]
 * @property {date} birthday
 */
export interface Shark extends Fish {
  age?: number;
  birthday: Date;
}

/**
 * @class
 * Initializes a new instance of the Sawshark class.
 * @constructor
 * @property {buffer} [picture]
 */
export interface Sawshark extends Shark {
  picture?: Buffer;
}

/**
 * @class
 * Initializes a new instance of the Goblinshark class.
 * @constructor
 * @property {number} [jawsize]
 * @property {string} [color] Colors possible. Possible values include: 'pink',
 * 'gray', 'brown'. Default value: 'gray' .
 */
export interface Goblinshark extends Shark {
  jawsize?: number;
  color?: string;
}

/**
 * @class
 * Initializes a new instance of the Cookiecuttershark class.
 * @constructor
 */
export interface Cookiecuttershark extends Shark {
}

/**
 * @class
 * Initializes a new instance of the IntWrapper class.
 * @constructor
 * @property {number} [field1]
 * @property {number} [field2]
 */
export interface IntWrapper {
  field1?: number;
  field2?: number;
}

/**
 * @class
 * Initializes a new instance of the LongWrapper class.
 * @constructor
 * @property {number} [field1]
 * @property {number} [field2]
 */
export interface LongWrapper {
  field1?: number;
  field2?: number;
}

/**
 * @class
 * Initializes a new instance of the FloatWrapper class.
 * @constructor
 * @property {number} [field1]
 * @property {number} [field2]
 */
export interface FloatWrapper {
  field1?: number;
  field2?: number;
}

/**
 * @class
 * Initializes a new instance of the DoubleWrapper class.
 * @constructor
 * @property {number} [field1]
 * @property {number}
 * [field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose]
 */
export interface DoubleWrapper {
  field1?: number;
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

/**
 * @class
 * Initializes a new instance of the BooleanWrapper class.
 * @constructor
 * @property {boolean} [fieldTrue]
 * @property {boolean} [fieldFalse]
 */
export interface BooleanWrapper {
  fieldTrue?: boolean;
  fieldFalse?: boolean;
}

/**
 * @class
 * Initializes a new instance of the StringWrapper class.
 * @constructor
 * @property {string} [field]
 * @property {string} [empty]
 * @property {string} [nullProperty]
 */
export interface StringWrapper {
  field?: string;
  empty?: string;
  nullProperty?: string;
}

/**
 * @class
 * Initializes a new instance of the DateWrapper class.
 * @constructor
 * @property {date} [field]
 * @property {date} [leap]
 */
export interface DateWrapper {
  field?: Date;
  leap?: Date;
}

/**
 * @class
 * Initializes a new instance of the DatetimeWrapper class.
 * @constructor
 * @property {date} [field]
 * @property {date} [now]
 */
export interface DatetimeWrapper {
  field?: Date;
  now?: Date;
}

/**
 * @class
 * Initializes a new instance of the Datetimerfc1123Wrapper class.
 * @constructor
 * @property {date} [field]
 * @property {date} [now]
 */
export interface Datetimerfc1123Wrapper {
  field?: Date;
  now?: Date;
}

/**
 * @class
 * Initializes a new instance of the DurationWrapper class.
 * @constructor
 * @property {moment.duration} [field]
 */
export interface DurationWrapper {
  field?: moment.Duration;
}

/**
 * @class
 * Initializes a new instance of the ByteWrapper class.
 * @constructor
 * @property {buffer} [field]
 */
export interface ByteWrapper {
  field?: Buffer;
}

/**
 * @class
 * Initializes a new instance of the ArrayWrapper class.
 * @constructor
 * @property {array} [arrayProperty]
 */
export interface ArrayWrapper {
  arrayProperty?: string[];
}

/**
 * @class
 * Initializes a new instance of the DictionaryWrapper class.
 * @constructor
 * @property {object} [defaultProgram]
 */
export interface DictionaryWrapper {
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ReadonlyObj class.
 * @constructor
 * @property {string} [id]
 * @property {number} [size]
 */
export interface ReadonlyObj {
  readonly id?: string;
  size?: number;
}

/**
 * @class
 * Initializes a new instance of the MyBaseType class.
 * @constructor
 * @property {string} [propB1]
 * @property {string} kind Polymorphic Discriminator
 * @property {string} [propBH1]
 * @property {string} kind Polymorphic Discriminator
 */
export interface MyBaseType {
  propB1?: string;
  kind: string;
  propBH1?: string;
}

/**
 * @class
 * Initializes a new instance of the MyDerivedType class.
 * @constructor
 * @property {string} [propD1]
 */
export interface MyDerivedType extends MyBaseType {
  propD1?: string;
}

