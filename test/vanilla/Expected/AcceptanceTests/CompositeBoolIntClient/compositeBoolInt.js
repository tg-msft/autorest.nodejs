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

const models = require('./models');
const operations = require('./operations');


/** Class representing a CompositeBoolInt. */
class CompositeBoolInt extends ServiceClient {
  /**
   * Create a CompositeBoolInt.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(baseUri, options) {

    if (!options) options = {};

    super(null, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.bool = new operations.Bool(this);
    this.intModel = new operations.IntModel(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = CompositeBoolInt;
module.exports['default'] = CompositeBoolInt;
module.exports.CompositeBoolInt = CompositeBoolInt;
module.exports.CompositeBoolIntModels = models;
