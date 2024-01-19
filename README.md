# Skills-test

Dex Application

## Local Setup

> Prerequisites: Familiarity with SQL and JavaScript is required.

**1. Node.js**
Ensure you are using Node.js version 16 as specified in the `.nvmrc` file.

```bash
nvm use $(cat .nvmrc)
```

**2. Database**
Before proceeding with the following steps, ensure MySQL database is installed locally.

-   Setup the root password in the `./backend/.env` file.
-   Create a database named `mgldefi`.
-   Run the SQL script to set up the tables in the database using the following command:

```bash
mysql -u root -p mgldefi < ./src/db/new_mgldefi.sql
```

**3. Run the Application**
You are now ready to run the application. Follow these commands:

-   In the first terminal, run the frontend application:

```bash
npm run dev
```

-   In the second terminal, run the backend application:

```bash
cd backend && npm run dev
```

Your Dex application should be up and running locally.
