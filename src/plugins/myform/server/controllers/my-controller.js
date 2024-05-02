'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('myform')
      .service('myService')
      .getWelcomeMessage();
  },
});
