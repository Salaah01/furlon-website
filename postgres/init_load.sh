set -e

psql -v ON_ERROR_STOP=1 --username "$(cat /run/secrets/postgres_db_user)" <init_load.sql
