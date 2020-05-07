var donation = document.getElementsByClassName('donation');
var userC = document.getElementsByClassName('usernamec');
var userD = document.getElementsByClassName('usernamed');
var money = document.getElementsByClassName('money');
var chat = document.getElementsByClassName('chat');
var views = document.getElementById('viewers');
var startVar = 0;
var startVar2 = 0;
var endVar = 12;
var chatVar = 14;
var donationVar = 15;
var setInitial = false;
window.setTimeout(loopDonation, 3000);


  let jsonChatDatabase = [
  {
    "user" : "dragonslayer332:",
    "comment" : "hi how are you :0",
    "userColor" : "#eb34e1",
  },
  {
    "user" : "pillowwarrior9:",
    "comment" : "YOOOOOOOO",
    "userColor" : "#34eb46",
  },
  {
    "user" : "duckfeet0:",
    "comment" : "who cares man",
    "userColor" : "#42d9db",
  },
  {
    "user" : "dolphinwater43:",
    "comment" : "Ninja is a better streamer",
    "userColor" : "#c7d134",
  },
  {
    "user" : "doorhandle69:",
    "comment" : "POGGGG",
    "userColor" : "#3453d1",
  },
  {
    "user" : "alex_was_here:",
    "comment" : "quality sucks",
    "userColor" : "#e01f0d",
  },
  {
    "user" : "bigbang100:",
    "comment" : "Love you <3",
    "userColor" : "#0de0b6",
  },
  {
    "user" : "big_chungus7:",
    "comment" : "resident sleeper",
    "userColor" : "#e89300",
  },
  {
    "user" : "marthlover45:",
    "comment" : "LULLLLL",
    "userColor" : "#9806d6",
  },
  {
    "user" : "trumpsupporter420:",
    "comment" : "DUMBASS ROFLLL",
    "userColor" : "#bd195d",
  },
  {
    "user" : "poodiepie:",
    "comment" : "cmonBruh",
    "userColor" : "#66bd19",
  },
  {
    "user" : "kpopstan11:",
    "comment" : "always here for you man",
    "userColor" : "#ffffff",
  },
  {
    "user" : "tissueboxhater:",
    "comment" : "eat shit LOL",
    "userColor" : "#e6aa5c",
  },
  {
    "user" : "ryoma_raijinto:",
    "comment" : "what are you playing ?",
    "userColor" : "#26bf40",
  },
  {
    "user" : "idubbbzclone_ha:",
    "comment" : "awesome",
    "userColor" : "#f2e600",
  },
  {
    "user" : "carowashere24:",
    "comment" : "YOU FILTHY WEEB",
    "userColor" : "#f542e9",
  }
];

let jsonDonationDatabase = [
{
  "user" : "dragonslayer332",
  "comment" : "do you like vanilla ice cream? CUz i dont",
  "donation" : "$10.00",
},
{
  "user" : "pillowwarrior9",
  "comment" : "YO YOU HYPE AS HELL",
  "donation" : "$5.00",
},
{
  "user" : "doorhandle69",
  "comment" : "uhh feet pics?",
  "donation" : "$1.00",
},
{
  "user" : "bigbang100",
  "comment" : "you are an inspiration to me. Keep doing you!",
  "donation" : "$100.00",
},
{
  "user" : "big_chungus7",
  "comment" : "I don't what this is but have my money lol",
  "donation" : "$2.00",
},
{
  "user" : "marthlover45",
  "comment" : "LULLLLL",
  "donation" : "$2.00",
},
{
  "user" : "ifarted_itdied3",
  "comment" : "hey man im just lurking. good luck with stream!",
  "donation" : "$30.00",
},
{
  "user" : "poodiepie",
  "comment" : "cmonBruh",
  "donation" : "$1.00",
},
{
  "user" : "kpopstan11",
  "comment" : "dont got much but here you go <3",
  "donation" : "$4.00",
},
{
  "user" : "blanketeater234",
  "comment" : "can i have moderator",
  "donation" : "$1.32",
},
{
  "user" : "ryoma_raijinto",
  "comment" : "Love this game. Let me know if you needd help",
  "donation" : "$6.00",
},
{
  "user" : "idubbbzclone_ha",
  "comment" : "go buy a burger lol. jk bro you are AWESOME. keep it up",
  "donation" : "$1.00",
},
{
  "user" : "carowashere24",
  "comment" : "watch some kaguya sama love is war on stream",
  "donation" : "$7.00",
},
{
  "user" : "carowashere24",
  "comment" : "what anime do you recommend btw",
  "donation" : "$1.00",
},
{
  "user" : "greil_mercenaries",
  "comment" : "hard mode is a lot more fun this is fine too",
  "donation" : "$1.00",
},
{
  "user" : "whydoesbylethsuckinsmash",
  "comment" : "stream more please",
  "donation" : "$10.00",
}

];
loopChat();
function loopChat(){
    chat[11].innerHTML = chat[10].innerHTML;
    chat[10].innerHTML = chat[9].innerHTML;
    chat[9].innerHTML = chat[8].innerHTML;
    chat[8].innerHTML = chat[7].innerHTML;
    chat[7].innerHTML = chat[6].innerHTML;
    chat[6].innerHTML = chat[5].innerHTML;
    chat[5].innerHTML = chat[4].innerHTML;
    chat[4].innerHTML = chat[3].innerHTML;
    chat[3].innerHTML = chat[2].innerHTML;
    chat[2].innerHTML = chat[1].innerHTML;
    chat[1].innerHTML = chat[0].innerHTML;
    chat[0].innerHTML = jsonChatDatabase[startVar]['comment'];
    startVar++;

    userC[11].innerHTML = userC[10].innerHTML;
    userC[10].innerHTML = userC[9].innerHTML;
    userC[9].innerHTML = userC[8].innerHTML;
    userC[8].innerHTML = userC[7].innerHTML;
    userC[7].innerHTML = userC[6].innerHTML;
    userC[6].innerHTML = userC[5].innerHTML;
    userC[5].innerHTML = userC[4].innerHTML;
    userC[4].innerHTML = userC[3].innerHTML;
    userC[3].innerHTML = userC[2].innerHTML;
    userC[2].innerHTML = userC[1].innerHTML;
    userC[1].innerHTML = userC[0].innerHTML;

    userC[11].style.color = userC[10].style.color;
    userC[10].style.color = userC[9].style.color;
    userC[9].style.color = userC[8].style.color;
    userC[8].style.color = userC[7].style.color;
    userC[7].style.color = userC[6].style.color;
    userC[6].style.color = userC[5].style.color;
    userC[5].style.color = userC[4].style.color;
    userC[4].style.color = userC[3].style.color;
    userC[3].style.color = userC[2].style.color;
    userC[2].style.color = userC[1].style.color;
    userC[1].style.color = userC[0].style.color;

    userC[0].innerHTML = jsonChatDatabase[startVar]['user'];
    userC[0].style.color = jsonChatDatabase[startVar]['userColor'];
    if(startVar >= chatVar){
      startVar = 0;
    }

 window.setTimeout(loopChat, 500);
}
function loopDonation(){
  views.innerHTML = "Viewers: " + Math.floor(Math.random()*1000);
  var randomEvent = Math.floor(Math.random()*10);
  donation[11].innerHTML = donation[10].innerHTML;
  donation[10].innerHTML = donation[9].innerHTML;
  donation[9].innerHTML = donation[8].innerHTML;
  donation[8].innerHTML = donation[7].innerHTML;
  donation[7].innerHTML = donation[6].innerHTML;
  donation[6].innerHTML = donation[5].innerHTML;
  donation[5].innerHTML = donation[4].innerHTML;
  donation[4].innerHTML = donation[3].innerHTML;
  donation[3].innerHTML = donation[2].innerHTML;
  donation[2].innerHTML = donation[1].innerHTML;
  donation[1].innerHTML = donation[0].innerHTML;


  money[11].innerHTML = money[10].innerHTML;
  money[10].innerHTML = money[9].innerHTML;
  money[9].innerHTML = money[8].innerHTML;
  money[8].innerHTML = money[7].innerHTML;
  money[7].innerHTML = money[6].innerHTML;
  money[6].innerHTML = money[5].innerHTML;
  money[5].innerHTML = money[4].innerHTML;
  money[4].innerHTML = money[3].innerHTML;
  money[3].innerHTML = money[2].innerHTML;
  money[2].innerHTML = money[1].innerHTML;
  money[1].innerHTML = money[0].innerHTML;
  if(randomEvent < 6){
  donation[0].innerHTML = jsonDonationDatabase[startVar2]['comment'];
  money[0].innerHTML = jsonDonationDatabase[startVar2]['donation'];
  }
  else if(randomEvent >=6 && randomEvent < 9){
    donation[0].innerHTML = "has followed";
    money[0].innerHTML = "";
  }
  else{
    donation[0].innerHTML = "just subscribed!";
    money[0].innerHTML = "";
  }


  userD[11].innerHTML = userD[10].innerHTML;
  userD[10].innerHTML = userD[9].innerHTML;
  userD[9].innerHTML = userD[8].innerHTML;
  userD[8].innerHTML = userD[7].innerHTML;
  userD[7].innerHTML = userD[6].innerHTML;
  userD[6].innerHTML = userD[5].innerHTML;
  userD[5].innerHTML = userD[4].innerHTML;
  userD[4].innerHTML = userD[3].innerHTML;
  userD[3].innerHTML = userD[2].innerHTML;
  userD[2].innerHTML = userD[1].innerHTML;
  userD[1].innerHTML = userD[0].innerHTML;
  userD[0].innerHTML = jsonDonationDatabase[startVar2]['user'];


  startVar2++;
  if(startVar2 >= donationVar){
    startVar2 = 0;
  }

window.setTimeout(loopDonation, 3000);

}
