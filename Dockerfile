FROM 18-alpine:node

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY /app /app
EXPOSE 3001

CMD ["index.js"]
ENTRYPOINT ["node"]