import { connect } from "amqplib";

let connection;
let channel;

export const start = async function () {
  try {
    connection = await connect("amqp://rabbitmq_node");
    channel = await connection.createChannel();

    await channel.assertQueue("taskQueue");
    console.log("✅ Notification Service connected to RabbitMQ");

    channel.consume("taskQueue", (msg) => {
      if (msg !== null) {
        try {
          const messageContent = msg.content.toString();
          const message = JSON.parse(messageContent);

          console.log("📩 Notification: New Task:", message.title);

          // ✅ Ack after successful processing
          channel.ack(msg);
        } catch (err) {
          console.error("❌ Error processing message:", err.message);
          // optionally: channel.nack(msg, false, true) to requeue
        }
      }
    });
  } catch (error) {
    console.error("❌ Failed to connect to RabbitMQ:", error.message);
    setTimeout(start, 5000); // Retry after 5 seconds
  }
};