#!/bin/bash  
# echo "This is a shell script"  
# ls -lah  
# echo "I am done running ls"  
# SOMEVAR='text stuff'  
# echo "$SOMEVAR"

###########################
#
#Install nginx
#
###########################
echo "Install nginx"
sudo -s
nginx=stable # use nginx=development for latest development version
add-apt-repository ppa:nginx/$nginx
apt-get update
apt-get install nginx
