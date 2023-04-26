const router = require('express').Router()
const articleController = require('../controllers/articleController')

router.route('/create').post(articleController.create)
router.route('/articles').get(articleController.getAll)
router.route('/articles/:id').get(articleController.findById)
router.route('/articles/:id').patch(articleController.update)
router.route('/articles/:id').delete(articleController.delete)

module.exports = router