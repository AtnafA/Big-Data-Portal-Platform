package net.codejava.fileupload.Reset;

public final class RestResponseStatus {
    public RestResponseStatusCode code;
    public String msg;
    
    private RestResponseStatus(RestResponseStatusCode code, String msg) {
        this.code = code;
        this.msg = msg;
    }
    
    public static RestResponseStatus success(String msg) {
        msg = (msg == null)? "": msg.trim();
        
        if (msg.length() == 0) {
            msg = "The operation is successful";
        }
        
        return new RestResponseStatus(RestResponseStatusCode.SUCCESS, msg);
    }
    
    public static RestResponseStatus fail(String msg) {
        msg = (msg == null)? "": msg.trim();
        
        if (msg.length() == 0) {
            msg = "Error occured while doing the operation";
        }
        
        return new RestResponseStatus(RestResponseStatusCode.FAIL, msg);
    }
}