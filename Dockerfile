# build environment
FROM node:14.16.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
#RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]