export default class HapiAdapter {
    static create(fn) {
        return async (req, res) => {
            const obj = await fn(req.params, res.payload);
            return obj;
        }
    }
}