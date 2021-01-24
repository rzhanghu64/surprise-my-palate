# Surprise My Palate - Server Backend

## Tools
  * `npm start` - Start the server
  * `npm run populate` - Populate a default db

## Test
```
curl -d '{"diet":[], "meal-history":[]}' -H "Content-Type: application/json" -X POST http://localhost:4000/foods
```
