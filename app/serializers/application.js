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

    return {
      data: {
        attributes: payload,
        id: id,
        type: primaryModelClass.modelName
      }
    };

  },
  normalizeFindManyResponse(store, primaryModelClass, payload, id, requestType){
    debugger;
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
