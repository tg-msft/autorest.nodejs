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
 * Bool
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the CompositeBoolInt.
 */
export interface Bool {


    /**
     * Get true Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getTrueWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<boolean>>;

    /**
     * Get true Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getTrue(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<boolean>;
    getTrue(callback: ServiceCallback<boolean>): void;
    getTrue(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;


    /**
     * Set Boolean value true
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putTrueWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Set Boolean value true
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putTrue(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putTrue(callback: ServiceCallback<void>): void;
    putTrue(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get false Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getFalseWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<boolean>>;

    /**
     * Get false Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getFalse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<boolean>;
    getFalse(callback: ServiceCallback<boolean>): void;
    getFalse(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;


    /**
     * Set Boolean value false
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putFalseWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Set Boolean value false
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putFalse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putFalse(callback: ServiceCallback<void>): void;
    putFalse(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get null Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getNullWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<boolean>>;

    /**
     * Get null Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getNull(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<boolean>;
    getNull(callback: ServiceCallback<boolean>): void;
    getNull(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;


    /**
     * Get invalid Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getInvalidWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<boolean>>;

    /**
     * Get invalid Boolean value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getInvalid(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<boolean>;
    getInvalid(callback: ServiceCallback<boolean>): void;
    getInvalid(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;
}

/**
 * @class
 * IntModel
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the CompositeBoolInt.
 */
export interface IntModel {


    /**
     * Get null Int value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getNullWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<number>>;

    /**
     * Get null Int value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getNull(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<number>;
    getNull(callback: ServiceCallback<number>): void;
    getNull(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;


    /**
     * Get invalid Int value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getInvalidWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<number>>;

    /**
     * Get invalid Int value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getInvalid(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<number>;
    getInvalid(callback: ServiceCallback<number>): void;
    getInvalid(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;


    /**
     * Get overflow Int32 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getOverflowInt32WithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<number>>;

    /**
     * Get overflow Int32 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getOverflowInt32(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<number>;
    getOverflowInt32(callback: ServiceCallback<number>): void;
    getOverflowInt32(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;


    /**
     * Get underflow Int32 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getUnderflowInt32WithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<number>>;

    /**
     * Get underflow Int32 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getUnderflowInt32(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<number>;
    getUnderflowInt32(callback: ServiceCallback<number>): void;
    getUnderflowInt32(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;


    /**
     * Get overflow Int64 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getOverflowInt64WithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<number>>;

    /**
     * Get overflow Int64 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getOverflowInt64(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<number>;
    getOverflowInt64(callback: ServiceCallback<number>): void;
    getOverflowInt64(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;


    /**
     * Get underflow Int64 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getUnderflowInt64WithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<number>>;

    /**
     * Get underflow Int64 value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getUnderflowInt64(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<number>;
    getUnderflowInt64(callback: ServiceCallback<number>): void;
    getUnderflowInt64(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;


    /**
     * Put max int32 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putMax32WithHttpOperationResponse(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Put max int32 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putMax32(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putMax32(intBody: number, callback: ServiceCallback<void>): void;
    putMax32(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Put max int64 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putMax64WithHttpOperationResponse(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Put max int64 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putMax64(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putMax64(intBody: number, callback: ServiceCallback<void>): void;
    putMax64(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Put min int32 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putMin32WithHttpOperationResponse(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Put min int32 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putMin32(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putMin32(intBody: number, callback: ServiceCallback<void>): void;
    putMin32(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Put min int64 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putMin64WithHttpOperationResponse(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Put min int64 value
     * @param {number} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putMin64(intBody: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putMin64(intBody: number, callback: ServiceCallback<void>): void;
    putMin64(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get datetime encoded as Unix time value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getUnixTimeWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<Date>>;

    /**
     * Get datetime encoded as Unix time value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getUnixTime(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<Date>;
    getUnixTime(callback: ServiceCallback<Date>): void;
    getUnixTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;


    /**
     * Put datetime encoded as Unix time
     * @param {date} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    putUnixTimeDateWithHttpOperationResponse(intBody: Date, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Put datetime encoded as Unix time
     * @param {date} intBody
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    putUnixTimeDate(intBody: Date, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    putUnixTimeDate(intBody: Date, callback: ServiceCallback<void>): void;
    putUnixTimeDate(intBody: Date, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get invalid Unix time value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getInvalidUnixTimeWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<Date>>;

    /**
     * Get invalid Unix time value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getInvalidUnixTime(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<Date>;
    getInvalidUnixTime(callback: ServiceCallback<Date>): void;
    getInvalidUnixTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;


    /**
     * Get null Unix time value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @returns {Promise} A promise is returned.
     */
    getNullUnixTimeWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<Date>>;

    /**
     * Get null Unix time value
     * @param {object} [options] Optional Parameters.
     * @param {object} [options.customHeaders] Headers that will be added to the request
     * @param {function} [optionalCallback] The optional callback.
     * @returns {function|Promise} If a callback was passed as the last parameter, then it returns the
     * callback. Otherwise it returns a Promise.
     */
    getNullUnixTime(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<Date>;
    getNullUnixTime(callback: ServiceCallback<Date>): void;
    getNullUnixTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
}
