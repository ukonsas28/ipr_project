FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
# Bundle app source
COPY . /usr/src/app
# RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]