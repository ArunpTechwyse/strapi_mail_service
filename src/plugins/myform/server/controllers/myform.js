'use strict';

module.exports = {
    async find(ctx){
        try {
            console.log(ctx.query);
            return await strapi
            .plugin('myform')
            .service('myform')
            .find(ctx.query);
            
        } catch (error) {
            ctx.throw(500, error)
        }
    },
    async update(ctx){
        try {
            ctx.body= await strapi
            .plugin('myform')
            .service('myform')
            .update(ctx.params.id,ctx.request.body);
            
        } catch (error) {
            ctx.throw(500, error)
        }
    },
    // async create(ctx){
    //     try {
    //         console.log("creating")
    //         console.log(ctx.request.body); // Log the request body to inspect its contents


    //         ctx.body = await strapi
    //         .plugin('myform')
    //         .service('myform')
    //         .create(ctx.request.body);
            
    //     } catch (error) {
    //         console.log(error)
    //         ctx.throw(500, 'Internal Server Error');
    //     }
    // },


  async create(ctx) {
    try {
      const { name, phone } = ctx.request.body;
      // Validate request body
      if (!name || !phone) {
        return ctx.badRequest('Name and phone are required');
      }
      // Create new Myform entry
      const myform = await strapi.services.myform.create({ name, phone });
      return myform;
    } catch (err) {
      return ctx.badRequest('Failed to create myform');
    }
  },
  // Add other controller actions as needed


    async delete(ctx){
        try {
            ctx.body=  await strapi
            .plugin('myform')
            .service('myform')
            .delete(ctx.params.id);
            
        } catch (error) {
            ctx.throw(500, error)
        }
    },
}