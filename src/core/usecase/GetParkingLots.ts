import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkingLots {
    parkingLotRepository: ParkingLotRepository;
    constructor(parkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }

    async execute(code: string) {
        return await this.parkingLotRepository.getParkingLot(code);
    }

}