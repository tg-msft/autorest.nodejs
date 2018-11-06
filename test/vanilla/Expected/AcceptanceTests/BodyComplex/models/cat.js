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
 * Class representing a Cat.
 * @extends models['Pet']
 */
class Cat extends models['Pet'] {
  /**
   * Create a Cat.
   * @property {string} [color]
   * @property {array} [hates]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Cat
   *
   * @returns {object} metadata of Cat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'cat',
      type: {
        name: 'Composite',
        className: 'Cat',
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
          color: {
            required: false,
            serializedName: 'color',
            type: {
              name: 'String'
            }
          },
          hates: {
            required: false,
            serializedName: 'hates',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DogElementType',
                  type: {
                    name: 'Composite',
                    className: 'Dog'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Cat;
