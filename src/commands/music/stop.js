module.exports.run = async (client, message, args) => {
    const player = client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
    });

    if (player.playing) {
        player.stop();
    } else {
        message.reply("bro you are not even playing a music wtf.")
    }
}

module.exports.config = {
    name: 'stop',
    aliases: ['leave'],
    description: 'Stops and makes the bot leaves the channel',
};