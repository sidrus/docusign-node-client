/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SealIdentifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SealIdentifier'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSeals = factory(root.Docusign.ApiClient, root.Docusign.SealIdentifier);
  }
}(this, function(ApiClient, SealIdentifier) {
  'use strict';


  /**
   * The AccountSeals model module.
   * @module model/AccountSeals
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountSeals</code>.
   * @alias module:model/AccountSeals
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSeals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSeals} obj Optional instance to populate.
   * @return {module:model/AccountSeals} The populated <code>AccountSeals</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('seals')) {
        obj['seals'] = ApiClient.convertToType(data['seals'], [SealIdentifier]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/SealIdentifier>} seals
   */
  exports.prototype['seals'] = undefined;



  return exports;
}));


