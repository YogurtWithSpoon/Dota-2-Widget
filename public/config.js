$(document).ready(function () {
  const selectors = [
    {
      region: "Северная Америка",
      teams: [
        "Business associates",
        "CR4ZY",
        "Cloud9",
        "Quincy Crew",
        "Demon Slayer",
        "J.Storm",
        "Chaos Esports",
        "Evil Geniuses",
        "Fighting PandaS",
        "Team xolotl",
        "4Zoomers",
      ],
    },
    {
      region: "Южная Америка",
      teams: [
        "Beastcoast",
        "Egoboys",
        "FURIA Esports",
        "Gorillaz Pride",
        "Infamous",
        "Infamous Young",
        "Thunder Predator",
        "Team Unknown",
        "Vicious Gaming",
        "Vicious Gaming",
        "PaiN Gaming",
        "NoPing e-sports",
        "Team Visagerino",
        "Motoca 123",
        "GADO BUFFADO",
        "Sexy_Monkeys",
        "Vira-Lata Caramelo",
        "Real Deal Esports",
        "Luxor",
        "Midas Club",
      ],
    },
    {
      region: "Европа",
      teams: [
        "Ad Finem",
        "Alliance",
        "Chicken Fighters",
        "GODSENT",
        "Hippomaniacs",
        "Ninjas in Pyjamas",
        "Liquid",
        "Nigma",
        "OG",
        "OG seed",
        "Secret",
        "Team Singularity",
        "ViKin.gg",
        "Zero Respect",
      ],
    },
    {
      region: "СНГ",
      teams: [
        "Aggressive Mode",
        "B8",
        "Cascade",
        "Cyberdogs",
        "EXTREMUM",
        "ForZe eSports",
        "Gentlemen",
        "Khan",
        "Majori Edut na Minor",
        "Modus",
        "Nemiga Gaming",
        "Pavaga Gaming",
        "Pries",
        "Se7en eSports",
        "Smaracis eSports",
        "Team Empire Hope",
        "TechPromBiz",
        "FlyToMoon",
        "Gambit",
        "HellRaisers",
        "VP Prodigy",
        "Natus Vincere",
        "Team Unique",
        "Team Empire",
        "Team Spirit",
        "Team Family",
        "Virtus Pro",
        "Winstrike",
        "Cyber Legacy",
        "5men",
        "Omegalil",
        "TEMPO",
        "Cyberium Seed",
        "5Comrades",
        "Voldemort",
        "Evil Corporation",
        "MOTACI",
      ],
    },
    {
      region: "Китай",
      teams: [
        "Aster Aries",
        "EHOME Immortal",
        "LGD.int",
        "Typhoon E-Sports Club",
        "StarLucK",
        "CDEC Gaming",
        "Eclipse",
        "EHOME",
        "For The Dream",
        "iG Vitality",
        "KG.Luminous",
        "Newbee Young",
        "Ocean",
        "Revive",
        "Sparking Arrow Gaming",
        "Team Serenity",
        "Team Sirius",
        "Vici Gaming Potential",
        "You Know Who",
        "Invictus Gaming",
        "PSG.LGD",
        "Royal Never Give Up",
        "Vici Gaming",
        "Newbee",
        "Keen Gaming",
        "Team Aster",
      ],
    },
    {
      region: "Южная Азия",
      teams: [
        "496 Gaming",
        "Athletico",
        "Boom eSports",
        "Cignal Ultra",
        "Dark Sided",
        "Dota Hero",
        "Execration",
        "Geek Fam",
        "Lowkey eSports",
        "Made in Thailand",
        "Neon eSports",
        "PG.BarracX",
        "NEW Esports",
        "Resurgence",
        "T1",
        "Team Adroit",
        "Team Amplfy",
        "Team Oracle",
        "Veteran",
        "Fnatic",
        "Reality Rift",
        "TNC Predator",
      ],
    },
  ];
  //build selector string;
  let string = "";

  for (item of selectors) {
    string = string + `<optgroup label="${item.region}">`;
    for (team of item.teams) {
      string = string + `<option value="${team}">${team}</option>`;
    }
    string = string + "</optgroup>";
  }
  //add selector string;
  team1_select.innerHTML = string;
  team2_select.innerHTML = string;

  //add option "sell"

  string =
    '<option value="Продал">Продал</option>' +
    '<option value="Карта ТБ">Карта ТБ</option>' +
    '<option value="Карта ТМ">Карта ТМ</option>' +
    string;

  //add to bet selector

  team__bet.innerHTML = string;
  team__bet1.innerHTML = string;
  team__bet2.innerHTML = string;

  const stats = document.querySelector(".stats");
  stats.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-minus")) {
      --event.target.nextElementSibling.value;
    } else if (event.target.classList.contains("fa-plus")) {
      ++event.target.previousElementSibling.value;
    }
  });

  $(".kof__bet").mask("9.9?9");

  $.get("readJSON", function (data) {
    let pageData = data;
    //page data

    //score widget
    const team1 = document.querySelector("#team1_select");
    const team2 = document.querySelector("#team2_select");
    const gametype = document.querySelector("#game_select");
    const score1 = document.querySelector(".team1_score");
    const score2 = document.querySelector(".team2_score");
    //stats widget

    const betKof = document.querySelector(".kof__bet");
    const betPercent = document.querySelector(".kof__percent");

    const betKof1 = document.querySelector("#kof2");
    const betPercent1 = document.querySelector("#percent2");

    const betKof2 = document.querySelector("#kof3");
    const betPercent2 = document.querySelector("#percent3");

    const win = document.querySelector(".win");
    const draw = document.querySelector(".draw");
    const draw2 = document.querySelector(".draw2");
    const win2 = document.querySelector(".win2");
    const lose = document.querySelector(".lose");
    const lose2 = document.querySelector(".lose2");
    const color = document.querySelector(".widget__color");
    const shadow = document.querySelector("#shadow");
    const shadowColor = document.querySelector(".shadow__color");
    const time = document.querySelector("#time");

    const textLine = document.querySelector(".text__style");
    //update

    // init select 2 (tags:true let create own option)
    $("#team1_select").select2({ width: "250px" });
    $("#team2_select").select2({ width: "250px" });

    // update teams score
    $("#team1_select").val(pageData.team1);
    $("#team1_select").select2({ tags: true }).trigger("change");

    $("#team2_select").val(pageData.team2);
    $("#team2_select").select2({ tags: true }).trigger("change");

    // update bet teams
    $("#team__bet").val(pageData.betTeam);
    $("#team__bet").select2({ tags: true }).trigger("change");

    $("#team__bet1").val(pageData.betTeam2);
    $("#team__bet1").select2({ tags: true }).trigger("change");

    $("#team__bet2").val(pageData.betTeam3);
    $("#team__bet2").select2({ tags: true }).trigger("change");

    //update last info

    team1.value = pageData.team1;
    team2.value = pageData.team2;
    gametype.value = pageData.gametype;
    score1.value = pageData.score1;
    score2.value = pageData.score2;
    betKof.value = pageData.betKof;
    betPercent.value = pageData.betPercent;
    betKof1.value = pageData.betKof2;
    betPercent1.value = pageData.betPercent2;
    betKof2.value = pageData.betKof3;
    betPercent2.value = pageData.betPercent3;
    win.value = pageData.win;
    win2.value = pageData.win2;
    lose.value = pageData.lose;
    lose2.value = pageData.lose2;
    draw.value = pageData.draw;
    draw2.value = pageData.draw2;
    color.value = pageData.color;
    shadow.checked = pageData.shadow == "true";
    shadowColor.value = pageData.shadowColor;
    time.checked = pageData.time == "true";
    textLine.value = pageData.textLine;
  });

  $(".button").click(function () {
    let data = {
      team1: document.querySelector("#team1_select").value,
      team2: document.querySelector("#team2_select").value,
      gameType: document.querySelector("#game_select").value,
      score1: document.querySelector(".team1_score").value,
      score2: document.querySelector(".team2_score").value,
      betTeam: document.querySelector("#team__bet").value,
      betKof: document.querySelector(".kof__bet").value,
      betPercent: document.querySelector(".kof__percent").value,
      betTeam2: document.querySelector("#team__bet1").value,
      betKof2: document.querySelector("#kof2").value,
      betPercent2: document.querySelector("#percent2").value,
      betTeam3: document.querySelector("#team__bet2").value,
      betKof3: document.querySelector("#kof3").value,
      betPercent3: document.querySelector("#percent3").value,
      win: document.querySelector(".win").value,
      lose: document.querySelector(".lose").value,
      win2: document.querySelector(".win2").value,
      lose2: document.querySelector(".lose2").value,
      draw: document.querySelector(".draw").value,
      draw2: document.querySelector(".draw2").value,
      color: document.querySelector(".widget__color").value,
      shadow: document.querySelector("#shadow").checked,
      shadowColor: document.querySelector(".shadow__color").value,
      time: document.querySelector("#time").checked,
      textLine: document.querySelector(".text__style").value,
    };
    $.post({
      traditional: true,
      url: "/saveToJSON",
      contentType: "application/json",
      data: JSON.stringify(data),
      dataType: "json",
      success: function(response){
        alert('Saveeee man');
      }
    })

    const socket = io();
    socket.emit('update', 'update');
  });

  $("#clear1").click(function () {
    $("#team__bet").val("");
    $("#team__bet").select2().trigger("change");
    $("#kof1").val("");
    $("#percent1").val("");
  });

  $("#clear2").click(function () {
    $("#team__bet1").val("");
    $("#team__bet1").select2().trigger("change");
    $("#kof2").val("");
    $("#percent2").val("");
  });

  $("#clear3").click(function () {
    $("#team__bet2").val("");
    $("#team__bet2").select2().trigger("change");
    $("#kof3").val("");
    $("#percent3").val("");
  });
});
