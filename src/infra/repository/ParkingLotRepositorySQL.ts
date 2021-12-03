import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from "../database/database";

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
    async getParkingLot(code: string): Promise<ParkingLot> {
        // aqui vai a lógica de consulta no banco de dados
        const parkingLot =
            { code: "shopping", capacity: 5, openHour: 0, closeHour: 23, occupiedSpaces: 0 }

        return Promise.resolve(
            ParkingLotAdapter.create(parkingLot.code, parkingLot.capacity, parkingLot.openHour, parkingLot.closeHour)
        );
    }

    saveParkedCar(code: string, plate: string, date: Date) {
        throw new Error("Method not implemented.");
    }
}