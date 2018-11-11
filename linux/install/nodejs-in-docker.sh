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
apt-get install -y gnupg
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs
