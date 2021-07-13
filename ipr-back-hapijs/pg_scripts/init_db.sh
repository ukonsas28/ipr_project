#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB" <<-EOSQL
   CREATE TABLE users (
    LastName varchar(255),
    FirstName varchar(255)
);
EOSQL

echo "START!!!!!!!!!!!!!!!!!!!!!!"
