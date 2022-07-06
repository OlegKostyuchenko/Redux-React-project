

export default class RestoService {
    _apiRes = 'http://localhost:3000/menu';
    async getResours() {
        const res = await fetch(this._apiRes);

        if (!res.ok) {
            throw new Error(`Fetch dont get result, received ${res.status}`);
        }
        return await res.json()
    }
    async getMenuItems() {
        return await this.getResours()
        // .then((result) => { console.log(result); });
    }
}