# Welcome to Flight Service

## Setup the Project
- Clone the project on your local.
- Execute `npm install` on the same path as of the root directory of the dowloaded project.
- Create a `.env file` in the root directory and the following environment variables:-
    ```
    PORT = 3000
    ```
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json code
```
{
    "development": {
    "username": "<Your_DB_Login_name>",
    "password": "<Your_DB_Password_if_any>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you have added the db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`.
  Then execute `npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight Table
- Airport Table
- City Table

- A Flight belongs to a Airplane but one Airplane can be used in multiple Flights.
- A City has many Airports but one Airport belongs to a City.
- One Airport can have many Flights but a Flight belongs to one Airport.

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, cityId, created_at, updated_at
- Relationship -> City has many Airports and Airport belongs to a City.(One to Many Relation)
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```