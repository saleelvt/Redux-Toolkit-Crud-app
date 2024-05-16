const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// console.log('data vannu')
router.route('/adminLogin/')
  .post(adminController.getAdminLogin);

  router.route('admin/deleteButton/')
  .get(adminController.getAdminDelete)

module.exports = router;
