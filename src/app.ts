import * as rabbitMq from "./entity/rabbit-mq";
import { calculateDistanceController } from "./controller";

const RABBIT_MQ_IP =  "127.0.0.1" ;
const DISTANCE_CALC_QUEUE = "calculateDistance";

( async () => {
  const rabbitMqConnection = new rabbitMq.Connection( RABBIT_MQ_IP );
  await rabbitMqConnection.open();

  const queue = new rabbitMq.Queue( rabbitMqConnection );
  await queue.create();

  queue.setController( calculateDistanceController );
  queue.listen( DISTANCE_CALC_QUEUE );
} )();
