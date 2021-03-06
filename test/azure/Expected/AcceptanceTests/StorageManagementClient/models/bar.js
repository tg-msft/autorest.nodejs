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
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 */
class Bar {
  /**
   * Create a Bar.
   * @property {object} [recursivePoint] Recursive Endpoints
   * @property {string} [recursivePoint.blob] Gets the blob endpoint.
   * @property {string} [recursivePoint.queue] Gets the queue endpoint.
   * @property {string} [recursivePoint.table] Gets the table endpoint.
   * @property {object} [recursivePoint.dummyEndPoint] Dummy EndPoint
   * @property {object} [recursivePoint.fooPoint] Foo point
   * @property {object} [recursivePoint.fooPoint.barPoint] Bar point
   */
  constructor() {
  }

  /**
   * Defines the metadata of Bar
   *
   * @returns {object} metadata of Bar
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Bar',
      type: {
        name: 'Composite',
        className: 'Bar',
        modelProperties: {
          recursivePoint: {
            required: false,
            serializedName: 'RecursivePoint',
            type: {
              name: 'Composite',
              className: 'Endpoints'
            }
          }
        }
      }
    };
  }
}

module.exports = Bar;
