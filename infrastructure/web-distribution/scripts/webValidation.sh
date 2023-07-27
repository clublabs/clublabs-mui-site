#!/bin/bash

DOMAIN1=$1
DOMAIN2=$2
ENV=$3
# Define the path to the file containing URLs and expected content
file_path="./urls.$ENV.txt"

# Read the file line by line

function executeForDomain() {
  while IFS="|" read -r url expected_content || [[ -n "$url" ]]; do
  # Trim leading/trailing whitespace from URL and expected content
  url=${url/'{DOMAIN}'/$1}
  path=$(echo "$url" | awk -F '.ace.aaa.com/' '{print $2}')
  url=$(echo "$url" | xargs)
  expected_content=$(echo "$expected_content" | xargs)

  # Send a GET request to get the status code and response body
  response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  body=$(curl -s "$url")

  # Check if the response body contains the expected content
  if [[ "$body" == *"$expected_content"* ]]; then
    validation_status="Valid"
  else
    validation_status="Invalid"
  fi

  # Print the URL, status code, and validation status
  echo "URL: $url | Status Code: $response | Validation: $validation_status"
  echo "URL: $path | Status Code: $response | Validation: $validation_status" >> $1.txt
done < "$file_path"
}

executeForDomain $DOMAIN1
executeForDomain $DOMAIN2

diff $DOMAIN1.txt $DOMAIN2.txt
# rm $DOMAIN1.txt
# rm $DOMAIN2.txt

