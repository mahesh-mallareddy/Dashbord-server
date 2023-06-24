const express = require('express');
const router = express.Router();
require('dotenv').config();
const dbschema = require('../model/dbmodel')

router.get('/info', async (req, res) => {
    try {
        const result = await dbschema.find({})
        if (result.length === 0 || !result) {
            return res.status(400).json({
                 status: false,
                 message: "Sorry, data not found"
             })
         }
        res.status(200).json({
            status: true,
            data: result,
            message: "data reached sucessfully"
        })
    }
    catch (err) {
        res.status(500).json({
            status: false,
            data: err.message,
            message: "server error"
        })
    }
});


// filter by sector records
router.get('/sectorinfo/:sector', async (req, res) => {
    try {
        const { sector } = req.params;
        const objsector = {}
        if (sector) {
            objsector.sector = { $regex: sector , $options: 'i' }
        }
        const result = await dbschema.find(objsector)
        if (result.length === 0 || !result) {
           return res.status(400).json({
                status: false,
                message: "Sorry, data not found"
            })
        }
        res.status(200).json({
            status: true,
            data: result,
            message: "data reached sucessfully"
        })
}
    catch (err) {
        res.status(500).json({
            status: false,
            data: err.message,
            message: "Sorry, cant find that"
        })
    }
})

module.exports = router;