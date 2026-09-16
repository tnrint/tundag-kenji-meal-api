const express = require("express");

const app = express();

const PORT = 3000;

const foods = [
    {
        id: 1,
        name: "Chicken Adobo",
        category: "Main Course",
        price: 120
    },
    {
        id: 2,
        name: "Pancit Canton",
        category: "Noodles",
        price: 90
    },
    {
        id: 3,
        name: "Lechon Kawali",
        category: "Main Course",
        price: 150
    },
    {
        id: 4,
        name: "Halo-Halo",
        category: "Dessert",
        price: 80
    },
    {
        id: 5,
        name: "Sinigang na Baboy",
        category: "Soup",
        price: 130
    },
    {
        id: 6,
        name: "Iced Tea",
        category: "Beverage",
        price: 40
    }
];

    //Retrieve all foods
    app.get("/api/foods", (req, res) => {
        res.json(foods);
    });

    //Retrieve one food through id
    app.get("/api/foods/:id", (req, res) => {
        const id = Number(req.params.id);
        const food = foods.find(food =>
            food.id == id
        );

        if (!food) {
            return res.status(404).json({
                message: "Food not found"
            });
        }

        res.json(food);

    });


   app.use(express.static(__dirname));
   app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);

   });
