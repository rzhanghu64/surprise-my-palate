# Surprise My Palate - Server Backend

Documentation on working with the Surprise My Palate server backend!

## Setup
1. `npm i`
2. `mkdir db`
3. `npm run populate`
4. `"DB_FILEPATH='./db/food-db.json'" > .env`
5. Add the proper Yelp API Key as `YELP_API_KEY` to the .env.

## Scripts
  * `npm start` - Start the server
  * `npm run populate` - Populate a default db

## Test
```
curl -d '{"diet":[], "meal-history":[]}' -H "Content-Type: application/json" -X POST http://localhost:4000/foods
```
