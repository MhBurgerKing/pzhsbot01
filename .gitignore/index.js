const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("x-");
const YTDL = require("ytdl-core");
const { get } = require("snekfetch"); 
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json');
const db = low(adapter);
const talkedRecently = new Set();
const cooldown = new Set();
bot.login(process.env.TOKEN);
db.defaults({ histoires: [], xp: []}).write()

function changing_status() {
    let status = ['x-help pour les commandes.', 'x-help | By PZH#8058 | YT: PZH', 'Web: http://pzhcodage.ga', 'x-help | Version 1.0.1', `x-help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`]
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
}


bot.on("ready", () => {
    console.log(`${bot.user.username} est en ligne sur ${bot.guilds.size} serveurs Ndu : ${bot.users.size}`);
    setInterval(changing_status, 5000);
})

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {
           case "villefortnite":
           let argftn = message.content.split(" ").slice(1);
            let ftn = argftn.join(" ")
                var replys = [
                `Alors tu vas aller à... **Junk Juction**!`,
                "Alors tu vas aller à... **Haunted Hills **!",
                "Alors tu vas aller à... **Pleasant Park**!",
                "Alors tu vas aller à... **Snobby Shores**!",
                "Alors tu vas aller à... **Viking Village**!",
                "Alors tu vas aller à... **Greasy Grove (gelée)**!",
                "Alors tu vas aller à... **Shifty Shafts**!",
                "Alors tu vas aller à... **Happy Hamlet**!",
                "Alors tu vas aller à... **Tilted Towers**!",
                "Alors tu vas aller à... **Loot Lake**!",
                "Alors tu vas aller à... **Lazy Lagoon**!",
                "Alors tu vas aller à... **Tomato Temple**!",
                "Alors tu vas aller à... **Sunny Steps**!",
                "Alors tu vas aller à... **Volcan**!",
                "Alors tu vas aller à... **Dusty Divot**!",
                "Alors tu vas aller à... **Lonely Lodge**!",
                "Alors tu vas aller à... **Retail Row**!",
                "Alors tu vas aller à... **Salty Springs**!",
                "Alors tu vas aller à... **Fatal Fields**!",
                "Alors tu vas aller à... **Lucky Landing**!",
                "Alors tu vas aller à... **Paradise Palms**!",
                "Alors tu vas aller à... **Traineau**!",
                "Alors tu vas aller à... **Villa des héros (détruite)**!",
                "Alors tu vas aller à... **Base des méchants (détruite)**!",
                "Alors tu vas aller à... **Bloc**!",
                "Alors tu vas aller à... **Station Service**!",
                "Alors tu vas aller à... **Dépot**!",
                "Alors tu vas aller à... **Usine de Flush Factory (à moitié enneigé)**!",
                "Alors tu vas aller à... **Piscine**!",
                ];
            
                let ftnreponse = (replys[Math.floor(Math.random() * replys.length)])
                var ftnembed = new Discord.RichEmbed()
                .setTitle("Choix aléatoire ville fortnite")
                .setDescription(`${ftnreponse}`)
                .setColor("RANDOM")
                .setImage("https://www.eclypsia.com/content/Fortnite/Saison8/Fortnite_MapComplete_Saison8.jpg")
                .setFooter("Tu as la map de fortnite à portée de main si tu ne sais pas ou se situe un endroit. ^^")
            message.channel.sendEmbed(ftnembed)
            break;
            case "fortniteobjectif":
            let argftn2 = message.content.split(" ").slice(1);
            let ftn2 = argftn2.join(" ")
                var replys = [
                `Ton objectif est **de faire TOP 1**!`,
                `Ton objectif est **de tuer un joueur au snipe**!`,
                `Ton objectif est **de tuer un joueur au piège**!`,
                `Ton objectif est **de tuer un joueur à la grenade**!`,
                `Ton objectif est **de faire 3 kills en une partie**!`,
                `Ton objectif est **de faire 5 kills en une partie**!`,
                `Ton objectif est **de faire 10 kills en une partie**!`,
                `Ton objectif est **de faire au moins top 10 5 kills**!`,
                `Ton objectif est **de tuer un joueur grace à une chute**!`,
                `Ton objectif est **de faire 3 kills en moins de 3 minutes**!`,
                `Ton objectif est **de faire top 50 5 kills**!`,
                `Ton objectif est **de faire une partie sans construction avec au moins 1 kill**!`,
                `Ton objectif est **de faire une partie sans arme à distance avec au moins 1 kill**!`,
                `Ton objectif est **de faire une partie sans arme de corps à corps avec au moins 1 kill**!`,
                `Ton objectif est **de faire une partie sans arme explosive avec au moins 1 kill**!`,
                `Ton objectif est **de tuez un joueur à la pioche**!`,
                `Ton objectif est **de faire une partie uniquement avec la pioche avec au moins 1 kill**!`,

                ];
                let fttnreponse = (replys[Math.floor(Math.random() * replys.length)])
                var ftnembed2 = new Discord.RichEmbed()
                .setTitle("Objectif aléatoire fortnite")
                .setDescription(`${fttnreponse}`)
                .setColor("RANDOM")
            message.channel.sendEmbed(ftnembed2)
            break;
            case "avatar":
            if (!message.mentions.users.first()) return message.channel.send("Merci de mentionner un utilisateur")
                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                let ava = user.displayAvatarURL
                let embed = {
                color:0x000000,
                description:"Avatar de "+user.username+"",
                image:{url:ava}
                }
            message.channel.send("", {embed})
            break;
            case "help":
                        var replysh = [
                            '#F407FC', 
                            '#034EEF',
                            '#09F4D1',
                            '#09F14E',
                            '#E7EF07',
                            '#F5A718',
                            '#FB4B06',
                            '#FB2702',
                            '#F6F4F3',
                            '#201F1F'
                        ];
                    
                        let reponseh = (replysh[Math.floor(Math.random() * replysh.length)])
                var embede = new Discord.RichEmbed()
                    .setDescription(`${message.author.username}, Voici la liste des commandes:`)
                    .addField(`Divertissement`, "` \nx-8ball \nx-vcs \nx-villefortnite \nx-fortniteobjectif`", true)
                    .addField(`Image`, "`x-chat`", true)
                    .addField(`Musique **OFFLINE**`, "`x-play \nx-skip \nx-stop`", true)
                    .addField("Utilitaire", "` x-avatar \nx-serverlist \nx-serverinfo \nx-botinfo \nx-id \nx-ping \nx-invite \nx-support`", true)
                    .addField(`Modération`, "` x-ban \nx-kick \nx-clear`", true)
                    .addField(`Administration`, "` x-sondage \nx-say`", true)
                    .addField(`Support`, "[[Clique ici pour accéder au support du Bot]](https://discordapp.com/invite/DRuyt7Q)", true)
                    .setFooter(`Xonaria`)
                    .setTimestamp()
                    .setColor(reponseh)
                message.channel.sendEmbed(embede)
            break;
            case "support":
                var embedef = new Discord.RichEmbed()
                    .setDescription(`Support`)
                    .addField(`Un problème avec le bot ? Ou vous voulez juste rejoindre le discord du créateur de celui-ci ?`, `[Clique ici pour rejoindre](https://discordapp.com/invite/DRuyt7Q)`, true)
                    .setFooter(`Xonaria`)
                    .setTimestamp()
                    .setColor("0xDF7401")
                message.channel.sendEmbed(embedef)
               break;
               case "say":
               if(message.member.hasPermission("ADMINISTRATOR")) {
               message.delete();
               let args = message.content.split(" ").slice(1);
               let thingToEcho = args.join(" ")
               message.channel.sendMessage(thingToEcho)
           } else {
               message.reply(`tu n'as pas la permission de faire cette commande.`)}
           break;
           case "serverinfo":
       var embedee = new Discord.RichEmbed()
           .setDescription("Server info")
           .addField("Nom du Discord", message.guild.name)
           .addField("Crée le", message.guild.createdAt)
           .addField("Tu as rejoin le", message.member.joinedAt)
           .addField("Utilisateurs sur le discord", message.guild.memberCount)
           .addField("Nombre de channels sur ce discord", `${message.guild.channels.size}`)
           .setColor("0xFE2E64")
       message.channel.sendEmbed(embedee)
           break;
           case "sondage":
           if (message.member.hasPermission("MANAGE_MESSAGES")) {
               let args = message.content.split(" ").slice(1);
               let thingToEcho = args.join(" ")
               if (!thingToEcho) return message.reply("Merci d'envoyer une question pour le sondage")
               if (!message.guild.channels.find("name", "sondage")) return message.reply("Le channel sondage est introuvable. merci de crée ce channel pour que celui-ci marche.")
               var embedeee = new Discord.RichEmbed()
                   .setDescription("Sondage")
                   .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                   .setColor("0xB40404")
                   .setTimestamp()
           message.channel.sendMessage("Votre sondage a bien été envoyé dans #sondage.")
           message.guild.channels.find("name", "sondage").sendEmbed(embedeee)
           .then(function (message) {
               message.react("✅")
               message.react("❌")
           }).catch(function() {
           });
           }else{
               return message.reply("Tu n'as pas la permission.")}
           break;
            case "kick":
           let command = message.content.split(" ")[0];
           const args = message.content.slice(prefix.length).split(/ +/);
           command = args.shift().toLowerCase();
    
               if(!message.member.hasPermission("KICK_MEMBERS")) {
                   return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
               }
               if(message.mentions.users.size === 0) {
                   return message.reply("Merci de mentionner l'utilisateur à expluser.").catch(console.error);
               }
               let kickMember = message.guild.member(message.mentions.users.first());
               if(!kickMember) {
                   return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
               }
               if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                   return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console.error);
               }
               kickMember.kick().then(member => {
                   message.reply(`${member.user.username} a été expulsé avec succès.`).catch(console.error);
                   message.channel.send(`**${member.user.username}** a été expulsé du discord par **${message.author.username}**`)
               }).catch(console.error)
           break;
           case "ban":
           let commande = message.content.split(" ")[0];
           const argse = message.content.slice(prefix.length).split(/ +/);
           commande = argse.shift().toLowerCase();
           if(!message.member.hasPermission("BAN_MEMBERS")) {
               return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
           }
           const member = message.mentions.members.first();
           if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
           member.ban().then(member => {
               message.reply(`${member.user.username} a été banni avec succès.`).catch(console.error);
               message.channel.send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
           }).catch(console.error)
           break;
           case "8ball":
           let argsed = message.content.split(" ").slice(1);
           let tte = argsed.join(" ")
           if (!tte){
               return message.reply("Merci de poser une question. :8ball:")};
               function includesRealy(msg,str){
                return(
                  msg.content.includes(str) ||
                  msg.content.includes(str.toUpperCase()) ||
                  msg.content.includes(str.toLowerCase())
                )
              }
               if(
                includesRealy(message,'?') 
               ){

               var replys = [
               "Oui.",
               "Non.",
               "Je ne sais pas.",
               "Peut-être.",
               "Probablement."
               ];
           
               let reponse = (replys[Math.floor(Math.random() * replys.length)])
               var ballembed = new Discord.RichEmbed()
               .setDescription(":8ball: 8ball")
               .addField("Question", tte)
               .addField("Réponse", reponse)
               .setColor("0x40FF00")
           message.channel.sendEmbed(ballembed)

            }else{
                message.reply('Tu dois poser une question !') 

            }
               break;
           case "id":
               var idembed = new Discord.RichEmbed()
                   .setDescription(`Votre IDENTIFIANT/ID est ${message.author.id}`)
               message.channel.sendEmbed(idembed)
               break;
           case "ping":
               message.channel.sendMessage('Temp de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
               break;
           case "clear":
           if (message.member.hasPermission("MANAGE_MESSAGES")) {
               message.channel.fetchMessages()
                  .then(function(list){
                       message.channel.bulkDelete(list);
                   }, function(err){message.channel.send("Erreur")})}
               break;
           case "invite":
               var invembed = new Discord.RichEmbed()
               .setDescription(`[Clique sur ce message pour m'inviter!](https://discordapp.com/oauth2/authorize?client_id=427432036152770560&permissions=359005431&scope=bot&response_type=code&redirect_uri=https%3A%2F%2Fpzhcodage.webnode.fr%2Fmerci%2F)`)
              message.channel.sendEmbed(invembed)
           break;
           case "botinfo":
               var embedbot = new Discord.RichEmbed()
                   .setDescription("Information")
                   .addField("Nombre de discord sur lequel je suis", `${bot.guilds.size} serveur(s)`)
                   .addField(`Nombre d'utilisateur(s) au total sur les ${bot.guilds.size} serveur(s) ou je suis`, `${bot.users.size} utilisateur(s)`)
                   .addField("Crée par", "[PZH#8058](http://pzhcodage.ga)")
                   .addField("Crée le", "31/03/2018")
                   .addField("Version", "1.0.1")
                   .setColor("0x81DAF5")
               message.channel.sendEmbed(embedbot)
           break;
           case "vcs":
           let xoargs = message.content.split(" ").slice(1);
           let xo03 = xoargs.join(" ")
           var xo01 = bot.channels.findAll('name', 'xonaria-global');
           var xo02 = message.guild.channels.find('name', 'xonaria-global');
           if(!xo02) return message.reply("Channel `xonaria-global` introuvable, merci de le créer pour effectuer cette commande.");
           if (message.channel.name !== 'xonaria-global') return message.reply("Commande à effectuer dans le channel `xonaria-global`");
           if(!xo03) return message.reply("Merci d'écrire un message à envoyer à la globalité des discords.");
           function includesRealy(msg,str){
            return(
              msg.content.includes(str) ||
              msg.content.includes(str.toUpperCase()) ||
              msg.content.includes(str.toLowerCase())
            )
          }
           if(
            includesRealy(message,'https') ||
            includesRealy(message,'http') ||
            includesRealy(message,'www') ||
            includesRealy(message,'.com') ||
            includesRealy(message,'.fr') ||
            includesRealy(message,'.net')
           ){
            message.delete();
            message.reply('Ton message na pas pu être envoyé à la globalité des serveurs :/ \nRaison: **AntiLink**') 
           }else{

                        var replysg = [
                            '#F407FC', 
                            '#034EEF',
                            '#09F4D1',
                            '#09F14E',
                            '#E7EF07',
                            '#F5A718',
                            '#FB4B06',
                            '#FB2702',
                            '#F6F4F3',
                            '#201F1F'
                        ];
                    
                        let reponseg = (replysg[Math.floor(Math.random() * replysg.length)])
             
           var embedxo = new Discord.RichEmbed()
           .setColor(reponseg)
           .setTitle("Message Global Xonaria")
           .addField("Pseudo de l'utilisateur", message.author.username + "#" + message.author.discriminator, true)
           .addField("Discord", message.guild.name, true)
           .addField("Message", xo03)
           .setFooter("Xonaria Corporation")
           .setTimestamp()
       bot.channels.findAll('name', 'xonaria-global').map(channel => channel.send(embedxo))
           }
            break;
            case "annonce":
            let upargs = message.content.split(" ").slice(1);
            let up03 = upargs.join(" ")
            var up01 = bot.channels.findAll('name', 'xonaria-global');
            var up02 = message.guild.channels.find('name', 'xonaria-global');
            if(!up02) return message.reply("Channel `xonaria-global` introuvable, merci de le créer pour effectuer cette commande.");
            if (message.channel.name !== 'xonaria-global') return message.reply("Commande à effectuer dans le channel `xonaria-global`");
            if(!up03) return message.reply("Merci d'écrire une update à envoyer à la globalité des discords.");
            if (message.author.id !== '330762245921439754') {
                message.channel.send("Tu n'as pas accès à cette commande.")
            }else{

            var replysg = [
                '#00995c'
            ];
        
            let reponseg = (replysg[Math.floor(Math.random() * replysg.length)])
 
        var embedxo = new Discord.RichEmbed()
        .setColor(reponseg)
        .setTitle("| Annonce |")
        .setDescription(`${up03}`)
        .setFooter("Annonce Xonaria")
        .setTimestamp()
        bot.channels.findAll('name', 'xonaria-global').map(channel => channel.send(embedxo))
        }

            break;
            case "chat":
                   try {
                    get('https://aws.random.cat/meow').then(res => {
                        var replys = [
                            '#F407FC', 
                            '#034EEF',
                            '#09F4D1',
                            '#09F14E',
                            '#E7EF07',
                            '#F5A718',
                            '#FB4B06',
                            '#FB2702',
                            '#F6F4F3',
                            '#201F1F'
                        ];
                    
                        let reponse = (replys[Math.floor(Math.random() * replys.length)])
                        const embed = new Discord.RichEmbed()
                        .setDescription(`:cat: Voilà une image aléatoire de chat pour toi, ${message.author.username} !`)
                        .setImage(res.body.file)
                        .setColor(reponse)
                        return message.channel.send({embed});
                    });
                } catch(err) {
                    return message.channel.send(error.stack);
                }
            break;
            case "tempsondage":
                let argson = message.content.split(" ").slice(1);
                let thingToEchon = argson.join(" ")
                if (!thingToEchon) return message.reply("Merci d'envoyer une question pour le sondage temporaire de 5 minutes")
                if (!message.guild.channels.find("name", "sondage-temp")) return message.reply("Erreur: le channel `sondage-temp` est introuvable, il est nécéssaire de le créer pour effectuer cette commande.");
                if (message.channel.name !== 'sondage-temp') { return message.reply("Cette commande ne se fait pas ici, elle se fait dans `sondage-temp`");
                }else{
                message.delete()
                if (cooldown.has(message.author.id)) return message.author.send(`**[ Command __tempsondage__ via le discord __${message.guild.name}__ ]** Veuillez attendre 12 heures avant de re-éffectuer cette commande.`);
            
       
                cooldown.add(message.author.id);

                setTimeout(() => {

                cooldown.delete(message.author.id);

                }, 43200000);

               if (!cooldown.has(message.author.id)) {
                setTimeout(() => message.guild.channels.find("name", "sondage-temp").send(`Le sondage de ${message.author.username} vient d'expirer.`), 300000)
                var embedeeeon = new Discord.RichEmbed()
                    .setDescription("Sondage Temporaire")
                    .addField(thingToEchon, "Répondre avec :white_check_mark: ou :x:")
                    .addField("Fin du sondage dans", "Moin de 5 minutes")
                    .setColor("0xFF00FF")
                    .setFooter(`Requête de ${message.author.username}`)
                    .setTimestamp()
                message.channel.sendEmbed(embedeeeon)
                .then(function (message) {
                message.react("✅")
                message.react("❌")
                }).catch(function() {
                });
            break;
                    

        }


};


}})

bot.on('message', message => {

    if (message.content === prefix + "serverlist"){
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    let tosend = [];
    bot.guilds.forEach((guild, number) => { tosend.push(`\`${guild.name}\` | ${guild.memberCount} membres`) })


    let pages = [];
for (let i = 0; i < tosend.length;) {
    if ((i + 9) > tosend.length) {
        pages.push(tosend.slice(i, (i + 9) - ((i + 9) - tosend.length)).join("\n"));
        break;
    } else {
        pages.push(tosend.slice(i, i + 9).join("\n"));
        i += 9
    };
}
    let page = 1;
const embed = new Discord.RichEmbed()
    .setTitle(`Liste des serveurs (${bot.guilds.size}) sur lequel je suis.`)
    .setFooter(`Page: ${page}/${pages.length}`)
    .setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
    if (!message.guild.member(bot.user).hasPermission('ADD_REACTIONS')) return;
        msg.react("◀").then(r => {
            msg.react("▶")
            
            const backF = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const ForF = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
            
            const back = msg.createReactionCollector(backF, { time: 180000 });
            const For = msg.createReactionCollector(ForF, { time: 180000 });
            
            back.on('collect', async r => {
                r.remove(message.author.id)
                if (page === 1) return r.remove(message.author.id);
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });
            
            For.on('collect', async r => {
                r.remove(message.author.id)
                if (page === pages.length) return r.remove(message.author.id);
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });
        });
    });

}})
