const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("/help");
    console.log("Connecté");
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "general").send(`${member.user.username} vient de rejoindre le serveur ! Bienvenue :)`)
})

bot.on("guildMemberRemove", member =>{
    member.guild.channels.find("name", "general").send(`${member.user.username} vien de quitter le serveur ! bye bye... :|`)
})

bot.login(process.env.TOKEN);


bot.on('message', message => {

   if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("==========( Help Menu )==========")
            .setDescription("This bot is in development")
            .addField("/invit", "Bot invitation link", true)
            .addField("/xp", "Your xp stats", true)
            .addField("/setlang", "Set language of bot ! | OFFLINE", true)
            .addField("/serverlist", "View all servers list with this bot | OFFLINE", true)
            .addField("/music", "Play your YouTube music :D | OFFLINE", true)
            .setColor("0x006600")
            .setFooter("Bot develop by Kadurio_Kodu#8058")
        message.channel.sendEmbed(embed);

   }
    
   var msgauthor = message.author.id;
   
    if(message.author.bot)return;
   
    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`XP Number: ${userxp[1]}`)
   
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
   
    if (message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`XP Statistic of ${message.author.username}`)
            .setColor('0x04B4AE')
            .setDescription("View your XP stats !")
            .addField("XP:", `${xpfinal[1]} xp`)
            .setFooter("Bot develop by Kadurio_Kodu#8058")
        message.channel.send({embed: xp_embed});

    }

    if (message.content === prefix + "invit"){
        var embed = new Discord.RichEmbed()
            .setTitle("Bot invitation link")
            .addField("Hello, this is the bot invitation link", "[> Click Here <](https://discordapp.com/oauth2/authorize?client_id=413669340345270272&scope=bot&permissions=536083539)")
            .setFooter("For your safety, don't invit this bot in your discord for the time being, the bot is in development | Develop by Kadurio_Kodu#8058")
            .setColor("0x0101DF")
        message.channel.sendEmbed(embed);

    }

    if (message.content === prefix + "music"){
        var embed = new Discord.RichEmbed()
            .setTitle("Music Menu")
            .addField("WARNING !", "Sorry ! This option is OFFLINE.", true)
            .setFooter("Develop by Kadurio_Kodu#8058")
            .setColor("0xFE2E2E")
        message.channel.sendEmbed(embed);
    
}}})
