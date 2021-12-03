export default class ExpressAdapter {
    static create(fn) {
        return async (req, res) => {
            const obj = await fn(req.params, res.body);
            res.json(obj);
        }
    }
}