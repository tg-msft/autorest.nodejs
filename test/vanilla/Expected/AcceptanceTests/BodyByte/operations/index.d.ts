/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * ByteModel
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestSwaggerBATByteService.
 */
export interface ByteModel {


    /**
     * Get null byte value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getNullWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<Buffer>>;

    /**
     * Get null byte value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getNull(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<Buffer>;
    getNull(callback: ServiceCallback<Buffer>): void;
    getNull(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Buffer>): void;


    /**
     * Get empty byte value ''
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getEmptyWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<Buffer>>;

    /**
     * Get empty byte value ''
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getEmpty(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<Buffer>;
    getEmpty(callback: ServiceCallback<Buffer>): void;
    getEmpty(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Buffer>): void;


    /**
     * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getNonAsciiWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<Buffer>>;

    /**
     * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getNonAscii(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<Buffer>;
    getNonAscii(callback: ServiceCallback<Buffer>): void;
    getNonAscii(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Buffer>): void;


    /**
     * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
     * @param {buffer} byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putNonAsciiWithHttpOperationResponse(byteBody: Buffer, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
     * @param {buffer} byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putNonAscii(byteBody: Buffer, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putNonAscii(byteBody: Buffer, callback: ServiceCallback<void>): void;
    putNonAscii(byteBody: Buffer, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get invalid byte value ':::SWAGGER::::'
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getInvalidWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<Buffer>>;

    /**
     * Get invalid byte value ':::SWAGGER::::'
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getInvalid(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<Buffer>;
    getInvalid(callback: ServiceCallback<Buffer>): void;
    getInvalid(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Buffer>): void;
}
