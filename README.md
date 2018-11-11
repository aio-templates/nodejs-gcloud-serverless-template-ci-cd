## Starting App

**Setting up Google Cloud**

- Go your Google Cloud Console
- Go to APIs & Services
- Credentials > Create credentials > Service account key
- Select Google Compute Engine & Create
- Go to your GitLab project 
- Go to Settings > CI/CD > variables 'GCLOUD_SERVICE_KEY' value to be the google service json value outputted on the previous step
- Set your `GCP_PROJECT_ID` variable in `.gitlab-ci.yml`
- Go to Google Cloud Console > Create Bucket
- Go to `.gitlab-ci-yml` and replace the 3 occurrances of `{bucket_name}` with your bucket name.

**Setting up Firebase Auth**

- If you do not want Firebase Auth, SKIP to last step.
- Go to your Firebase project (create one if needed).
- Go to Authentication & enable it.
- Go to Project Settings > Service Accounts
- Select Node.js configuration & Generate new private key.
- Rename the file to `firebase-admin.json` and place it in `/config` directory
- (No Auth): Comment out `require('./server/middleware/auth.js')(app);` in `index.js`

**Setting up Database**

- Rename the `config/config.example.js` file to `config/config.js`
- Note (not required): Ideally, you should set the `process.env.*` variables via an encrypted cloud variable at deployment time.
- Otherwise, just update the config.js file with your Database enviroment credentials (by replacing the `process.env.*` variables).
- Go to .gitignore and uncomment the config files

**Without Migrations**

```
npm install

npm start

```

**With Migrations**

```
npm install

node_modules/.bin/sequelize db:migrate

npm start

```

This will start the application and create an sqlite database in your app dir.
Just open [http://localhost:3000](http://localhost:3000).

## Running Tests

We have added some [Mocha](https://mochajs.org) based test. You can run them by `npm test`
