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
const msRestAzure = require('ms-rest-azure');
const ServiceClient = msRestAzure.AzureServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');


/**
 * Get test coverage report
 * @param {object} [options] Optional Parameters.
 * @param {string} [options.qualifier] If specified, qualifies the generated report further (e.g.
 * '2.7' vs '3.5' in for Python). The only effect is, that generators that run all tests several
 * times, can distinguish the generated reports.
 * @param {object} [options.customHeaders] Headers that will be added to the request
 * @param {function} callback The callback.
 * @returns {function} callback(err, result, request, response)
 */
function _getReport(options, callback) {
  /*
   * jshint validthis: true
   */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let qualifier = (options && options.qualifier !== undefined) ? options.qualifier : undefined;
  // Validate
  try {
    if (qualifier !== null && qualifier !== undefined && typeof qualifier.valueOf() !== 'string') {
      throw new Error('qualifier must be of type string.');
    }
    if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'report/azure';
  let queryParameters = [];
  if (qualifier !== null && qualifier !== undefined) {
    queryParameters.push('qualifier=' + encodeURIComponent(qualifier));
  }
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
  if (this.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.acceptLanguage;
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
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          };
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

/** Class representing a AutoRestReportServiceForAzure. */
class AutoRestReportServiceForAzure extends ServiceClient {
  /**
   * Create a AutoRestReportServiceForAzure.
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   */
  constructor(credentials, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }
    this.credentials = credentials;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.models = models;
    this._getReport = _getReport;
    msRest.addSerializationMixin(this);
  }

  /**
   * Get test coverage report
   * @param {object} [options] Optional Parameters.
   * @param {string} [options.qualifier] If specified, qualifies the generated report further (e.g.
   * '2.7' vs '3.5' in for Python). The only effect is, that generators that run all tests several
   * times, can distinguish the generated reports.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @returns {Promise} A promise is returned.
   */
  getReportWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getReport(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Get test coverage report
   * @param {object} [options] Optional Parameters.
   * @param {string} [options.qualifier] If specified, qualifies the generated report further (e.g.
   * '2.7' vs '3.5' in for Python). The only effect is, that generators that run all tests several
   * times, can distinguish the generated reports.
   * @param {object} [options.customHeaders] Headers that will be added to the request
   * @param {function} [optionalCallback] The optional callback.
   * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
   * callback. Otherwise it returns a Promise.
   */
  getReport(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getReport(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getReport(options, optionalCallback);
    }
  }

}

module.exports = AutoRestReportServiceForAzure;
module.exports['default'] = AutoRestReportServiceForAzure;
module.exports.AutoRestReportServiceForAzure = AutoRestReportServiceForAzure;
module.exports.AutoRestReportServiceForAzureModels = models;
