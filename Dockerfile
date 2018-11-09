# This file is a template, and might need editing before it works on your project.
FROM node:alpine

# Uncomment if use of `process.dlopen` is necessary
# apk add --no-cache libc6-compat

# replace this with your applications default port, if necessary
ENV PORT 8080
EXPOSE 8080 

RUN npm install -g yarn

WORKDIR /usr/src/app

COPY package.json .
COPY . .

CMD [ "npm", "start" ]
