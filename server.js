const express = require("express");

const app = express();

const PORT = 3000;

const students = [
    {
        id: 1,
        name: "Gran Sabandal",
        course: "BSIT"
    },
    {
        id: 2,
        name: "Chris Belarmino",
        course: "BSIS"
    },
    {
        id: 3,
        name: "Patrick Elalto",
        course: "BSCS"
    }
];

    //Retrieve all students
    app.get("/api/students", (req, res) => {
        res.json(students);        
    });

    //Retrieve one student through id
    app.get("/api/students/:id", (req, res)=>{
        const id = Number(req.params.id);
        const student = students.find(student => 
            student.id == id
        );

        if(!student){
            return res.status(404).json({
                message:"Student not found"
                });
        }

        res.json(student);

    });

    
   app.use(express.static(__dirname));
   app.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);

   }); 



