FROM node:22

WORKDIR /app

# update package list
RUN apt update

# install fish shell
RUN apt install -y fish

# setup fish as default shell
RUN chsh -s /usr/bin/fish

# install dev dependencies
RUN apt install -y git

# print versions
RUN node --version