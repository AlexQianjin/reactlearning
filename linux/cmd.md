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
- sudo ps -e
- sudo rm -r
- sudo ufw allow 1520
- adduser myuser          # [myuser为用户名，可自定义指定]将提示你输入登录密码，请输入并牢记
- sudo passwd myuser
- usermod -aG sudo myuser # 将创建的用户添加到sudo分组中，以便使用管理员的命令
- exit                    # 结束终端会话
- sudo passwd 
- su - root
- curl -O https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- wget https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- sudo bash install.sh
- lsof -i :8000
- sudo dmidecode -q
- lshw | less
- free 
- free -m
- df -h
- fdisk -l
- echo -e "NODE_ENV=production \nPORT=3000 " >> .env
- sed -i 'a xxx' txt
- sed -i '4d' txt
- sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
- dpkg -l
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
- 0 : 将光标移动到当前行首
- $ : s将光标移动到当前行尾
- G : s移动到这个文件的最后一行  nG : n 为数字，移动到这个文件的第n行
- gg: s移动到这个文件的第一行 相当于 1G
- /word :  从光标开始，向下查询一个名为word的字符串。
- :n1、n2s/word1/word2/g : n1 与n2 为数字.在第n1与n2行之间寻找word1这个字符串, 并将该字符串替换为word2。
- :1、$s/word1/word2/g : 从第一行到最后一行寻找word1字符串，并将该字符串替换为word2
- :1、$s/word1/word2/gc: 从第一行到最后一行寻找word1字符串，并将该字符串替换为word2。 并且在替换之前显示提示符给用户确认（conform）是否需要替换。
- x,X  : 在一行中，x为向后删除一个字符（相当于del键），X为向前删除一个字符（相当于backspace键）。
- dd   : 删除光标所在的那一整行。
- ndd  : n 为数字。从光标开始，删除向下n列。
- yy   : 复制光标所在的那一行。   
- nyy  : n为数字。复制光标所在的向下n行。
- p,P  : p 为将已复制的数据粘贴到光标的下一行，P则为贴在光标的上一行。
- u    : 复原前一个操作
- CTRL + r : 重做上一个操作。
- 小数点'.': 重复前一个动作。

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
- sudo docker run -d --name db -p 27017:27017 -v $(pwd)/mongo:/docker-entrypoint-initdb.d -e MONGO_INITDB_DATABASE=weapondb mongo mongod
- sudo docker run -d --name db -v $(pwd)/scripts/mongo:/docker-entrypoint-initdb.d -e MONGO_INITDB_DATABASE=weapondb mongo mongod

### cannot access the network in ubuntu or ubuntu docker container
- echo "nameserver 8.8.8.8" >> /etc/resolv.conf
- echo "search lan" >> /etc/resolv.conf