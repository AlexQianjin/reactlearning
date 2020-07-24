### Base Commands
- ls
- ls ‐ahl
- ll
- cd
- ln
- mkdir
- rm / rm -r -f Github/
- rmdir
- mv
- cp
- touch
- cat
- nl
- more
- less
- tail
- grep
- find

### System
- __to set address manually__  
  ifconfig eth0 inet x.x.x.x 
- __Upload files by Filezilla encountered permission denied__  
  sudo chown -R alex /var/www/html
- Open Terminal Ctrl + Alt + T 
- sudo poweroff
- sudo reboot
- sudo netstat -tulpn | grep LISTEN
- sudo netstat -anp | grep LISTEN
- systemctl list-unit-files | grep enabled
- systemctl | grep running
- systemctl show [unit]
- systemctl restart [unit]
- sudo ps -e
- sudo rm -r
- sudo ufw allow 1520
- adduser myuser          # [myuser为用户名，可自定义指定]将提示你输入登录密码，请输入并牢记
- sudo passwd myuser
- cat /etc/passwd 
- cat /etc/group
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
- echo -e "NODE_ENV=production \nPORT=3000 \nMONGOLAB_URI=mongodb://db/weapondb" >> .env
- sed -i 'a xxx' txt
- sed -i '4d' txt
- sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
- sed -i 's/l.alexqin.cn/localhost/g' reverse.conf
- dpkg -l
- dpkg -i foo.deb && apt-get install -f
- find / -name 'let*' -type d
- envsubst envsubst < test.txt > output.file
- echo "export NODEJS_SERVICE_PORT=1233" >> .bashrc && source .bashrc
- uname －a
- cat /proc/version
- lsb_release -a
- apt-cache search php7.4-curl
- ps -ax | grep apache
- sudo systemctl list-unit-files
- sudo systemctl list-unit-files | grep enabled
- sudo systemctl status openresty.service
- sudo systemctl disable nginx.service
- sudo chown -R $USER moodle/

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
- :set number

### Openssh
- sudo apt install openssh-server
- sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.original
- sudo chmod a-w /etc/ssh/sshd_config.original
- sudo systemctl restart sshd.service
- sudo service ssh status
- sudo nano /etc/ssh/sshd_config
- sudo service ssh restart

### Openssl
- openssl genrsa -aes256 -out private_key.pem 2048
- openssl rsa -pubout -in private_key.pem -out public_key.pem
- openssl req -x509 -nodes -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -days 3650
- openssl req -x509 -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -subj "/CN=unused" -days 3650
- openssl pkcs12 -export -in rsa_cert.pem -inkey rsa_private.pem -CSP "Microsoft Enhanced RSA and AES Cryptographic Provider" -out rsa_cert.pfx
- openssl x509 -text -noout -in cert.pem
- openssl x509 -noout -text -in /etc/letsencrypt/live/el.alexqin.cn/fullchain.pem
- openssl rsa -noout -text -in /etc/letsencrypt/live/el.alexqin.cn/privkey.pem

### Certbot
- sudo certbot certonly --manual (also for renew)

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

### Git Bash (Windows)
- ssh-keygen -C "qianjin.qin@qq.com"
- clip < ~/.ssh/id_rsa.pub

### Docker
- sudo groupadd docker
- sudo usermod -aG docker ${USER} / sudo gpasswd -a $USER docker
- su root / su ${USER} / newgrp docker
- sudo systemctl restart docker

### PHP
-  .\php-cgi.exe -b 127.0.0.1:9000 -c .\php.ini (Windows)
- php -i | grep extension_dir
- php -i | grep ini
- php --ini | grep Loaded
- php -m

### Moodle
```
git clone --depth=1 https://github.com/moodle/moodle.git
git remote set-branches origin 'MOODLE_39_STABLE'
git fetch --depth 1 origin MOODLE_39_STABLE
git checkout MOODLE_39_STABLE

git clone -b MOODLE_39_STABLE --depth 1  git://git.moodle.org/moodle.git
docker network create moodle-net
docker run --network moodle-net -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.8.0
docker run --network moodle-net --name moodle-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8.0.20
docker run --network moodle-net --name moodle-mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:10.5.4
docker run --network moodle-net --name myadmin -d -p 8080:80 -e PMA_HOST=moodle-mysql phpmyadmin/phpmyadmin
docker run --network moodle-net --name myadmin-maria -d -p 8080:80 -e PMA_HOST=moodle-mariadb phpmyadmin/phpmyadmin

mysql>
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';  // 'newuser'@'%'
GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
FLUSH PRIVILEGES;

GRANT type_of_permission ON database_name.table_name TO ‘username’@'localhost’;
REVOKE type_of_permission ON database_name.table_name FROM ‘username’@‘localhost’;
SHOW GRANTS username;
DROP USER ‘username’@‘localhost’;
```

### Red Hat
```
sudo yum list installed
```