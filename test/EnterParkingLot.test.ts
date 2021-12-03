import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLots from "../src/core/usecase/GetParkingLots";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

describe('Enter Pariking', () => {
    test.skip('Should enter parking lot', async () => {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
        const getParkingLot = new GetParkingLots(parkingLotRepositoryMemory);
        const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
        expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T00:00:00"));
        const parkingLotAfterEnter = await getParkingLot.execute("shopping");
        expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
    });

    test('Should get parking lot', async () => {
        const parkingLotRepositorySQL = new ParkingLotRepositoryMemory();
        const getParkingLot = new GetParkingLots(parkingLotRepositorySQL);
        const parrkingLot = await getParkingLot.execute("shopping");
        expect(parrkingLot.code).toBe("shopping");
    });

    test.skip('Should be closed', async () => {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T23:00:00"));
    });

    test.skip('Should be full', async () => {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T00:00:00"));
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T00:00:00"));
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T00:00:00"));
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T00:00:00"));
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T00:00:00"));
        await enterParkingLot.execute("shopping", "MMM-0000", new Date("2021-03-01T00:00:00"));
    });
});