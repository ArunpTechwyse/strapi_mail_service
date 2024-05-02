const { policies } = require("..");
const { myform } = require("../../../../../config/plugins");

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/find',
    handler:'myform.find',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/delete/:id',
    handler:'myform.delete',
    config: {
      policies: [],
      auth: false,
    },
  },
  // {
  //   method: 'PUT',
  //   path: '/toggle/:id',
  //   handler:'myform.toggle',
  //   config: {
  //     policies: [],
  //     auth: false,
  //   },
  // },
  {
    method: 'PUT',
    path: '/update/:id',
    handler:'myform.update',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    "method": "POST",
    "path": "/create",
    "handler": "myform.create",
    "config": {
      "policies": [],
      auth: false,
    }
  },
];
