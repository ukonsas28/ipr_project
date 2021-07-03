FROM node:14-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
# Bundle app source
EXPOSE 8888
COPY . /usr/src/app

# CMD [ "npm", "start" ]
