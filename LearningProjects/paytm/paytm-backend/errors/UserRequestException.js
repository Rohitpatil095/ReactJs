class UserRequestException extends Error{
    constructor(message){
        super(message || "Error in user data.");
        this.name="UserRequestException";
        this.statusCode=403;
    }
}

module.exports = UserRequestException;