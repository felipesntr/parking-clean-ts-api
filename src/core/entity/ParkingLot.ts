export default class ParkingLot {

    code: string;
    capacity: number;
    closeHour: number;
    openHour: number;
    occupiedSpaces: number;
    constructor(
        code: string,
        capacity: number,
        openHour: number,
        closeHour: number,
    ) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.occupiedSpaces = 0;
    }

    isOpen(date: Date): boolean {
        const hour = date.getHours();
        return (hour >= this.openHour && hour < this.closeHour);
    }

    isFull(): boolean {
        return this.capacity === this.occupiedSpaces;
    }
}