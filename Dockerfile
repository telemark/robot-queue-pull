# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:f704ba5aa28e99649d97bae2ea77ed52d878cd2ad30f50000c96230ae61f1567

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT npm start
