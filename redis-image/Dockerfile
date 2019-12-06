# use exiting docker image as base image
FROM alpine

# download and install additional dependency
RUN apk add --update redis
RUN apk add --update gcc

# command to run on start up
CMD ["redis-server"]
