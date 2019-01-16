FROM mhart/alpine-node:10 as base
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN git clone https://github.com/telemark/robot-queue-pull.git src
WORKDIR /src
RUN npm i --production
COPY . .

FROM mhart/alpine-node:base-10
WORKDIR /src
COPY --from=base /src .
CMD ["node", "index.js"]