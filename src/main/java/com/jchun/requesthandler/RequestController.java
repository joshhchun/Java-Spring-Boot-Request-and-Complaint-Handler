package com.jchun.requesthandler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.jchun.requesthandler.RequestService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/request")
public class RequestController {
    @Autowired
    private RequestService requestService;
    // POST Method
    @PostMapping
    public void addRequest(@RequestBody Request request) {
        requestService.saveRequest(request);
    }
    // GET Method
    @GetMapping
    public List<Request> getAllRequests() {
        return requestService.getAllRequests();
    }
    // DELETE Method
    @DeleteMapping(path = "{requestId}")
    public void removeStudent(@PathVariable("requestId") int id) {
        requestService.removeRequest(id);
    }
 }
