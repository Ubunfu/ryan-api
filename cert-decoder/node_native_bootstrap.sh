#!/usr/bin/env bash

sudo yum update -y
sudo yum install gcc44 gcc-c++ libgcc44 cmake –y
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
# nvm install --lts
# nvm install 9.11.1
nvm install 8.10.0
nvm use 8.10.0