FROM mongo:latest
MAINTAINER lugondev <lugondev@gmail.com>
COPY create-admin.js /

EXPOSE 27017