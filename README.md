# Spring-Boot-RESTful-API
A simple fullstack application built with Java Spring Boot, React, and PostgreSQL to handle a pesudo-company's requests and complaints from users.

## Posting a Request or a Complaint

Pressing the submit button will send the data in the text and select fields into the PostgreSQL database (with a unique ID). The application will not let users type invalid ages (non-numeric || < 0 || > 150).  

![Screen Shot 2022-05-27 at 12 01 29 AM](https://user-images.githubusercontent.com/76039575/170626710-50c887ca-3427-4247-8b12-1ef77eb54981.png)

## Viewing Requests and Complaints
Refreshing the page will trigger a useEffect() React hook and render all of the current requests and complaints in the PostgreSQL database.  

![Screen Shot 2022-05-27 at 12 12 50 AM](https://user-images.githubusercontent.com/76039575/170627834-a804bea9-eca8-4e90-ae83-8dc58e433eb6.png)

## Removing a Request or Complaint

Send a DELETE request to "/api/v1/request/{id}"  

`curl --request DELETE http://localhost:8080/api/v1/request/1`
