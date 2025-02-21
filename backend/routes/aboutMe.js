const router = require("express").Router();
const AboutMe = require("../models/aboutMe");

//add about me 
router.post("/add-aboutMe", async (req, res) => {
  try {
    const {
      name,
      bio,
      profileImage,
      experience,
      education,
      skills,
      awards,
      stats,
  
    } = req.body;

    const aboutMeData = new AboutMe({
      name,
      bio,
      profileImage,
      experience,
      education,
      skills,
      awards,
      stats,
      
    });

    await aboutMeData.save();
    res
      .status(201)
      .json({
        success: true,
        message: "About Me added successfully",
        data: aboutMeData,
      });
  } catch (error) {
    console.error("Error adding About Me:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

//update about me

router.put("/update-aboutMe/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {
        name,
        bio,
        profileImage,
        experience,
        education,
        skills,
        awards,
        stats,
     
        } = req.body;
        
        const updatedAboutMe = await AboutMe.findByIdAndUpdate(
          id,
          {
            name,
            bio,
            profileImage,
            experience,
            education,
            skills,
            awards,
            stats,
          
          },
          { new: true }
        );
        res.json({ msg: "About Me updated successfully", updatedAboutMe });
        
    } catch (error) {
        console.error("Error updating About Me:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});
    //get all about me
router.get("/get-aboutMe", async (req, res) => {
      try {
        const aboutMe = await AboutMe.find();
        res.json(aboutMe);
      } catch (error) {
        console.error("Error getting About Me:", error);
        res.status(500).json({ success: false, message: "Server error" });
      }
});


module.exports = router;
