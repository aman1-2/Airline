# Airline Backend System

## Objective :
We need to build a backend system that can support different features for an airline company. Our end user is going to be someone who wants to book flights and Query about flights so we need a robust system to actually help them give the best experience possible. This doc is solely going to focus on the backend part of the system. We need to prepare the whole backend keeping the fact in mind that the code base should be as maintainable as possible.

This system involves the scheduling of flights, air ticket reservations, flight cancellations, and customer support. Daily flight updates can too be retrieved through this system.

## Requirements: 

### Functional Requirements (System Requirements) : 
- A User must be able to search for the flights from one place to another.
  - A user must be able to search the flight based on the Source and Destination places.
  - A user must be able to search a flight based on the dates he selects.
    - [V2] Users should be able to search for return or multi-city flights.
  - Users should be able to select the class of the fights. [Non-mandatory]
  - User should	be able to select the No. of seats they want to book.	[Non-mandatory]
  - Now based on the above data we will list down the flights available.
  - We should show our users the best possible flights based on the time of the flight and the price of the trip.
  - We need to support pagination so that we can list a chunk of flights at one point of time.
  - We should support filters of flights based on Price, Departure Time, Duration, Airline, Stops.
   - [V2] Add support for more Filters Arrival time

- A User should be able to book a flight considering that the user is registered on the platform.
  - Users should be able to cancel a booking, and then based on some criteria we can initiate a refund for them.
  - Users should be able to request and book excess luggage for every flight.

- For making a booking User has to make a Payment [Dummy payment gateway].

- Tracking Flight prices should be possible, the user should be notified about any price drops or on any delays.

- Users should be able to list their previous and upcoming flights.

- Users should be able to download their Boarding Pass If they have done online check-in.

- Online Check-in mechanism should be supported.

- Notification via email for completing online check-in before 3 hours of departure.

- Notification to Users about any flight delays.


- Users should be able to review the flight journey if and only if they have booked a flight.
  - Review mechanism should have a star rating with a comment.
  - While listing any flight we should also display the review of the flight.

- Users should be able to authenticate to our system using email and password.
  - [V2] Support Ticketing, where users can raise their queries.
- Listing FAQs which will be static data.
  - [V2] Prepare seat selection.

- Coupons for the discount and offers.

- While making a booking a person can reserve more than one seat with one login id.

### Non-Functional Requirements : 
- We can expect that we are going to have more flight searches than the flight booking.

- The system needs to be accurate in terms of booking.

- Expect that we will be having approx 1,00,000 total users, 5,00,000 booking might come up in one quarter.

- So in one day we can expect 5000 bookings.

- System should be able to scale up to at least 3x current estimated traffic.

- The system should handle real time updates to flight prices, before users make the final booking.

- Concurrency should be handled, using RDBMS should be a good solution.

### Capacity Estimation 
- Storage Estimates -> 
  - For upcoming 5 Years, 80,00,000 bookings. 2,00,000 users. Considering all the users records and booking records take 10 Mb of data, the overall 10 TB of memory should be fine for our initial pilot run.
- Traffic Estimates -> if we consider 30:1 as the search:booking ratio, then at max we expect 15,000 search queries a day. 2 query/s

## Search and Flight Service
- Create Flights
- Delete Flights
- Update Flights
- Search Flights
  - Based on multiple filtration criteria we can search a flight.
  - Pagination
