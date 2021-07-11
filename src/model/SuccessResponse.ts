export default class SuccessResponse {
    code: string;
    data: string;
    success: boolean;
    constructor(code, data, success = true) {
        this.success = success;
        this.code = code;
        this.data = data;
    }
}