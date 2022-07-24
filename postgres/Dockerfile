FROM postgres:14.4-alpine

# Copies the entrypoint scripts
COPY init_load.sql docker-entrypoint-initdb.d/.
COPY init_load.sh docker-entrypoint-initdb.d/.