class TokenException extends Error{
    constructor(message ){
        super(message || "User Token Exception");
        this.name="TokenException";
        this.statusCode=401;
    }
}
module.exports=TokenException;

