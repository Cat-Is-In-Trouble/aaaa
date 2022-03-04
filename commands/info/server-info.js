const discord = require('discord.js');
const db = require('old-wio.db');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const emoji = require('../../emojis.json')

module.exports = {
	config: {
		name: 'serverinfo',
		aliases: ['si', 's-info'],
		category: 'info',
		description: 'Shows the detailed info about the server',
		usage: 'serverinfo'
	},
	run: async (bot, message, args) => {
		const roles = message.guild.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;
		const regions = {
			brazil: 'Brazil',
			europe: 'Europe',
			hongkong: 'Hong Kong',
			india: 'India',
			japan: 'Japan',
			russia: 'Russia',
			singapore: 'Singapore',
			southafrica: 'South Africa',
			sydeny: 'Sydeny',
			'us-central': 'US Central',
			'us-east': 'US East',
			'us-west': 'US West',
			'us-south': 'US South'
		};

		const embed = new MessageEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.setColor('RANDOM')
			.addField('<a:leftright:884641848793124874> Owner', message.guild.owner.user.tag)
			.addField('Region\t`undefined` Region? Set By g!svr', regions[message.guild.region])
			.addField(
				`${emoji.Category} Channel Categories`,
				channels.filter(channel => channel.type === 'category').size
			)
			.addField(
				'>>> <:laptop:909716916619321444> Text Channels',
				channels.filter(channel => channel.type === 'text').size
			)
			.addField(
				'>>> <a:pb_speaking:906183413499850794> Voice Channels',
				channels.filter(channel => channel.type === 'voice').size
			)
			.addField('<a:dogy_dance:878205246504046634> Members', message.guild.memberCount)
			.addField('<a:botle_flip:881502991767711815> Roles', roles.length)
      .addField('🖼️ Emojis', message.guild.emojis.cache.size)
			.setFooter(
				`ID: ${message.guild.id} | Server Created - ${moment(
					message.guild.createdTimestamp
				).format('LT')} ${moment(message.guild.createdTimestamp).format(
					'LL'
				)} ${moment(message.guild.createdTimestamp).fromNow()}`
			);
		message.channel.send(embed);
	}
};
