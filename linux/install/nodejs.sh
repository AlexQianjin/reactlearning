#!/bin/bash  
# echo "This is a shell script"  
# ls -lah  
# echo "I am done running ls"  
# SOMEVAR='text stuff'  
# echo "$SOMEVAR"

###########################
#
#Install Nodejs
#
###########################
echo "Install Nodejs"
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
