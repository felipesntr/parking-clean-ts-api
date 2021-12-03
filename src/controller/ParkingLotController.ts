import GetParkingLots from "../core/usecase/GetParkingLots";
import ParkingLotRepositorySQL from "../infra/repository/ParkingLotRepositorySQL";

export default class ParkingLotController {

    static async getParkingLots(params, body) {

        const parkingLotRepository = new ParkingLotRepositorySQL();
        const getParkingLots = new GetParkingLots(parkingLotRepository);
        const parkingLots = await getParkingLots.execute(params.code);

        return parkingLots;
    }

}