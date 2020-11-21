
module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    async execute(bot, msg, args)
        msg.channel.send('pong!');
    }
}
