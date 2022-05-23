package com.jchun.requesthandler;

import java.util.List;

public interface RequestService {
    public Request saveRequest(Request request);
    public List<Request> getAllRequests();
}
