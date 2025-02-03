const router = require('express').Router();
const Project = require("../models/project");

//add project
router.post("/add-project", async (req, res) => {
    try {
        const {
            title,
            description,
            technologies,
            tags,
            liveDemoLink,
            imageUrl,
            githubLink,
        } = req.body;
        
        //check project is alreay available
        const projectExists = await Project.findOne({ title });
        if (projectExists) {
            return res.status(400).json({ message: "Project already exists" });
        }
        
        const project = new Project({
            title,
            description,
            technologies,
            tags,
            liveDemoLink,
            imageUrl,
            githubLink,
        });
        
        await project.save();
        
        res.status(200).json({ message: "Project added successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
        
    }
});

//update project

router.put("/update-project/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title,
            description,
            technologies,
            tags,
            liveDemoLink,
            imageUrl,
            githubLink,
        } = req.body;
        
        const project = await Project.findByIdAndUpdate(id, {
            title,
            description,
            technologies,
            tags,
            liveDemoLink,
            imageUrl,
            githubLink,
        }, { new: true });
        
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//delete project

router.delete("/delete-project/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        const project = await Project.findByIdAndDelete(id);
        
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        
        res.json({ message: "Project deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//get all projects

router.get("/get-projects", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;