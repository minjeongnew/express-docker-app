# base 이미지
FROM node:12

WORKDIR /usr/src/express-docker-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
# 컨테이너 실행 시 실행할 명령어
CMD ["npm", "start"]
