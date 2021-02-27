# Vefforritun 2, 2021, verkefni 3

Búa þarf til postgresql gagnagrunn og setja tengistreng í skrá sem heitir .env (búa þarf þessa skrá til). Einnig þarf að skrá SESSION_SECRET í .env. Sjá dæmi í .env_example.

Keyrt með:

* `npm install` keyrt fyrst sem sækir öll dependency
* `npm start` keyrir setup á gagnagrunnum (sjá að neðan) og keyrir síðan upp express vefþjón á porti `3000`
* `npm test` keyrir eslint og stylelint

npm run setup hendir töflunum signatures og users, býr þær skv. schema.sql, setur gögn í signatures með faker og býr til notandann admin / 123.

Keyrandi á heroku: https://vef2-ah-verkefni3.herokuapp.com/
