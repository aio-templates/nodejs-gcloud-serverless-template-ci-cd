## Happy Coding

**Setting up CI/CD with GCP**

- Go your Google Cloud Console
- Go to APIs & Services
- Credentials > Create credentials > Service account key
- Select Google Compute Engine & Create
- Go to your GitLab project
- Go to Settings > CI/CD > variables 'GCLOUD_SERVICE_KEY' value to be the google service json value outputted on the previous step
- Go to Google Cloud Console > Create Bucket & create a new bucket (bucket name used on last step)
- Set your `GCP_PROJECT_ID` variable in `.gitlab-ci.yml`
- Set your `GCP_BUCKET` variable in `.gitlab-ci.yml`

**Setting up Firebase Auth(opt)**

- If you do not want Firebase Auth, SKIP to last step.
- Go to your Firebase project (create one if needed).
- Go to Authentication & enable it.
- Go to Project Settings > Service Accounts
- Select Node.js configuration & Generate new private key.
- Rename the file to `firebase-admin.json` and place it in `/config` directory
- (No Auth): Ensure this line is commented out in `src/app.js`: `require('./server/middleware/auth.js')(app);`

**Setting up Database**

- Rename the `config/config.example.js` file to `config/config.js`
- Otherwise, just update the config.js file with your Database enviroment credentials (by replacing the `process.env.*` variables).
- Go to .gitignore and uncomment the config files
- Note (not required): Ideally, you should set the `process.env.*` variables via an encrypted cloud variable at deployment time.
- **UPDATE:** You can now do this via setting the following on your gitlab variables:
  -- For Development: `DEV_DB_USERNAME, DEV_DB_PASSWORD, DEV_DB_NAME, DEV_DB_HOSTNAME`
  -- For Production: `PROD_DB_USERNAME, PROD_DB_PASSWORD, PROD_DB_NAME, PROD_DB_HOSTNAME`

**Running in Development**

- Don't forget to locally set your process.env variables if you're using them in `./config/config.js`
  -- Ex (`npm install cross-env -g` if you want to use cross-env): `cross-env DEV_DB_USERNAME=username DEV_DB_PASSWORD=password DEV_DB_NAME=dbname DEV_DB_HOSTNAME=hostname npm run start`
- This will start the application and create an sqlite database in your app dir.
  Just open [http://localhost:8000](http://localhost:8000).

```
npm install

npm start

```

**Squelize**

- [Sequelize Docs](http://docs.sequelizejs.com/) are life.
- I have added the following helpful scripts to easily handle migrations, seeding etc. They are found in packages.json
  -- Example: `npm run sql:migrate`

```
    "sql:migrate:undo": "npm run sql db:migrate:undo:all",
    "sql:migrate": "npm run sql db:migrate",
    "sql:seed:undo": "npm run sql db:seed:undo:all",
    "sql:seed": "npm run sql db:seed:all",
    "sql:s": "npm run sql:migrate:undo && npm run sql:migrate && npm run sql:seed",
    "sql": "./node_modules/sequelize-cli/lib/sequelize",
    "sqlize:s": "sequelize db:migrate:undo && db:migrate && db:seed:all"

```

## Running Tests

- **Note**: ~~only currently supported in Development, current issue open for unit tests in CI/CD. Feel free to open up a MR for it :)~~ Unit Tests are now ran before the linter stages.
- [Mocha](https://mochajs.org) based tests: You can run them by `npm test`
