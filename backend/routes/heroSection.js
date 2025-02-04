const router = require("express").Router();
const HeroSchema = require("../models/heroSchema");

// Add hero details
router.post("/add-hero-details", async (req, res) => {
    try {
        const {
            name,
            bio,
            heroImg,
          
            twitter,
            linkedin,
            github,
            fiver,
            instagram,
            location,
            email,
            company,
            phone,
        } = req.body;

        // Validate required fields
        if (!name || !bio || !heroImg || !location || !email || !phone ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create new hero document
    const newHeroSchema = new HeroSchema({
      name,
      bio,
      heroImg,
      phone,
      email,
      company,
      twitter,
      linkedin,
      github,
      fiver,
      instagram,
      location,
    });

    // Save the new hero to the database
    await newHeroSchema.save();

    // Return success response
    res.status(200).json({ msg: "Hero section updated", newHeroSchema });
  } catch (error) {
    // Handle error and send response
    console.error(error); // Log the error for debugging purposes
    res
      .status(500)
      .json({ message: "Server error. Could not save hero details." });
  }
});

//update hero details

router.put("/update-hero-details/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            bio,
            heroImg,
           
            twitter,
            linkedin,
            github,
            fiver,
        instagram,
            
            location,
            email,
            company,
            phone,
        } = req.body;
        
        const updatedHeroSchema = await HeroSchema.findByIdAndUpdate(
          id,
          {
            name,
            bio,
            heroImg,
            phone,
            email,
            company,
            twitter,
            linkedin,
            github,
            fiver,
            instagram,
            location,
          },
          { new: true }
        );
        
        res.json({ msg: "Hero details updated", updatedHeroSchema });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//get hero details

router.get("/get-hero-details/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const heroSchema = await HeroSchema.findById(id);
        
        if (!heroSchema) {
            return res.status(404).json({ message: "Hero not found" });
        }
        
        res.json(heroSchema);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
