#!/bin/bash

sudo npm install --unsafe-perm=true --allow-root;
sudo npm run build;
sudo pm2 restart next;
exit;