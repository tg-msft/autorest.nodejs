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
 * Class representing a OdataFilter.
 */
class OdataFilter {
  /**
   * Create a OdataFilter.
   * @property {number} [id]
   * @property {string} [name]
   */
  constructor() {
  }

  /**
   * Defines the metadata of OdataFilter
   *
   * @returns {object} metadata of OdataFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OdataFilter',
      type: {
        name: 'Composite',
        className: 'OdataFilter',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OdataFilter;
