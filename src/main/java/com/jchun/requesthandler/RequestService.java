package com.jchun.requesthandler;

import java.util.List;

public interface RequestService {
    public void saveRequest(Request request);
    public List<Request> getAllRequests();
    public void removeRequest(int id);
}
