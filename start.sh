#!/bin/bash

sudo npm run build;
sudo pm2 start npm --name "next" -- start;
exit;