FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm" , "start" ]
EXPOSE 3000
