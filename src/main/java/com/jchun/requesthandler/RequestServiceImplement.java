package com.jchun.requesthandler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestServiceImplement implements RequestService{
    @Autowired
    private RequestRepository requestRepository;
    // Method to save a request into the database
    @Override
    public Request saveRequest(Request request) {
        return requestRepository.save(request);
    }
    // Method to get all of the requests in the database
    @Override
    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }
}
