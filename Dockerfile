FROM node

RUN mkdir /app
WORKDIR /app

EXPOSE 3000
CMD ["npm", "start"]