#!/bin/bash  
# echo "This is a shell script"  
# ls -lah  
# echo "I am done running ls"  
# SOMEVAR='text stuff'  
# echo "$SOMEVAR"

###########################
#
#Install git
#
###########################
echo "Install git"
sudo add-apt-repository ppa:git-core/ppa 
sudo apt update
sudo apt install git
