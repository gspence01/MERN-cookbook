//DEPENDENCIES
const recipes = require('express').Router()
const db = require('../models')
const { Recipes, Directions, Ingredients } = db

//FIND RECIPES
recipes.get('/', async (req, res) => {
    try {
        const foundRecipes = await Recipes.findAll({order:[['upload_date', 'DESC']]})
        res.status(200).json(foundRecipes)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND SPECIFIC RECIPE
recipes.get('/:id', async (req, res) => {
    try {
        const foundRecipe = await Recipes.findOne({
            where: {recipe_id: req.params.id},
            include: [
                { model: Directions, as: 'directions' },
                {model: Ingredients, as: 'ingredients'}
            ]
        })
        res.status(200).json(foundRecipe)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE NEW RECIPE
recipes.post('/', async(req, res) => {
    try {
        const newRecipe = await Recipes.create(req.body)
        res.status(200).json({
            message: 'Good job, you bad bitch. You did a thing',
            data: newRecipe
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE EXISTING RECIPE(S)
recipes.put('/:id', async(req, res) => {
    try {
        const updatedRecipes = await Recipes.update(req.body, {
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `yeah, we did that shit at ${updatedRecipes} recipe(s)`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

//DELETE RECIPE
recipes.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipes.destroy({
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `You trashed ${deletedRecipe} recipe(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//EXPORT
module.exports = recipes