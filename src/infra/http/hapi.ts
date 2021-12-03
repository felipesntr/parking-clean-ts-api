import Hapi from '@hapi/hapi';
import HapiAdapter from '../../adapter/HapiAdapter';
import ParkingLotController from '../../controller/ParkingLotController';

const server = Hapi.Server({
    port: 3000,
    host: 'localhost',
    routes: {
        cors: true
    }
});

server.route({
    method: 'GET',
    path: '/parkingLots/{code}',
    handler: HapiAdapter.create(ParkingLotController.getParkingLots)
});

server.start();