#!/bin/bash

sudo npm install --unsafe-perm=true --allow-root;
sudo npm run build;
sudo pm2 start npm --name "next" -- run pro;
exit;