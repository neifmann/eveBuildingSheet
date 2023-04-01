import { Router } from 'express';
import { EveAPI } from './product';

// Export module for registering router in express app
export const router: Router = Router();

// Define your routes here
router.get("/api/product/:id", (req, res) => {
    const { id } = req.params;
    const data = EveAPI.getProduct(id);
    console.log("!!!!", data);
    if (data) {
        res.status(200).send(data);
    } else {
        res.status(404).send({
            message: "No item found"
        });
    }
});

router.get("/api/blueprint/:id", (req, res) => {
    const { id } = req.params;

    const blueprint = EveAPI.getBlueprint(id);
    
    if (blueprint) {
        res.status(200).send(blueprint);
    } else {
        res.status(404).send({
            message: "No blueprint found"
        });
    }
});