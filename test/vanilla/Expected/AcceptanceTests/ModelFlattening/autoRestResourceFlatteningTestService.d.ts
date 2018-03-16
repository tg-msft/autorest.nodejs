/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from "./models";

export default class AutoRestResourceFlatteningTestService extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the AutoRestResourceFlatteningTestService class.
   * @constructor
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
   */
  constructor(baseUri?: string, options?: ServiceClientOptions);


  /**
   * Put External Resource as an Array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.resourceArray] External Resource as an Array to put
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  putArrayWithHttpOperationResponse(options?: { resourceArray? : models.Resource[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * Put External Resource as an Array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.resourceArray] External Resource as an Array to put
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  putArray(options?: { resourceArray? : models.Resource[], customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  putArray(callback: ServiceCallback<void>): void;
  putArray(options: { resourceArray? : models.Resource[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


  /**
   * Get External Resource as an Array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getArrayWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.FlattenedProduct[]>>;

  /**
   * Get External Resource as an Array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Array} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getArray(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.FlattenedProduct[]>;
  getArray(callback: ServiceCallback<models.FlattenedProduct[]>): void;
  getArray(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FlattenedProduct[]>): void;


  /**
   * No need to have a route in Express server for this operation. Used to verify
   * the type flattened is not removed if it's referenced in an array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.resourceArray] External Resource as an Array to put
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  putWrappedArrayWithHttpOperationResponse(options?: { resourceArray? : models.WrappedProduct[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * No need to have a route in Express server for this operation. Used to verify
   * the type flattened is not removed if it's referenced in an array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.resourceArray] External Resource as an Array to put
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  putWrappedArray(options?: { resourceArray? : models.WrappedProduct[], customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  putWrappedArray(callback: ServiceCallback<void>): void;
  putWrappedArray(options: { resourceArray? : models.WrappedProduct[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


  /**
   * No need to have a route in Express server for this operation. Used to verify
   * the type flattened is not removed if it's referenced in an array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getWrappedArrayWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ProductWrapper[]>>;

  /**
   * No need to have a route in Express server for this operation. Used to verify
   * the type flattened is not removed if it's referenced in an array
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Array} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getWrappedArray(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ProductWrapper[]>;
  getWrappedArray(callback: ServiceCallback<models.ProductWrapper[]>): void;
  getWrappedArray(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ProductWrapper[]>): void;


  /**
   * Put External Resource as a Dictionary
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.resourceDictionary] External Resource as a
   * Dictionary to put
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  putDictionaryWithHttpOperationResponse(options?: { resourceDictionary? : { [propertyName: string]: models.FlattenedProduct }, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * Put External Resource as a Dictionary
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.resourceDictionary] External Resource as a
   * Dictionary to put
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  putDictionary(options?: { resourceDictionary? : { [propertyName: string]: models.FlattenedProduct }, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  putDictionary(callback: ServiceCallback<void>): void;
  putDictionary(options: { resourceDictionary? : { [propertyName: string]: models.FlattenedProduct }, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


  /**
   * Get External Resource as a Dictionary
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getDictionaryWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<{ [propertyName: string]: models.FlattenedProduct }>>;

  /**
   * Get External Resource as a Dictionary
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDictionary(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<{ [propertyName: string]: models.FlattenedProduct }>;
  getDictionary(callback: ServiceCallback<{ [propertyName: string]: models.FlattenedProduct }>): void;
  getDictionary(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<{ [propertyName: string]: models.FlattenedProduct }>): void;


  /**
   * Put External Resource as a ResourceCollection
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.resourceComplexObject] External Resource as a
   * ResourceCollection to put
   *
   * @param {object} [options.resourceComplexObject.productresource]
   *
   * @param {string} [options.resourceComplexObject.productresource.pname]
   *
   * @param {string}
   * [options.resourceComplexObject.productresource.flattenedProductType]
   *
   * @param {string}
   * [options.resourceComplexObject.productresource.provisioningState]
   *
   * @param {object} [options.resourceComplexObject.productresource.tags]
   *
   * @param {string} [options.resourceComplexObject.productresource.location]
   * Resource Location
   *
   * @param {array} [options.resourceComplexObject.arrayofresources]
   *
   * @param {object} [options.resourceComplexObject.dictionaryofresources]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  putResourceCollectionWithHttpOperationResponse(options?: { resourceComplexObject? : models.ResourceCollection, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * Put External Resource as a ResourceCollection
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.resourceComplexObject] External Resource as a
   * ResourceCollection to put
   *
   * @param {object} [options.resourceComplexObject.productresource]
   *
   * @param {string} [options.resourceComplexObject.productresource.pname]
   *
   * @param {string}
   * [options.resourceComplexObject.productresource.flattenedProductType]
   *
   * @param {string}
   * [options.resourceComplexObject.productresource.provisioningState]
   *
   * @param {object} [options.resourceComplexObject.productresource.tags]
   *
   * @param {string} [options.resourceComplexObject.productresource.location]
   * Resource Location
   *
   * @param {array} [options.resourceComplexObject.arrayofresources]
   *
   * @param {object} [options.resourceComplexObject.dictionaryofresources]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  putResourceCollection(options?: { resourceComplexObject? : models.ResourceCollection, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  putResourceCollection(callback: ServiceCallback<void>): void;
  putResourceCollection(options: { resourceComplexObject? : models.ResourceCollection, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


  /**
   * Get External Resource as a ResourceCollection
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceCollection>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getResourceCollectionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceCollection>>;

  /**
   * Get External Resource as a ResourceCollection
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceCollection} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceCollection} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceCollection} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getResourceCollection(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceCollection>;
  getResourceCollection(callback: ServiceCallback<models.ResourceCollection>): void;
  getResourceCollection(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceCollection>): void;


  /**
   * Put Simple Product with client flattening true on the model
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.simpleBodyProduct] Simple body product to put
   *
   * @param {string} options.simpleBodyProduct.maxProductDisplayName Display name
   * of product.
   *
   * @param {string} [options.simpleBodyProduct.genericValue] Generic URL value.
   *
   * @param {string} [options.simpleBodyProduct.odatavalue] URL value.
   *
   * @param {string} options.simpleBodyProduct.productId Unique identifier
   * representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX
   * in Los Angeles.
   *
   * @param {string} [options.simpleBodyProduct.description] Description of
   * product.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<SimpleProduct>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  putSimpleProductWithHttpOperationResponse(options?: { simpleBodyProduct? : models.SimpleProduct, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SimpleProduct>>;

  /**
   * Put Simple Product with client flattening true on the model
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.simpleBodyProduct] Simple body product to put
   *
   * @param {string} options.simpleBodyProduct.maxProductDisplayName Display name
   * of product.
   *
   * @param {string} [options.simpleBodyProduct.genericValue] Generic URL value.
   *
   * @param {string} [options.simpleBodyProduct.odatavalue] URL value.
   *
   * @param {string} options.simpleBodyProduct.productId Unique identifier
   * representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX
   * in Los Angeles.
   *
   * @param {string} [options.simpleBodyProduct.description] Description of
   * product.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {SimpleProduct} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {SimpleProduct} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SimpleProduct} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  putSimpleProduct(options?: { simpleBodyProduct? : models.SimpleProduct, customHeaders? : { [headerName: string]: string; } }): Promise<models.SimpleProduct>;
  putSimpleProduct(callback: ServiceCallback<models.SimpleProduct>): void;
  putSimpleProduct(options: { simpleBodyProduct? : models.SimpleProduct, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SimpleProduct>): void;


  /**
   * Put Flattened Simple Product with client flattening true on the parameter
   *
   * @param {string} productId Unique identifier representing a specific product
   * for a given latitude & longitude. For example, uberX in San Francisco will
   * have a different product_id than uberX in Los Angeles.
   *
   * @param {string} maxProductDisplayName Display name of product.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.description] Description of product.
   *
   * @param {string} [options.genericValue] Generic URL value.
   *
   * @param {string} [options.odatavalue] URL value.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<SimpleProduct>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  postFlattenedSimpleProductWithHttpOperationResponse(productId: string, maxProductDisplayName: string, options?: { description? : string, genericValue? : string, odatavalue? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SimpleProduct>>;

  /**
   * Put Flattened Simple Product with client flattening true on the parameter
   *
   * @param {string} productId Unique identifier representing a specific product
   * for a given latitude & longitude. For example, uberX in San Francisco will
   * have a different product_id than uberX in Los Angeles.
   *
   * @param {string} maxProductDisplayName Display name of product.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.description] Description of product.
   *
   * @param {string} [options.genericValue] Generic URL value.
   *
   * @param {string} [options.odatavalue] URL value.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {SimpleProduct} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {SimpleProduct} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SimpleProduct} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  postFlattenedSimpleProduct(productId: string, maxProductDisplayName: string, options?: { description? : string, genericValue? : string, odatavalue? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.SimpleProduct>;
  postFlattenedSimpleProduct(productId: string, maxProductDisplayName: string, callback: ServiceCallback<models.SimpleProduct>): void;
  postFlattenedSimpleProduct(productId: string, maxProductDisplayName: string, options: { description? : string, genericValue? : string, odatavalue? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SimpleProduct>): void;


  /**
   * Put Simple Product with client flattening true on the model
   *
   * @param {object} flattenParameterGroup Additional parameters for the
   * operation
   *
   * @param {string} flattenParameterGroup.name Product name with value
   * 'groupproduct'
   *
   * @param {string} flattenParameterGroup.productId Unique identifier
   * representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX
   * in Los Angeles.
   *
   * @param {string} [flattenParameterGroup.description] Description of product.
   *
   * @param {string} flattenParameterGroup.maxProductDisplayName Display name of
   * product.
   *
   * @param {string} [flattenParameterGroup.genericValue] Generic URL value.
   *
   * @param {string} [flattenParameterGroup.odatavalue] URL value.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<SimpleProduct>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  putSimpleProductWithGroupingWithHttpOperationResponse(flattenParameterGroup: models.FlattenParameterGroup, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SimpleProduct>>;

  /**
   * Put Simple Product with client flattening true on the model
   *
   * @param {object} flattenParameterGroup Additional parameters for the
   * operation
   *
   * @param {string} flattenParameterGroup.name Product name with value
   * 'groupproduct'
   *
   * @param {string} flattenParameterGroup.productId Unique identifier
   * representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX
   * in Los Angeles.
   *
   * @param {string} [flattenParameterGroup.description] Description of product.
   *
   * @param {string} flattenParameterGroup.maxProductDisplayName Display name of
   * product.
   *
   * @param {string} [flattenParameterGroup.genericValue] Generic URL value.
   *
   * @param {string} [flattenParameterGroup.odatavalue] URL value.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {SimpleProduct} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {SimpleProduct} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SimpleProduct} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  putSimpleProductWithGrouping(flattenParameterGroup: models.FlattenParameterGroup, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.SimpleProduct>;
  putSimpleProductWithGrouping(flattenParameterGroup: models.FlattenParameterGroup, callback: ServiceCallback<models.SimpleProduct>): void;
  putSimpleProductWithGrouping(flattenParameterGroup: models.FlattenParameterGroup, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SimpleProduct>): void;
}

export { AutoRestResourceFlatteningTestService, models as AutoRestResourceFlatteningTestServiceModels };
