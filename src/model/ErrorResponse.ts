export default class ErrorResponse {
    code: string;
    message: string;
    success: boolean;
    constructor(code, message, success = false) {
        this.success = success;
        this.code = code;
        this.message = message;
    }
}