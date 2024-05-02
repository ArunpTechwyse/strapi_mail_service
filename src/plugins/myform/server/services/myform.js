'use strict';

//const { toggle } = require("../controllers/myform");

module.exports = ({ strapi }) => ({
 async find(query){
    return await strapi.entityService.findMany("plugin::myform.myform",query)
 },

 async delete(id){
    return await strapi.entityService.delete("plugin::myform.myform",id)
 },

//  async create(data){
//     return await strapi.entityService.create("plugin::myform.myform",data)
//  },

async create(data) {
    try {
      const myform = await strapi.query('myforms').create(data);
      return myform;
    } catch (err) {
      throw new Error('Failed to create myform');
    }
  },

 async update(id,data){
    return await strapi.entityService.update("plugin::myform.myform",id,data)
 },

//  async toggle(id){
//     const result = strapi.entityService.findOne("plugin::myform.myform",id)
//     return await strapi.entityService.delete("plugin::myform.myform",id,{
//         data:{isDone: !result.isDone},
//     });
//  },
});
