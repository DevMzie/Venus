var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Venus' });
});

// SUPPLIER RELATED
router.get('/profile', (req, res, next) => {
  res.render('profile', { title: 'Profile' });
});

router.get('/suppliers', (req, res, next) => {
  res.render('suppliers', { title: 'Suppliers' });
});

router.get('/profile-details', (req, res, next) => {
  res.render('profile-details', { title: 'Suppliers' });
});

router.get('/add-supplier', (req, res, next) => {
  res.render('add-supplier', { title: 'Add Supplier' });
});

// ORDERS
router.get('/orders', (req, res, next) => {
  res.render('orders', { title: 'Orders' });
});

router.get('/order-details', (req, res, next) => {
  res.render('order-details', { title: 'Order-Details' });
});

router.get('/orders-progress', (req, res, next) => {
  res.render('orders-Progress', { title: 'Orders-Progress' });
});

router.get('/add-order', (req, res, next) => {
  res.render('add-order', { title: 'Add Order' });
});

// PRODUCTS
router.get('/product-detail', (req, res, next) => {
  res.render('product-detail', { title: 'Product-Details' });
});

// INVOICES
router.get('/invoice', (req, res, next) => {
  res.render('invoice', { title: 'Invoice' });
});

router.get('/invoice-print', (req, res, next) => {
  res.render('invoice-print', { title: 'Invoice' });
});

// MISCELLANEOUS
router.get('/calendar', (req, res, next) => {
  res.render('calendar', { title: 'Calendar' });
});

router.get('/charts', (req, res, next) => {
  res.render('charts', { title: 'Analysis' });
});

module.exports = router;