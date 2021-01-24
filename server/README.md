# Surprise My Palate - Server Backend

## Setup
1. `npm i`
2. `mkdir db`
3. `npm run populate`
4. `"DB_FILEPATH='./db/food-db.json'" > .env`

## Tools
  * `npm start` - Start the server
  * `npm run populate` - Populate a default db

## Test
```
curl -d '{"diet":[], "meal-history":[]}' -H "Content-Type: application/json" -X POST http://localhost:4000/foods
```
