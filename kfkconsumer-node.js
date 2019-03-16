const oehcs_connect_url = process.env.OEHCS_CONNECTURL
const topic_name = process.env.TOPIC_NAME
const num_partition = parseInt(process.env.NUM_PARTITION)
const debug = process.env.DEBUG
const METRIC = 1

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({kafkaHost: oehcs_connect_url});

var consumer;
    consumer = new Consumer(
        client,
        [
            { topic: topic_name, offset: 0, partition: num_partition }
        ],
        {
            //groupId: 'consumer-node' + num_partition,//consumer group id, default `kafka-node-group`
            autoCommit: true,
            autoCommitIntervalMs: 5000,
            fetchMaxWaitMs: 100,
            fetchMinBytes: 1,
            fetchMaxBytes: 1024 * 1024,
            fromOffset: true,
            encoding: 'utf8',
            keyEncoding: 'utf8'
        }
    );

var j = 0;
T0 = process.hrtime()[0]
mylog(T0)
    consumer.on('message', function (message) {
        if (j > METRIC) {
            //console.log(process.hrtime()[0]);
            console.log(METRIC/(process.hrtime()[0]-T0) + ' recs per second')
            j = 0
            T0 = process.hrtime()[0]
        }
        mylog(message)
        j = j + 1;
    });
/*
* log message depending on DEBUG env paran
*/
function mylog(msg){
    if (debug == "1"){
            console.log(msg)
    }
}