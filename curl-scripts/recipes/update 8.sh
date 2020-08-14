API="http://localhost:4741"
URL_PATH="/recipes"
$ ID=5f2c6501697323b2fa94405e TOKEN=5d66fb412ea8aaf0b640ad0ce31376b3 INGREDIENT="Whole hog" TEMPERATURE="205" TIME="14" FUEL="Oak" DIRECTIONS="Cook until the skin is cripsy" OWNER=5f2b1eb740b488a17dd64401 sh curl-scripts/recipes/update.sh

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "recipe": {
      "ingredient": "'"${INGREDIENT}"'",
      "temperature": "'"${TEMPERATURE}"'",
      "time": "'"${TIME}"'",
      "fuel": "'"${FUEL}"'",
      "directions": "'"${DIRECTIONS}"'",
      "owner": "'"${OWNER}"'"
    }
  }'

echo
