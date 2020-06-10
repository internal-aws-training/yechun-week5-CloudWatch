cd $(dirname $0)/..

aws cloudformation create-stack --stack-name $1 --template-body file://aws/cloudformation$2.yml --region "ap-southeast-1"