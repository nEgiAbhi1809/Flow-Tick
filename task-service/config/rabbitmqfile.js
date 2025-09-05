import amqp from 'amqplib';

let channel, connection;

export const  connectRabbitMQwithRetries = async function(retries = 5, delay = 5000) {
    while (retries > 0) {
        try {
            connection = await amqp.connect("amqp://rabbitmq_node");
            channel = await connection.createChannel();
            await channel.assertQueue("taskQueue");
            console.log("✅ Connected to RabbitMQ");
            return;
        } catch (error) {
            console.error("❌ Failed to connect to RabbitMQ:", error.message);
            retries--;

            if (retries === 0) {
                console.error("All retries to connect to RabbitMQ have failed. Exiting...");
                process.exit(1);
            } else {
                console.log(`Retrying in ${delay / 1000}s... (${retries} retries left)`);
                await new Promise(res => setTimeout(res, delay));
            }
        }
    }
}

export function getChannel() {
  if (!channel) throw new Error("RabbitMQ channel not initialized");
  return channel;
}