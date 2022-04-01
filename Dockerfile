FROM node:16.14.2

RUN mkdir /app
WORKDIR /app

EXPOSE 3000
CMD ["npm", "start"]