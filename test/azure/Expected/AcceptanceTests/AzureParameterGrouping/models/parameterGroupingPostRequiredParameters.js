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

/**
 * Additional parameters for postRequired operation.
 *
 */
class ParameterGroupingPostRequiredParameters {
  /**
   * Create a ParameterGroupingPostRequiredParameters.
   * @member {number} body
   * @member {string} [customHeader]
   * @member {number} [query] Query parameter with default. Default value: 30 .
   * @member {string} path Path parameter
   */
  constructor() {
  }

  /**
   * Defines the metadata of ParameterGroupingPostRequiredParameters
   *
   * @returns {object} metadata of ParameterGroupingPostRequiredParameters
   *
   */
  mapper() {
    return {
      required: false,
      type: {
        name: 'Composite',
        className: 'ParameterGroupingPostRequiredParameters',
        modelProperties: {
          body: {
            required: true,
            type: {
              name: 'Number'
            }
          },
          customHeader: {
            required: false,
            type: {
              name: 'String'
            }
          },
          query: {
            required: false,
            defaultValue: 30,
            type: {
              name: 'Number'
            }
          },
          path: {
            required: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ParameterGroupingPostRequiredParameters;