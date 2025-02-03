const router = require('express').Router();
const Testimonial = require('../models/testimonial');

//add testimonials
router.post('/add-testimonial', async (req, res) => {
    try {
        const { name, message,display, ratings, image } = req.body;
        const newTestimonial = new Testimonial({ name, message, display, ratings, image });
        await newTestimonial.save();
        res.status(201).json(newTestimonial);

        
    } catch (error) {
        res.status(400).json({ message: error.message });

        
    }
});

//update testimonials

router.put('/update-testimonial/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, message, display, ratings, image } = req.body;
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, { name, message, display, ratings, image }, { new: true });
        res.json({ msg: "testimonial updated" ,updatedTestimonial });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
        
    }
})

//delete testimonials
router.delete('/delete-testimonial/:id', async (req, res) => { 
    try {
        const { id } = req.params;
        await Testimonial.findByIdAndDelete(id);
        res.json({ message: 'Testimonial deleted successfully.' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
})

//get all testimonials

router.get('/get-testimonials', async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 });
        res.json(testimonials);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
})

module.exports = router;