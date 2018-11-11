### Base Commands
- ls
- cd
- ln
- mkdir
- rm
- rmdir
- mv
- cp
- touch
- cat
- nl
- more
- less
- tail

### System
- __to set address manually__  
  ifconfig eth0 inet x.x.x.x 
- __Upload files by Filezilla encountered permission denied__  
  sudo chown -R alex /var/www/html
- Open Terminal Ctrl + Alt + T 
- sudo poweroff
- sudo reboot
- sudo netstat -tulpn | grep LISTEN
- sudo rm -r
- sudo ufw allow 1520
- adduser myuser          # [myuser为用户名，可自定义指定]将提示你输入登录密码，请输入并牢记
- usermod -aG sudo myuser # 将创建的用户添加到sudo分组中，以便使用管理员的命令
- exit                    # 结束终端会话
- sudo passwd 
- su - root
- curl -O https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- wget https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- sudo bash install.sh
- lsof -i :8000
- lshw | less
```
sudo passwd root
sudo passwd -u root
sudo passwd -l root
sudo -i
```
```
#!/bin/bash  
echo "This is a shell script"  
ls -lah  
echo "I am done running ls"  
SOMEVAR='text stuff'  
echo "$SOMEVAR"

The file must be made executable:

chmod u+x install.sh

Then from a terminal prompt:

sudo ./install.sh
```

### vim
- :wq 保存并退出
- :q
- :x
- ZZ 保存并退出
- :q! 强制退出并忽略所有更改
- :e! 放弃所有修改，并打开原来文件

### Openssh
- sudo apt install openssh-server
- sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.original
- sudo chmod a-w /etc/ssh/sshd_config.original
- sudo systemctl restart sshd.service

### ping
- apt-get install -yqq inetutils-ping

### add-apt-repository
- apt-get install software-properties-common

### curl
- apt install -y curl

### mongo in docker
- docker run -d --name mymongo1 -p 27017:27017 -v $(pwd):/docker-entrypoint-initdb.d -e MONGO_INITDB_DATABASE=projects mongo mongod