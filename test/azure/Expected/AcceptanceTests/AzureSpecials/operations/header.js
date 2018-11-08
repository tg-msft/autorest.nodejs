/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
 * @param {string} fooClientRequestId The fooRequestId
 * @param {object} [options] Optional Parameters.
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _customNamedRequestId(fooClientRequestId, options, callback) {
  /*
   * jshint validthis: true
   */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (fooClientRequestId === null || fooClientRequestId === undefined || typeof fooClientRequestId.valueOf() !== 'string') {
      throw new Error('fooClientRequestId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/customNamedRequestId';
  let queryParameters = [];
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['foo-client-request-id'] = msRestAzure.generateUuid();
  }
  if (fooClientRequestId !== undefined && fooClientRequestId !== null) {
    httpRequest.headers['foo-client-request-id'] = fooClientRequestId;
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
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

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request,
 * via a parameter group
 * @param {object} headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the
 * operation
 * @param {string} headerCustomNamedRequestIdParamGroupingParameters.fooClientRequestId The
 * fooRequestId
 * @param {object} [options] Optional Parameters.
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters, options, callback) {
  /*
   * jshint validthis: true
   */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (headerCustomNamedRequestIdParamGroupingParameters === null || headerCustomNamedRequestIdParamGroupingParameters === undefined) {
      throw new Error('headerCustomNamedRequestIdParamGroupingParameters cannot be null or undefined.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }
  let fooClientRequestId;
  try {
    if (headerCustomNamedRequestIdParamGroupingParameters !== null && headerCustomNamedRequestIdParamGroupingParameters !== undefined)
    {
      fooClientRequestId = headerCustomNamedRequestIdParamGroupingParameters.fooClientRequestId;
      if (fooClientRequestId === null || fooClientRequestId === undefined || typeof fooClientRequestId.valueOf() !== 'string') {
        throw new Error('fooClientRequestId cannot be null or undefined and it must be of type string.');
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/customNamedRequestIdParamGrouping';
  let queryParameters = [];
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['foo-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if (fooClientRequestId !== undefined && fooClientRequestId !== null) {
    httpRequest.headers['foo-client-request-id'] = fooClientRequestId;
  }
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

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
 * @param {string} fooClientRequestId The fooRequestId
 * @param {object} [options] Optional Parameters.
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _customNamedRequestIdHead(fooClientRequestId, options, callback) {
  /*
   * jshint validthis: true
   */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (fooClientRequestId === null || fooClientRequestId === undefined || typeof fooClientRequestId.valueOf() !== 'string') {
      throw new Error('fooClientRequestId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/customNamedRequestIdHead';
  let queryParameters = [];
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'HEAD';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['foo-client-request-id'] = msRestAzure.generateUuid();
  }
  if (fooClientRequestId !== undefined && fooClientRequestId !== null) {
    httpRequest.headers['foo-client-request-id'] = fooClientRequestId;
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
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
    if (statusCode !== 200 && statusCode !== 404) {
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
    result = (statusCode === 200);

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a Header. */
class Header {
  /**
   * Create a Header.
   * @param {AutoRestAzureSpecialParametersTestClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._customNamedRequestId = _customNamedRequestId;
    this._customNamedRequestIdParamGrouping = _customNamedRequestIdParamGrouping;
    this._customNamedRequestIdHead = _customNamedRequestIdHead;
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param {string} fooClientRequestId The fooRequestId
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  customNamedRequestIdWithHttpOperationResponse(fooClientRequestId, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._customNamedRequestId(fooClientRequestId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param {string} fooClientRequestId The fooRequestId
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  customNamedRequestId(fooClientRequestId, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._customNamedRequestId(fooClientRequestId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._customNamedRequestId(fooClientRequestId, options, optionalCallback);
    }
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request,
   * via a parameter group
   * @param {object} headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the
   * operation
   * @param {string} headerCustomNamedRequestIdParamGroupingParameters.fooClientRequestId The
   * fooRequestId
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  customNamedRequestIdParamGroupingWithHttpOperationResponse(headerCustomNamedRequestIdParamGroupingParameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request,
   * via a parameter group
   * @param {object} headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the
   * operation
   * @param {string} headerCustomNamedRequestIdParamGroupingParameters.fooClientRequestId The
   * fooRequestId
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters, options, optionalCallback);
    }
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param {string} fooClientRequestId The fooRequestId
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  customNamedRequestIdHeadWithHttpOperationResponse(fooClientRequestId, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._customNamedRequestIdHead(fooClientRequestId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param {string} fooClientRequestId The fooRequestId
   * @param {object} [options] Optional Parameters.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  customNamedRequestIdHead(fooClientRequestId, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._customNamedRequestIdHead(fooClientRequestId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._customNamedRequestIdHead(fooClientRequestId, options, optionalCallback);
    }
  }

}

module.exports = Header;
