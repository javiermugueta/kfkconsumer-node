FROM oraclelinux:7-slim
WORKDIR /app
ADD . /app
RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
RUN yum -y install --skip-broken nodejs npm
CMD ["node","kfkconsumer-node.js"]

