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
    public void saveRequest(Request request) {
        requestRepository.save(request);
    }
    // Method to get all of the requests in the database
    @Override
    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    // Method to get rid of a request by ID
    public void removeRequest(int id) {
        // Making sure the request ID sent exists in database
        boolean idExists = requestRepository.existsById(id);
        if (!idExists) {
            throw new IllegalStateException("Request with that ID does not exist.");
        }
        // If exists, delete the ID from the database
        requestRepository.deleteById(id);
    }
}
