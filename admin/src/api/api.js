import Server from "./server"

class API extends Server {
    async login(params) {//登陆
        try {
            let result = await this.axiosPost("mock/5b56b4e68912d82e135bc81e/api/admin/login", params);
            if (result && result instanceof Object && result.code === 0) return result.dataInfo;
            else this.resultCode(result.code);
        } catch (error) {
            throw error;
        }
    }
    async loginOut(params) {//登陆
        try {
            let result = await this.axiosPost("mock/5b56b4e68912d82e135bc81e/example/admin/out", params);
            if (result && result instanceof Object && result.code === 0) return result.dataInfo;
            else this.resultCode(result.code);
        } catch (error) {
            throw error;
        }
    }
    async getRecord(params) {//登陆
        try {
            let result = await this.axiosGet("mock/5b56b4e68912d82e135bc81e/api/get/user/exchange", params);
            if (result && result instanceof Object && result.code === 0) return result.dataInfo;
            else this.resultCode(result.code);
        } catch (error) {
            throw error;
        }
    }
    async deleteExchangeRecord(params) {//
        try {
            let result = await this.axiosPost("mock/5b56b4e68912d82e135bc81e/example/delete/record/exchange", params);
            if (result && result instanceof Object && result.code === 0) return result.dataInfo;
            else this.resultCode(result.code);
        } catch (error) {
            throw error;
        }
    }
    async submitTable(params) {//
        try {
            let result = await this.axiosGet("mock/5b56b4e68912d82e135bc81e/api/get/user/exchange", params);
            if (result && result instanceof Object && result.code === 0) return result.dataInfo;
            else this.resultCode(result.code);
        } catch (error) {
            throw error;
        }
    }


    resultCode(code) {

    }
}


export default new API();