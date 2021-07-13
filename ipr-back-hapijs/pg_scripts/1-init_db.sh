#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB" <<-EOSQL
   CREATE ROLE db_admin LOGIN CREATEDB CREATEROLE;
   CREATE ROLE app_admin LOGIN;
   CREATE ROLE app_user LOGIN;
EOSQL

echo "INIT_DB"
