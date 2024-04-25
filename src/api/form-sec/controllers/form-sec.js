'use strict';
const nodemailer = require('nodemailer');
const { sendEmail } = require('../../customContact/controllers/customContact');

/**
 * form-sec controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::form-sec.form-sec',
({ strapi }) => ({

  async find(ctx) {
    // your custom logic for modifying the input
    ctx.query = { ...ctx.query, locale: "en" }; // force ctx.query.locale to 'en' regardless of what was requested

    // Call the default parent controller action
    const result = await super.find(ctx);

    // your custom logic for modifying the output
    result.meta.date = Date.now(); // change the date that is returned

    return result;
  },

  async create(ctx) {
    // some logic here
    console.log("entered to create")
    const response = await super.create(ctx);
    // some more logic
  
    console.log(response);
     console.log("response");
    console.log(response.data.attributes.email);

    console.log(response['data']['attributes']['email']);

    console.log(".....");

    const email = response.data.attributes.email;
    const message = response.data.attributes.message;



    await sendEmail(email,'Testing',message);




    return response;
  },




})
);


