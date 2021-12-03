import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
const app = Express();

app.get('/parkingLots/:code', ExpressAdapter.create(ParkingLotController.getParkingLots));

app.listen(3000, () => {
    console.log("Server started on port 3000");
});