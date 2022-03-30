## Installation

While a docker daemon is running:

```bash
$ npm run install
$ npm run migration:run
$ npm run start
```

## Running the app

Login: POST http://localhost:3000/auth/login
// admin@admin.com:pass123

Use the access token:
Key: Authorization
Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY0ODU3NDE3OH0.pUF-zAg4FmWbqEBIgrx1oeUfCsxF5EP2WVnzMC6SCb4

List available rooms:POST http://localhost:3000/booking
params: from Date, to Date
Example:
{"from": "2022-01-01", "to": "2022-01-07"}
Result:
id: room
price: price for the amount of days

Create booking: POST http://localhost:3000/booking
Example:
{"from": "2022-01-01", "to": "2022-01-07", "room": 1}

List all bookings: GET http://localhost:3000/booking/list

Delete a booking: DELETE http://localhost:3000/booking/:id
