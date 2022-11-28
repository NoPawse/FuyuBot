function fuyubot(client, evt) {
  let message = `Hello There!

HAI HAI! I'm Fuyume!  A discord bot modeled after Fuyume Tsukihana, NoPawse's IRL Fiancee! Now, I know you prolly have alot of questions, but for now chill!    
I'm a SUPER HUGE Work In Progress! and NoPawse is developing me ON TOP of developing the minecraft server as well as keeping up wiht his college courses! so be patient!

**That's all very cool, Fuyubot, but what does that mean for me?**

Because I'm such a baby, this means that now is a **GREAT** time to suggest new features or give feedback about current ones.
Of course you could give a simple idea like, "add this action command". But if you've always had a cool idea or feature that you
wanted to see in a discord bot, now is the time to think it through and submit it! Think about economy features/pets that you need to take
care of and feed/a web panel/more server or command settings/a profile with badges or items or stats or whatever, let your ideas go
crazy and take them to the next level!

**Alright i'm ready, how do i submit this idea?**

Head on over to the github! This link will take you right to the repository
https://discord.gg/4FRcCzP`;

  return evt.message.channel.sendMessage(message);
}

export default {
  Fuyubot,
  fuyubotv2: fuyubot
};

export const help = {
  fuyubot: {}
};
