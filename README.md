# Surprise My Palate (tentative name?)
CUNY Hackathon 2021 Submission - Cheung Charles, Dominguez Luis, Hu Richard


## Inspiration
Richard Hu loves to eat. He lives in NYC, one of the most diverse cuisine community in the world. But he used to eat things he was familiar with, rarely venturing out his comfort zone, until his Muslim friend came over to his neighborhood and he wanted to make sure she adhered to Halal.  This led him to try out Afghan food, which he enjoyed despite normally not being in love with spicy food, and Uighur cuisine, which he could inadequately describe as a mix of the tastes of influencing western Chinese cuisine, with some of the spices common in Muslim cuisine, but ultimately a unique taste in and of itself.  His introduction of these underrepresented cuisines in NYC helped him expand his palate, but made him worried about his lack of culinary experiences in underrepresented cultures.

On January 23, 2021, Richard invited hackathon partner and friend Luis Dominguez to his home to try out foods that Richard enjoyed, but Luis Dominquez never had. Richard introduced lamb and beef Chinese bbq skewers, Citron tea, brewed green tea, and Shanghainese soup dumplings.  Luis said that if it weren't for his friendship with Richard, it might be years before he would try the dishes himself, or worse, never before his palate changes as he ages.

## What it does
This is a mobile reactive application, since the question of "What should I eat" is usually asked by people being outside and hungry. Conveniently, various restaurant search engines have quick and accessible integration with their mobile applications. 

For minimum viable product, a user will be first directed to input any dietary restrictions, health or personal.  Any dishes or restaurants that violate an ingredient blacklist derived from these inputs will not be shown to the user. Optionally a user may also provide a history of their past foods, so the application will avoid the same or similar foods that may be too soon to eat again, and encourage variety.

The application will display various restaurants or specific dishes that are not mentioned in either the blacklist or eating history, and first prioritize underrepresented, then never experienced, cuisines. Prices, links and redirects to food delivery or search services will be shown on a user's screen.

Should a purchase of newly-experienced dish be noted, display any gamified milestones like "Culinary adventurer - explore 10 different cuisines", or "Unpredictable - don't eat the same type of cuisine for your last 10 takeouts".

A final page will request that the user review the dish in the ordering apps, and thanks them for their willingness to try something new.

## Workflow

```
text file

[underrespresented/novel cuisines] <-- randomly select one

Look for [cuisine] on Yelp; suggest first three restuarants
```


* User comes to App
  * user enters diet
  * user entrs meal history
  * user submits
  * server receives
  * server randomly picks three cuisines + checks against blacklist (maybe ignore everything 3 stars and below)
  * server contacts Yelp for cuisine, on pricing, restaurants
  * front-end receives restaurant and food info
  * front-end displays restaurant and food info and displays Google Maps API

## Implementation

* Node.js, Express backend
* Axios for API, LevelDB for keeping 
