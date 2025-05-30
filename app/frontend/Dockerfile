# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Stage 2: Use updated Nginx image and patch vulnerabilities
FROM nginx:stable-alpine

# Upgrade vulnerable packages including libxml2
RUN apk update && apk upgrade

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
