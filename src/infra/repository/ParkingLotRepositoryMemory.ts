import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    parkingLots = [
        { code: "shopping", capacity: 5, openHour: 0, closeHour: 23, occupiedSpaces: 0 }
    ];

    parkedCars = [

    ];

    getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code);
        const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.openHour, parkingLotData.closeHour);
        parkingLot.occupiedSpaces = this.parkedCars.length;
        return Promise.resolve(parkingLot);
    }

    saveParkedCar(code: string, plate: string, date: Date) {
        this.parkedCars.push({ code, plate, date });
    }
} 