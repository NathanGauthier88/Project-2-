// dependencies

const reviewRouter = require('express').Router();

// create a route object 



const Review = require('../models/review');

// List the router actions 

// seed route 

const seedData = require('../models/reviewSeed');

reviewRouter.get("/seed", (req,res) => {
    Review.deleteMany ({}, (error, allReviews) => {})
    Review.create(seedData, (error, data) => {
        res.redirect('/reviews')
    })
})
//redirect route


//index route

reviewRouter.get('/', (req,res) =>{
    Review.find({}, (error, allReviews) => {
        res.render('index.ejs', {allReviews})
    })
})

// New

reviewRouter.get("/new", (req, res) => {
    res.render("new.ejs");
});

// delete

reviewRouter.delete("/:id", (req, res) => {
    Review.findByIdAndDelete(req.params.id, (error, deletedReview) => {
        res.redirect("/reviews")
    })
})

// update

reviewRouter.put("/:id", (req, res) => {
    Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (err, updatedProduct) => {
            res.redirect(`/reviews/${req.params.id}`)
        })
})


//create

reviewRouter.post("/", (req, res) => {
    Review.create(req.body, (error, createdProduct) => {
        res.redirect("/reviews")
    })
})

// edit 

reviewRouter.get("/:id/edit", (req, res) => {
    Review.findById(req.params.id, (err, editReview) => {
         res.render("edit.ejs", { review: editReview,});
     });
 });
 

//show

reviewRouter.get('/:id', (req, res) => {
    Review.findById(req.params.id, (err, foundReview) => {
            res.render('show.ejs', {
                review: foundReview,
            })
    })
})

module.exports = reviewRouter;