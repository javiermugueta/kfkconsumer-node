# kfkconsumer-node

Consumes messages from a topic in a kafka cluster of brokers

## Environment variables
```
export OEHCS_CONNECTURL=ip:port,ip:port,...
export TOPIC_NAME=<a name>
export NUM_PARTITIONS=<a number>
export DEBUG=[1: debug]

docker run -it -e OEHCS_CONNECTURL=$OEHCS_CONNECTURL -e TOPIC_NAME=$TOPIC_NAME -e NUM_PARTITIONS=$NUM_PARTITIONS -e DEBUG=$DEBUG javiermugueta/kfkconsumer-node
```