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

const models = require('./index');

/**
 * Class representing a Dog.
 * @extends models['Pet']
 */
class Dog extends models['Pet'] {
  /**
   * Create a Dog.
   * @property {string} [food]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Dog
   *
   * @returns {object} metadata of Dog
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'dog',
      type: {
        name: 'Composite',
        className: 'Dog',
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
          },
          food: {
            required: false,
            serializedName: 'food',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Dog;
