/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');


/**
 * Validates input parameters on the method. See swagger for details.
 * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
 * [a-zA-Z0-9]+.
 * @param {number} id Required int multiple of 10 from 100 to 1000.
 * @param {object} [options] Optional Parameters.
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _validationOfMethodParameters(resourceGroupName, id, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 10)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 10');
      }
      if (resourceGroupName.length < 3)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 3');
      }
      if (resourceGroupName.match(/[a-zA-Z0-9]+/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9]+/');
      }
    }
    if (id === null || id === undefined || typeof id !== 'number') {
      throw new Error('id cannot be null or undefined and it must be of type number.');
    }
    if (id !== null && id !== undefined) {
      if (id > 1000)
      {
        throw new Error('"id" should satisfy the constraint - "InclusiveMaximum": 1000');
      }
      if (id < 100)
      {
        throw new Error('"id" should satisfy the constraint - "InclusiveMinimum": 100');
      }
      if (id % 10 !== 0)
      {
        throw new Error('"id" should satisfy the constraint - "MultipleOf": 10');
      }
    }
    if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
      throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.apiVersion !== null && this.apiVersion !== undefined) {
      if (this.apiVersion.match(/\d{2}-\d{2}-\d{4}/) === null)
      {
        throw new Error('"this.apiVersion" should satisfy the constraint - "Pattern": /\d{2}-\d{2}-\d{4}/');
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'fakepath/{subscriptionId}/{resourceGroupName}/{id}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
  let queryParameters = [];
  queryParameters.push('apiVersion=' + encodeURIComponent(this.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Product']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Validates body parameters on the method. See swagger for details.
 * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
 * [a-zA-Z0-9]+.
 * @param {number} id Required int multiple of 10 from 100 to 1000.
 * @param {object} [options] Optional Parameters.
 * @param {object} [options.body]
 * @param {array} [options.body.displayNames] Non required array of unique items from 0 to 6
 * elements.
 * @param {number} [options.body.capacity] Non required int betwen 0 and 100 exclusive.
 * @param {string} [options.body.image] Image URL representing the product.
 * @param {object} options.body.child
 * @param {number} [options.body.child.count] Count
 * @param {string} [options.body.constStringAsEnum] Constant string as Enum. Possible values
 * include: 'constant_string_as_enum'
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _validationOfBody(resourceGroupName, id, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let body = (options && options.body !== undefined) ? options.body : undefined;
  // Validate
  try {
    if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 10)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 10');
      }
      if (resourceGroupName.length < 3)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 3');
      }
      if (resourceGroupName.match(/[a-zA-Z0-9]+/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9]+/');
      }
    }
    if (id === null || id === undefined || typeof id !== 'number') {
      throw new Error('id cannot be null or undefined and it must be of type number.');
    }
    if (id !== null && id !== undefined) {
      if (id > 1000)
      {
        throw new Error('"id" should satisfy the constraint - "InclusiveMaximum": 1000');
      }
      if (id < 100)
      {
        throw new Error('"id" should satisfy the constraint - "InclusiveMinimum": 100');
      }
      if (id % 10 !== 0)
      {
        throw new Error('"id" should satisfy the constraint - "MultipleOf": 10');
      }
    }
    if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
      throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.apiVersion !== null && this.apiVersion !== undefined) {
      if (this.apiVersion.match(/\d{2}-\d{2}-\d{4}/) === null)
      {
        throw new Error('"this.apiVersion" should satisfy the constraint - "Pattern": /\d{2}-\d{2}-\d{4}/');
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'fakepath/{subscriptionId}/{resourceGroupName}/{id}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
  let queryParameters = [];
  queryParameters.push('apiVersion=' + encodeURIComponent(this.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (body !== null && body !== undefined) {
      let requestModelMapper = new client.models['Product']().mapper();
      requestModel = client.serialize(requestModelMapper, body, 'body');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(body, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Product']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @param {object} [options] Optional Parameters.
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _getWithConstantInPath(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let constantParam = 'constant';

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'validation/constantsInPath/{constantParam}/value';
  requestUrl = requestUrl.replace('{constantParam}', encodeURIComponent(constantParam));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @param {object} [options] Optional Parameters.
 * @param {object} [options.body]
 * @param {array} [options.body.displayNames] Non required array of unique items from 0 to 6
 * elements.
 * @param {number} [options.body.capacity] Non required int betwen 0 and 100 exclusive.
 * @param {string} [options.body.image] Image URL representing the product.
 * @param {object} options.body.child
 * @param {number} [options.body.child.count] Count
 * @param {string} [options.body.constStringAsEnum] Constant string as Enum. Possible values
 * include: 'constant_string_as_enum'
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _postWithConstantInBody(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let body = (options && options.body !== undefined) ? options.body : undefined;
  let constantParam = 'constant';

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'validation/constantsInPath/{constantParam}/value';
  requestUrl = requestUrl.replace('{constantParam}', encodeURIComponent(constantParam));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (body !== null && body !== undefined) {
      let requestModelMapper = new client.models['Product']().mapper();
      requestModel = client.serialize(requestModelMapper, body, 'body');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(body, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Product']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a AutoRestValidationTest. */
class AutoRestValidationTest extends ServiceClient {
  /**
   * Create a AutoRestValidationTest.
   * @param {string} subscriptionId - Subscription ID.
   * @param {string} apiVersion - Required string following pattern \d{2}-\d{2}-\d{4}
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(subscriptionId, apiVersion, baseUri, options) {
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }
    if (apiVersion === null || apiVersion === undefined) {
      throw new Error('\'apiVersion\' cannot be null.');
    }

    if (!options) options = {};

    super(null, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }
    this.subscriptionId = subscriptionId;
    this.apiVersion = apiVersion;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.models = models;
    this._validationOfMethodParameters = _validationOfMethodParameters;
    this._validationOfBody = _validationOfBody;
    this._getWithConstantInPath = _getWithConstantInPath;
    this._postWithConstantInBody = _postWithConstantInBody;
    msRest.addSerializationMixin(this);
  }

  /**
   * Validates input parameters on the method. See swagger for details.
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._validationOfMethodParameters(resourceGroupName, id, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Validates input parameters on the method. See swagger for details.
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  validationOfMethodParameters(resourceGroupName, id, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._validationOfMethodParameters(resourceGroupName, id, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._validationOfMethodParameters(resourceGroupName, id, options, optionalCallback);
    }
  }

  /**
   * Validates body parameters on the method. See swagger for details.
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.body]
   * @param {array} [options.body.displayNames] Non required array of unique items from 0 to 6
   * elements.
   * @param {number} [options.body.capacity] Non required int betwen 0 and 100 exclusive.
   * @param {string} [options.body.image] Image URL representing the product.
   * @param {object} options.body.child
   * @param {number} [options.body.child.count] Count
   * @param {string} [options.body.constStringAsEnum] Constant string as Enum. Possible values
   * include: 'constant_string_as_enum'
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._validationOfBody(resourceGroupName, id, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Validates body parameters on the method. See swagger for details.
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.body]
   * @param {array} [options.body.displayNames] Non required array of unique items from 0 to 6
   * elements.
   * @param {number} [options.body.capacity] Non required int betwen 0 and 100 exclusive.
   * @param {string} [options.body.image] Image URL representing the product.
   * @param {object} options.body.child
   * @param {number} [options.body.child.count] Count
   * @param {string} [options.body.constStringAsEnum] Constant string as Enum. Possible values
   * include: 'constant_string_as_enum'
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  validationOfBody(resourceGroupName, id, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._validationOfBody(resourceGroupName, id, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._validationOfBody(resourceGroupName, id, options, optionalCallback);
    }
  }

  /**
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  getWithConstantInPathWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getWithConstantInPath(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  getWithConstantInPath(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getWithConstantInPath(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getWithConstantInPath(options, optionalCallback);
    }
  }

  /**
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.body]
   * @param {array} [options.body.displayNames] Non required array of unique items from 0 to 6
   * elements.
   * @param {number} [options.body.capacity] Non required int betwen 0 and 100 exclusive.
   * @param {string} [options.body.image] Image URL representing the product.
   * @param {object} options.body.child
   * @param {number} [options.body.child.count] Count
   * @param {string} [options.body.constStringAsEnum] Constant string as Enum. Possible values
   * include: 'constant_string_as_enum'
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  postWithConstantInBodyWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._postWithConstantInBody(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.body]
   * @param {array} [options.body.displayNames] Non required array of unique items from 0 to 6
   * elements.
   * @param {number} [options.body.capacity] Non required int betwen 0 and 100 exclusive.
   * @param {string} [options.body.image] Image URL representing the product.
   * @param {object} options.body.child
   * @param {number} [options.body.child.count] Count
   * @param {string} [options.body.constStringAsEnum] Constant string as Enum. Possible values
   * include: 'constant_string_as_enum'
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  postWithConstantInBody(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._postWithConstantInBody(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._postWithConstantInBody(options, optionalCallback);
    }
  }

}

module.exports = AutoRestValidationTest;
module.exports['default'] = AutoRestValidationTest;
module.exports.AutoRestValidationTest = AutoRestValidationTest;
module.exports.AutoRestValidationTestModels = models;
