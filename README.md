# Cosmic Furniture

A Next.js, ecommerce, furniture application with MySQL and Docker Compose.

## Requirements

For local development:

- Node.js 22+
- npm
- Docker Engine
- Docker Compose

## Environment variables

The MySQL container requires the following environment variables.

Create a `.env` file in the project root, alongside `compose.yml`:

```env
DB_PASS=your_database_password
DB_ROOT_PASS=your_mysql_root_password
DB_USERNAME=your_database_username
DB_NAME=your_database_name
```

| Variable       | Description                                |
| -------------- | ------------------------------------------ |
| `DB_PASS`      | Password for the application database user |
| `DB_ROOT_PASS` | MySQL root password                        |
| `DB_USERNAME`  | Username for the application database user |
| `DB_NAME`      | Name for the database                      |

## Run the application using Docker

To run the application and MySQL together using Docker Compose:

```bash
docker compose up --watch
```

This builds and starts the services defined in `compose.yml`.

Your MySQL data should persist in the configured Docker volume when containers are stopped or removed.
