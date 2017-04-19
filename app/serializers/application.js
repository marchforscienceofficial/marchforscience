import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key) { return key; },
  normalizeResponse(store, primaryModelClass, payload, id, requestType){

    if (Array.isArray(payload)){
      payload.forEach((item, index) => {
        payload[index] = {
          id: item.id,
          type: primaryModelClass.modelName,
          attributes: item
        }
      });
      return {
        data: payload
      };
    }

    var keys = Object.keys(payload);
    var relationships = {};
    keys.forEach((key) => {
      if (Array.isArray(payload[key])){
        relationships[key] = { data: payload[key] };
        delete payload[key];
      }
    });

    return {
      data: {
        attributes: payload,
        id: id,
        type: primaryModelClass.modelName,
        relationships: relationships
      }
    };

  },
  normalizeFindManyResponse(store, primaryModelClass, payload, id, requestType){

    return {
      data: {
        attributes: payload,
        id: id,
        type: primaryModelClass.modelName
      }
    };

  },
  serialize: function(snapshot, options) {
    return snapshot.record.toJSON();
  }
});
