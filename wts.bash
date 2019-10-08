read -p "Enter your project name: " name
name=${name}

git clone https://github.com/am-fernandes/web-typescript.git
mv web-typescript $name

cd $name

rm -rf .git

git init

rm -rf wts.bash

echo 'Success!'