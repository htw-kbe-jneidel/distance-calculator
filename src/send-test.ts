import * as rabbitMq from "./entity/rabbit-mq";

( async () => {
  const rabbitMqConnection = new rabbitMq.Connection( "127.0.0.1" );
  await rabbitMqConnection.open();
  const queue = new rabbitMq.Queue( rabbitMqConnection );
  await queue.create();

  const req = [ "13.52575,52.46319", "13.50961,52.45775" ];
  const r = await queue.send( "calculateDistance", req );

  console.log( r );
  process.exit( 0 );
} )();
