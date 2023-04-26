const ArticleModel = require('../models/Article')
const mongoose = require("mongoose");

const articleController = {

    create: async (req, res) => {
        try {
            const data = {
                title: req.body.title,
                description: req.body.description,
                author: req.body.author
            }

            const article = await ArticleModel.create(data);

            res.status(201).json({
                article,
                message: 'Article created!'
            });
        } catch (error) {
            console.log({error});
        }
    },

    getAll: async (req, res) => {
        try {
            const articles = await ArticleModel.find()

            res.status(200).json({
                articles
            });
        } catch (error) {
            console.log({error});
        }
    },

    findById: async (req, res) => {
        try {
            const id = req.params.id

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({
                    message: 'Invalid ID!'
                });
                return;
            }

            const article = await ArticleModel.findById(id)

            res.status(200).json({
                article
            });
        } catch (error) {
            console.log({error})
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({
                    message: 'Invalid ID!'
                });
                return;
            }

            const data = {
                title: req.body.title,
                description: req.body.description,
                author: req.body.author
            }

            const article = await ArticleModel.findByIdAndUpdate(id, data);

            res.status(200).json({
                article,
                message: 'Article updated!'
            });
        } catch (error) {
            console.log({error})
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({
                    message: 'Invalid ID!'
                });
                return;
            }

            const article = await ArticleModel.findByIdAndDelete(id)

            res.status(200).json({
                article,
                message: 'Article deleted!'
            });
        } catch (error) {
            console.log({error})
        }
    }
}

module.exports = articleController