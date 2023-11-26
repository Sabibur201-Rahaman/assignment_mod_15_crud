const ProductsController=require('../controller/ProductsController')
const express=require('express');
const router=express.Router();

//C=Create

router.post('/CreateProducts',ProductsController.CreateProducts)

//R=Read
router.get('/ReadProducts',ProductsController.ReadProducts)

router.post('/UpdateProducts/:id',ProductsController.UpdateProducts)

//D=Delete
router.get('/DeleteProducts/:id',ProductsController.DeleteProducts)
//API Routing endpoint
module.exports=router;