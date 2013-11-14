
exports.BattlePokedex = {
bulbasaur:{num:1,species:"Bulbasaur",types:["Steel","Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:45,atk:49,def:49,spa:65,spd:65,spe:45},abilities:{0:"Overgrow",DW:"Chlorophyll"},heightm:0.7,weightkg:6.9,color:"Green",evos:

["ivysaur"],eggGroups:["Monster","Plant"]},
ivysaur:{num:2,species:"Ivysaur",types:["Steel","Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:62,def:63,spa:80,spd:80,spe:60},abilities:

{0:"Overgrow",DW:"Chlorophyll"},heightm:1,weightkg:13,color:"Green",prevo:"bulbasaur",evos:["venusaur"],evoLevel:16,eggGroups:["Monster","Plant"]},
venusaur:{num:3,species:"Venusaur",types:["Steel","Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:80,atk:82,def:83,spa:100,spd:100,spe:80},abilities:

{0:"Overgrow",DW:"Chlorophyll"},heightm:2,weightkg:100,color:"Green",prevo:"ivysaur",evoLevel:32,eggGroups:["Monster","Plant"]},
charmander:{num:4,species:"Charmander",types:["Electric"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:39,atk:52,def:43,spa:60,spd:50,spe:65},abilities:{0:"Blaze",DW:"Solar Power"},heightm:0.6,weightkg:8.5,color:"Red",evos:

["charmeleon"],eggGroups:["Monster","Dragon"]},
charmeleon:{num:5,species:"Charmeleon",types:["Electric"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:58,atk:64,def:58,spa:80,spd:65,spe:80},abilities:{0:"Blaze",DW:"Solar 

Power"},heightm:1.1,weightkg:19,color:"Red",prevo:"charmander",evos:["charizard"],evoLevel:16,eggGroups:["Monster","Dragon"]},
charizard:{num:6,species:"Charizard",types:["Electric","Ground"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:78,atk:84,def:78,spa:109,spd:85,spe:100},abilities:{0:"Blaze",DW:"Solar 

Power"},heightm:1.7,weightkg:90.5,color:"Red",prevo:"charmeleon",evoLevel:36,eggGroups:["Monster","Dragon"]},
squirtle:{num:7,species:"Squirtle",types:["Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:44,atk:48,def:65,spa:50,spd:64,spe:43},abilities:{0:"Torrent",DW:"Rain Dish"},heightm:0.5,weightkg:9,color:"Blue",evos:["wartortle"],eggGroups:

["Monster","Water 1"]},
wartortle:{num:8,species:"Wartortle",types:["Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:59,atk:63,def:80,spa:65,spd:80,spe:58},abilities:{0:"Torrent",DW:"Rain Dish"},heightm:1,weightkg:22.5,color:"Blue",prevo:"squirtle",evos:

["blastoise"],evoLevel:16,eggGroups:["Monster","Water 1"]},
blastoise:{num:9,species:"Blastoise",types:["Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:79,atk:83,def:100,spa:85,spd:105,spe:78},abilities:{0:"Torrent",DW:"Rain 

Dish"},heightm:1.6,weightkg:85.5,color:"Blue",prevo:"wartortle",evoLevel:36,eggGroups:["Monster","Water 1"]},
caterpie:{num:10,species:"Caterpie",types:["Dragon"],baseStats:{hp:45,atk:30,def:35,spa:20,spd:20,spe:45},abilities:{0:"Shield Dust",DW:"Run Away"},heightm:0.3,weightkg:2.9,color:"Green",evos:["metapod"],eggGroups:["Bug"]},
metapod:{num:11,species:"Metapod",types:["Dragon"],baseStats:{hp:50,atk:20,def:55,spa:25,spd:25,spe:30},abilities:{0:"Shed Skin"},heightm:0.7,weightkg:9.9,color:"Green",prevo:"caterpie",evos:["butterfree"],evoLevel:7,eggGroups:["Bug"]},
butterfree:{num:12,species:"Butterfree",types:["Dragon","Flying"],baseStats:{hp:60,atk:45,def:50,spa:80,spd:80,spe:70},abilities:{0:"Compoundeyes",DW:"Tinted 

Lens"},heightm:1.1,weightkg:32,color:"White",prevo:"metapod",evoLevel:10,eggGroups:["Bug"]},
weedle:{num:13,species:"Weedle",types:["Dragon","Rock"],baseStats:{hp:40,atk:35,def:30,spa:20,spd:20,spe:50},abilities:{0:"Shield Dust",DW:"Run Away"},heightm:0.3,weightkg:3.2,color:"Brown",evos:["kakuna"],eggGroups:["Bug"]},
kakuna:{num:14,species:"Kakuna",types:["Dragon","Rock"],baseStats:{hp:45,atk:25,def:50,spa:25,spd:25,spe:35},abilities:{0:"Shed Skin"},heightm:0.6,weightkg:10,color:"Yellow",prevo:"weedle",evos:["beedrill"],evoLevel:7,eggGroups:["Bug"]},
beedrill:{num:15,species:"Beedrill",types:["Dragon","Rock"],baseStats:{hp:65,atk:80,def:40,spa:45,spd:80,spe:75},abilities:{0:"Swarm",DW:"Sniper"},heightm:1,weightkg:29.5,color:"Yellow",prevo:"kakuna",evoLevel:10,eggGroups:["Bug"]},
pidgey:{num:16,species:"Pidgey",types:["Ground","Ghost"],baseStats:{hp:40,atk:45,def:40,spa:35,spd:35,spe:56},abilities:{0:"Keen Eye",1:"Tangled Feet",DW:"Big Pecks"},heightm:0.3,weightkg:1.8,color:"Brown",evos:["pidgeotto"],eggGroups:

["Flying"]},
pidgeotto:{num:17,species:"Pidgeotto",types:["Ground","Ghost"],baseStats:{hp:63,atk:60,def:55,spa:50,spd:50,spe:71},abilities:{0:"Keen Eye",1:"Tangled Feet",DW:"Big Pecks"},heightm:1.1,weightkg:30,color:"Brown",prevo:"pidgey",evos:

["pidgeot"],evoLevel:18,eggGroups:["Flying"]},
pidgeot:{num:18,species:"Pidgeot",types:["Ground","Ghost"],baseStats:{hp:83,atk:80,def:75,spa:70,spd:70,spe:91},abilities:{0:"Keen Eye",1:"Tangled Feet",DW:"Big 

Pecks"},heightm:1.5,weightkg:39.5,color:"Brown",prevo:"pidgeotto",evoLevel:36,eggGroups:["Flying"]},
rattata:{num:19,species:"Rattata",types:["Ghost"],baseStats:{hp:30,atk:56,def:35,spa:25,spd:35,spe:72},abilities:{0:"Run Away",1:"Guts",DW:"Hustle"},heightm:0.3,weightkg:3.5,color:"Purple",evos:["raticate"],eggGroups:["Flying"]},
raticate:{num:20,species:"Raticate",types:["Ghost"],baseStats:{hp:55,atk:81,def:60,spa:50,spd:70,spe:97},abilities:{0:"Run Away",1:"Guts",DW:"Hustle"},heightm:0.7,weightkg:18.5,color:"Brown",prevo:"rattata",evoLevel:20,eggGroups:

["Flying"]},
spearow:{num:21,species:"Spearow",types:["Ground","Ghost"],baseStats:{hp:40,atk:60,def:30,spa:31,spd:31,spe:70},abilities:{0:"Keen Eye",DW:"Sniper"},heightm:0.3,weightkg:2,color:"Brown",evos:["fearow"],eggGroups:["Flying"]},
fearow:{num:22,species:"Fearow",types:["Ground","Ghost"],baseStats:{hp:65,atk:90,def:65,spa:61,spd:61,spe:100},abilities:{0:"Keen Eye",DW:"Sniper"},heightm:1.2,weightkg:38,color:"Brown",prevo:"spearow",evoLevel:20,eggGroups:["Flying"]},
ekans:{num:23,species:"Ekans",types:["Rock"],baseStats:{hp:35,atk:60,def:44,spa:40,spd:54,spe:55},abilities:{0:"Intimidate",1:"Shed Skin",DW:"Unnerve"},heightm:2,weightkg:6.9,color:"Purple",evos:["arbok"],eggGroups:["Ground","Dragon"]},
arbok:{num:24,species:"Arbok",types:["Rock"],baseStats:{hp:60,atk:85,def:69,spa:65,spd:79,spe:80},abilities:{0:"Intimidate",1:"Shed Skin",DW:"Unnerve"},heightm:3.5,weightkg:65,color:"Purple",prevo:"ekans",evoLevel:22,eggGroups:

["Ground","Dragon"]},
pikachu:{num:25,species:"Pikachu",types:["Fire"],baseStats:{hp:35,atk:55,def:30,spa:50,spd:40,spe:90},abilities:{0:"Static",DW:"Lightningrod"},heightm:0.4,weightkg:6,color:"Yellow",prevo:"pichu",evos:["raichu"],evoLevel:1,eggGroups:

["Ground","Fairy"]},
raichu:{num:26,species:"Raichu",types:["Fire"],baseStats:{hp:60,atk:90,def:55,spa:90,spd:80,spe:100},abilities:{0:"Static",DW:"Lightningrod"},heightm:0.8,weightkg:30,color:"Yellow",prevo:"pikachu",evoLevel:1,eggGroups:

["Ground","Fairy"]},
sandshrew:{num:27,species:"Sandshrew",types:["Flying"],baseStats:{hp:50,atk:75,def:85,spa:20,spd:30,spe:40},abilities:{0:"Sand Veil",DW:"Sand Rush"},heightm:0.6,weightkg:12,color:"Yellow",evos:["sandslash"],eggGroups:["Flying"]},
sandslash:{num:28,species:"Sandslash",types:["Flying"],baseStats:{hp:75,atk:100,def:110,spa:45,spd:55,spe:65},abilities:{0:"Sand Veil",DW:"Sand Rush"},heightm:1,weightkg:29.5,color:"Yellow",prevo:"sandshrew",evoLevel:22,eggGroups:

["Flying"]},
nidoranf:{num:29,species:"NidoranF",types:["Rock"],gender:"F",baseStats:{hp:55,atk:47,def:52,spa:40,spd:40,spe:41},abilities:{0:"Poison Point",1:"Rivalry",DW:"Hustle"},heightm:0.4,weightkg:7,color:"Blue",evos:["nidorina"],eggGroups:

["Monster","Ground"]},
nidorina:{num:30,species:"Nidorina",types:["Rock"],gender:"F",baseStats:{hp:70,atk:62,def:67,spa:55,spd:55,spe:56},abilities:{0:"Poison Point",1:"Rivalry",DW:"Hustle"},heightm:0.8,weightkg:20,color:"Blue",prevo:"nidoranf",evos:

["nidoqueen"],evoLevel:16,eggGroups:["No Eggs"]},
nidoqueen:{num:31,species:"Nidoqueen",types:["Rock","Flying"],gender:"F",baseStats:{hp:90,atk:82,def:87,spa:75,spd:85,spe:76},abilities:{0:"Poison Point",1:"Rivalry",DW:"Sheer 

Force"},heightm:1.3,weightkg:60,color:"Blue",prevo:"nidorina",evoLevel:16,eggGroups:["No Eggs"]},
nidoranm:{num:32,species:"NidoranM",types:["Rock"],gender:"M",baseStats:{hp:46,atk:57,def:40,spa:40,spd:40,spe:50},abilities:{0:"Poison Point",1:"Rivalry",DW:"Hustle"},heightm:0.5,weightkg:9,color:"Purple",evos:["nidorino"],eggGroups:

["Monster","Ground"]},
nidorino:{num:33,species:"Nidorino",types:["Rock"],gender:"M",baseStats:{hp:61,atk:72,def:57,spa:55,spd:55,spe:65},abilities:{0:"Poison Point",1:"Rivalry",DW:"Hustle"},heightm:0.9,weightkg:19.5,color:"Purple",prevo:"nidoranm",evos:

["nidoking"],evoLevel:16,eggGroups:["Monster","Ground"]},
nidoking:{num:34,species:"Nidoking",types:["Rock","Flying"],gender:"M",baseStats:{hp:81,atk:92,def:77,spa:85,spd:75,spe:85},abilities:{0:"Poison Point",1:"Rivalry",DW:"Sheer 

Force"},heightm:1.4,weightkg:62,color:"Purple",prevo:"nidorino",evoLevel:16,eggGroups:["Monster","Ground"]},
clefairy:{num:35,species:"Clefairy",types:["Dark"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:70,atk:45,def:48,spa:60,spd:65,spe:35},abilities:{0:"Cute Charm",1:"Magic Guard",DW:"Friend 

Guard"},heightm:0.6,weightkg:7.5,color:"Pink",prevo:"cleffa",evos:["clefable"],evoLevel:1,eggGroups:["Fairy"]},
clefable:{num:36,species:"Clefable",types:["Dark"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:95,atk:70,def:73,spa:85,spd:90,spe:60},abilities:{0:"Cute Charm",1:"Magic 

Guard",DW:"Unaware"},heightm:1.3,weightkg:40,color:"Pink",prevo:"clefairy",evoLevel:1,eggGroups:["Fairy"]},
vulpix:{num:37,species:"Vulpix",types:["Electric"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:38,atk:41,def:40,spa:50,spd:65,spe:65},abilities:{0:"Flash Fire",DW:"Drought"},heightm:0.6,weightkg:9.9,color:"Brown",evos:

["ninetales"],eggGroups:["Flying"]},
ninetales:{num:38,species:"Ninetales",types:["Electric"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:73,atk:76,def:75,spa:81,spd:100,spe:100},abilities:{0:"Flash 

Fire",DW:"Drought"},heightm:1.1,weightkg:19.9,color:"Yellow",prevo:"vulpix",evoLevel:1,eggGroups:["Flying"]},
jigglypuff:{num:39,species:"Jigglypuff",types:["Ghost","Dark"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:115,atk:45,def:20,spa:45,spd:25,spe:20},abilities:{0:"Cute Charm",DW:"Friend 

Guard"},heightm:0.5,weightkg:5.5,color:"Pink",prevo:"igglybuff",evos:["wigglytuff"],evoLevel:1,eggGroups:["Fairy"]},
wigglytuff:{num:40,species:"Wigglytuff",types:["Ghost,"Dark""],genderRatio:{M:0.25,F:0.75},baseStats:{hp:140,atk:70,def:45,spa:75,spd:50,spe:45},abilities:{0:"Cute 

Charm",DW:"Frisk"},heightm:1,weightkg:12,color:"Pink",prevo:"jigglypuff",evoLevel:1,eggGroups:["Fairy"]},
zubat:{num:41,species:"Zubat",types:["Rock","Ground"],baseStats:{hp:40,atk:45,def:35,spa:30,spd:40,spe:55},abilities:{0:"Inner Focus",DW:"Infiltrator"},heightm:0.8,weightkg:7.5,color:"Purple",evos:["golbat"],eggGroups:["Flying"]},
golbat:{num:42,species:"Golbat",types:["Rock","Ground"],baseStats:{hp:75,atk:80,def:70,spa:65,spd:75,spe:90},abilities:{0:"Inner Focus",DW:"Infiltrator"},heightm:1.6,weightkg:55,color:"Purple",prevo:"zubat",evos:

["crobat"],evoLevel:22,eggGroups:["Flying"]},
oddish:{num:43,species:"Oddish",types:["Steel","Rock"],baseStats:{hp:45,atk:50,def:55,spa:75,spd:65,spe:30},abilities:{0:"Chlorophyll",DW:"Run Away"},heightm:0.5,weightkg:5.4,color:"Blue",evos:["gloom"],eggGroups:["Plant"]},
gloom:{num:44,species:"Gloom",types:["Steel","Rock"],baseStats:{hp:60,atk:65,def:70,spa:85,spd:75,spe:40},abilities:{0:"Chlorophyll",DW:"Stench"},heightm:0.8,weightkg:8.6,color:"Blue",prevo:"oddish",evos:

["vileplume","bellossom"],evoLevel:21,eggGroups:["Plant"]},
vileplume:{num:45,species:"Vileplume",types:["Steel","Rock"],baseStats:{hp:75,atk:80,def:85,spa:100,spd:90,spe:50},abilities:{0:"Chlorophyll",DW:"Effect Spore"},heightm:1.2,weightkg:18.6,color:"Red",prevo:"gloom",evoLevel:21,eggGroups:

["Plant"]},
paras:{num:46,species:"Paras",types:["Dragon","Steel"],baseStats:{hp:35,atk:70,def:55,spa:45,spd:55,spe:25},abilities:{0:"Effect Spore",1:"Dry Skin",DW:"Damp"},heightm:0.3,weightkg:5.4,color:"Red",evos:["parasect"],eggGroups:

["Bug","Plant"]},
parasect:{num:47,species:"Parasect",types:["Dragon","Steel"],baseStats:{hp:60,atk:95,def:80,spa:60,spd:80,spe:30},abilities:{0:"Effect Spore",1:"Dry 

Skin",DW:"Damp"},heightm:1,weightkg:29.5,color:"Red",prevo:"paras",evoLevel:24,eggGroups:["Bug","Plant"]},
venonat:{num:48,species:"Venonat",types:["Dragon","Rock"],baseStats:{hp:60,atk:55,def:50,spa:40,spd:55,spe:45},abilities:{0:"Compoundeyes",1:"Tinted Lens",DW:"Run Away"},heightm:1,weightkg:30,color:"Purple",evos:["venomoth"],eggGroups:

["Bug"]},
venomoth:{num:49,species:"Venomoth",types:["Dragon","Rock"],baseStats:{hp:70,atk:65,def:60,spa:90,spd:75,spe:90},abilities:{0:"Shield Dust",1:"Tinted Lens",DW:"Wonder 

Skin"},heightm:1.5,weightkg:12.5,color:"Purple",prevo:"venonat",evoLevel:31,eggGroups:["Bug"]},
diglett:{num:50,species:"Diglett",types:["Flying"],baseStats:{hp:10,atk:55,def:25,spa:35,spd:45,spe:95},abilities:{0:"Sand Veil",1:"Arena Trap",DW:"Sand Force"},heightm:0.2,weightkg:0.8,color:"Brown",evos:["dugtrio"],eggGroups:

["Flying"]},
dugtrio:{num:51,species:"Dugtrio",types:["Flying"],baseStats:{hp:35,atk:80,def:50,spa:50,spd:70,spe:120},abilities:{0:"Sand Veil",1:"Arena Trap",DW:"Sand 

Force"},heightm:0.7,weightkg:33.3,color:"Brown",prevo:"diglett",evoLevel:26,eggGroups:["Flying"]},
meowth:{num:52,species:"Meowth",types:["Ghost"],baseStats:{hp:40,atk:45,def:35,spa:40,spd:40,spe:90},abilities:{0:"Pickup",1:"Technician",DW:"Unnerve"},heightm:0.4,weightkg:4.2,color:"Yellow",evos:["persian"],eggGroups:["Flying"]},
persian:{num:53,species:"Persian",types:["Ghost"],baseStats:{hp:65,atk:70,def:60,spa:65,spd:65,spe:115},abilities:{0:"Limber",1:"Technician",DW:"Unnerve"},heightm:1,weightkg:32,color:"Yellow",prevo:"meowth",evoLevel:28,eggGroups:

["Flying"]},
psyduck:{num:54,species:"Psyduck",types:["Ice"],baseStats:{hp:50,atk:52,def:48,spa:65,spd:50,spe:55},abilities:{0:"Damp",1:"Cloud Nine",DW:"Swift Swim"},heightm:0.8,weightkg:19.6,color:"Yellow",evos:["golduck"],eggGroups:["Water 

1","Ground"]},
golduck:{num:55,species:"Golduck",types:["Ice"],baseStats:{hp:80,atk:82,def:78,spa:95,spd:80,spe:85},abilities:{0:"Damp",1:"Cloud Nine",DW:"Swift Swim"},heightm:1.7,weightkg:76.6,color:"Blue",prevo:"psyduck",evoLevel:33,eggGroups:["Water 

1","Ground"]},
mankey:{num:56,species:"Mankey",types:["Psychic"],baseStats:{hp:40,atk:80,def:35,spa:35,spd:45,spe:70},abilities:{0:"Vital Spirit",1:"Anger Point",DW:"Defiant"},heightm:0.5,weightkg:28,color:"Brown",evos:["primeape"],eggGroups:

["Flying"]},
primeape:{num:57,species:"Primeape",types:["Psychic"],baseStats:{hp:65,atk:105,def:60,spa:60,spd:70,spe:95},abilities:{0:"Vital Spirit",1:"Anger 

Point",DW:"Defiant"},heightm:1,weightkg:32,color:"Brown",prevo:"mankey",evoLevel:28,eggGroups:["Flying"]},
growlithe:{num:58,species:"Growlithe",types:["Electric"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:55,atk:70,def:45,spa:70,spd:50,spe:60},abilities:{0:"Intimidate",1:"Flash 

Fire",DW:"Justified"},heightm:0.7,weightkg:19,color:"Brown",evos:["arcanine"],eggGroups:["Flying"]},
arcanine:{num:59,species:"Arcanine",types:["Electric"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:90,atk:110,def:80,spa:100,spd:80,spe:95},abilities:{0:"Intimidate",1:"Flash 

Fire",DW:"Justified"},heightm:1.9,weightkg:155,color:"Brown",prevo:"growlithe",evoLevel:1,eggGroups:["Flying"]},
poliwag:{num:60,species:"Poliwag",types:["Ice"],baseStats:{hp:40,atk:50,def:40,spa:40,spd:40,spe:90},abilities:{0:"Water Absorb",1:"Damp",DW:"Swift Swim"},heightm:0.6,weightkg:12.4,color:"Blue",evos:["poliwhirl"],eggGroups:["Water 1"]},
poliwhirl:{num:61,species:"Poliwhirl",types:["Ice"],baseStats:{hp:65,atk:65,def:65,spa:50,spd:50,spe:90},abilities:{0:"Water Absorb",1:"Damp",DW:"Swift Swim"},heightm:1,weightkg:20,color:"Blue",prevo:"poliwag",evos:

["poliwrath","politoed"],evoLevel:25,eggGroups:["Water 1"]},
poliwrath:{num:62,species:"Poliwrath",types:["Ice","Psychic"],baseStats:{hp:90,atk:85,def:95,spa:70,spd:90,spe:70},abilities:{0:"Water Absorb",1:"Damp",DW:"Swift 

Swim"},heightm:1.3,weightkg:54,color:"Blue",prevo:"poliwhirl",evoLevel:25,eggGroups:["Water 1"]},
abra:{num:63,species:"Abra",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:25,atk:20,def:15,spa:105,spd:55,spe:90},abilities:{0:"Synchronize",1:"Inner Focus",DW:"Magic Guard"},heightm:0.9,weightkg:19.5,color:"Brown",evos:

["kadabra"],eggGroups:["Humanshape"]},
kadabra:{num:64,species:"Kadabra",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:40,atk:35,def:30,spa:120,spd:70,spe:105},abilities:{0:"Synchronize",1:"Inner Focus",DW:"Magic 

Guard"},heightm:1.3,weightkg:56.5,color:"Brown",prevo:"abra",evos:["alakazam"],evoLevel:16,eggGroups:["Humanshape"]},
alakazam:{num:65,species:"Alakazam",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:55,atk:50,def:45,spa:135,spd:85,spe:120},abilities:{0:"Synchronize",1:"Inner Focus",DW:"Magic 

Guard"},heightm:1.5,weightkg:48,color:"Brown",prevo:"kadabra",evoLevel:16,eggGroups:["Humanshape"]},
machop:{num:66,species:"Machop",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:70,atk:80,def:50,spa:35,spd:35,spe:35},abilities:{0:"Guts",1:"No Guard",DW:"Steadfast"},heightm:0.8,weightkg:19.5,color:"Gray",evos:

["machoke"],eggGroups:["Humanshape"]},
machoke:{num:67,species:"Machoke",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:80,atk:100,def:70,spa:50,spd:60,spe:45},abilities:{0:"Guts",1:"No 

Guard",DW:"Steadfast"},heightm:1.5,weightkg:70.5,color:"Gray",prevo:"machop",evos:["machamp"],evoLevel:28,eggGroups:["Humanshape"]},
machamp:{num:68,species:"Machamp",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:90,atk:130,def:80,spa:65,spd:85,spe:55},abilities:{0:"Guts",1:"No 

Guard",DW:"Steadfast"},heightm:1.6,weightkg:130,color:"Gray",prevo:"machoke",evoLevel:28,eggGroups:["Humanshape"]},
bellsprout:{num:69,species:"Bellsprout",types:["Steel","Rock"],baseStats:{hp:50,atk:75,def:35,spa:70,spd:30,spe:40},abilities:{0:"Chlorophyll",DW:"Gluttony"},heightm:0.7,weightkg:4,color:"Green",evos:["weepinbell"],eggGroups:["Plant"]},
weepinbell:{num:70,species:"Weepinbell",types:["Steel","Rock"],baseStats:{hp:65,atk:90,def:50,spa:85,spd:45,spe:55},abilities:{0:"Chlorophyll",DW:"Gluttony"},heightm:1,weightkg:6.4,color:"Green",prevo:"bellsprout",evos:

["victreebel"],evoLevel:21,eggGroups:["Plant"]},
victreebel:{num:71,species:"Victreebel",types:["Steel","Rock"],baseStats:{hp:80,atk:105,def:65,spa:100,spd:60,spe:70},abilities:

{0:"Chlorophyll",DW:"Gluttony"},heightm:1.7,weightkg:15.5,color:"Green",prevo:"weepinbell",evoLevel:21,eggGroups:["Plant"]},
tentacool:{num:72,species:"Tentacool",types:["Ice","Rock"],baseStats:{hp:40,atk:40,def:35,spa:50,spd:100,spe:70},abilities:{0:"Clear Body",1:"Liquid Ooze",DW:"Rain Dish"},heightm:0.9,weightkg:45.5,color:"Blue",evos:

["tentacruel"],eggGroups:["Water 3"]},
tentacruel:{num:73,species:"Tentacruel",types:["Ice","Rock"],baseStats:{hp:80,atk:70,def:65,spa:80,spd:120,spe:100},abilities:{0:"Clear Body",1:"Liquid Ooze",DW:"Rain 

Dish"},heightm:1.6,weightkg:55,color:"Blue",prevo:"tentacool",evoLevel:30,eggGroups:["Water 3"]},
geodude:{num:74,species:"Geodude",types:["Poison","Flying"],baseStats:{hp:40,atk:80,def:100,spa:30,spd:30,spe:20},abilities:{0:"Rock Head",1:"Sturdy",DW:"Sand Veil"},heightm:0.4,weightkg:20,color:"Brown",evos:["graveler"],eggGroups:

["Mineral"]},
graveler:{num:75,species:"Graveler",types:["Poison","Flying"],baseStats:{hp:55,atk:95,def:115,spa:45,spd:45,spe:35},abilities:{0:"Rock Head",1:"Sturdy",DW:"Sand Veil"},heightm:1,weightkg:105,color:"Brown",prevo:"geodude",evos:

["golem"],evoLevel:25,eggGroups:["Mineral"]},
golem:{num:76,species:"Golem",types:["Poison","Flying"],baseStats:{hp:80,atk:110,def:130,spa:55,spd:65,spe:45},abilities:{0:"Rock Head",1:"Sturdy",DW:"Sand 

Veil"},heightm:1.4,weightkg:300,color:"Brown",prevo:"graveler",evoLevel:25,eggGroups:["Mineral"]},
ponyta:{num:77,species:"Ponyta",types:["Electric"],baseStats:{hp:50,atk:85,def:55,spa:65,spd:65,spe:90},abilities:{0:"Run Away",1:"Flash Fire",DW:"Flame Body"},heightm:1,weightkg:30,color:"Yellow",evos:["rapidash"],eggGroups:["Flying"]},
rapidash:{num:78,species:"Rapidash",types:["Electric"],baseStats:{hp:65,atk:100,def:70,spa:80,spd:80,spe:105},abilities:{0:"Run Away",1:"Flash Fire",DW:"Flame 

Body"},heightm:1.7,weightkg:95,color:"Yellow",prevo:"ponyta",evoLevel:40,eggGroups:["Flying"]},
slowpoke:{num:79,species:"Slowpoke",types:["Ice","Fighting"],baseStats:{hp:90,atk:65,def:65,spa:40,spd:40,spe:15},abilities:{0:"Oblivious",1:"Own Tempo",DW:"Regenerator"},heightm:1.2,weightkg:36,color:"Pink",evos:

["slowbro","slowking"],eggGroups:["Monster","Water 1"]},
slowbro:{num:80,species:"Slowbro",types:["Ice","Fighting"],baseStats:{hp:95,atk:75,def:110,spa:100,spd:80,spe:30},abilities:{0:"Oblivious",1:"Own 

Tempo",DW:"Regenerator"},heightm:1.6,weightkg:78.5,color:"Pink",prevo:"slowpoke",evoLevel:37,eggGroups:["Monster","Water 1"]},
magnemite:{num:81,species:"Magnemite",types:["Fire","Grass"],gender:"N",baseStats:{hp:25,atk:35,def:70,spa:95,spd:55,spe:45},abilities:{0:"Magnet Pull",1:"Sturdy",DW:"Analytic"},heightm:0.3,weightkg:6,color:"Gray",evos:

["magneton"],eggGroups:["Mineral"]},
magneton:{num:82,species:"Magneton",types:["Fire","Grass"],gender:"N",baseStats:{hp:50,atk:60,def:95,spa:120,spd:70,spe:70},abilities:{0:"Magnet Pull",1:"Sturdy",DW:"Analytic"},heightm:1,weightkg:60,color:"Gray",prevo:"magnemite",evos:

["magnezone"],evoLevel:30,eggGroups:["Mineral"]},
farfetchd:{num:83,species:"Farfetch'd",types:["Ghost","Ground"],baseStats:{hp:52,atk:65,def:55,spa:58,spd:62,spe:60},abilities:{0:"Keen Eye",1:"Inner Focus",DW:"Defiant"},heightm:0.8,weightkg:15,color:"Brown",eggGroups:

["Flying","Ground"]},
doduo:{num:84,species:"Doduo",types:["Ghost","Ground"],baseStats:{hp:35,atk:85,def:45,spa:35,spd:35,spe:75},abilities:{0:"Run Away",1:"Early Bird",DW:"Tangled Feet"},heightm:1.4,weightkg:39.2,color:"Brown",evos:["dodrio"],eggGroups:

["Flying"]},
dodrio:{num:85,species:"Dodrio",types:["Ghost","Ground"],baseStats:{hp:60,atk:110,def:70,spa:60,spd:60,spe:100},abilities:{0:"Run Away",1:"Early Bird",DW:"Tangled 

Feet"},heightm:1.8,weightkg:85.2,color:"Brown",prevo:"doduo",evoLevel:31,eggGroups:["Flying"]},
seel:{num:86,species:"Seel",types:["Ice"],baseStats:{hp:65,atk:45,def:55,spa:45,spd:70,spe:45},abilities:{0:"Thick Fat",1:"Hydration",DW:"Ice Body"},heightm:1.1,weightkg:90,color:"White",evos:["dewgong"],eggGroups:["Water 1","Ground"]},
dewgong:{num:87,species:"Dewgong",types:["Water","Ice"],baseStats:{hp:90,atk:70,def:80,spa:70,spd:95,spe:70},abilities:{0:"Thick Fat",1:"Hydration",DW:"Ice 

Body"},heightm:1.7,weightkg:120,color:"White",prevo:"seel",evoLevel:34,eggGroups:["Water 1","Ground"]},
grimer:{num:88,species:"Grimer",types:["Rock"],baseStats:{hp:80,atk:80,def:50,spa:40,spd:50,spe:25},abilities:{0:"Stench",1:"Sticky Hold",DW:"Poison Touch"},heightm:0.9,weightkg:30,color:"Purple",evos:["muk"],eggGroups:

["Indeterminate"]},
muk:{num:89,species:"Muk",types:["Rock"],baseStats:{hp:105,atk:105,def:75,spa:65,spd:100,spe:50},abilities:{0:"Stench",1:"Sticky Hold",DW:"Poison Touch"},heightm:1.2,weightkg:30,color:"Purple",prevo:"grimer",evoLevel:38,eggGroups:

["Indeterminate"]},
shellder:{num:90,species:"Shellder",types:["Water"],baseStats:{hp:30,atk:65,def:100,spa:45,spd:25,spe:40},abilities:{0:"Shell Armor",1:"Skill Link",DW:"Overcoat"},heightm:0.3,weightkg:4,color:"Purple",evos:["cloyster"],eggGroups:["Water 

3"]},
cloyster:{num:91,species:"Cloyster",types:["Water","Ice"],baseStats:{hp:50,atk:95,def:180,spa:85,spd:45,spe:70},abilities:{0:"Shell Armor",1:"Skill 

Link",DW:"Overcoat"},heightm:1.5,weightkg:132.5,color:"Purple",prevo:"shellder",evoLevel:1,eggGroups:["Water 3"]},
gastly:{num:92,species:"Gastly",types:["Normal","Rock"],baseStats:{hp:30,atk:35,def:30,spa:100,spd:35,spe:80},abilities:{0:"Levitate"},heightm:1.3,weightkg:0.1,color:"Purple",evos:["haunter"],eggGroups:["Indeterminate"]},
haunter:{num:93,species:"Haunter",types:["Normal","Rock"],baseStats:{hp:45,atk:50,def:45,spa:115,spd:55,spe:95},abilities:{0:"Levitate"},heightm:1.6,weightkg:0.1,color:"Purple",prevo:"gastly",evos:["gengar"],evoLevel:25,eggGroups:

["Indeterminate"]},
gengar:{num:94,species:"Gengar",types:["Normal","Rock"],baseStats:{hp:60,atk:65,def:60,spa:130,spd:75,spe:110},abilities:{0:"Levitate"},heightm:1.5,weightkg:40.5,color:"Purple",prevo:"haunter",evoLevel:25,eggGroups:["Indeterminate"]},
onix:{num:95,species:"Onix",types:["Poison","Flying"],baseStats:{hp:35,atk:45,def:160,spa:30,spd:45,spe:70},abilities:{0:"Rock Head",1:"Sturdy",DW:"Weak Armor"},heightm:8.8,weightkg:210,color:"Gray",evos:["steelix"],eggGroups:

["Mineral"]},
drowzee:{num:96,species:"Drowzee",types:["Fighting"],baseStats:{hp:60,atk:48,def:45,spa:43,spd:90,spe:42},abilities:{0:"Insomnia",1:"Forewarn",DW:"Inner Focus"},heightm:1,weightkg:32.4,color:"Yellow",evos:["hypno"],eggGroups:

["Humanshape"]},
hypno:{num:97,species:"Hypno",types:["Fighting"],baseStats:{hp:85,atk:73,def:70,spa:73,spd:115,spe:67},abilities:{0:"Insomnia",1:"Forewarn",DW:"Inner 

Focus"},heightm:1.6,weightkg:75.6,color:"Yellow",prevo:"drowzee",evoLevel:26,eggGroups:["Humanshape"]},
krabby:{num:98,species:"Krabby",types:["Ice"],baseStats:{hp:30,atk:105,def:90,spa:25,spd:25,spe:50},abilities:{0:"Hyper Cutter",1:"Shell Armor",DW:"Sheer Force"},heightm:0.4,weightkg:6.5,color:"Red",evos:["kingler"],eggGroups:["Water 

3"]},
kingler:{num:99,species:"Kingler",types:["Ice"],baseStats:{hp:55,atk:130,def:115,spa:50,spd:50,spe:75},abilities:{0:"Hyper Cutter",1:"Shell Armor",DW:"Sheer 

Force"},heightm:1.3,weightkg:60,color:"Red",prevo:"krabby",evoLevel:28,eggGroups:["Water 3"]},
voltorb:{num:100,species:"Voltorb",types:["Fire"],gender:"N",baseStats:{hp:40,atk:30,def:50,spa:55,spd:55,spe:100},abilities:{0:"Soundproof",1:"Static",DW:"Aftermath"},heightm:0.5,weightkg:10.4,color:"Red",evos:["electrode"],eggGroups:

["Mineral"]},
electrode:{num:101,species:"Electrode",types:["Fire"],gender:"N",baseStats:{hp:60,atk:50,def:70,spa:80,spd:80,spe:140},abilities:

{0:"Soundproof",1:"Static",DW:"Aftermath"},heightm:1.2,weightkg:66.6,color:"Red",prevo:"voltorb",evoLevel:30,eggGroups:["Mineral"]},
exeggcute:{num:102,species:"Exeggcute",types:["Steel","Fighting"],baseStats:{hp:60,atk:40,def:80,spa:60,spd:45,spe:40},abilities:{0:"Chlorophyll",DW:"Harvest"},heightm:0.4,weightkg:2.5,color:"Pink",evos:["exeggutor"],eggGroups:

["Plant"]},
exeggutor:{num:103,species:"Exeggutor",types:["Steel","Fighting"],baseStats:{hp:95,atk:95,def:85,spa:125,spd:65,spe:55},abilities:

{0:"Chlorophyll",DW:"Harvest"},heightm:2,weightkg:120,color:"Yellow",prevo:"exeggcute",evoLevel:1,eggGroups:["Plant"]},
cubone:{num:104,species:"Cubone",types:["Flying"],baseStats:{hp:50,atk:50,def:95,spa:40,spd:50,spe:35},abilities:{0:"Rock Head",1:"Lightningrod",DW:"Battle Armor"},heightm:0.4,weightkg:6.5,color:"Brown",evos:["marowak"],eggGroups:

["Monster"]},
marowak:{num:105,species:"Marowak",types:["Flying"],baseStats:{hp:60,atk:80,def:110,spa:50,spd:80,spe:45},abilities:{0:"Rock Head",1:"Lightningrod",DW:"Battle 

Armor"},heightm:1,weightkg:45,color:"Brown",prevo:"cubone",evoLevel:28,eggGroups:["Monster"]},
hitmonlee:{num:106,species:"Hitmonlee",types:["Fighting"],gender:"M",baseStats:{hp:50,atk:120,def:53,spa:35,spd:110,spe:87},abilities:

{0:"Limber",1:"Reckless",DW:"Unburden"},heightm:1.5,weightkg:49.8,color:"Brown",prevo:"tyrogue",evoLevel:20,eggGroups:["Humanshape"]},
hitmonchan:{num:107,species:"Hitmonchan",types:["Fighting"],gender:"M",baseStats:{hp:50,atk:105,def:79,spa:35,spd:110,spe:76},abilities:{0:"Keen Eye",1:"Iron Fist",DW:"Inner 

Focus"},heightm:1.4,weightkg:50.2,color:"Brown",prevo:"tyrogue",evoLevel:20,eggGroups:["Humanshape"]},
lickitung:{num:108,species:"Lickitung",types:["Ghost"],baseStats:{hp:90,atk:55,def:75,spa:60,spd:75,spe:30},abilities:{0:"Own Tempo",1:"Oblivious",DW:"Cloud Nine"},heightm:1.2,weightkg:65.5,color:"Pink",evos:["lickilicky"],eggGroups:

["Monster"]},
koffing:{num:109,species:"Koffing",types:["Rock"],baseStats:{hp:40,atk:65,def:95,spa:60,spd:45,spe:35},abilities:{0:"Levitate"},heightm:0.6,weightkg:1,color:"Purple",evos:["weezing"],eggGroups:["Indeterminate"]},
weezing:{num:110,species:"Weezing",types:["Rock"],baseStats:{hp:65,atk:90,def:120,spa:85,spd:70,spe:60},abilities:{0:"Levitate"},heightm:1.2,weightkg:9.5,color:"Purple",prevo:"koffing",evoLevel:35,eggGroups:["Indeterminate"]},
rhyhorn:{num:111,species:"Rhyhorn",types:["Flying","Poison"],baseStats:{hp:80,atk:85,def:95,spa:30,spd:30,spe:25},abilities:{0:"Lightningrod",1:"Rock Head",DW:"Reckless"},heightm:1,weightkg:115,color:"Gray",evos:["rhydon"],eggGroups:

["Monster","Ground"]},
rhydon:{num:112,species:"Rhydon",types:["Flying","Poison"],baseStats:{hp:105,atk:130,def:120,spa:45,spd:45,spe:40},abilities:{0:"Lightningrod",1:"Rock Head",DW:"Reckless"},heightm:1.9,weightkg:120,color:"Gray",prevo:"rhyhorn",evos:

["rhyperior"],evoLevel:42,eggGroups:["Monster","Ground"]},
chansey:{num:113,species:"Chansey",types:["Ghost"],gender:"F",baseStats:{hp:250,atk:5,def:5,spa:35,spd:105,spe:50},abilities:{0:"Natural Cure",1:"Serene Grace",DW:"Healer"},heightm:1.1,weightkg:34.6,color:"Pink",prevo:"happiny",evos:

["blissey"],evoLevel:1,eggGroups:["Fairy"]},
tangela:{num:114,species:"Tangela",types:["Steel"],baseStats:{hp:65,atk:55,def:115,spa:100,spd:40,spe:60},abilities:{0:"Chlorophyll",1:"Leaf Guard",DW:"Regenerator"},heightm:1,weightkg:35,color:"Blue",evos:["tangrowth"],eggGroups:

["Plant"]},
kangaskhan:{num:115,species:"Kangaskhan",types:["Ghost"],gender:"F",baseStats:{hp:105,atk:95,def:80,spa:40,spd:80,spe:90},abilities:{0:"Early Bird",1:"Scrappy",DW:"Inner Focus"},heightm:2.2,weightkg:80,color:"Brown",eggGroups:

["Monster"]},
horsea:{num:116,species:"Horsea",types:["Ice"],baseStats:{hp:30,atk:40,def:70,spa:70,spd:25,spe:60},abilities:{0:"Swift Swim",1:"Sniper",DW:"Damp"},heightm:0.4,weightkg:8,color:"Blue",evos:["seadra"],eggGroups:["Water 1","Dragon"]},
seadra:{num:117,species:"Seadra",types:["Ice"],baseStats:{hp:55,atk:65,def:95,spa:95,spd:45,spe:85},abilities:{0:"Poison Point",1:"Sniper",DW:"Damp"},heightm:1.2,weightkg:25,color:"Blue",prevo:"horsea",evos:

["kingdra"],evoLevel:32,eggGroups:["Water 1","Dragon"]},
goldeen:{num:118,species:"Goldeen",types:["Ice"],baseStats:{hp:45,atk:67,def:60,spa:35,spd:50,spe:63},abilities:{0:"Swift Swim",1:"Water Veil",DW:"Lightningrod"},heightm:0.6,weightkg:15,color:"Red",evos:["seaking"],eggGroups:["Water 

2"]},
seaking:{num:119,species:"Seaking",types:["Ice"],baseStats:{hp:80,atk:92,def:65,spa:65,spd:80,spe:68},abilities:{0:"Swift Swim",1:"Water Veil",DW:"Lightningrod"},heightm:1.3,weightkg:39,color:"Red",prevo:"goldeen",evoLevel:33,eggGroups:

["Water 2"]},
staryu:{num:120,species:"Staryu",types:["Ice"],gender:"N",baseStats:{hp:30,atk:45,def:55,spa:70,spd:55,spe:85},abilities:{0:"Illuminate",1:"Natural Cure",DW:"Analytic"},heightm:0.8,weightkg:34.5,color:"Brown",evos:["starmie"],eggGroups:

["Water 3"]},
starmie:{num:121,species:"Starmie",types:["Ice","Fighting"],gender:"N",baseStats:{hp:60,atk:75,def:85,spa:100,spd:85,spe:115},abilities:{0:"Illuminate",1:"Natural 

Cure",DW:"Analytic"},heightm:1.1,weightkg:80,color:"Purple",prevo:"staryu",evoLevel:1,eggGroups:["Water 3"]},
mrmime:{num:122,species:"Mr. Mime",types:["Fighting"],baseStats:{hp:40,atk:45,def:65,spa:100,spd:120,spe:90},abilities:

{0:"Soundproof",1:"Filter",DW:"Technician"},heightm:1.3,weightkg:54.5,color:"Pink",prevo:"mimejr",evoLevel:1,evoMove:"Mimic",eggGroups:["Humanshape"]},
scyther:{num:123,species:"Scyther",types:["Dragon","Ground"],baseStats:{hp:70,atk:110,def:80,spa:55,spd:80,spe:105},abilities:{0:"Swarm",1:"Technician",DW:"Steadfast"},heightm:1.5,weightkg:56,color:"Green",evos:["scizor"],eggGroups:

["Bug"]},
jynx:{num:124,species:"Jynx",types:["Water","Fighting"],gender:"F",baseStats:{hp:65,atk:50,def:35,spa:115,spd:95,spe:95},abilities:{0:"Oblivious",1:"Forewarn",DW:"Dry 

Skin"},heightm:1.4,weightkg:40.6,color:"Red",prevo:"smoochum",evoLevel:30,eggGroups:["Humanshape"]},
electabuzz:{num:125,species:"Electabuzz",types:["Fire"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:65,atk:83,def:57,spa:95,spd:85,spe:105},abilities:{0:"Static",DW:"Vital 

Spirit"},heightm:1.1,weightkg:30,color:"Yellow",prevo:"elekid",evos:["electivire"],evoLevel:30,eggGroups:["Humanshape"]},
magmar:{num:126,species:"Magmar",types:["Electric"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:65,atk:95,def:57,spa:100,spd:85,spe:93},abilities:{0:"Flame Body",DW:"Vital Spirit"},heightm:1.3,weightkg:44.5,color:"Red",prevo:"magby",evos:

["magmortar"],evoLevel:30,eggGroups:["Humanshape"]},
pinsir:{num:127,species:"Pinsir",types:["Dragon"],baseStats:{hp:65,atk:125,def:100,spa:55,spd:70,spe:85},abilities:{0:"Hyper Cutter",1:"Mold Breaker",DW:"Moxie"},heightm:1.5,weightkg:55,color:"Brown",eggGroups:["Bug"]},
tauros:{num:128,species:"Tauros",types:["Ghost"],gender:"M",baseStats:{hp:75,atk:100,def:95,spa:40,spd:70,spe:110},abilities:{0:"Intimidate",1:"Anger Point",DW:"Sheer Force"},heightm:1.4,weightkg:88.4,color:"Brown",eggGroups:["Flying"]},
magikarp:{num:129,species:"Magikarp",types:["Ice"],baseStats:{hp:20,atk:10,def:55,spa:15,spd:20,spe:80},abilities:{0:"Swift Swim",DW:"Rattled"},heightm:0.9,weightkg:10,color:"Red",evos:["gyarados"],eggGroups:["Water 2","Dragon"]},
gyarados:{num:130,species:"Gyarados",types:["Ice","Ground"],baseStats:{hp:95,atk:125,def:79,spa:60,spd:100,spe:81},abilities:{0:"Intimidate",DW:"Moxie"},heightm:6.5,weightkg:235,color:"Blue",prevo:"magikarp",evoLevel:20,eggGroups:["Water 

2","Dragon"]},
lapras:{num:131,species:"Lapras",types:["Ice","Water"],baseStats:{hp:130,atk:85,def:80,spa:85,spd:95,spe:60},abilities:{0:"Water Absorb",1:"Shell Armor",DW:"Hydration"},heightm:2.5,weightkg:220,color:"Blue",eggGroups:["Monster","Water 

1"]},
ditto:{num:132,species:"Ditto",types:["Ghost"],gender:"N",baseStats:{hp:48,atk:48,def:48,spa:48,spd:48,spe:48},abilities:{0:"Limber",DW:"Imposter"},heightm:0.3,weightkg:4,color:"Purple",eggGroups:["Ditto"]},
eevee:{num:133,species:"Eevee",types:["Ghost"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:55,atk:55,def:50,spa:45,spd:65,spe:55},abilities:{0:"Run Away",1:"Adaptability",DW:"Anticipation"},heightm:0.3,weightkg:6.5,color:"Brown",evos:

["vaporeon","jolteon","flareon","espeon","umbreon","leafeon","glaceon"],eggGroups:["Flying"]},
vaporeon:{num:134,species:"Vaporeon",types:["Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:130,atk:65,def:60,spa:110,spd:95,spe:65},abilities:{0:"Water 

Absorb",DW:"Hydration"},heightm:1,weightkg:29,color:"Blue",prevo:"eevee",evoLevel:1,eggGroups:["Flying"]},
jolteon:{num:135,species:"Jolteon",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:65,def:60,spa:110,spd:95,spe:130},abilities:{0:"Volt Absorb",DW:"Quick 

Feet"},heightm:0.8,weightkg:24.5,color:"Yellow",prevo:"eevee",evoLevel:1,eggGroups:["Flying"]},
flareon:{num:136,species:"Flareon",types:["Electric"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:130,def:60,spa:95,spd:110,spe:65},abilities:{0:"Flash 

Fire",DW:"Guts"},heightm:0.9,weightkg:25,color:"Red",prevo:"eevee",evoLevel:1,eggGroups:["Flying"]},
porygon:{num:137,species:"Porygon",types:["Ghost"],gender:"N",baseStats:{hp:65,atk:60,def:70,spa:85,spd:75,spe:40},abilities:{0:"Trace",1:"Download",DW:"Analytic"},heightm:0.8,weightkg:36.5,color:"Pink",evos:["porygon2"],eggGroups:

["Mineral"]},
omanyte:{num:138,species:"Omanyte",types:["Poison","Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:35,atk:40,def:100,spa:90,spd:55,spe:35},abilities:{0:"Swift Swim",1:"Shell Armor",DW:"Weak 

Armor"},heightm:0.4,weightkg:7.5,color:"Blue",evos:["omastar"],eggGroups:["Water 1","Water 3"]},
omastar:{num:139,species:"Omastar",types:["Poison","Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:70,atk:60,def:125,spa:115,spd:70,spe:55},abilities:{0:"Swift Swim",1:"Shell Armor",DW:"Weak 

Armor"},heightm:1,weightkg:35,color:"Blue",prevo:"omanyte",evoLevel:40,eggGroups:["Water 1","Water 3"]},
kabuto:{num:140,species:"Kabuto",types:["Poison","Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:30,atk:80,def:90,spa:55,spd:45,spe:55},abilities:{0:"Swift Swim",1:"Battle Armor",DW:"Weak 

Armor"},heightm:0.5,weightkg:11.5,color:"Brown",evos:["kabutops"],eggGroups:["Water 1","Water 3"]},
kabutops:{num:141,species:"Kabutops",types:["Poison","Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:115,def:105,spa:65,spd:70,spe:80},abilities:{0:"Swift Swim",1:"Battle Armor",DW:"Weak 

Armor"},heightm:1.3,weightkg:40.5,color:"Brown",prevo:"kabuto",evoLevel:40,eggGroups:["Water 1","Water 3"]},
aerodactyl:{num:142,species:"Aerodactyl",types:["Poison","Ground"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:80,atk:105,def:65,spa:60,spd:75,spe:130},abilities:{0:"Rock 

Head",1:"Pressure",DW:"Unnerve"},heightm:1.8,weightkg:59,color:"Purple",eggGroups:["Flying"]},
snorlax:{num:143,species:"Snorlax",types:["Ghost"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:160,atk:110,def:65,spa:65,spd:110,spe:30},abilities:{0:"Immunity",1:"Thick 

Fat",DW:"Gluttony"},heightm:2.1,weightkg:460,color:"Black",prevo:"munchlax",evoLevel:1,eggGroups:["Monster"]},
articuno:{num:144,species:"Articuno",types:["Water","Ground"],gender:"N",baseStats:{hp:90,atk:85,def:100,spa:95,spd:125,spe:85},abilities:{0:"Pressure",DW:"Snow Cloak"},heightm:1.7,weightkg:55.4,color:"Blue",eggGroups:["No Eggs"]},
zapdos:{num:145,species:"Zapdos",types:["Fire","Ground"],gender:"N",baseStats:{hp:90,atk:90,def:85,spa:125,spd:90,spe:100},abilities:{0:"Pressure",DW:"Lightningrod"},heightm:1.6,weightkg:52.6,color:"Yellow",eggGroups:["No Eggs"]},
moltres:{num:146,species:"Moltres",types:["Electric","Ground"],gender:"N",baseStats:{hp:90,atk:100,def:90,spa:125,spd:85,spe:90},abilities:{0:"Pressure",DW:"Flame Body"},heightm:2,weightkg:60,color:"Yellow",eggGroups:["No Eggs"]},
dratini:{num:147,species:"Dratini",types:["Bug"],baseStats:{hp:41,atk:64,def:45,spa:50,spd:50,spe:50},abilities:{0:"Shed Skin",DW:"Marvel Scale"},heightm:1.8,weightkg:3.3,color:"Blue",evos:["dragonair"],eggGroups:["Water 1","Dragon"]},
dragonair:{num:148,species:"Dragonair",types:["Bug"],baseStats:{hp:61,atk:84,def:65,spa:70,spd:70,spe:70},abilities:{0:"Shed Skin",DW:"Marvel Scale"},heightm:4,weightkg:16.5,color:"Blue",prevo:"dratini",evos:

["dragonite"],evoLevel:30,eggGroups:["Water 1","Dragon"]},
dragonite:{num:149,species:"Dragonite",types:["Bug","Ground"],baseStats:{hp:91,atk:134,def:95,spa:100,spd:100,spe:80},abilities:{0:"Inner 

Focus",DW:"Multiscale"},heightm:2.2,weightkg:210,color:"Brown",prevo:"dragonair",evoLevel:55,eggGroups:["Water 1","Dragon"]},
mewtwo:{num:150,species:"Mewtwo",types:["Fighting"],gender:"N",baseStats:{hp:106,atk:110,def:90,spa:154,spd:90,spe:130},abilities:{0:"Pressure",DW:"Unnerve"},heightm:2,weightkg:122,color:"Purple",eggGroups:["No Eggs"]},
mew:{num:151,species:"Mew",types:["Fighting"],gender:"N",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},abilities:{0:"Synchronize"},heightm:0.4,weightkg:4,color:"Pink",eggGroups:["No Eggs"]},
chikorita:{num:152,species:"Chikorita",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:45,atk:49,def:65,spa:49,spd:65,spe:45},abilities:{0:"Overgrow",DW:"Leaf Guard"},heightm:0.9,weightkg:6.4,color:"Green",evos:

["bayleef"],eggGroups:["Monster","Plant"]},
bayleef:{num:153,species:"Bayleef",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:62,def:80,spa:63,spd:80,spe:60},abilities:{0:"Overgrow",DW:"Leaf 

Guard"},heightm:1.2,weightkg:15.8,color:"Green",prevo:"chikorita",evos:["meganium"],evoLevel:16,eggGroups:["Monster","Plant"]},
meganium:{num:154,species:"Meganium",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:80,atk:82,def:100,spa:83,spd:100,spe:80},abilities:{0:"Overgrow",DW:"Leaf 

Guard"},heightm:1.8,weightkg:100.5,color:"Green",prevo:"bayleef",evoLevel:32,eggGroups:["Monster","Plant"]},
cyndaquil:{num:155,species:"Cyndaquil",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:39,atk:52,def:43,spa:60,spd:50,spe:65},abilities:{0:"Blaze",DW:"Flash Fire"},heightm:0.5,weightkg:7.9,color:"Yellow",evos:

["quilava"],eggGroups:["Flying"]},
quilava:{num:156,species:"Quilava",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:58,atk:64,def:58,spa:80,spd:65,spe:80},abilities:{0:"Blaze",DW:"Flash Fire"},heightm:0.9,weightkg:19,color:"Yellow",prevo:"cyndaquil",evos:

["typhlosion"],evoLevel:14,eggGroups:["Flying"]},
typhlosion:{num:157,species:"Typhlosion",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:78,atk:84,def:78,spa:109,spd:85,spe:100},abilities:{0:"Blaze",DW:"Flash 

Fire"},heightm:1.7,weightkg:79.5,color:"Yellow",prevo:"quilava",evoLevel:36,eggGroups:["Flying"]},
totodile:{num:158,species:"Totodile",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:50,atk:65,def:64,spa:44,spd:48,spe:43},abilities:{0:"Torrent",DW:"Sheer Force"},heightm:0.6,weightkg:9.5,color:"Blue",evos:

["croconaw"],eggGroups:["Monster","Water 1"]},
croconaw:{num:159,species:"Croconaw",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:80,def:80,spa:59,spd:63,spe:58},abilities:{0:"Torrent",DW:"Sheer Force"},heightm:1.1,weightkg:25,color:"Blue",prevo:"totodile",evos:

["feraligatr"],evoLevel:18,eggGroups:["Monster","Water 1"]},
feraligatr:{num:160,species:"Feraligatr",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:85,atk:105,def:100,spa:79,spd:83,spe:78},abilities:{0:"Torrent",DW:"Sheer 

Force"},heightm:2.3,weightkg:88.8,color:"Blue",prevo:"croconaw",evoLevel:30,eggGroups:["Monster","Water 1"]},
sentret:{num:161,species:"Sentret",types:["Ghost"],baseStats:{hp:35,atk:46,def:34,spa:35,spd:45,spe:20},abilities:{0:"Run Away",1:"Keen Eye",DW:"Frisk"},heightm:0.8,weightkg:6,color:"Brown",evos:["furret"],eggGroups:["Flying"]},
furret:{num:162,species:"Furret",types:["Ghost"],baseStats:{hp:85,atk:76,def:64,spa:45,spd:55,spe:90},abilities:{0:"Run Away",1:"Keen Eye",DW:"Frisk"},heightm:1.8,weightkg:32.5,color:"Brown",prevo:"sentret",evoLevel:15,eggGroups:

["Flying"]},
hoothoot:{num:163,species:"Hoothoot",types:["Ground","Ghost"],baseStats:{hp:60,atk:30,def:30,spa:36,spd:56,spe:50},abilities:{0:"Insomnia",1:"Keen Eye",DW:"Tinted Lens"},heightm:0.7,weightkg:21.2,color:"Brown",evos:

["noctowl"],eggGroups:["Flying"]},
noctowl:{num:164,species:"Noctowl",types:["Ground","Ghost"],baseStats:{hp:100,atk:50,def:50,spa:76,spd:96,spe:70},abilities:{0:"Insomnia",1:"Keen Eye",DW:"Tinted 

Lens"},heightm:1.6,weightkg:40.8,color:"Brown",prevo:"hoothoot",evoLevel:20,eggGroups:["Flying"]},
ledyba:{num:165,species:"Ledyba",types:["Dragon","Flying"],baseStats:{hp:40,atk:20,def:30,spa:40,spd:80,spe:55},abilities:{0:"Swarm",1:"Early Bird",DW:"Rattled"},heightm:1,weightkg:10.8,color:"Red",evos:["ledian"],eggGroups:["Bug"]},
ledian:{num:166,species:"Ledian",types:["Dragon","Flying"],baseStats:{hp:55,atk:35,def:50,spa:55,spd:110,spe:85},abilities:{0:"Swarm",1:"Early Bird",DW:"Iron 

Fist"},heightm:1.4,weightkg:35.6,color:"Red",prevo:"ledyba",evoLevel:18,eggGroups:["Bug"]},
spinarak:{num:167,species:"Spinarak",types:["Dragon","Poison"],baseStats:{hp:40,atk:60,def:40,spa:40,spd:40,spe:30},abilities:{0:"Swarm",1:"Insomnia",DW:"Sniper"},heightm:0.5,weightkg:8.5,color:"Green",evos:["ariados"],eggGroups:

["Bug"]},
ariados:{num:168,species:"Ariados",types:["Dragon","Poison"],baseStats:{hp:70,atk:90,def:70,spa:60,spd:60,spe:40},abilities:

{0:"Swarm",1:"Insomnia",DW:"Sniper"},heightm:1.1,weightkg:33.5,color:"Red",prevo:"spinarak",evoLevel:22,eggGroups:["Bug"]},
crobat:{num:169,species:"Crobat",types:["Rock","Ground"],baseStats:{hp:85,atk:90,def:80,spa:70,spd:80,spe:130},abilities:{0:"Inner Focus",DW:"Infiltrator"},heightm:1.8,weightkg:75,color:"Purple",prevo:"golbat",evoLevel:23,eggGroups:

["Flying"]},
chinchou:{num:170,species:"Chinchou",types:["Water","Electric"],baseStats:{hp:75,atk:38,def:38,spa:56,spd:56,spe:67},abilities:{0:"Volt Absorb",1:"Illuminate",DW:"Water Absorb"},heightm:0.5,weightkg:12,color:"Blue",evos:

["lanturn"],eggGroups:["Water 2"]},
lanturn:{num:171,species:"Lanturn",types:["Water","Electric"],baseStats:{hp:125,atk:58,def:58,spa:76,spd:76,spe:67},abilities:{0:"Volt Absorb",1:"Illuminate",DW:"Water 

Absorb"},heightm:1.2,weightkg:22.5,color:"Blue",prevo:"chinchou",evoLevel:27,eggGroups:["Water 2"]},
pichu:{num:172,species:"Pichu",types:["Electric"],baseStats:{hp:20,atk:40,def:15,spa:35,spd:35,spe:60},abilities:{0:"Static",DW:"Lightningrod"},heightm:0.3,weightkg:2,color:"Yellow",evos:["pikachu"],eggGroups:["No Eggs"],otherFormes:

["pichuspikyeared"]},
pichuspikyeared:{num:172,species:"Pichu-Spiky-eared",baseSpecies:"Pichu",forme:"Spiky-eared",formeLetter:"S",types:["Electric"],gender:"F",baseStats:{hp:20,atk:40,def:15,spa:35,spd:35,spe:60},abilities:

{0:"Static"},heightm:0.3,weightkg:2,color:"Yellow",eggGroups:["No Eggs"]},
cleffa:{num:173,species:"Cleffa",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:50,atk:25,def:28,spa:45,spd:55,spe:15},abilities:{0:"Cute Charm",1:"Magic Guard",DW:"Friend Guard"},heightm:0.3,weightkg:3,color:"Pink",evos:

["clefairy"],eggGroups:["No Eggs"]},
igglybuff:{num:174,species:"Igglybuff",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:90,atk:30,def:15,spa:40,spd:20,spe:15},abilities:{0:"Cute Charm",DW:"Friend Guard"},heightm:0.3,weightkg:1,color:"Pink",evos:

["jigglypuff"],eggGroups:["No Eggs"]},
togepi:{num:175,species:"Togepi",types:["Ghost"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:35,atk:20,def:65,spa:40,spd:65,spe:20},abilities:{0:"Hustle",1:"Serene Grace",DW:"Super Luck"},heightm:0.3,weightkg:1.5,color:"White",evos:

["togetic"],eggGroups:["No Eggs"]},
togetic:{num:176,species:"Togetic",types:["Ground","Ghost"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:55,atk:40,def:85,spa:80,spd:105,spe:40},abilities:{0:"Hustle",1:"Serene Grace",DW:"Super 

Luck"},heightm:0.6,weightkg:3.2,color:"White",prevo:"togepi",evos:["togekiss"],evoLevel:2,eggGroups:["Flying","Fairy"]},
natu:{num:177,species:"Natu",types:["Psychic","Flying"],baseStats:{hp:40,atk:50,def:45,spa:70,spd:45,spe:70},abilities:{0:"Synchronize",1:"Early Bird",DW:"Magic Bounce"},heightm:0.2,weightkg:2,color:"Green",evos:["xatu"],eggGroups:

["Flying"]},
xatu:{num:178,species:"Xatu",types:["Psychic","Flying"],baseStats:{hp:65,atk:75,def:70,spa:95,spd:70,spe:95},abilities:{0:"Synchronize",1:"Early Bird",DW:"Magic 

Bounce"},heightm:1.5,weightkg:15,color:"Green",prevo:"natu",evoLevel:25,eggGroups:["Flying"]},
mareep:{num:179,species:"Mareep",types:["Electric"],baseStats:{hp:55,atk:40,def:40,spa:65,spd:45,spe:35},abilities:{0:"Static",DW:"Plus"},heightm:0.6,weightkg:7.8,color:"White",evos:["flaaffy"],eggGroups:["Monster","Ground"]},
flaaffy:{num:180,species:"Flaaffy",types:["Electric"],baseStats:{hp:70,atk:55,def:55,spa:80,spd:60,spe:45},abilities:{0:"Static",DW:"Plus"},heightm:0.8,weightkg:13.3,color:"Pink",prevo:"mareep",evos:["ampharos"],evoLevel:15,eggGroups:

["Monster","Ground"]},
ampharos:{num:181,species:"Ampharos",types:["Electric"],baseStats:{hp:90,atk:75,def:75,spa:115,spd:90,spe:55},abilities:{0:"Static",DW:"Plus"},heightm:1.4,weightkg:61.5,color:"Yellow",prevo:"flaaffy",evoLevel:30,eggGroups:

["Monster","Ground"]},
bellossom:{num:182,species:"Bellossom",types:["Steel"],baseStats:{hp:75,atk:80,def:85,spa:90,spd:100,spe:50},abilities:{0:"Chlorophyll",DW:"Healer"},heightm:0.4,weightkg:5.8,color:"Green",prevo:"gloom",evoLevel:21,eggGroups:["Plant"]},
marill:{num:183,species:"Marill",types:["Water"],baseStats:{hp:70,atk:20,def:50,spa:20,spd:50,spe:40},abilities:{0:"Thick Fat",1:"Huge Power",DW:"Sap Sipper"},heightm:0.4,weightkg:8.5,color:"Blue",prevo:"azurill",evos:

["azumarill"],evoLevel:1,eggGroups:["Water 1","Fairy"]},
azumarill:{num:184,species:"Azumarill",types:["Water"],baseStats:{hp:100,atk:50,def:80,spa:50,spd:80,spe:50},abilities:{0:"Thick Fat",1:"Huge Power",DW:"Sap 

Sipper"},heightm:0.8,weightkg:28.5,color:"Blue",prevo:"marill",evoLevel:18,eggGroups:["Water 1","Fairy"]},
sudowoodo:{num:185,species:"Sudowoodo",types:["Rock"],baseStats:{hp:70,atk:100,def:115,spa:30,spd:65,spe:30},abilities:{0:"Sturdy",1:"Rock 

Head",DW:"Rattled"},heightm:1.2,weightkg:38,color:"Brown",prevo:"bonsly",evoLevel:1,evoMove:"Mimic",eggGroups:["Mineral"]},
politoed:{num:186,species:"Politoed",types:["Ice"],baseStats:{hp:90,atk:75,def:75,spa:90,spd:100,spe:70},abilities:{0:"Water Absorb",1:"Damp",DW:"Drizzle"},heightm:1.1,weightkg:33.9,color:"Green",prevo:"poliwhirl",evoLevel:25,eggGroups:

["Water 1"]},
hoppip:{num:187,species:"Hoppip",types:["Steel","Flying"],baseStats:{hp:35,atk:35,def:40,spa:35,spd:55,spe:50},abilities:{0:"Chlorophyll",1:"Leaf Guard",DW:"Infiltrator"},heightm:0.4,weightkg:0.5,color:"Pink",evos:

["skiploom"],eggGroups:["Fairy","Plant"]},
skiploom:{num:188,species:"Skiploom",types:["Steel","Flying"],baseStats:{hp:55,atk:45,def:50,spa:45,spd:65,spe:80},abilities:{0:"Chlorophyll",1:"Leaf Guard",DW:"Infiltrator"},heightm:0.6,weightkg:1,color:"Green",prevo:"hoppip",evos:

["jumpluff"],evoLevel:18,eggGroups:["Fairy","Plant"]},
jumpluff:{num:189,species:"Jumpluff",types:["Steel","Flying"],baseStats:{hp:75,atk:55,def:70,spa:55,spd:85,spe:110},abilities:{0:"Chlorophyll",1:"Leaf 

Guard",DW:"Infiltrator"},heightm:0.8,weightkg:3,color:"Blue",prevo:"skiploom",evoLevel:27,eggGroups:["Fairy","Plant"]},
aipom:{num:190,species:"Aipom",types:["Ghost"],baseStats:{hp:55,atk:70,def:55,spa:40,spd:55,spe:85},abilities:{0:"Run Away",1:"Pickup",DW:"Skill Link"},heightm:0.8,weightkg:11.5,color:"Purple",evos:["ambipom"],eggGroups:["Flying"]},
sunkern:{num:191,species:"Sunkern",types:["Steel"],baseStats:{hp:30,atk:30,def:30,spa:30,spd:30,spe:30},abilities:{0:"Chlorophyll",1:"Solar Power",DW:"Early Bird"},heightm:0.3,weightkg:1.8,color:"Yellow",evos:["sunflora"],eggGroups:

["Plant"]},
sunflora:{num:192,species:"Sunflora",types:["Steel"],baseStats:{hp:75,atk:75,def:55,spa:105,spd:85,spe:30},abilities:{0:"Chlorophyll",1:"Solar Power",DW:"Early 

Bird"},heightm:0.8,weightkg:8.5,color:"Yellow",prevo:"sunkern",evoLevel:1,eggGroups:["Plant"]},
yanma:{num:193,species:"Yanma",types:["Dragon","Flying"],baseStats:{hp:65,atk:65,def:45,spa:75,spd:45,spe:95},abilities:{0:"Speed Boost",1:"Compoundeyes",DW:"Frisk"},heightm:1.2,weightkg:38,color:"Red",evos:["yanmega"],eggGroups:

["Bug"]},
wooper:{num:194,species:"Wooper",types:["Water","Ground"],baseStats:{hp:55,atk:45,def:45,spa:25,spd:25,spe:15},abilities:{0:"Damp",1:"Water Absorb",DW:"Unaware"},heightm:0.4,weightkg:8.5,color:"Blue",evos:["quagsire"],eggGroups:["Water 

1","Ground"]},
quagsire:{num:195,species:"Quagsire",types:["Water","Ground"],baseStats:{hp:95,atk:85,def:85,spa:65,spd:65,spe:35},abilities:{0:"Damp",1:"Water 

Absorb",DW:"Unaware"},heightm:1.4,weightkg:75,color:"Blue",prevo:"wooper",evoLevel:20,eggGroups:["Water 1","Ground"]},
espeon:{num:196,species:"Espeon",types:["Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:65,def:60,spa:130,spd:95,spe:110},abilities:{0:"Synchronize",DW:"Magic 

Bounce"},heightm:0.9,weightkg:26.5,color:"Purple",prevo:"eevee",evoLevel:1,eggGroups:["Flying"]},
umbreon:{num:197,species:"Umbreon",types:["Fairy"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:95,atk:65,def:110,spa:60,spd:130,spe:65},abilities:{0:"Synchronize",DW:"Inner 

Focus"},heightm:1,weightkg:27,color:"Black",prevo:"eevee",evoLevel:1,eggGroups:["Flying"]},
murkrow:{num:198,species:"Murkrow",types:["Dark","Flying"],baseStats:{hp:60,atk:85,def:42,spa:85,spd:42,spe:91},abilities:{0:"Insomnia",1:"Super Luck",DW:"Prankster"},heightm:0.5,weightkg:2.1,color:"Black",evos:["honchkrow"],eggGroups:

["Flying"]},
slowking:{num:199,species:"Slowking",types:["Ice","Fighting"],baseStats:{hp:95,atk:75,def:80,spa:100,spd:110,spe:30},abilities:{0:"Oblivious",1:"Own 

Tempo",DW:"Regenerator"},heightm:2,weightkg:79.5,color:"Pink",prevo:"slowpoke",evoLevel:1,eggGroups:["Monster","Water 1"]},
misdreavus:{num:200,species:"Misdreavus",types:["Ghost"],baseStats:{hp:60,atk:60,def:60,spa:85,spd:85,spe:85},abilities:{0:"Levitate"},heightm:0.7,weightkg:1,color:"Gray",evos:["mismagius"],eggGroups:["Indeterminate"]},
unown:{num:201,species:"Unown",baseForme:"A",types:["Fighting"],gender:"N",baseStats:{hp:48,atk:72,def:48,spa:72,spd:48,spe:48},abilities:{0:"Levitate"},heightm:0.5,weightkg:5,color:"Black",eggGroups:["No Eggs"],otherForms:

["unownb","unownc","unownd","unowne","unownf","unowng","unownh","unowni","unownj","unownk","unownl","unownm","unownn","unowno","unownp","unownq","unownr","unowns","unownt","unownu","unownv","unownw","unownx","unowny","unownz","unownem","

unownqm"]},
wobbuffet:{num:202,species:"Wobbuffet",types:["Fighting"],baseStats:{hp:190,atk:33,def:58,spa:33,spd:58,spe:33},abilities:{0:"Shadow Tag",DW:"Telepathy"},heightm:1.3,weightkg:28.5,color:"Blue",prevo:"wynaut",evoLevel:15,eggGroups:

["Indeterminate"]},
girafarig:{num:203,species:"Girafarig",types:["Normal","Psychic"],baseStats:{hp:70,atk:80,def:65,spa:90,spd:65,spe:85},abilities:{0:"Inner Focus",1:"Early Bird",DW:"Sap Sipper"},heightm:1.5,weightkg:41.5,color:"Yellow",eggGroups:

["Flying"]},
pineco:{num:204,species:"Pineco",types:["Bug"],baseStats:{hp:50,atk:65,def:90,spa:35,spd:35,spe:15},abilities:{0:"Sturdy",DW:"Overcoat"},heightm:0.6,weightkg:7.2,color:"Gray",evos:["forretress"],eggGroups:["Bug"]},
forretress:{num:205,species:"Forretress",types:["Dragon","Steel"],baseStats:{hp:75,atk:90,def:140,spa:60,spd:60,spe:40},abilities:{0:"Sturdy",DW:"Overcoat"},heightm:1.2,weightkg:125.8,color:"Purple",prevo:"pineco",evoLevel:31,eggGroups:

["Bug"]},
dunsparce:{num:206,species:"Dunsparce",types:["Ghost"],baseStats:{hp:100,atk:70,def:70,spa:65,spd:65,spe:45},abilities:{0:"Serene Grace",1:"Run Away",DW:"Rattled"},heightm:1.5,weightkg:14,color:"Yellow",eggGroups:["Flying"]},
gligar:{num:207,species:"Gligar",types:["Ground","Flying"],baseStats:{hp:65,atk:75,def:105,spa:35,spd:65,spe:85},abilities:{0:"Hyper Cutter",1:"Sand Veil",DW:"Immunity"},heightm:1.1,weightkg:64.8,color:"Purple",evos:

["gliscor"],eggGroups:["Bug"]},
steelix:{num:208,species:"Steelix",types:["Grass","Flying"],baseStats:{hp:75,atk:85,def:200,spa:55,spd:65,spe:30},abilities:{0:"Rock Head",1:"Sturdy",DW:"Sheer 

Force"},heightm:9.2,weightkg:400,color:"Gray",prevo:"onix",evoLevel:1,eggGroups:["Mineral"]},
snubbull:{num:209,species:"Snubbull",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:60,atk:80,def:50,spa:40,spd:40,spe:30},abilities:{0:"Intimidate",1:"Run Away",DW:"Rattled"},heightm:0.6,weightkg:7.8,color:"Pink",evos:

["granbull"],eggGroups:["Ground","Fairy"]},
granbull:{num:210,species:"Granbull",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:90,atk:120,def:75,spa:60,spd:60,spe:45},abilities:{0:"Intimidate",1:"Quick 

Feet",DW:"Rattled"},heightm:1.4,weightkg:48.7,color:"Purple",prevo:"snubbull",evoLevel:23,eggGroups:["Ground","Fairy"]},
qwilfish:{num:211,species:"Qwilfish",types:["Water","Poison"],baseStats:{hp:65,atk:95,def:75,spa:55,spd:55,spe:85},abilities:{0:"Poison Point",1:"Swift Swim",DW:"Intimidate"},heightm:0.5,weightkg:3.9,color:"Gray",eggGroups:["Water 2"]},
scizor:{num:212,species:"Scizor",types:["Dragon","Grass"],baseStats:{hp:70,atk:130,def:100,spa:55,spd:80,spe:65},abilities:{0:"Swarm",1:"Technician",DW:"Light 

Metal"},heightm:1.8,weightkg:118,color:"Red",prevo:"scyther",evoLevel:1,eggGroups:["Bug"]},
shuckle:{num:213,species:"Shuckle",types:["Bug","Rock"],baseStats:{hp:20,atk:10,def:230,spa:10,spd:230,spe:5},abilities:{0:"Sturdy",1:"Gluttony",DW:"Contrary"},heightm:0.6,weightkg:20.5,color:"Yellow",eggGroups:["Bug"]},
heracross:{num:214,species:"Heracross",types:["Bug","Fighting"],baseStats:{hp:80,atk:125,def:75,spa:40,spd:95,spe:85},abilities:{0:"Swarm",1:"Guts",DW:"Moxie"},heightm:1.5,weightkg:54,color:"Blue",eggGroups:["Bug"]},
sneasel:{num:215,species:"Sneasel",types:["Dark","Ice"],baseStats:{hp:55,atk:95,def:55,spa:35,spd:75,spe:115},abilities:{0:"Inner Focus",1:"Keen Eye",DW:"Pickpocket"},heightm:0.9,weightkg:28,color:"Black",evos:["weavile"],eggGroups:

["Flying"]},
teddiursa:{num:216,species:"Teddiursa",types:["Ghost"],baseStats:{hp:60,atk:80,def:50,spa:50,spd:50,spe:40},abilities:{0:"Pickup",1:"Quick Feet",DW:"Honey Gather"},heightm:0.6,weightkg:8.8,color:"Brown",evos:["ursaring"],eggGroups:

["Flying"]},
ursaring:{num:217,species:"Ursaring",types:["Ghost"],baseStats:{hp:90,atk:130,def:75,spa:75,spd:75,spe:55},abilities:{0:"Guts",1:"Quick 

Feet",DW:"Unnerve"},heightm:1.8,weightkg:125.8,color:"Brown",prevo:"teddiursa",evoLevel:30,eggGroups:["Flying"]},
slugma:{num:218,species:"Slugma",types:["Fire"],baseStats:{hp:40,atk:40,def:40,spa:70,spd:40,spe:20},abilities:{0:"Magma Armor",1:"Flame Body",DW:"Weak Armor"},heightm:0.7,weightkg:35,color:"Red",evos:["magcargo"],eggGroups:

["Indeterminate"]},
magcargo:{num:219,species:"Magcargo",types:["Fire","Rock"],baseStats:{hp:50,atk:50,def:120,spa:80,spd:80,spe:30},abilities:{0:"Magma Armor",1:"Flame Body",DW:"Weak 

Armor"},heightm:0.8,weightkg:55,color:"Red",prevo:"slugma",evoLevel:38,eggGroups:["Indeterminate"]},
swinub:{num:220,species:"Swinub",types:["Ice","Ground"],baseStats:{hp:50,atk:50,def:40,spa:30,spd:30,spe:50},abilities:{0:"Oblivious",1:"Snow Cloak",DW:"Thick Fat"},heightm:0.4,weightkg:6.5,color:"Brown",evos:["piloswine"],eggGroups:

["Flying"]},
piloswine:{num:221,species:"Piloswine",types:["Ice","Ground"],baseStats:{hp:100,atk:100,def:80,spa:60,spd:60,spe:50},abilities:{0:"Oblivious",1:"Snow Cloak",DW:"Thick Fat"},heightm:1.1,weightkg:55.8,color:"Brown",prevo:"swinub",evos:

["mamoswine"],evoLevel:33,eggGroups:["Flying"]},
corsola:{num:222,species:"Corsola",types:["Water","Rock"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:55,atk:55,def:85,spa:65,spd:85,spe:35},abilities:{0:"Hustle",1:"Natural 

Cure",DW:"Regenerator"},heightm:0.6,weightkg:5,color:"Pink",eggGroups:["Water 1","Water 3"]},
remoraid:{num:223,species:"Remoraid",types:["Water"],baseStats:{hp:35,atk:65,def:35,spa:65,spd:35,spe:65},abilities:{0:"Hustle",1:"Sniper",DW:"Moody"},heightm:0.6,weightkg:12,color:"Gray",evos:["octillery"],eggGroups:["Water 1","Water 

2"]},
octillery:{num:224,species:"Octillery",types:["Water"],baseStats:{hp:75,atk:105,def:75,spa:105,spd:75,spe:45},abilities:{0:"Suction 

Cups",1:"Sniper",DW:"Moody"},heightm:0.9,weightkg:28.5,color:"Red",prevo:"remoraid",evoLevel:25,eggGroups:["Water 1","Water 2"]},
delibird:{num:225,species:"Delibird",types:["Ice","Flying"],baseStats:{hp:45,atk:55,def:45,spa:65,spd:45,spe:75},abilities:{0:"Vital Spirit",1:"Hustle",DW:"Insomnia"},heightm:0.9,weightkg:16,color:"Red",eggGroups:["Water 1","Ground"]},
mantine:{num:226,species:"Mantine",types:["Water","Flying"],baseStats:{hp:65,atk:40,def:70,spa:80,spd:140,spe:70},abilities:{0:"Swift Swim",1:"Water Absorb",DW:"Water 

Veil"},heightm:2.1,weightkg:220,color:"Purple",prevo:"mantyke",evoLevel:1,eggGroups:["Water 1"]},
skarmory:{num:227,species:"Skarmory",types:["Steel","Flying"],baseStats:{hp:65,atk:80,def:140,spa:40,spd:70,spe:70},abilities:{0:"Keen Eye",1:"Sturdy",DW:"Weak Armor"},heightm:1.7,weightkg:50.5,color:"Gray",eggGroups:["Flying"]},
houndour:{num:228,species:"Houndour",types:["Dark","Fire"],baseStats:{hp:45,atk:60,def:30,spa:80,spd:50,spe:65},abilities:{0:"Early Bird",1:"Flash Fire",DW:"Unnerve"},heightm:0.6,weightkg:10.8,color:"Black",evos:["houndoom"],eggGroups:

["Flying"]},
houndoom:{num:229,species:"Houndoom",types:["Dark","Fire"],baseStats:{hp:75,atk:90,def:50,spa:110,spd:80,spe:95},abilities:{0:"Early Bird",1:"Flash 

Fire",DW:"Unnerve"},heightm:1.4,weightkg:35,color:"Black",prevo:"houndour",evoLevel:24,eggGroups:["Flying"]},
kingdra:{num:230,species:"Kingdra",types:["Ice","Bug"],baseStats:{hp:75,atk:95,def:95,spa:95,spd:95,spe:85},abilities:{0:"Swift Swim",1:"Sniper",DW:"Damp"},heightm:1.8,weightkg:152,color:"Blue",prevo:"seadra",evoLevel:32,eggGroups:

["Water 1","Dragon"]},
phanpy:{num:231,species:"Phanpy",types:["Flying"],baseStats:{hp:90,atk:60,def:60,spa:40,spd:40,spe:40},abilities:{0:"Pickup",DW:"Sand Veil"},heightm:0.5,weightkg:33.5,color:"Blue",evos:["donphan"],eggGroups:["Flying"]},
donphan:{num:232,species:"Donphan",types:["Flying"],baseStats:{hp:90,atk:120,def:120,spa:60,spd:60,spe:50},abilities:{0:"Sturdy",DW:"Sand Veil"},heightm:1.1,weightkg:120,color:"Gray",prevo:"phanpy",evoLevel:25,eggGroups:["Flying"]},
porygon2:{num:233,species:"Porygon2",types:["Ghost"],gender:"N",baseStats:{hp:85,atk:80,def:90,spa:105,spd:95,spe:60},abilities:{0:"Trace",1:"Download",DW:"Analytic"},heightm:0.6,weightkg:32.5,color:"Red",prevo:"porygon",evos:

["porygonz"],evoLevel:1,eggGroups:["Mineral"]},
stantler:{num:234,species:"Stantler",types:["Ghost"],baseStats:{hp:73,atk:95,def:62,spa:85,spd:65,spe:85},abilities:{0:"Intimidate",1:"Frisk",DW:"Sap Sipper"},heightm:1.4,weightkg:71.2,color:"Brown",eggGroups:["Flying"]},
smeargle:{num:235,species:"Smeargle",types:["Ghost"],baseStats:{hp:55,atk:20,def:35,spa:20,spd:45,spe:75},abilities:{0:"Own Tempo",1:"Technician",DW:"Moody"},heightm:1.2,weightkg:58,color:"White",eggGroups:["Flying"]},
tyrogue:{num:236,species:"Tyrogue",types:["Psychic"],gender:"M",baseStats:{hp:35,atk:35,def:35,spa:35,spd:35,spe:35},abilities:{0:"Guts",1:"Steadfast",DW:"Vital Spirit"},heightm:0.7,weightkg:21,color:"Purple",evos:

["hitmonlee","hitmonchan","hitmontop"],eggGroups:["No Eggs"]},
hitmontop:{num:237,species:"Hitmontop",types:["Psychic"],gender:"M",baseStats:{hp:50,atk:95,def:95,spa:35,spd:110,spe:70},abilities:

{0:"Intimidate",1:"Technician",DW:"Steadfast"},heightm:1.4,weightkg:48,color:"Brown",prevo:"tyrogue",evoLevel:20,eggGroups:["Humanshape"]},
smoochum:{num:238,species:"Smoochum",types:["Ice","Psychic"],gender:"F",baseStats:{hp:45,atk:30,def:15,spa:85,spd:65,spe:65},abilities:{0:"Oblivious",1:"Forewarn",DW:"Hydration"},heightm:0.4,weightkg:6,color:"Pink",evos:

["jynx"],eggGroups:["No Eggs"]},
elekid:{num:239,species:"Elekid",types:["Electric"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:45,atk:63,def:37,spa:65,spd:55,spe:95},abilities:{0:"Static",DW:"Vital Spirit"},heightm:0.6,weightkg:23.5,color:"Yellow",evos:

["electabuzz"],eggGroups:["No Eggs"]},
magby:{num:240,species:"Magby",types:["Fire"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:45,atk:75,def:37,spa:70,spd:55,spe:83},abilities:{0:"Flame Body",DW:"Vital Spirit"},heightm:0.7,weightkg:21.4,color:"Red",evos:["magmar"],eggGroups:

["No Eggs"]},
miltank:{num:241,species:"Miltank",types:["Ghost"],gender:"F",baseStats:{hp:95,atk:80,def:105,spa:40,spd:70,spe:100},abilities:{0:"Thick Fat",1:"Scrappy",DW:"Sap Sipper"},heightm:1.2,weightkg:75.5,color:"Pink",eggGroups:["Flying"]},
blissey:{num:242,species:"Blissey",types:["Ghost"],gender:"F",baseStats:{hp:255,atk:10,def:10,spa:75,spd:135,spe:55},abilities:{0:"Natural Cure",1:"Serene 

Grace",DW:"Healer"},heightm:1.5,weightkg:46.8,color:"Pink",prevo:"chansey",evoLevel:2,eggGroups:["Fairy"]},
raikou:{num:243,species:"Raikou",types:["Electric"],gender:"N",baseStats:{hp:90,atk:85,def:75,spa:115,spd:100,spe:115},abilities:{0:"Pressure",DW:"Volt Absorb"},heightm:1.9,weightkg:178,color:"Yellow",eggGroups:["No Eggs"]},
entei:{num:244,species:"Entei",types:["Fire"],gender:"N",baseStats:{hp:115,atk:115,def:85,spa:90,spd:75,spe:100},abilities:{0:"Pressure",DW:"Flash Fire"},heightm:2.1,weightkg:198,color:"Brown",eggGroups:["No Eggs"]},
suicune:{num:245,species:"Suicune",types:["Water"],gender:"N",baseStats:{hp:100,atk:75,def:115,spa:90,spd:115,spe:85},abilities:{0:"Pressure",DW:"Water Absorb"},heightm:2,weightkg:187,color:"Blue",eggGroups:["No Eggs"]},
larvitar:{num:246,species:"Larvitar",types:["Poison","Flying"],baseStats:{hp:50,atk:64,def:50,spa:45,spd:50,spe:41},abilities:{0:"Guts",DW:"Sand Veil"},heightm:0.6,weightkg:72,color:"Green",evos:["pupitar"],eggGroups:["Monster"]},
pupitar:{num:247,species:"Pupitar",types:["Poison","Flying"],baseStats:{hp:70,atk:84,def:70,spa:65,spd:70,spe:51},abilities:{0:"Shed Skin"},heightm:1.2,weightkg:152,color:"Gray",prevo:"larvitar",evos:["tyranitar"],evoLevel:30,eggGroups:

["Monster"]},
tyranitar:{num:248,species:"Tyranitar",types:["Rock","Dark"],baseStats:{hp:100,atk:134,def:110,spa:95,spd:100,spe:61},abilities:{0:"Sand Stream",DW:"Unnerve"},heightm:2,weightkg:202,color:"Green",prevo:"pupitar",evoLevel:55,eggGroups:

["Monster"]},
lugia:{num:249,species:"Lugia",types:["Psychic","Flying"],gender:"N",baseStats:{hp:106,atk:90,def:130,spa:90,spd:154,spe:110},abilities:{0:"Pressure",DW:"Multiscale"},heightm:5.2,weightkg:216,color:"White",eggGroups:["No Eggs"]},
hooh:{num:250,species:"Ho-Oh",types:["Fire","Flying"],gender:"N",baseStats:{hp:106,atk:130,def:90,spa:110,spd:154,spe:90},abilities:{0:"Pressure",DW:"Regenerator"},heightm:3.8,weightkg:199,color:"Red",eggGroups:["No Eggs"]},
celebi:{num:251,species:"Celebi",types:["Psychic","Steel"],gender:"N",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},abilities:{0:"Natural Cure"},heightm:0.6,weightkg:5,color:"Green",eggGroups:["No Eggs"]},
treecko:{num:252,species:"Treecko",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:40,atk:45,def:35,spa:65,spd:55,spe:70},abilities:{0:"Overgrow",DW:"Unburden"},heightm:0.5,weightkg:5,color:"Green",evos:

["grovyle"],eggGroups:["Monster","Dragon"]},
grovyle:{num:253,species:"Grovyle",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:50,atk:65,def:45,spa:85,spd:65,spe:95},abilities:{0:"Overgrow",DW:"Unburden"},heightm:0.9,weightkg:21.6,color:"Green",prevo:"treecko",evos:

["sceptile"],evoLevel:16,eggGroups:["Monster","Dragon"]},
sceptile:{num:254,species:"Sceptile",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:70,atk:85,def:65,spa:105,spd:85,spe:120},abilities:

{0:"Overgrow",DW:"Unburden"},heightm:1.7,weightkg:52.2,color:"Green",prevo:"grovyle",evoLevel:36,eggGroups:["Monster","Dragon"]},
torchic:{num:255,species:"Torchic",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:45,atk:60,def:40,spa:70,spd:50,spe:45},abilities:{0:"Blaze",DW:"Speed Boost"},heightm:0.4,weightkg:2.5,color:"Red",evos:

["combusken"],eggGroups:["Flying"]},
combusken:{num:256,species:"Combusken",types:["Fire","Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:85,def:60,spa:85,spd:60,spe:55},abilities:{0:"Blaze",DW:"Speed 

Boost"},heightm:0.9,weightkg:19.5,color:"Red",prevo:"torchic",evos:["blaziken"],evoLevel:16,eggGroups:["Flying"]},
blaziken:{num:257,species:"Blaziken",types:["Fire","Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:80,atk:120,def:70,spa:110,spd:70,spe:80},abilities:{0:"Blaze",DW:"Speed 

Boost"},heightm:1.9,weightkg:52,color:"Red",prevo:"combusken",evoLevel:36,eggGroups:["Flying"]},
mudkip:{num:258,species:"Mudkip",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:50,atk:70,def:50,spa:50,spd:50,spe:40},abilities:{0:"Torrent",DW:"Damp"},heightm:0.4,weightkg:7.6,color:"Blue",evos:["marshtomp"],eggGroups:

["Monster","Water 1"]},
marshtomp:{num:259,species:"Marshtomp",types:["Water","Ground"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:70,atk:85,def:70,spa:60,spd:70,spe:50},abilities:

{0:"Torrent",DW:"Damp"},heightm:0.7,weightkg:28,color:"Blue",prevo:"mudkip",evos:["swampert"],evoLevel:16,eggGroups:["Monster","Water 1"]},
swampert:{num:260,species:"Swampert",types:["Water","Ground"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:100,atk:110,def:90,spa:85,spd:90,spe:60},abilities:

{0:"Torrent",DW:"Damp"},heightm:1.5,weightkg:81.9,color:"Blue",prevo:"marshtomp",evoLevel:36,eggGroups:["Monster","Water 1"]},
poochyena:{num:261,species:"Poochyena",types:["Dark"],baseStats:{hp:35,atk:55,def:35,spa:30,spd:30,spe:35},abilities:{0:"Run Away",1:"Quick Feet",DW:"Rattled"},heightm:0.5,weightkg:13.6,color:"Gray",evos:["mightyena"],eggGroups:

["Flying"]},
mightyena:{num:262,species:"Mightyena",types:["Dark"],baseStats:{hp:70,atk:90,def:70,spa:60,spd:60,spe:70},abilities:{0:"Intimidate",1:"Quick Feet",DW:"Moxie"},heightm:1,weightkg:37,color:"Gray",prevo:"poochyena",evoLevel:18,eggGroups:

["Flying"]},
zigzagoon:{num:263,species:"Zigzagoon",types:["Ghost"],baseStats:{hp:38,atk:30,def:41,spa:30,spd:41,spe:60},abilities:{0:"Pickup",1:"Gluttony",DW:"Quick Feet"},heightm:0.4,weightkg:17.5,color:"Brown",evos:["linoone"],eggGroups:

["Flying"]},
linoone:{num:264,species:"Linoone",types:["Ghost"],baseStats:{hp:78,atk:70,def:61,spa:50,spd:61,spe:100},abilities:{0:"Pickup",1:"Gluttony",DW:"Quick 

Feet"},heightm:0.5,weightkg:32.5,color:"White",prevo:"zigzagoon",evoLevel:20,eggGroups:["Flying"]},
wurmple:{num:265,species:"Wurmple",types:["Bug"],baseStats:{hp:45,atk:45,def:35,spa:20,spd:30,spe:20},abilities:{0:"Shield Dust",DW:"Run Away"},heightm:0.3,weightkg:3.6,color:"Red",evos:["silcoon","cascoon"],eggGroups:["Bug"]},
silcoon:{num:266,species:"Silcoon",types:["Bug"],baseStats:{hp:50,atk:35,def:55,spa:25,spd:25,spe:15},abilities:{0:"Shed Skin"},heightm:0.6,weightkg:10,color:"White",prevo:"wurmple",evos:["beautifly"],evoLevel:7,eggGroups:["Bug"]},
beautifly:{num:267,species:"Beautifly",types:["Bug","Flying"],baseStats:{hp:60,atk:70,def:50,spa:90,spd:50,spe:65},abilities:{0:"Swarm",DW:"Rivalry"},heightm:1,weightkg:28.4,color:"Yellow",prevo:"silcoon",evoLevel:10,eggGroups:["Bug"]},
cascoon:{num:268,species:"Cascoon",types:["Bug"],baseStats:{hp:50,atk:35,def:55,spa:25,spd:25,spe:15},abilities:{0:"Shed Skin"},heightm:0.7,weightkg:11.5,color:"Purple",prevo:"wurmple",evos:["dustox"],evoLevel:7,eggGroups:["Bug"]},
dustox:{num:269,species:"Dustox",types:["Bug","Poison"],baseStats:{hp:60,atk:50,def:70,spa:50,spd:90,spe:65},abilities:{0:"Shield Dust",DW:"Compoundeyes"},heightm:1.2,weightkg:31.6,color:"Green",prevo:"cascoon",evoLevel:10,eggGroups:

["Bug"]},
lotad:{num:270,species:"Lotad",types:["Water","Steel"],baseStats:{hp:40,atk:30,def:30,spa:40,spd:50,spe:30},abilities:{0:"Swift Swim",1:"Rain Dish",DW:"Own Tempo"},heightm:0.5,weightkg:2.6,color:"Green",evos:["lombre"],eggGroups:["Water 

1","Plant"]},
lombre:{num:271,species:"Lombre",types:["Water","Steel"],baseStats:{hp:60,atk:50,def:50,spa:60,spd:70,spe:50},abilities:{0:"Swift Swim",1:"Rain Dish",DW:"Own Tempo"},heightm:1.2,weightkg:32.5,color:"Green",prevo:"lotad",evos:

["ludicolo"],evoLevel:14,eggGroups:["Water 1","Plant"]},
ludicolo:{num:272,species:"Ludicolo",types:["Water","Steel"],baseStats:{hp:80,atk:70,def:70,spa:90,spd:100,spe:70},abilities:{0:"Swift Swim",1:"Rain Dish",DW:"Own 

Tempo"},heightm:1.5,weightkg:55,color:"Green",prevo:"lombre",evoLevel:14,eggGroups:["Water 1","Plant"]},
seedot:{num:273,species:"Seedot",types:["Steel"],baseStats:{hp:40,atk:40,def:50,spa:30,spd:30,spe:30},abilities:{0:"Chlorophyll",1:"Early Bird",DW:"Pickpocket"},heightm:0.5,weightkg:4,color:"Brown",evos:["nuzleaf"],eggGroups:

["Ground","Plant"]},
nuzleaf:{num:274,species:"Nuzleaf",types:["Steel","Dark"],baseStats:{hp:70,atk:70,def:40,spa:60,spd:40,spe:60},abilities:{0:"Chlorophyll",1:"Early Bird",DW:"Pickpocket"},heightm:1,weightkg:28,color:"Brown",prevo:"seedot",evos:

["shiftry"],evoLevel:14,eggGroups:["Ground","Plant"]},
shiftry:{num:275,species:"Shiftry",types:["Steel","Dark"],baseStats:{hp:90,atk:100,def:60,spa:90,spd:60,spe:80},abilities:{0:"Chlorophyll",1:"Early 

Bird",DW:"Pickpocket"},heightm:1.3,weightkg:59.6,color:"Brown",prevo:"nuzleaf",evoLevel:14,eggGroups:["Ground","Plant"]},
taillow:{num:276,species:"Taillow",types:["Ground","Ghost"],baseStats:{hp:40,atk:55,def:30,spa:30,spd:30,spe:85},abilities:{0:"Guts",DW:"Scrappy"},heightm:0.3,weightkg:2.3,color:"Blue",evos:["swellow"],eggGroups:["Flying"]},
swellow:{num:277,species:"Swellow",types:["Ground","Ghost"],baseStats:{hp:60,atk:85,def:60,spa:50,spd:50,spe:125},abilities:{0:"Guts",DW:"Scrappy"},heightm:0.7,weightkg:19.8,color:"Blue",prevo:"taillow",evoLevel:22,eggGroups:["Flying"]},
wingull:{num:278,species:"Wingull",types:["Water","Flying"],baseStats:{hp:40,atk:30,def:30,spa:55,spd:30,spe:85},abilities:{0:"Keen Eye",DW:"Rain Dish"},heightm:0.6,weightkg:9.5,color:"White",evos:["pelipper"],eggGroups:["Water 

1","Flying"]},
pelipper:{num:279,species:"Pelipper",types:["Water","Flying"],baseStats:{hp:60,atk:50,def:100,spa:85,spd:70,spe:65},abilities:{0:"Keen Eye",DW:"Rain Dish"},heightm:1.2,weightkg:28,color:"Yellow",prevo:"wingull",evoLevel:25,eggGroups:

["Water 1","Flying"]},
ralts:{num:280,species:"Ralts",types:["Fighting"],baseStats:{hp:28,atk:25,def:25,spa:45,spd:35,spe:40},abilities:{0:"Synchronize",1:"Trace",DW:"Telepathy"},heightm:0.4,weightkg:6.6,color:"White",evos:["kirlia"],eggGroups:

["Indeterminate"]},
kirlia:{num:281,species:"Kirlia",types:["Fighting"],baseStats:{hp:38,atk:35,def:35,spa:65,spd:55,spe:50},abilities:{0:"Synchronize",1:"Trace",DW:"Telepathy"},heightm:0.8,weightkg:20.2,color:"White",prevo:"ralts",evos:

["gardevoir","gallade"],evoLevel:20,eggGroups:["Indeterminate"]},
gardevoir:{num:282,species:"Gardevoir",types:["Fighting"],baseStats:{hp:68,atk:65,def:65,spa:125,spd:115,spe:80},abilities:

{0:"Synchronize",1:"Trace",DW:"Telepathy"},heightm:1.6,weightkg:48.4,color:"White",prevo:"kirlia",evoLevel:30,eggGroups:["Indeterminate"]},
surskit:{num:283,species:"Surskit",types:["Bug","Water"],baseStats:{hp:40,atk:30,def:32,spa:50,spd:52,spe:65},abilities:{0:"Swift Swim",DW:"Rain Dish"},heightm:0.5,weightkg:1.7,color:"Blue",evos:["masquerain"],eggGroups:["Water 

1","Bug"]},
masquerain:{num:284,species:"Masquerain",types:["Bug","Flying"],baseStats:{hp:70,atk:60,def:62,spa:80,spd:82,spe:60},abilities:{0:"Intimidate",DW:"Unnerve"},heightm:0.8,weightkg:3.6,color:"Blue",prevo:"surskit",evoLevel:22,eggGroups:

["Water 1","Bug"]},
shroomish:{num:285,species:"Shroomish",types:["Steel"],baseStats:{hp:60,atk:40,def:60,spa:40,spd:60,spe:35},abilities:{0:"Effect Spore",1:"Poison Heal",DW:"Quick Feet"},heightm:0.4,weightkg:4.5,color:"Brown",evos:["breloom"],eggGroups:

["Fairy","Plant"]},
breloom:{num:286,species:"Breloom",types:["Steel","Fighting"],baseStats:{hp:60,atk:130,def:80,spa:60,spd:60,spe:70},abilities:{0:"Effect Spore",1:"Poison 

Heal",DW:"Technician"},heightm:1.2,weightkg:39.2,color:"Green",prevo:"shroomish",evoLevel:23,eggGroups:["Fairy","Plant"]},
slakoth:{num:287,species:"Slakoth",types:["Ghost"],baseStats:{hp:60,atk:60,def:60,spa:35,spd:35,spe:30},abilities:{0:"Truant"},heightm:0.8,weightkg:24,color:"Brown",evos:["vigoroth"],eggGroups:["Flying"]},
vigoroth:{num:288,species:"Vigoroth",types:["Ghost"],baseStats:{hp:80,atk:80,def:80,spa:55,spd:55,spe:90},abilities:{0:"Vital Spirit"},heightm:1.4,weightkg:46.5,color:"White",prevo:"slakoth",evos:["slaking"],evoLevel:18,eggGroups:

["Flying"]},
slaking:{num:289,species:"Slaking",types:["Ghost"],baseStats:{hp:150,atk:160,def:100,spa:95,spd:65,spe:100},abilities:{0:"Truant"},heightm:2,weightkg:130.5,color:"Brown",prevo:"vigoroth",evoLevel:36,eggGroups:["Flying"]},
nincada:{num:290,species:"Nincada",types:["Bug","Ground"],baseStats:{hp:31,atk:45,def:90,spa:30,spd:30,spe:40},abilities:{0:"Compoundeyes",DW:"Run Away"},heightm:0.5,weightkg:5.5,color:"Gray",evos:["ninjask","shedinja"],eggGroups:

["Bug"]},
ninjask:{num:291,species:"Ninjask",types:["Bug","Flying"],baseStats:{hp:61,atk:90,def:45,spa:50,spd:50,spe:160},abilities:{0:"Speed Boost",DW:"Infiltrator"},heightm:0.8,weightkg:12,color:"Yellow",prevo:"nincada",evoLevel:20,eggGroups:

["Bug"]},
shedinja:{num:292,species:"Shedinja",types:["Bug","Ghost"],gender:"N",baseStats:{hp:1,atk:90,def:45,spa:30,spd:30,spe:40},abilities:{0:"Wonder Guard"},heightm:0.8,weightkg:1.2,color:"Brown",prevo:"nincada",evoLevel:20,eggGroups:

["Mineral"]},
whismur:{num:293,species:"Whismur",types:["Ghost"],baseStats:{hp:64,atk:51,def:23,spa:51,spd:23,spe:28},abilities:{0:"Soundproof",DW:"Rattled"},heightm:0.6,weightkg:16.3,color:"Pink",evos:["loudred"],eggGroups:["Monster","Ground"]},
loudred:{num:294,species:"Loudred",types:["Ghost"],baseStats:{hp:84,atk:71,def:43,spa:71,spd:43,spe:48},abilities:{0:"Soundproof",DW:"Scrappy"},heightm:1,weightkg:40.5,color:"Blue",prevo:"whismur",evos:["exploud"],evoLevel:20,eggGroups:

["Monster","Ground"]},
exploud:{num:295,species:"Exploud",types:["Ghost"],baseStats:{hp:104,atk:91,def:63,spa:91,spd:63,spe:68},abilities:{0:"Soundproof",DW:"Scrappy"},heightm:1.5,weightkg:84,color:"Blue",prevo:"loudred",evoLevel:40,eggGroups:

["Monster","Ground"]},
makuhita:{num:296,species:"Makuhita",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:72,atk:60,def:30,spa:20,spd:30,spe:25},abilities:{0:"Thick Fat",1:"Guts",DW:"Sheer Force"},heightm:1,weightkg:86.4,color:"Yellow",evos:

["hariyama"],eggGroups:["Humanshape"]},
hariyama:{num:297,species:"Hariyama",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:144,atk:120,def:60,spa:40,spd:60,spe:50},abilities:{0:"Thick Fat",1:"Guts",DW:"Sheer 

Force"},heightm:2.3,weightkg:253.8,color:"Brown",prevo:"makuhita",evoLevel:24,eggGroups:["Humanshape"]},
azurill:{num:298,species:"Azurill",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:50,atk:20,def:40,spa:20,spd:40,spe:20},abilities:{0:"Thick Fat",1:"Huge Power",DW:"Sap Sipper"},heightm:0.2,weightkg:2,color:"Blue",evos:

["marill"],eggGroups:["No Eggs"]},
nosepass:{num:299,species:"Nosepass",types:["Rock"],baseStats:{hp:30,atk:45,def:135,spa:45,spd:90,spe:30},abilities:{0:"Sturdy",1:"Magnet Pull",DW:"Sand Force"},heightm:1,weightkg:97,color:"Gray",evos:["probopass"],eggGroups:

["Mineral"]},
skitty:{num:300,species:"Skitty",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:50,atk:45,def:45,spa:35,spd:35,spe:50},abilities:{0:"Cute Charm",1:"Normalize",DW:"Wonder Skin"},heightm:0.6,weightkg:11,color:"Pink",evos:

["delcatty"],eggGroups:["Ground","Fairy"]},
delcatty:{num:301,species:"Delcatty",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:70,atk:65,def:65,spa:55,spd:55,spe:70},abilities:{0:"Cute Charm",1:"Normalize",DW:"Wonder 

Skin"},heightm:1.1,weightkg:32.6,color:"Purple",prevo:"skitty",evoLevel:1,eggGroups:["Ground","Fairy"]},
sableye:{num:302,species:"Sableye",types:["Dark","Ghost"],baseStats:{hp:50,atk:75,def:75,spa:65,spd:65,spe:50},abilities:{0:"Keen Eye",1:"Stall",DW:"Prankster"},heightm:0.5,weightkg:11,color:"Purple",eggGroups:["Humanshape"]},
mawile:{num:303,species:"Mawile",types:["Steel"],baseStats:{hp:50,atk:85,def:85,spa:55,spd:55,spe:50},abilities:{0:"Hyper Cutter",1:"Intimidate",DW:"Sheer Force"},heightm:0.6,weightkg:11.5,color:"Black",eggGroups:["Ground","Fairy"]},
aron:{num:304,species:"Aron",types:["Steel","Rock"],baseStats:{hp:50,atk:70,def:100,spa:40,spd:40,spe:30},abilities:{0:"Sturdy",1:"Rock Head",DW:"Heavy Metal"},heightm:0.4,weightkg:60,color:"Gray",evos:["lairon"],eggGroups:["Monster"]},
lairon:{num:305,species:"Lairon",types:["Steel","Rock"],baseStats:{hp:60,atk:90,def:140,spa:50,spd:50,spe:40},abilities:{0:"Sturdy",1:"Rock Head",DW:"Heavy Metal"},heightm:0.9,weightkg:120,color:"Gray",prevo:"aron",evos:

["aggron"],evoLevel:32,eggGroups:["Monster"]},
aggron:{num:306,species:"Aggron",types:["Steel","Rock"],baseStats:{hp:70,atk:110,def:180,spa:60,spd:60,spe:50},abilities:{0:"Sturdy",1:"Rock Head",DW:"Heavy 

Metal"},heightm:2.1,weightkg:360,color:"Gray",prevo:"lairon",evoLevel:42,eggGroups:["Monster"]},
meditite:{num:307,species:"Meditite",types:["Fighting","Psychic"],baseStats:{hp:30,atk:40,def:55,spa:40,spd:55,spe:60},abilities:{0:"Pure Power",DW:"Telepathy"},heightm:0.6,weightkg:11.2,color:"Blue",evos:["medicham"],eggGroups:

["Humanshape"]},
medicham:{num:308,species:"Medicham",types:["Fighting","Psychic"],baseStats:{hp:60,atk:60,def:75,spa:60,spd:75,spe:80},abilities:{0:"Pure 

Power",DW:"Telepathy"},heightm:1.3,weightkg:31.5,color:"Red",prevo:"meditite",evoLevel:37,eggGroups:["Humanshape"]},
electrike:{num:309,species:"Electrike",types:["Electric"],baseStats:{hp:40,atk:45,def:40,spa:65,spd:40,spe:65},abilities:{0:"Static",1:"Lightningrod",DW:"Minus"},heightm:0.6,weightkg:15.2,color:"Green",evos:["manectric"],eggGroups:

["Flying"]},
manectric:{num:310,species:"Manectric",types:["Electric"],baseStats:{hp:70,atk:75,def:60,spa:105,spd:60,spe:105},abilities:

{0:"Static",1:"Lightningrod",DW:"Minus"},heightm:1.5,weightkg:40.2,color:"Yellow",prevo:"electrike",evoLevel:26,eggGroups:["Flying"]},
plusle:{num:311,species:"Plusle",types:["Electric"],baseStats:{hp:60,atk:50,def:40,spa:85,spd:75,spe:95},abilities:{0:"Plus"},heightm:0.4,weightkg:4.2,color:"Yellow",eggGroups:["Fairy"]},
minun:{num:312,species:"Minun",types:["Electric"],baseStats:{hp:60,atk:40,def:50,spa:75,spd:85,spe:95},abilities:{0:"Minus"},heightm:0.4,weightkg:4.2,color:"Yellow",eggGroups:["Fairy"]},
volbeat:{num:313,species:"Volbeat",types:["Bug"],gender:"M",baseStats:{hp:65,atk:73,def:55,spa:47,spd:75,spe:85},abilities:{0:"Illuminate",1:"Swarm",DW:"Prankster"},heightm:0.7,weightkg:17.7,color:"Gray",eggGroups:["Bug","Humanshape"]},
illumise:{num:314,species:"Illumise",types:["Bug"],gender:"F",baseStats:{hp:65,atk:47,def:55,spa:73,spd:75,spe:85},abilities:{0:"Oblivious",1:"Tinted Lens",DW:"Prankster"},heightm:0.6,weightkg:17.7,color:"Purple",eggGroups:

["Bug","Humanshape"]},
roselia:{num:315,species:"Roselia",types:["Steel","Poison"],baseStats:{hp:50,atk:60,def:45,spa:100,spd:80,spe:65},abilities:{0:"Natural Cure",1:"Poison Point",DW:"Leaf Guard"},heightm:0.3,weightkg:2,color:"Green",prevo:"budew",evos:

["roserade"],evoLevel:1,eggGroups:["Fairy","Plant"]},
gulpin:{num:316,species:"Gulpin",types:["Poison"],baseStats:{hp:70,atk:43,def:53,spa:43,spd:53,spe:40},abilities:{0:"Liquid Ooze",1:"Sticky Hold",DW:"Gluttony"},heightm:0.4,weightkg:10.3,color:"Green",evos:["swalot"],eggGroups:

["Indeterminate"]},
swalot:{num:317,species:"Swalot",types:["Poison"],baseStats:{hp:100,atk:73,def:83,spa:73,spd:83,spe:55},abilities:{0:"Liquid Ooze",1:"Sticky 

Hold",DW:"Gluttony"},heightm:1.7,weightkg:80,color:"Purple",prevo:"gulpin",evoLevel:26,eggGroups:["Indeterminate"]},
carvanha:{num:318,species:"Carvanha",types:["Water","Dark"],baseStats:{hp:45,atk:90,def:20,spa:65,spd:20,spe:65},abilities:{0:"Rough Skin",DW:"Speed Boost"},heightm:0.8,weightkg:20.8,color:"Red",evos:["sharpedo"],eggGroups:["Water 2"]},
sharpedo:{num:319,species:"Sharpedo",types:["Water","Dark"],baseStats:{hp:70,atk:120,def:40,spa:95,spd:40,spe:95},abilities:{0:"Rough Skin",DW:"Speed Boost"},heightm:1.8,weightkg:88.8,color:"Blue",prevo:"carvanha",evoLevel:30,eggGroups:

["Water 2"]},
wailmer:{num:320,species:"Wailmer",types:["Water"],baseStats:{hp:130,atk:70,def:35,spa:70,spd:35,spe:60},abilities:{0:"Water Veil",1:"Oblivious",DW:"Pressure"},heightm:2,weightkg:130,color:"Blue",evos:["wailord"],eggGroups:

["Ground","Water 2"]},
wailord:{num:321,species:"Wailord",types:["Water"],baseStats:{hp:170,atk:90,def:45,spa:90,spd:45,spe:60},abilities:{0:"Water 

Veil",1:"Oblivious",DW:"Pressure"},heightm:14.5,weightkg:398,color:"Blue",prevo:"wailmer",evoLevel:40,eggGroups:["Ground","Water 2"]},
numel:{num:322,species:"Numel",types:["Fire","Ground"],baseStats:{hp:60,atk:60,def:40,spa:65,spd:45,spe:35},abilities:{0:"Oblivious",1:"Simple",DW:"Own Tempo"},heightm:0.7,weightkg:24,color:"Yellow",evos:["camerupt"],eggGroups:

["Flying"]},
camerupt:{num:323,species:"Camerupt",types:["Fire","Ground"],baseStats:{hp:70,atk:100,def:70,spa:105,spd:75,spe:40},abilities:{0:"Magma Armor",1:"Solid Rock",DW:"Anger 

Point"},heightm:1.9,weightkg:220,color:"Red",prevo:"numel",evoLevel:33,eggGroups:["Flying"]},
torkoal:{num:324,species:"Torkoal",types:["Fire"],baseStats:{hp:70,atk:85,def:140,spa:85,spd:70,spe:20},abilities:{0:"White Smoke",DW:"Shell Armor"},heightm:0.5,weightkg:80.4,color:"Brown",eggGroups:["Flying"]},
spoink:{num:325,species:"Spoink",types:["Fighting"],baseStats:{hp:60,atk:25,def:35,spa:70,spd:80,spe:60},abilities:{0:"Thick Fat",1:"Own Tempo",DW:"Gluttony"},heightm:0.7,weightkg:30.6,color:"Black",evos:["grumpig"],eggGroups:

["Flying"]},
grumpig:{num:326,species:"Grumpig",types:["Fighting"],baseStats:{hp:80,atk:45,def:65,spa:90,spd:110,spe:80},abilities:{0:"Thick Fat",1:"Own 

Tempo",DW:"Gluttony"},heightm:0.9,weightkg:71.5,color:"Purple",prevo:"spoink",evoLevel:32,eggGroups:["Flying"]},
spinda:{num:327,species:"Spinda",types:["Ghost"],baseStats:{hp:60,atk:60,def:60,spa:60,spd:60,spe:60},abilities:{0:"Own Tempo",1:"Tangled Feet",DW:"Contrary"},heightm:1.1,weightkg:5,color:"Brown",eggGroups:["Ground","Humanshape"]},
trapinch:{num:328,species:"Trapinch",types:["Flying"],baseStats:{hp:45,atk:100,def:45,spa:45,spd:45,spe:10},abilities:{0:"Hyper Cutter",1:"Arena Trap",DW:"Sheer Force"},heightm:0.7,weightkg:15,color:"Brown",evos:["vibrava"],eggGroups:

["Bug"]},
vibrava:{num:329,species:"Vibrava",types:["Ground","Dragon"],baseStats:{hp:50,atk:70,def:50,spa:50,spd:50,spe:70},abilities:{0:"Levitate"},heightm:1.1,weightkg:15.3,color:"Green",prevo:"trapinch",evos:["flygon"],evoLevel:35,eggGroups:

["Bug"]},
flygon:{num:330,species:"Flygon",types:["Ground","Dragon"],baseStats:{hp:80,atk:100,def:80,spa:80,spd:80,spe:100},abilities:{0:"Levitate"},heightm:2,weightkg:82,color:"Green",prevo:"vibrava",evoLevel:45,eggGroups:["Bug"]},
cacnea:{num:331,species:"Cacnea",types:["Steel"],baseStats:{hp:50,atk:85,def:40,spa:85,spd:40,spe:35},abilities:{0:"Sand Veil",DW:"Water Absorb"},heightm:0.4,weightkg:51.3,color:"Green",evos:["cacturne"],eggGroups:

["Plant","Humanshape"]},
cacturne:{num:332,species:"Cacturne",types:["Grass","Dark"],baseStats:{hp:70,atk:115,def:60,spa:115,spd:60,spe:55},abilities:{0:"Sand Veil",DW:"Water Absorb"},heightm:1.3,weightkg:77.4,color:"Green",prevo:"cacnea",evoLevel:32,eggGroups:

["Plant","Humanshape"]},
swablu:{num:333,species:"Swablu",types:["Ground","Ghost"],baseStats:{hp:45,atk:40,def:60,spa:40,spd:75,spe:50},abilities:{0:"Natural Cure",DW:"Cloud Nine"},heightm:0.4,weightkg:1.2,color:"Blue",evos:["altaria"],eggGroups:

["Flying","Dragon"]},
altaria:{num:334,species:"Altaria",types:["Dragon","Flying"],baseStats:{hp:75,atk:70,def:90,spa:70,spd:105,spe:80},abilities:{0:"Natural Cure",DW:"Cloud Nine"},heightm:1.1,weightkg:20.6,color:"Blue",prevo:"swablu",evoLevel:35,eggGroups:

["Flying","Dragon"]},
zangoose:{num:335,species:"Zangoose",types:["Ghost"],baseStats:{hp:73,atk:115,def:60,spa:60,spd:60,spe:90},abilities:{0:"Immunity",DW:"Toxic Boost"},heightm:1.3,weightkg:40.3,color:"White",eggGroups:["Flying"]},
seviper:{num:336,species:"Seviper",types:["Poison"],baseStats:{hp:73,atk:100,def:60,spa:100,spd:60,spe:65},abilities:{0:"Shed Skin",DW:"Infiltrator"},heightm:2.7,weightkg:52.5,color:"Black",eggGroups:["Ground","Dragon"]},
lunatone:{num:337,species:"Lunatone",types:["Rock","Psychic"],gender:"N",baseStats:{hp:70,atk:55,def:65,spa:95,spd:85,spe:70},abilities:{0:"Levitate"},heightm:1,weightkg:168,color:"Yellow",eggGroups:["Mineral"]},
solrock:{num:338,species:"Solrock",types:["Rock","Psychic"],gender:"N",baseStats:{hp:70,atk:95,def:85,spa:55,spd:65,spe:70},abilities:{0:"Levitate"},heightm:1.2,weightkg:154,color:"Red",eggGroups:["Mineral"]},
barboach:{num:339,species:"Barboach",types:["Water","Ground"],baseStats:{hp:50,atk:48,def:43,spa:46,spd:41,spe:60},abilities:{0:"Oblivious",1:"Anticipation",DW:"Hydration"},heightm:0.4,weightkg:1.9,color:"Gray",evos:

["whiscash"],eggGroups:["Water 2"]},
whiscash:{num:340,species:"Whiscash",types:["Water","Ground"],baseStats:{hp:110,atk:78,def:73,spa:76,spd:71,spe:60},abilities:

{0:"Oblivious",1:"Anticipation",DW:"Hydration"},heightm:0.9,weightkg:23.6,color:"Blue",prevo:"barboach",evoLevel:30,eggGroups:["Water 2"]},
corphish:{num:341,species:"Corphish",types:["Water"],baseStats:{hp:43,atk:80,def:65,spa:50,spd:35,spe:35},abilities:{0:"Hyper Cutter",1:"Shell Armor",DW:"Adaptability"},heightm:0.6,weightkg:11.5,color:"Red",evos:["crawdaunt"],eggGroups:

["Water 1","Water 3"]},
crawdaunt:{num:342,species:"Crawdaunt",types:["Water","Dark"],baseStats:{hp:63,atk:120,def:85,spa:90,spd:55,spe:55},abilities:{0:"Hyper Cutter",1:"Shell 

Armor",DW:"Adaptability"},heightm:1.1,weightkg:32.8,color:"Red",prevo:"corphish",evoLevel:30,eggGroups:["Water 1","Water 3"]},
baltoy:{num:343,species:"Baltoy",types:["Ground","Psychic"],gender:"N",baseStats:{hp:40,atk:40,def:55,spa:40,spd:70,spe:55},abilities:{0:"Levitate"},heightm:0.5,weightkg:21.5,color:"Brown",evos:["claydol"],eggGroups:["Mineral"]},
claydol:{num:344,species:"Claydol",types:["Ground","Psychic"],gender:"N",baseStats:{hp:60,atk:70,def:105,spa:70,spd:120,spe:75},abilities:{0:"Levitate"},heightm:1.5,weightkg:108,color:"Black",prevo:"baltoy",evoLevel:36,eggGroups:

["Mineral"]},
lileep:{num:345,species:"Lileep",types:["Rock","Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:66,atk:41,def:77,spa:61,spd:87,spe:23},abilities:{0:"Suction Cups",DW:"Storm Drain"},heightm:1,weightkg:23.8,color:"Purple",evos:

["cradily"],eggGroups:["Water 3"]},
cradily:{num:346,species:"Cradily",types:["Rock","Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:86,atk:81,def:97,spa:81,spd:107,spe:43},abilities:{0:"Suction Cups",DW:"Storm 

Drain"},heightm:1.5,weightkg:60.4,color:"Green",prevo:"lileep",evoLevel:40,eggGroups:["Water 3"]},
anorith:{num:347,species:"Anorith",types:["Rock","Bug"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:45,atk:95,def:50,spa:40,spd:50,spe:75},abilities:{0:"Battle Armor",DW:"Swift Swim"},heightm:0.7,weightkg:12.5,color:"Gray",evos:

["armaldo"],eggGroups:["Water 3"]},
armaldo:{num:348,species:"Armaldo",types:["Rock","Bug"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:125,def:100,spa:70,spd:80,spe:45},abilities:{0:"Battle Armor",DW:"Swift 

Swim"},heightm:1.5,weightkg:68.2,color:"Gray",prevo:"anorith",evoLevel:40,eggGroups:["Water 3"]},
feebas:{num:349,species:"Feebas",types:["Water"],baseStats:{hp:20,atk:15,def:20,spa:10,spd:55,spe:80},abilities:{0:"Swift Swim",DW:"Adaptability"},heightm:0.6,weightkg:7.4,color:"Brown",evos:["milotic"],eggGroups:["Water 1","Dragon"]},
milotic:{num:350,species:"Milotic",types:["Water"],baseStats:{hp:95,atk:60,def:79,spa:100,spd:125,spe:81},abilities:{0:"Marvel Scale",DW:"Cute Charm"},heightm:6.2,weightkg:162,color:"Pink",prevo:"feebas",evoLevel:1,eggGroups:["Water 

1","Dragon"]},
castform:{num:351,species:"Castform",types:["Ghost"],baseStats:{hp:70,atk:70,def:70,spa:70,spd:70,spe:70},abilities:{0:"Forecast"},heightm:0.3,weightkg:0.8,color:"White",eggGroups:["Fairy","Indeterminate"],otherFormes:

["castformsunny","castformrainy","castformsnowy"]},
castformsunny:{num:351,species:"Castform-Sunny",baseSpecies:"Castform",forme:"Sunny",formeLetter:"S",types:["Fire"],baseStats:{hp:70,atk:70,def:70,spa:70,spd:70,spe:70},abilities:

{0:"Forecast"},heightm:0.3,weightkg:0.8,color:"White",eggGroups:["Fairy","Indeterminate"]},
castformrainy:{num:351,species:"Castform-Rainy",baseSpecies:"Castform",forme:"Rainy",formeLetter:"R",types:["Water"],baseStats:{hp:70,atk:70,def:70,spa:70,spd:70,spe:70},abilities:

{0:"Forecast"},heightm:0.3,weightkg:0.8,color:"White",eggGroups:["Fairy","Indeterminate"]},
castformsnowy:{num:351,species:"Castform-Snowy",baseSpecies:"Castform",forme:"Snowy",formeLetter:"S",types:["Ice"],baseStats:{hp:70,atk:70,def:70,spa:70,spd:70,spe:70},abilities:

{0:"Forecast"},heightm:0.3,weightkg:0.8,color:"White",eggGroups:["Fairy","Indeterminate"]},
kecleon:{num:352,species:"Kecleon",types:["Ghost"],baseStats:{hp:60,atk:90,def:70,spa:60,spd:120,spe:40},abilities:{0:"Color Change"},heightm:1,weightkg:22,color:"Green",eggGroups:["Flying"]},
shuppet:{num:353,species:"Shuppet",types:["Ghost"],baseStats:{hp:44,atk:75,def:35,spa:63,spd:33,spe:45},abilities:{0:"Insomnia",1:"Frisk",DW:"Cursed Body"},heightm:0.6,weightkg:2.3,color:"Black",evos:["banette"],eggGroups:

["Indeterminate"]},
banette:{num:354,species:"Banette",types:["Ghost"],baseStats:{hp:64,atk:115,def:65,spa:83,spd:63,spe:65},abilities:{0:"Insomnia",1:"Frisk",DW:"Cursed Body"},heightm:1.1,weightkg:12.5,color:"Black",prevo:"shuppet",evoLevel:37,eggGroups:

["Indeterminate"]},
duskull:{num:355,species:"Duskull",types:["Ghost"],baseStats:{hp:20,atk:40,def:90,spa:30,spd:90,spe:25},abilities:{0:"Levitate"},heightm:0.8,weightkg:15,color:"Black",evos:["dusclops"],eggGroups:["Indeterminate"]},
dusclops:{num:356,species:"Dusclops",types:["Ghost"],baseStats:{hp:40,atk:70,def:130,spa:60,spd:130,spe:25},abilities:{0:"Pressure"},heightm:1.6,weightkg:30.6,color:"Black",prevo:"duskull",evos:["dusknoir"],evoLevel:37,eggGroups:

["Indeterminate"]},
tropius:{num:357,species:"Tropius",types:["Grass","Flying"],baseStats:{hp:99,atk:68,def:83,spa:72,spd:87,spe:51},abilities:{0:"Chlorophyll",1:"Solar Power",DW:"Harvest"},heightm:2,weightkg:100,color:"Green",eggGroups:

["Monster","Plant"]},
chimecho:{num:358,species:"Chimecho",types:["Fighting"],baseStats:{hp:65,atk:50,def:70,spa:95,spd:80,spe:65},abilities:{0:"Levitate"},heightm:0.6,weightkg:1,color:"Blue",prevo:"chingling",evoLevel:1,eggGroups:["Indeterminate"]},
absol:{num:359,species:"Absol",types:["Dark"],baseStats:{hp:65,atk:130,def:60,spa:75,spd:60,spe:75},abilities:{0:"Pressure",1:"Super Luck",DW:"Justified"},heightm:1.2,weightkg:47,color:"White",eggGroups:["Flying"]},
wynaut:{num:360,species:"Wynaut",types:["Fighting"],baseStats:{hp:95,atk:23,def:48,spa:23,spd:48,spe:23},abilities:{0:"Shadow Tag",DW:"Telepathy"},heightm:0.6,weightkg:14,color:"Blue",evos:["wobbuffet"],eggGroups:["No Eggs"]},
snorunt:{num:361,species:"Snorunt",types:["Ice"],baseStats:{hp:50,atk:50,def:50,spa:50,spd:50,spe:50},abilities:{0:"Inner Focus",1:"Ice Body",DW:"Moody"},heightm:0.7,weightkg:16.8,color:"Gray",evos:["glalie","froslass"],eggGroups:

["Fairy","Mineral"]},
glalie:{num:362,species:"Glalie",types:["Ice"],baseStats:{hp:80,atk:80,def:80,spa:80,spd:80,spe:80},abilities:{0:"Inner Focus",1:"Ice Body",DW:"Moody"},heightm:1.5,weightkg:256.5,color:"Gray",prevo:"snorunt",evoLevel:42,eggGroups:

["Fairy","Mineral"]},
spheal:{num:363,species:"Spheal",types:["Ice","Water"],baseStats:{hp:70,atk:40,def:50,spa:55,spd:50,spe:25},abilities:{0:"Thick Fat",1:"Ice Body",DW:"Oblivious"},heightm:0.8,weightkg:39.5,color:"Blue",evos:["sealeo"],eggGroups:["Water 

1","Ground"]},
sealeo:{num:364,species:"Sealeo",types:["Ice","Water"],baseStats:{hp:90,atk:60,def:70,spa:75,spd:70,spe:45},abilities:{0:"Thick Fat",1:"Ice Body",DW:"Oblivious"},heightm:1.1,weightkg:87.6,color:"Blue",prevo:"spheal",evos:

["walrein"],evoLevel:32,eggGroups:["Water 1","Ground"]},
walrein:{num:365,species:"Walrein",types:["Ice","Water"],baseStats:{hp:110,atk:80,def:90,spa:95,spd:90,spe:65},abilities:{0:"Thick Fat",1:"Ice 

Body",DW:"Oblivious"},heightm:1.4,weightkg:150.6,color:"Blue",prevo:"sealeo",evoLevel:44,eggGroups:["Water 1","Ground"]},
clamperl:{num:366,species:"Clamperl",types:["Water"],baseStats:{hp:35,atk:64,def:85,spa:74,spd:55,spe:32},abilities:{0:"Shell Armor",DW:"Rattled"},heightm:0.4,weightkg:52.5,color:"Blue",evos:["huntail","gorebyss"],eggGroups:["Water 1"]},
huntail:{num:367,species:"Huntail",types:["Water"],baseStats:{hp:55,atk:104,def:105,spa:94,spd:75,spe:52},abilities:{0:"Swift Swim",DW:"Water Veil"},heightm:1.7,weightkg:27,color:"Blue",prevo:"clamperl",evoLevel:1,eggGroups:["Water 1"]},
gorebyss:{num:368,species:"Gorebyss",types:["Water"],baseStats:{hp:55,atk:84,def:105,spa:114,spd:75,spe:52},abilities:{0:"Swift Swim",DW:"Hydration"},heightm:1.8,weightkg:22.6,color:"Pink",prevo:"clamperl",evoLevel:1,eggGroups:["Water 

1"]},
relicanth:{num:369,species:"Relicanth",types:["Water","Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:100,atk:90,def:130,spa:45,spd:65,spe:55},abilities:{0:"Swift Swim",1:"Rock 

Head",DW:"Sturdy"},heightm:1,weightkg:23.4,color:"Gray",eggGroups:["Water 1","Water 2"]},
luvdisc:{num:370,species:"Luvdisc",types:["Water"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:43,atk:30,def:55,spa:40,spd:65,spe:97},abilities:{0:"Swift Swim",DW:"Hydration"},heightm:0.6,weightkg:8.7,color:"Pink",eggGroups:["Water 2"]},
bagon:{num:371,species:"Bagon",types:["Dragon"],baseStats:{hp:45,atk:75,def:60,spa:40,spd:30,spe:50},abilities:{0:"Rock Head",DW:"Sheer Force"},heightm:0.6,weightkg:42.1,color:"Blue",evos:["shelgon"],eggGroups:["Dragon"]},
shelgon:{num:372,species:"Shelgon",types:["Dragon"],baseStats:{hp:65,atk:95,def:100,spa:60,spd:50,spe:50},abilities:{0:"Rock Head",DW:"Overcoat"},heightm:1.1,weightkg:110.5,color:"White",prevo:"bagon",evos:

["salamence"],evoLevel:30,eggGroups:["Dragon"]},
salamence:{num:373,species:"Salamence",types:["Dragon","Flying"],baseStats:{hp:95,atk:135,def:80,spa:110,spd:80,spe:100},abilities:

{0:"Intimidate",DW:"Moxie"},heightm:1.5,weightkg:102.6,color:"Blue",prevo:"shelgon",evoLevel:50,eggGroups:["Dragon"]},
beldum:{num:374,species:"Beldum",types:["Steel","Psychic"],gender:"N",baseStats:{hp:40,atk:55,def:80,spa:35,spd:60,spe:30},abilities:{0:"Clear Body",DW:"Light Metal"},heightm:0.6,weightkg:95.2,color:"Blue",evos:["metang"],eggGroups:

["Mineral"]},
metang:{num:375,species:"Metang",types:["Steel","Psychic"],gender:"N",baseStats:{hp:60,atk:75,def:100,spa:55,spd:80,spe:50},abilities:{0:"Clear Body",DW:"Light Metal"},heightm:1.2,weightkg:202.5,color:"Blue",prevo:"beldum",evos:

["metagross"],evoLevel:20,eggGroups:["Mineral"]},
metagross:{num:376,species:"Metagross",types:["Steel","Psychic"],gender:"N",baseStats:{hp:80,atk:135,def:130,spa:95,spd:90,spe:70},abilities:{0:"Clear Body",DW:"Light 

Metal"},heightm:1.6,weightkg:550,color:"Blue",prevo:"metang",evoLevel:45,eggGroups:["Mineral"]},
regirock:{num:377,species:"Regirock",types:["Rock"],gender:"N",baseStats:{hp:80,atk:100,def:200,spa:50,spd:100,spe:50},abilities:{0:"Clear Body",DW:"Sturdy"},heightm:1.7,weightkg:230,color:"Brown",eggGroups:["No Eggs"]},
regice:{num:378,species:"Regice",types:["Ice"],gender:"N",baseStats:{hp:80,atk:50,def:100,spa:100,spd:200,spe:50},abilities:{0:"Clear Body",DW:"Ice Body"},heightm:1.8,weightkg:175,color:"Blue",eggGroups:["No Eggs"]},
registeel:{num:379,species:"Registeel",types:["Steel"],gender:"N",baseStats:{hp:80,atk:75,def:150,spa:75,spd:150,spe:50},abilities:{0:"Clear Body",DW:"Light Metal"},heightm:1.9,weightkg:205,color:"Gray",eggGroups:["No Eggs"]},
latias:{num:380,species:"Latias",types:["Dragon","Psychic"],gender:"F",baseStats:{hp:80,atk:80,def:90,spa:110,spd:130,spe:110},abilities:{0:"Levitate"},heightm:1.4,weightkg:40,color:"Red",eggGroups:["No Eggs"]},
latios:{num:381,species:"Latios",types:["Dragon","Psychic"],gender:"M",baseStats:{hp:80,atk:90,def:80,spa:130,spd:110,spe:110},abilities:{0:"Levitate"},heightm:2,weightkg:60,color:"Blue",eggGroups:["No Eggs"]},
kyogre:{num:382,species:"Kyogre",types:["Water"],gender:"N",baseStats:{hp:100,atk:100,def:90,spa:150,spd:140,spe:90},abilities:{0:"Drizzle"},heightm:4.5,weightkg:352,color:"Blue",eggGroups:["No Eggs"]},
groudon:{num:383,species:"Groudon",types:["Flying"],gender:"N",baseStats:{hp:100,atk:150,def:140,spa:100,spd:90,spe:90},abilities:{0:"Drought"},heightm:3.5,weightkg:950,color:"Red",eggGroups:["No Eggs"]},
rayquaza:{num:384,species:"Rayquaza",types:["Dragon","Flying"],gender:"N",baseStats:{hp:105,atk:150,def:90,spa:150,spd:90,spe:95},abilities:{0:"Air Lock"},heightm:7,weightkg:206.5,color:"Green",eggGroups:["No Eggs"]},
jirachi:{num:385,species:"Jirachi",types:["Steel","Psychic"],gender:"N",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},abilities:{0:"Serene Grace"},heightm:0.3,weightkg:1.1,color:"Yellow",eggGroups:["No Eggs"]},
deoxys:{num:386,species:"Deoxys",baseForme:"Normal",types:["Fighting"],gender:"N",baseStats:{hp:50,atk:150,def:50,spa:150,spd:50,spe:150},abilities:{0:"Pressure"},heightm:1.7,weightkg:60.8,color:"Red",eggGroups:["No Eggs"],otherFormes:

["deoxysattack","deoxysdefense","deoxysspeed"]},
deoxysattack:{num:386,species:"Deoxys-Attack",baseSpecies:"Deoxys",forme:"Attack",formeLetter:"A",types:["Fighting"],gender:"N",baseStats:{hp:50,atk:180,def:20,spa:180,spd:20,spe:150},abilities:

{0:"Pressure"},heightm:1.7,weightkg:60.8,color:"Red",eggGroups:["No Eggs"]},
deoxysdefense:{num:386,species:"Deoxys-Defense",baseSpecies:"Deoxys",forme:"Defense",formeLetter:"D",types:["Fighting"],gender:"N",baseStats:{hp:50,atk:70,def:160,spa:70,spd:160,spe:90},abilities:

{0:"Pressure"},heightm:1.7,weightkg:60.8,color:"Red",eggGroups:["No Eggs"]},
deoxysspeed:{num:386,species:"Deoxys-Speed",baseSpecies:"Deoxys",forme:"Speed",formeLetter:"S",types:["Fighting"],gender:"N",baseStats:{hp:50,atk:95,def:90,spa:95,spd:90,spe:180},abilities:

{0:"Pressure"},heightm:1.7,weightkg:60.8,color:"Red",eggGroups:["No Eggs"]},
turtwig:{num:387,species:"Turtwig",types:["Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:55,atk:68,def:64,spa:45,spd:55,spe:31},abilities:{0:"Overgrow",DW:"Shell Armor"},heightm:0.4,weightkg:10.2,color:"Green",evos:

["grotle"],eggGroups:["Monster","Plant"]},
grotle:{num:388,species:"Grotle",types:["Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:89,def:85,spa:55,spd:65,spe:36},abilities:{0:"Overgrow",DW:"Shell Armor"},heightm:1.1,weightkg:97,color:"Green",prevo:"turtwig",evos:

["torterra"],evoLevel:18,eggGroups:["Monster","Plant"]},
torterra:{num:389,species:"Torterra",types:["Grass","Ground"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:95,atk:109,def:105,spa:75,spd:85,spe:56},abilities:{0:"Overgrow",DW:"Shell 

Armor"},heightm:2.2,weightkg:310,color:"Green",prevo:"grotle",evoLevel:32,eggGroups:["Monster","Plant"]},
chimchar:{num:390,species:"Chimchar",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:44,atk:58,def:44,spa:58,spd:44,spe:61},abilities:{0:"Blaze",DW:"Iron Fist"},heightm:0.5,weightkg:6.2,color:"Brown",evos:

["monferno"],eggGroups:["Ground","Humanshape"]},
monferno:{num:391,species:"Monferno",types:["Fire","Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:64,atk:78,def:52,spa:78,spd:52,spe:81},abilities:{0:"Blaze",DW:"Iron 

Fist"},heightm:0.9,weightkg:22,color:"Brown",prevo:"chimchar",evos:["infernape"],evoLevel:14,eggGroups:["Ground","Humanshape"]},
infernape:{num:392,species:"Infernape",types:["Fire","Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:76,atk:104,def:71,spa:104,spd:71,spe:108},abilities:{0:"Blaze",DW:"Iron 

Fist"},heightm:1.2,weightkg:55,color:"Brown",prevo:"monferno",evoLevel:36,eggGroups:["Ground","Humanshape"]},
piplup:{num:393,species:"Piplup",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:53,atk:51,def:53,spa:61,spd:56,spe:40},abilities:{0:"Torrent",DW:"Defiant"},heightm:0.4,weightkg:5.2,color:"Blue",evos:["prinplup"],eggGroups:

["Water 1","Ground"]},
prinplup:{num:394,species:"Prinplup",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:64,atk:66,def:68,spa:81,spd:76,spe:50},abilities:{0:"Torrent",DW:"Defiant"},heightm:0.8,weightkg:23,color:"Blue",prevo:"piplup",evos:

["empoleon"],evoLevel:16,eggGroups:["Water 1","Ground"]},
empoleon:{num:395,species:"Empoleon",types:["Water","Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:84,atk:86,def:88,spa:111,spd:101,spe:60},abilities:

{0:"Torrent",DW:"Defiant"},heightm:1.7,weightkg:84.5,color:"Blue",prevo:"prinplup",evoLevel:36,eggGroups:["Water 1","Ground"]},
starly:{num:396,species:"Starly",types:["Ground","Ghost"],baseStats:{hp:40,atk:55,def:30,spa:30,spd:30,spe:60},abilities:{0:"Keen Eye"},heightm:0.3,weightkg:2,color:"Brown",evos:["staravia"],eggGroups:["Flying"]},
staravia:{num:397,species:"Staravia",types:["Ground","Ghost"],baseStats:{hp:55,atk:75,def:50,spa:40,spd:40,spe:80},abilities:{0:"Intimidate",DW:"Reckless"},heightm:0.6,weightkg:15.5,color:"Brown",prevo:"starly",evos:

["staraptor"],evoLevel:14,eggGroups:["Flying"]},
staraptor:{num:398,species:"Staraptor",types:["Ground","Ghost"],baseStats:{hp:85,atk:120,def:70,spa:50,spd:50,spe:100},abilities:

{0:"Intimidate",DW:"Reckless"},heightm:1.2,weightkg:24.9,color:"Brown",prevo:"staravia",evoLevel:34,eggGroups:["Flying"]},
bidoof:{num:399,species:"Bidoof",types:["Ghost"],baseStats:{hp:59,atk:45,def:40,spa:35,spd:40,spe:31},abilities:{0:"Simple",1:"Unaware",DW:"Moody"},heightm:0.5,weightkg:20,color:"Brown",evos:["bibarel"],eggGroups:["Water 1","Ground"]},
bibarel:{num:400,species:"Bibarel",types:["Normal","Water"],baseStats:{hp:79,atk:85,def:60,spa:55,spd:60,spe:71},abilities:{0:"Simple",1:"Unaware",DW:"Moody"},heightm:1,weightkg:31.5,color:"Brown",prevo:"bidoof",evoLevel:15,eggGroups:

["Water 1","Ground"]},
kricketot:{num:401,species:"Kricketot",types:["Bug"],baseStats:{hp:37,atk:25,def:41,spa:25,spd:41,spe:25},abilities:{0:"Shed Skin",DW:"Run Away"},heightm:0.3,weightkg:2.2,color:"Red",evos:["kricketune"],eggGroups:["Bug"]},
kricketune:{num:402,species:"Kricketune",types:["Bug"],baseStats:{hp:77,atk:85,def:51,spa:55,spd:51,spe:65},abilities:{0:"Swarm",DW:"Technician"},heightm:1,weightkg:25.5,color:"Red",prevo:"kricketot",evoLevel:10,eggGroups:["Bug"]},
shinx:{num:403,species:"Shinx",types:["Electric"],baseStats:{hp:45,atk:65,def:34,spa:40,spd:34,spe:45},abilities:{0:"Rivalry",1:"Intimidate",DW:"Guts"},heightm:0.5,weightkg:9.5,color:"Blue",evos:["luxio"],eggGroups:["Flying"]},
luxio:{num:404,species:"Luxio",types:["Electric"],baseStats:{hp:60,atk:85,def:49,spa:60,spd:49,spe:60},abilities:{0:"Rivalry",1:"Intimidate",DW:"Guts"},heightm:0.9,weightkg:30.5,color:"Blue",prevo:"shinx",evos:

["luxray"],evoLevel:15,eggGroups:["Flying"]},
luxray:{num:405,species:"Luxray",types:["Electric"],baseStats:{hp:80,atk:120,def:79,spa:95,spd:79,spe:70},abilities:{0:"Rivalry",1:"Intimidate",DW:"Guts"},heightm:1.4,weightkg:42,color:"Blue",prevo:"luxio",evoLevel:30,eggGroups:

["Flying"]},
budew:{num:406,species:"Budew",types:["Grass","Poison"],baseStats:{hp:40,atk:30,def:35,spa:50,spd:70,spe:55},abilities:{0:"Natural Cure",1:"Poison Point",DW:"Leaf Guard"},heightm:0.2,weightkg:1.2,color:"Green",evos:

["roselia"],eggGroups:["No Eggs"]},
roserade:{num:407,species:"Roserade",types:["Grass","Poison"],baseStats:{hp:60,atk:70,def:55,spa:125,spd:105,spe:90},abilities:{0:"Natural Cure",1:"Poison 

Point",DW:"Technician"},heightm:0.9,weightkg:14.5,color:"Green",prevo:"roselia",evoLevel:1,eggGroups:["Fairy","Plant"]},
cranidos:{num:408,species:"Cranidos",types:["Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:67,atk:125,def:40,spa:30,spd:30,spe:58},abilities:{0:"Mold Breaker",DW:"Sheer Force"},heightm:0.9,weightkg:31.5,color:"Blue",evos:

["rampardos"],eggGroups:["Monster"]},
rampardos:{num:409,species:"Rampardos",types:["Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:97,atk:165,def:60,spa:65,spd:50,spe:58},abilities:{0:"Mold Breaker",DW:"Sheer 

Force"},heightm:1.6,weightkg:102.5,color:"Blue",prevo:"cranidos",evoLevel:30,eggGroups:["Monster"]},
shieldon:{num:410,species:"Shieldon",types:["Rock","Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:30,atk:42,def:118,spa:42,spd:88,spe:30},abilities:{0:"Sturdy",DW:"Soundproof"},heightm:0.5,weightkg:57,color:"Gray",evos:

["bastiodon"],eggGroups:["Monster"]},
bastiodon:{num:411,species:"Bastiodon",types:["Rock","Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:52,def:168,spa:47,spd:138,spe:30},abilities:

{0:"Sturdy",DW:"Soundproof"},heightm:1.3,weightkg:149.5,color:"Gray",prevo:"shieldon",evoLevel:30,eggGroups:["Monster"]},
burmy:{num:412,species:"Burmy",baseForme:"Plant",types:["Bug"],baseStats:{hp:40,atk:29,def:45,spa:29,spd:45,spe:36},abilities:{0:"Shed Skin",DW:"Overcoat"},heightm:0.2,weightkg:3.4,color:"Gray",evos:

["wormadam","wormadamsandy","wormadamtrash","mothim"],eggGroups:["Bug"],otherForms:["burmysandy","burmytrash"]},
wormadam:{num:413,species:"Wormadam",baseForme:"Plant",types:["Bug","Grass"],gender:"F",baseStats:{hp:60,atk:59,def:85,spa:79,spd:105,spe:36},abilities:

{0:"Anticipation",DW:"Overcoat"},heightm:0.5,weightkg:6.5,color:"Gray",prevo:"burmy",evoLevel:20,eggGroups:["Bug"],otherFormes:["wormadamsandy","wormadamtrash"]},
wormadamsandy:{num:413,species:"Wormadam-Sandy",baseSpecies:"Wormadam",forme:"Sandy",formeLetter:"G",types:["Bug","Ground"],gender:"F",baseStats:{hp:60,atk:79,def:105,spa:59,spd:85,spe:36},abilities:

{0:"Anticipation",DW:"Overcoat"},heightm:0.5,weightkg:6.5,color:"Gray",prevo:"burmy",evoLevel:20,eggGroups:["Bug"]},
wormadamtrash:{num:413,species:"Wormadam-Trash",baseSpecies:"Wormadam",forme:"Trash",formeLetter:"S",types:["Bug","Steel"],gender:"F",baseStats:{hp:60,atk:69,def:95,spa:69,spd:95,spe:36},abilities:

{0:"Anticipation",DW:"Overcoat"},heightm:0.5,weightkg:6.5,color:"Gray",prevo:"burmy",evoLevel:20,eggGroups:["Bug"]},
mothim:{num:414,species:"Mothim",types:["Bug","Flying"],gender:"M",baseStats:{hp:70,atk:94,def:50,spa:94,spd:50,spe:66},abilities:{0:"Swarm",DW:"Tinted Lens"},heightm:0.9,weightkg:23.3,color:"Yellow",prevo:"burmy",evoLevel:20,eggGroups:

["Bug"]},
combee:{num:415,species:"Combee",types:["Bug","Flying"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:30,atk:30,def:42,spa:30,spd:42,spe:70},abilities:{0:"Honey Gather",DW:"Hustle"},heightm:0.3,weightkg:5.5,color:"Yellow",evos:

["vespiquen"],eggGroups:["Bug"]},
vespiquen:{num:416,species:"Vespiquen",types:["Bug","Flying"],gender:"F",baseStats:{hp:70,atk:80,def:102,spa:80,spd:102,spe:40},abilities:

{0:"Pressure",DW:"Unnerve"},heightm:1.2,weightkg:38.5,color:"Yellow",prevo:"combee",evoLevel:21,eggGroups:["Bug"]},
pachirisu:{num:417,species:"Pachirisu",types:["Electric"],baseStats:{hp:60,atk:45,def:70,spa:45,spd:90,spe:95},abilities:{0:"Run Away",1:"Pickup",DW:"Volt Absorb"},heightm:0.4,weightkg:3.9,color:"White",eggGroups:["Ground","Fairy"]},
buizel:{num:418,species:"Buizel",types:["Water"],baseStats:{hp:55,atk:65,def:35,spa:60,spd:30,spe:85},abilities:{0:"Swift Swim",DW:"Water Veil"},heightm:0.7,weightkg:29.5,color:"Brown",evos:["floatzel"],eggGroups:["Water 1","Ground"]},
floatzel:{num:419,species:"Floatzel",types:["Water"],baseStats:{hp:85,atk:105,def:55,spa:85,spd:50,spe:115},abilities:{0:"Swift Swim",DW:"Water Veil"},heightm:1.1,weightkg:33.5,color:"Brown",prevo:"buizel",evoLevel:26,eggGroups:["Water 

1","Ground"]},
cherubi:{num:420,species:"Cherubi",types:["Grass"],baseStats:{hp:45,atk:35,def:45,spa:62,spd:53,spe:35},abilities:{0:"Chlorophyll"},heightm:0.4,weightkg:3.3,color:"Pink",evos:["cherrim"],eggGroups:["Fairy","Plant"]},
cherrim:{num:421,species:"Cherrim",baseForme:"Overcast",types:["Grass"],baseStats:{hp:70,atk:60,def:70,spa:87,spd:78,spe:85},abilities:{0:"Flower Gift"},heightm:0.5,weightkg:9.3,color:"Pink",prevo:"cherubi",evoLevel:25,eggGroups:

["Fairy","Plant"],otherFormes:["cherrimsunshine"]},
cherrimsunshine:{num:421,species:"Cherrim-Sunshine",baseSpecies:"Cherrim",forme:"Sunshine",formeLetter:"S",types:["Grass"],baseStats:{hp:70,atk:60,def:70,spa:87,spd:78,spe:85},abilities:{0:"Flower 

Gift"},heightm:0.5,weightkg:9.3,color:"Pink",prevo:"cherubi",evoLevel:25,eggGroups:["Fairy","Plant"]},
shellos:{num:422,species:"Shellos",baseForme:"West",types:["Water"],baseStats:{hp:76,atk:48,def:48,spa:57,spd:62,spe:34},abilities:{0:"Sticky Hold",1:"Storm Drain",DW:"Sand Force"},heightm:0.3,weightkg:6.3,color:"Purple",evos:

["gastrodon"],eggGroups:["Water 1","Indeterminate"],otherForms:["shelloseast"]},
gastrodon:{num:423,species:"Gastrodon",baseForme:"West",types:["Water","Ground"],baseStats:{hp:111,atk:83,def:68,spa:92,spd:82,spe:39},abilities:{0:"Sticky Hold",1:"Storm Drain",DW:"Sand 

Force"},heightm:0.9,weightkg:29.9,color:"Purple",prevo:"shellos",evoLevel:30,eggGroups:["Water 1","Indeterminate"],otherForms:["gastrodoneast"]},
ambipom:{num:424,species:"Ambipom",types:["Ghost"],baseStats:{hp:75,atk:100,def:66,spa:60,spd:66,spe:115},abilities:{0:"Technician",1:"Pickup",DW:"Skill 

Link"},heightm:1.2,weightkg:20.3,color:"Purple",prevo:"aipom",evoLevel:32,evoMove:"Double Hit",eggGroups:["Flying"]},
drifloon:{num:425,species:"Drifloon",types:["Ghost","Flying"],baseStats:{hp:90,atk:50,def:34,spa:60,spd:44,spe:70},abilities:{0:"Aftermath",1:"Unburden",DW:"Flare Boost"},heightm:0.4,weightkg:1.2,color:"Purple",evos:

["drifblim"],eggGroups:["Indeterminate"]},
drifblim:{num:426,species:"Drifblim",types:["Ghost","Flying"],baseStats:{hp:150,atk:80,def:44,spa:90,spd:54,spe:80},abilities:{0:"Aftermath",1:"Unburden",DW:"Flare 

Boost"},heightm:1.2,weightkg:15,color:"Purple",prevo:"drifloon",evoLevel:28,eggGroups:["Indeterminate"]},
buneary:{num:427,species:"Buneary",types:["Ghost"],baseStats:{hp:55,atk:66,def:44,spa:44,spd:56,spe:85},abilities:{0:"Run Away",1:"Klutz",DW:"Limber"},heightm:0.4,weightkg:5.5,color:"Brown",evos:["lopunny"],eggGroups:

["Ground","Humanshape"]},
lopunny:{num:428,species:"Lopunny",types:["Ghost"],baseStats:{hp:65,atk:76,def:84,spa:54,spd:96,spe:105},abilities:{0:"Cute Charm",1:"Klutz",DW:"Limber"},heightm:1.2,weightkg:33.3,color:"Brown",prevo:"buneary",evoLevel:2,eggGroups:

["Ground","Humanshape"]},
mismagius:{num:429,species:"Mismagius",types:["Ghost"],baseStats:{hp:60,atk:60,def:60,spa:105,spd:105,spe:105},abilities:{0:"Levitate"},heightm:0.9,weightkg:4.4,color:"Purple",prevo:"misdreavus",evoLevel:1,eggGroups:["Indeterminate"]},
honchkrow:{num:430,species:"Honchkrow",types:["Dark","Flying"],baseStats:{hp:100,atk:125,def:52,spa:105,spd:52,spe:71},abilities:{0:"Insomnia",1:"Super 

Luck",DW:"Moxie"},heightm:0.9,weightkg:27.3,color:"Black",prevo:"murkrow",evoLevel:1,eggGroups:["Flying"]},
glameow:{num:431,species:"Glameow",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:49,atk:55,def:42,spa:42,spd:37,spe:85},abilities:{0:"Limber",1:"Own Tempo",DW:"Keen Eye"},heightm:0.5,weightkg:3.9,color:"Gray",evos:

["purugly"],eggGroups:["Flying"]},
purugly:{num:432,species:"Purugly",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:71,atk:82,def:64,spa:64,spd:59,spe:112},abilities:{0:"Thick Fat",1:"Own 

Tempo",DW:"Defiant"},heightm:1,weightkg:43.8,color:"Gray",prevo:"glameow",evoLevel:38,eggGroups:["Flying"]},
chingling:{num:433,species:"Chingling",types:["Fighting"],baseStats:{hp:45,atk:30,def:50,spa:65,spd:50,spe:45},abilities:{0:"Levitate"},heightm:0.2,weightkg:0.6,color:"Yellow",evos:["chimecho"],eggGroups:["No Eggs"]},
stunky:{num:434,species:"Stunky",types:["Poison","Dark"],baseStats:{hp:63,atk:63,def:47,spa:41,spd:41,spe:74},abilities:{0:"Stench",1:"Aftermath",DW:"Keen Eye"},heightm:0.4,weightkg:19.2,color:"Purple",evos:["skuntank"],eggGroups:

["Flying"]},
skuntank:{num:435,species:"Skuntank",types:["Poison","Dark"],baseStats:{hp:103,atk:93,def:67,spa:71,spd:61,spe:84},abilities:{0:"Stench",1:"Aftermath",DW:"Keen 

Eye"},heightm:1,weightkg:38,color:"Purple",prevo:"stunky",evoLevel:34,eggGroups:["Flying"]},
bronzor:{num:436,species:"Bronzor",types:["Steel","Psychic"],gender:"N",baseStats:{hp:57,atk:24,def:86,spa:24,spd:86,spe:23},abilities:{0:"Levitate",1:"Heatproof",DW:"Heavy Metal"},heightm:0.5,weightkg:60.5,color:"Green",evos:

["bronzong"],eggGroups:["Mineral"]},
bronzong:{num:437,species:"Bronzong",types:["Steel","Psychic"],gender:"N",baseStats:{hp:67,atk:89,def:116,spa:79,spd:116,spe:33},abilities:{0:"Levitate",1:"Heatproof",DW:"Heavy 

Metal"},heightm:1.3,weightkg:187,color:"Green",prevo:"bronzor",evoLevel:33,eggGroups:["Mineral"]},
bonsly:{num:438,species:"Bonsly",types:["Rock"],baseStats:{hp:50,atk:80,def:95,spa:10,spd:45,spe:10},abilities:{0:"Sturdy",1:"Rock Head",DW:"Rattled"},heightm:0.5,weightkg:15,color:"Brown",evos:["sudowoodo"],eggGroups:["No Eggs"]},
mimejr:{num:439,species:"Mime Jr.",types:["Fighting"],baseStats:{hp:20,atk:25,def:45,spa:70,spd:90,spe:60},abilities:{0:"Soundproof",1:"Filter",DW:"Technician"},heightm:0.6,weightkg:13,color:"Pink",evos:["mrmime"],eggGroups:["No Eggs"]},
happiny:{num:440,species:"Happiny",types:["Ghost"],gender:"F",baseStats:{hp:100,atk:5,def:5,spa:15,spd:65,spe:30},abilities:{0:"Natural Cure",1:"Serene Grace",DW:"Friend Guard"},heightm:0.6,weightkg:24.4,color:"Pink",evos:

["chansey"],eggGroups:["No Eggs"]},
chatot:{num:441,species:"Chatot",types:["Ground","Ghost"],baseStats:{hp:76,atk:65,def:45,spa:92,spd:42,spe:91},abilities:{0:"Keen Eye",1:"Tangled Feet",DW:"Big Pecks"},heightm:0.5,weightkg:1.9,color:"Black",eggGroups:["Flying"]},
spiritomb:{num:442,species:"Spiritomb",types:["Ghost","Dark"],baseStats:{hp:50,atk:92,def:108,spa:92,spd:108,spe:35},abilities:{0:"Pressure",DW:"Infiltrator"},heightm:1,weightkg:108,color:"Purple",eggGroups:["Indeterminate"]},
gible:{num:443,species:"Gible",types:["Dragon","Ground"],baseStats:{hp:58,atk:70,def:45,spa:40,spd:45,spe:42},abilities:{0:"Sand Veil",DW:"Rough Skin"},heightm:0.7,weightkg:20.5,color:"Blue",evos:["gabite"],eggGroups:

["Monster","Dragon"]},
gabite:{num:444,species:"Gabite",types:["Dragon","Ground"],baseStats:{hp:68,atk:90,def:65,spa:50,spd:55,spe:82},abilities:{0:"Sand Veil",DW:"Rough Skin"},heightm:1.4,weightkg:56,color:"Blue",prevo:"gible",evos:

["garchomp"],evoLevel:24,eggGroups:["Monster","Dragon"]},
garchomp:{num:445,species:"Garchomp",types:["Dragon","Ground"],baseStats:{hp:108,atk:130,def:95,spa:80,spd:85,spe:102},abilities:{0:"Sand Veil",DW:"Rough Skin"},heightm:1.9,weightkg:95,color:"Blue",prevo:"gabite",evoLevel:48,eggGroups:

["Monster","Dragon"]},
munchlax:{num:446,species:"Munchlax",types:["Ghost"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:135,atk:85,def:40,spa:40,spd:85,spe:5},abilities:{0:"Pickup",1:"Thick Fat",DW:"Gluttony"},heightm:0.6,weightkg:105,color:"Black",evos:

["snorlax"],eggGroups:["No Eggs"]},
riolu:{num:447,species:"Riolu",types:["Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:40,atk:70,def:40,spa:35,spd:40,spe:60},abilities:{0:"Steadfast",1:"Inner Focus",DW:"Prankster"},heightm:0.7,weightkg:20.2,color:"Blue",evos:

["lucario"],eggGroups:["No Eggs"]},
lucario:{num:448,species:"Lucario",types:["Fighting","Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:70,atk:110,def:70,spa:115,spd:70,spe:90},abilities:{0:"Steadfast",1:"Inner 

Focus",DW:"Justified"},heightm:1.2,weightkg:54,color:"Blue",prevo:"riolu",evoLevel:2,eggGroups:["Ground","Humanshape"]},
hippopotas:{num:449,species:"Hippopotas",types:["Flying"],baseStats:{hp:68,atk:72,def:78,spa:38,spd:42,spe:32},abilities:{0:"Sand Stream",DW:"Sand Force"},heightm:0.8,weightkg:49.5,color:"Brown",evos:["hippowdon"],eggGroups:["Flying"]},
hippowdon:{num:450,species:"Hippowdon",types:["Flying"],baseStats:{hp:108,atk:112,def:118,spa:68,spd:72,spe:47},abilities:{0:"Sand Stream",DW:"Sand Force"},heightm:2,weightkg:300,color:"Brown",prevo:"hippopotas",evoLevel:34,eggGroups:

["Flying"]},
skorupi:{num:451,species:"Skorupi",types:["Poison","Bug"],baseStats:{hp:40,atk:50,def:90,spa:30,spd:55,spe:65},abilities:{0:"Battle Armor",1:"Sniper",DW:"Keen Eye"},heightm:0.8,weightkg:12,color:"Purple",evos:["drapion"],eggGroups:

["Bug","Water 3"]},
drapion:{num:452,species:"Drapion",types:["Poison","Dark"],baseStats:{hp:70,atk:90,def:110,spa:60,spd:75,spe:95},abilities:{0:"Battle Armor",1:"Sniper",DW:"Keen 

Eye"},heightm:1.3,weightkg:61.5,color:"Purple",prevo:"skorupi",evoLevel:40,eggGroups:["Bug","Water 3"]},
croagunk:{num:453,species:"Croagunk",types:["Poison","Fighting"],baseStats:{hp:48,atk:61,def:40,spa:61,spd:40,spe:50},abilities:{0:"Anticipation",1:"Dry Skin",DW:"Poison Touch"},heightm:0.7,weightkg:23,color:"Blue",evos:

["toxicroak"],eggGroups:["Humanshape"]},
toxicroak:{num:454,species:"Toxicroak",types:["Poison","Fighting"],baseStats:{hp:83,atk:106,def:65,spa:86,spd:65,spe:85},abilities:{0:"Anticipation",1:"Dry Skin",DW:"Poison 

Touch"},heightm:1.3,weightkg:44.4,color:"Blue",prevo:"croagunk",evoLevel:37,eggGroups:["Humanshape"]},
carnivine:{num:455,species:"Carnivine",types:["Grass"],baseStats:{hp:74,atk:100,def:72,spa:90,spd:72,spe:46},abilities:{0:"Levitate"},heightm:1.4,weightkg:27,color:"Green",eggGroups:["Plant"]},
finneon:{num:456,species:"Finneon",types:["Water"],baseStats:{hp:49,atk:49,def:56,spa:49,spd:61,spe:66},abilities:{0:"Swift Swim",1:"Storm Drain",DW:"Water Veil"},heightm:0.4,weightkg:7,color:"Blue",evos:["lumineon"],eggGroups:["Water 

2"]},
lumineon:{num:457,species:"Lumineon",types:["Water"],baseStats:{hp:69,atk:69,def:76,spa:69,spd:86,spe:91},abilities:{0:"Swift Swim",1:"Storm Drain",DW:"Water 

Veil"},heightm:1.2,weightkg:24,color:"Blue",prevo:"finneon",evoLevel:31,eggGroups:["Water 2"]},
mantyke:{num:458,species:"Mantyke",types:["Water","Flying"],baseStats:{hp:45,atk:20,def:50,spa:60,spd:120,spe:50},abilities:{0:"Swift Swim",1:"Water Absorb",DW:"Water Veil"},heightm:1,weightkg:65,color:"Blue",evos:["mantine"],eggGroups:

["No Eggs"]},
snover:{num:459,species:"Snover",types:["Grass","Ice"],baseStats:{hp:60,atk:62,def:50,spa:62,spd:60,spe:40},abilities:{0:"Snow Warning",DW:"Soundproof"},heightm:1,weightkg:50.5,color:"White",evos:["abomasnow"],eggGroups:

["Monster","Plant"]},
abomasnow:{num:460,species:"Abomasnow",types:["Grass","Ice"],baseStats:{hp:90,atk:92,def:75,spa:92,spd:85,spe:60},abilities:{0:"Snow 

Warning",DW:"Soundproof"},heightm:2.2,weightkg:135.5,color:"White",prevo:"snover",evoLevel:40,eggGroups:["Monster","Plant"]},
weavile:{num:461,species:"Weavile",types:["Dark","Ice"],baseStats:{hp:70,atk:120,def:65,spa:45,spd:85,spe:125},abilities:{0:"Pressure",DW:"Pickpocket"},heightm:1.1,weightkg:34,color:"Black",prevo:"sneasel",evoLevel:2,eggGroups:

["Flying"]},
magnezone:{num:462,species:"Magnezone",types:["Fire","Grass"],gender:"N",baseStats:{hp:70,atk:70,def:115,spa:130,spd:90,spe:60},abilities:{0:"Magnet 

Pull",1:"Sturdy",DW:"Analytic"},heightm:1.2,weightkg:180,color:"Gray",prevo:"magneton",evoLevel:31,eggGroups:["Mineral"]},
lickilicky:{num:463,species:"Lickilicky",types:["Ghost"],baseStats:{hp:110,atk:85,def:95,spa:80,spd:95,spe:50},abilities:{0:"Own Tempo",1:"Oblivious",DW:"Cloud 

Nine"},heightm:1.7,weightkg:140,color:"Pink",prevo:"lickitung",evoLevel:2,evoMove:"Rollout",eggGroups:["Monster"]},
rhyperior:{num:464,species:"Rhyperior",types:["Flying","Poison"],baseStats:{hp:115,atk:140,def:130,spa:55,spd:55,spe:40},abilities:{0:"Lightningrod",1:"Solid 

Rock",DW:"Reckless"},heightm:2.4,weightkg:282.8,color:"Gray",prevo:"rhydon",evoLevel:42,eggGroups:["Monster","Ground"]},
tangrowth:{num:465,species:"Tangrowth",types:["Steel"],baseStats:{hp:100,atk:100,def:125,spa:110,spd:50,spe:50},abilities:{0:"Chlorophyll",1:"Leaf 

Guard",DW:"Regenerator"},heightm:2,weightkg:128.6,color:"Blue",prevo:"tangela",evoLevel:2,evoMove:"AncientPower",eggGroups:["Plant"]},
electivire:{num:466,species:"Electivire",types:["Fire"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:75,atk:123,def:67,spa:95,spd:85,spe:95},abilities:{0:"Motor Drive",DW:"Vital 

Spirit"},heightm:1.8,weightkg:138.6,color:"Yellow",prevo:"electabuzz",evoLevel:30,eggGroups:["Humanshape"]},
magmortar:{num:467,species:"Magmortar",types:["Electric"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:75,atk:95,def:67,spa:125,spd:95,spe:83},abilities:{0:"Flame Body",DW:"Vital 

Spirit"},heightm:1.6,weightkg:68,color:"Red",prevo:"magmar",evoLevel:30,eggGroups:["Humanshape"]},
togekiss:{num:468,species:"Togekiss",types:["Ground","Dark"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:85,atk:50,def:95,spa:120,spd:115,spe:80},abilities:{0:"Hustle",1:"Serene Grace",DW:"Super 

Luck"},heightm:1.5,weightkg:38,color:"White",prevo:"togetic",evoLevel:2,eggGroups:["Flying","Fairy"]},
yanmega:{num:469,species:"Yanmega",types:["Bug","Flying"],baseStats:{hp:86,atk:76,def:86,spa:116,spd:56,spe:95},abilities:{0:"Speed Boost",1:"Tinted 

Lens",DW:"Frisk"},heightm:1.9,weightkg:51.5,color:"Green",prevo:"yanma",evoLevel:2,evoMove:"AncientPower",eggGroups:["Bug"]},
leafeon:{num:470,species:"Leafeon",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:110,def:130,spa:60,spd:65,spe:95},abilities:{0:"Leaf 

Guard",DW:"Chlorophyll"},heightm:1,weightkg:25.5,color:"Green",prevo:"eevee",evoLevel:1,eggGroups:["Flying"]},
glaceon:{num:471,species:"Glaceon",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:60,def:110,spa:130,spd:95,spe:65},abilities:{0:"Snow Cloak",DW:"Ice 

Body"},heightm:0.8,weightkg:25.9,color:"Blue",prevo:"eevee",evoLevel:1,eggGroups:["Flying"]},
gliscor:{num:472,species:"Gliscor",types:["Ground","Flying"],baseStats:{hp:75,atk:95,def:125,spa:45,spd:75,spe:95},abilities:{0:"Hyper Cutter",1:"Sand Veil",DW:"Poison 

Heal"},heightm:2,weightkg:42.5,color:"Purple",prevo:"gligar",evoLevel:2,eggGroups:["Bug"]},
mamoswine:{num:473,species:"Mamoswine",types:["Ice","Ground"],baseStats:{hp:110,atk:130,def:80,spa:70,spd:60,spe:80},abilities:{0:"Oblivious",1:"Snow Cloak",DW:"Thick 

Fat"},heightm:2.5,weightkg:291,color:"Brown",prevo:"piloswine",evoLevel:34,evoMove:"AncientPower",eggGroups:["Flying"]},
porygonz:{num:474,species:"Porygon-Z",types:["Ghost"],gender:"N",baseStats:{hp:85,atk:80,def:70,spa:135,spd:75,spe:90},abilities:

{0:"Adaptability",1:"Download",DW:"Analytic"},heightm:0.9,weightkg:34,color:"Red",prevo:"porygon2",evoLevel:1,eggGroups:["Mineral"]},
gallade:{num:475,species:"Gallade",types:["Psychic","Fighting"],gender:"M",baseStats:{hp:68,atk:125,def:65,spa:65,spd:115,spe:80},abilities:

{0:"Steadfast",DW:"Justified"},heightm:1.6,weightkg:52,color:"White",prevo:"kirlia",evoLevel:20,eggGroups:["Indeterminate"]},
probopass:{num:476,species:"Probopass",types:["Rock","Steel"],baseStats:{hp:60,atk:55,def:145,spa:75,spd:150,spe:40},abilities:{0:"Sturdy",1:"Magnet Pull",DW:"Sand 

Force"},heightm:1.4,weightkg:340,color:"Gray",prevo:"nosepass",evoLevel:2,eggGroups:["Mineral"]},
dusknoir:{num:477,species:"Dusknoir",types:["Ghost"],baseStats:{hp:45,atk:100,def:135,spa:65,spd:135,spe:45},abilities:{0:"Pressure"},heightm:2.2,weightkg:106.6,color:"Black",prevo:"dusclops",evoLevel:37,eggGroups:["Indeterminate"]},
froslass:{num:478,species:"Froslass",types:["Ice","Ghost"],gender:"F",baseStats:{hp:70,atk:80,def:70,spa:80,spd:70,spe:110},abilities:{0:"Snow Cloak",DW:"Cursed 

Body"},heightm:1.3,weightkg:26.6,color:"White",prevo:"snorunt",evoLevel:1,eggGroups:["Fairy","Mineral"]},
rotom:{num:479,species:"Rotom",types:["Electric","Ghost"],gender:"N",baseStats:{hp:50,atk:50,def:77,spa:95,spd:77,spe:91},abilities:{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Red",eggGroups:["Indeterminate"],otherFormes:

["rotomheat","rotomwash","rotomfrost","rotomfan","rotommow"]},
rotomheat:{num:479,species:"Rotom-Heat",baseSpecies:"Rotom",forme:"Heat",formeLetter:"H",types:["Electric","Fire"],gender:"N",baseStats:{hp:50,atk:65,def:107,spa:105,spd:107,spe:86},abilities:

{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Red",eggGroups:["Indeterminate"]},
rotomwash:{num:479,species:"Rotom-Wash",baseSpecies:"Rotom",forme:"Wash",formeLetter:"W",types:["Electric","Water"],gender:"N",baseStats:{hp:50,atk:65,def:107,spa:105,spd:107,spe:86},abilities:

{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Red",eggGroups:["Indeterminate"]},
rotomfrost:{num:479,species:"Rotom-Frost",baseSpecies:"Rotom",forme:"Frost",formeLetter:"F",types:["Electric","Ice"],gender:"N",baseStats:{hp:50,atk:65,def:107,spa:105,spd:107,spe:86},abilities:

{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Red",eggGroups:["Indeterminate"]},
rotomfan:{num:479,species:"Rotom-Fan",baseSpecies:"Rotom",forme:"Fan",formeLetter:"S",types:["Electric","Flying"],gender:"N",baseStats:{hp:50,atk:65,def:107,spa:105,spd:107,spe:86},abilities:

{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Red",eggGroups:["Indeterminate"]},
rotommow:{num:479,species:"Rotom-Mow",baseSpecies:"Rotom",forme:"Mow",formeLetter:"C",types:["Electric","Grass"],gender:"N",baseStats:{hp:50,atk:65,def:107,spa:105,spd:107,spe:86},abilities:

{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Red",eggGroups:["Indeterminate"]},
uxie:{num:480,species:"Uxie",types:["Fighting"],gender:"N",baseStats:{hp:75,atk:75,def:130,spa:75,spd:130,spe:95},abilities:{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Yellow",eggGroups:["No Eggs"]},
mesprit:{num:481,species:"Mesprit",types:["Fighting"],gender:"N",baseStats:{hp:80,atk:105,def:105,spa:105,spd:105,spe:80},abilities:{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Pink",eggGroups:["No Eggs"]},
azelf:{num:482,species:"Azelf",types:["Fighting"],gender:"N",baseStats:{hp:75,atk:125,def:70,spa:125,spd:70,spe:115},abilities:{0:"Levitate"},heightm:0.3,weightkg:0.3,color:"Blue",eggGroups:["No Eggs"]},
dialga:{num:483,species:"Dialga",types:["Steel","Dragon"],gender:"N",baseStats:{hp:100,atk:120,def:120,spa:150,spd:100,spe:90},abilities:{0:"Pressure",DW:"Telepathy"},heightm:5.4,weightkg:683,color:"White",eggGroups:["No Eggs"]},
palkia:{num:484,species:"Palkia",types:["Water","Dragon"],gender:"N",baseStats:{hp:90,atk:120,def:100,spa:150,spd:120,spe:100},abilities:{0:"Pressure",DW:"Telepathy"},heightm:4.2,weightkg:336,color:"Purple",eggGroups:["No Eggs"]},
heatran:{num:485,species:"Heatran",types:["Fire","Steel"],baseStats:{hp:91,atk:90,def:106,spa:130,spd:106,spe:77},abilities:{0:"Flash Fire",DW:"Flame Body"},heightm:1.7,weightkg:430,color:"Brown",eggGroups:["No Eggs"]},
regigigas:{num:486,species:"Regigigas",types:["Ghost"],gender:"N",baseStats:{hp:110,atk:160,def:110,spa:80,spd:110,spe:100},abilities:{0:"Slow Start"},heightm:3.7,weightkg:420,color:"White",eggGroups:["No Eggs"]},
giratina:{num:487,species:"Giratina",baseForme:"Altered",types:["Ghost","Dragon"],gender:"N",baseStats:{hp:150,atk:100,def:120,spa:100,spd:120,spe:90},abilities:

{0:"Pressure",DW:"Telepathy"},heightm:4.5,weightkg:750,color:"Black",eggGroups:["No Eggs"],otherFormes:["giratinaorigin"]},
giratinaorigin:{num:487,species:"Giratina-Origin",baseSpecies:"Giratina",forme:"Origin",formeLetter:"O",types:["Ghost","Dragon"],gender:"N",baseStats:{hp:150,atk:120,def:100,spa:120,spd:100,spe:90},abilities:

{0:"Levitate"},heightm:6.9,weightkg:650,color:"Black",eggGroups:["No Eggs"]},
cresselia:{num:488,species:"Cresselia",types:["Fighting"],gender:"F",baseStats:{hp:120,atk:70,def:120,spa:75,spd:130,spe:85},abilities:{0:"Levitate"},heightm:1.5,weightkg:85.6,color:"Yellow",eggGroups:["No Eggs"]},
phione:{num:489,species:"Phione",types:["Water"],gender:"N",baseStats:{hp:80,atk:80,def:80,spa:80,spd:80,spe:80},abilities:{0:"Hydration"},heightm:0.4,weightkg:3.1,color:"Blue",eggGroups:["Water 1","Fairy"]},
manaphy:{num:490,species:"Manaphy",types:["Water"],gender:"N",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},abilities:{0:"Hydration"},heightm:0.3,weightkg:1.4,color:"Blue",eggGroups:["Water 1","Fairy"]},
darkrai:{num:491,species:"Darkrai",types:["Dark"],gender:"N",baseStats:{hp:70,atk:90,def:90,spa:135,spd:90,spe:125},abilities:{0:"Bad Dreams"},heightm:1.5,weightkg:50.5,color:"Black",eggGroups:["No Eggs"]},
shaymin:{num:492,species:"Shaymin",baseForme:"Land",types:["Grass"],gender:"N",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},abilities:{0:"Natural Cure"},heightm:0.2,weightkg:2.1,color:"Green",eggGroups:["No 

Eggs"],otherFormes:["shayminsky"]},
shayminsky:{num:492,species:"Shaymin-Sky",baseSpecies:"Shaymin",forme:"Sky",formeLetter:"S",types:["Grass","Flying"],gender:"N",baseStats:{hp:100,atk:103,def:75,spa:120,spd:75,spe:127},abilities:{0:"Serene 

Grace"},heightm:0.4,weightkg:5.2,color:"Green",eggGroups:["No Eggs"]},
arceus:{num:493,species:"Arceus",baseForme:"Normal",types:["Ghost"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"],otherFormes:

["arceusbug","arceusdark","arceusdragon","arceuselectric","arceusfighting","arceusfire","arceusflying","arceusghost","arceusgrass","arceusground","arceusice","arceuspoison","arceuspsychic","arceusrock","arceussteel","arceuswater"]},
arceusbug:{num:493,species:"Arceus-Bug",baseSpecies:"Arceus",forme:"Bug",formeLetter:"B",types:["Bug"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusdark:{num:493,species:"Arceus-Dark",baseSpecies:"Arceus",forme:"Dark",formeLetter:"D",types:["Dark"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusdragon:{num:493,species:"Arceus-Dragon",baseSpecies:"Arceus",forme:"Dragon",formeLetter:"D",types:["Dragon"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceuselectric:{num:493,species:"Arceus-Electric",baseSpecies:"Arceus",forme:"Electric",formeLetter:"E",types:["Electric"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusfighting:{num:493,species:"Arceus-Fighting",baseSpecies:"Arceus",forme:"Fighting",formeLetter:"F",types:["Fighting"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusfire:{num:493,species:"Arceus-Fire",baseSpecies:"Arceus",forme:"Fire",formeLetter:"F",types:["Fire"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusflying:{num:493,species:"Arceus-Flying",baseSpecies:"Arceus",forme:"Flying",formeLetter:"F",types:["Flying"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusghost:{num:493,species:"Arceus-Ghost",baseSpecies:"Arceus",forme:"Ghost",formeLetter:"G",types:["Ghost"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusgrass:{num:493,species:"Arceus-Grass",baseSpecies:"Arceus",forme:"Grass",formeLetter:"G",types:["Grass"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusground:{num:493,species:"Arceus-Ground",baseSpecies:"Arceus",forme:"Ground",formeLetter:"G",types:["Flying"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusice:{num:493,species:"Arceus-Ice",baseSpecies:"Arceus",forme:"Ice",formeLetter:"I",types:["Ice"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceuspoison:{num:493,species:"Arceus-Poison",baseSpecies:"Arceus",forme:"Poison",formeLetter:"P",types:["Poison"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceuspsychic:{num:493,species:"Arceus-Psychic",baseSpecies:"Arceus",forme:"Psychic",formeLetter:"P",types:["Fighting"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusrock:{num:493,species:"Arceus-Rock",baseSpecies:"Arceus",forme:"Rock",formeLetter:"R",types:["Rock"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceussteel:{num:493,species:"Arceus-Steel",baseSpecies:"Arceus",forme:"Steel",formeLetter:"S",types:["Steel"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceuswater:{num:493,species:"Arceus-Water",baseSpecies:"Arceus",forme:"Water",formeLetter:"W",types:["Water"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
arceusunknown:{num:493,species:"Arceus-???",speciesid:"arceusunknown",baseSpecies:"Arceus",forme:"???",formeLetter:"?",types:["???"],gender:"N",baseStats:{hp:120,atk:120,def:120,spa:120,spd:120,spe:120},abilities:

{0:"Multitype"},heightm:3.2,weightkg:320,color:"Gray",eggGroups:["No Eggs"]},
victini:{num:494,species:"Victini",types:["Psychic","Fire"],gender:"N",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},abilities:{0:"Victory Star"},heightm:0.4,weightkg:4,color:"Yellow",eggGroups:["No Eggs"]},
snivy:{num:495,species:"Snivy",types:["Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:45,atk:45,def:55,spa:45,spd:55,spe:63},abilities:{0:"Overgrow",DW:"Contrary"},heightm:0.6,weightkg:8.1,color:"Green",evos:["servine"],eggGroups:

["Ground","Plant"]},
servine:{num:496,species:"Servine",types:["Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:60,def:75,spa:60,spd:75,spe:83},abilities:{0:"Overgrow",DW:"Contrary"},heightm:0.8,weightkg:16,color:"Green",prevo:"snivy",evos:

["serperior"],evoLevel:17,eggGroups:["Ground","Plant"]},
serperior:{num:497,species:"Serperior",types:["Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:75,def:95,spa:75,spd:95,spe:113},abilities:

{0:"Overgrow",DW:"Contrary"},heightm:3.3,weightkg:63,color:"Green",prevo:"servine",evoLevel:36,eggGroups:["Ground","Plant"]},
tepig:{num:498,species:"Tepig",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:63,def:45,spa:45,spd:45,spe:45},abilities:{0:"Blaze",DW:"Thick Fat"},heightm:0.5,weightkg:9.9,color:"Red",evos:["pignite"],eggGroups:

["Flying"]},
pignite:{num:499,species:"Pignite",types:["Fire","Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:90,atk:93,def:55,spa:70,spd:55,spe:55},abilities:{0:"Blaze",DW:"Thick Fat"},heightm:1,weightkg:55.5,color:"Red",prevo:"tepig",evos:

["emboar"],evoLevel:17,eggGroups:["Flying"]},
emboar:{num:500,species:"Emboar",types:["Fire","Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:110,atk:123,def:65,spa:100,spd:65,spe:65},abilities:

{0:"Blaze",DW:"Reckless"},heightm:1.6,weightkg:150,color:"Red",prevo:"pignite",evoLevel:36,eggGroups:["Flying"]},
oshawott:{num:501,species:"Oshawott",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:55,atk:55,def:45,spa:63,spd:45,spe:45},abilities:{0:"Torrent",DW:"Shell Armor"},heightm:0.5,weightkg:5.9,color:"Blue",evos:

["dewott"],eggGroups:["Flying"]},
dewott:{num:502,species:"Dewott",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:75,def:60,spa:83,spd:60,spe:60},abilities:{0:"Torrent",DW:"Shell Armor"},heightm:0.8,weightkg:24.5,color:"Blue",prevo:"oshawott",evos:

["samurott"],evoLevel:17,eggGroups:["Flying"]},
samurott:{num:503,species:"Samurott",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:95,atk:100,def:85,spa:108,spd:70,spe:70},abilities:{0:"Torrent",DW:"Shell 

Armor"},heightm:1.5,weightkg:94.6,color:"Blue",prevo:"dewott",evoLevel:36,eggGroups:["Flying"]},
patrat:{num:504,species:"Patrat",types:["Ghost"],baseStats:{hp:45,atk:55,def:39,spa:35,spd:39,spe:42},abilities:{0:"Run Away",1:"Keen Eye",DW:"Analytic"},heightm:0.5,weightkg:11.6,color:"Brown",evos:["watchog"],eggGroups:["Flying"]},
watchog:{num:505,species:"Watchog",types:["Ghost"],baseStats:{hp:60,atk:85,def:69,spa:60,spd:69,spe:77},abilities:{0:"Illuminate",1:"Keen Eye",DW:"Analytic"},heightm:1.1,weightkg:27,color:"Brown",prevo:"patrat",evoLevel:20,eggGroups:

["Flying"]},
lillipup:{num:506,species:"Lillipup",types:["Ghost"],baseStats:{hp:45,atk:60,def:45,spa:25,spd:45,spe:55},abilities:{0:"Vital Spirit",1:"Pickup",DW:"Run Away"},heightm:0.4,weightkg:4.1,color:"Brown",evos:["herdier"],eggGroups:

["Flying"]},
herdier:{num:507,species:"Herdier",types:["Ghost"],baseStats:{hp:65,atk:80,def:65,spa:35,spd:65,spe:60},abilities:{0:"Intimidate",1:"Sand Rush",DW:"Scrappy"},heightm:0.9,weightkg:14.7,color:"Gray",prevo:"lillipup",evos:

["stoutland"],evoLevel:16,eggGroups:["Flying"]},
stoutland:{num:508,species:"Stoutland",types:["Ghost"],baseStats:{hp:85,atk:100,def:90,spa:45,spd:90,spe:80},abilities:{0:"Intimidate",1:"Sand 

Rush",DW:"Scrappy"},heightm:1.2,weightkg:61,color:"Gray",prevo:"herdier",evoLevel:32,eggGroups:["Flying"]},
purrloin:{num:509,species:"Purrloin",types:["Dark"],baseStats:{hp:41,atk:50,def:37,spa:50,spd:37,spe:66},abilities:{0:"Limber",1:"Unburden",DW:"Prankster"},heightm:0.4,weightkg:10.1,color:"Purple",evos:["liepard"],eggGroups:["Flying"]},
liepard:{num:510,species:"Liepard",types:["Dark"],baseStats:{hp:64,atk:88,def:50,spa:88,spd:50,spe:106},abilities:{0:"Limber",1:"Unburden",DW:"Prankster"},heightm:1.1,weightkg:37.5,color:"Purple",prevo:"purrloin",evoLevel:20,eggGroups:

["Flying"]},
pansage:{num:511,species:"Pansage",types:["Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:50,atk:53,def:48,spa:53,spd:48,spe:64},abilities:{0:"Gluttony",DW:"Overgrow"},heightm:0.6,weightkg:10.5,color:"Green",evos:

["simisage"],eggGroups:["Flying"]},
simisage:{num:512,species:"Simisage",types:["Grass"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:98,def:63,spa:98,spd:63,spe:101},abilities:

{0:"Gluttony",DW:"Overgrow"},heightm:1.1,weightkg:30.5,color:"Green",prevo:"pansage",evoLevel:1,eggGroups:["Flying"]},
pansear:{num:513,species:"Pansear",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:50,atk:53,def:48,spa:53,spd:48,spe:64},abilities:{0:"Gluttony",DW:"Blaze"},heightm:0.6,weightkg:11,color:"Red",evos:["simisear"],eggGroups:

["Flying"]},
simisear:{num:514,species:"Simisear",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:98,def:63,spa:98,spd:63,spe:101},abilities:

{0:"Gluttony",DW:"Blaze"},heightm:1,weightkg:28,color:"Red",prevo:"pansear",evoLevel:1,eggGroups:["Flying"]},
panpour:{num:515,species:"Panpour",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:50,atk:53,def:48,spa:53,spd:48,spe:64},abilities:{0:"Gluttony",DW:"Torrent"},heightm:0.6,weightkg:13.5,color:"Blue",evos:

["simipour"],eggGroups:["Flying"]},
simipour:{num:516,species:"Simipour",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:98,def:63,spa:98,spd:63,spe:101},abilities:

{0:"Gluttony",DW:"Torrent"},heightm:1,weightkg:29,color:"Blue",prevo:"panpour",evoLevel:1,eggGroups:["Flying"]},
munna:{num:517,species:"Munna",types:["Fighting"],baseStats:{hp:76,atk:25,def:45,spa:67,spd:55,spe:24},abilities:{0:"Forewarn",1:"Synchronize",DW:"Telepathy"},heightm:0.6,weightkg:23.3,color:"Pink",evos:["musharna"],eggGroups:

["Flying"]},
musharna:{num:518,species:"Musharna",types:["Fighting"],baseStats:{hp:116,atk:55,def:85,spa:107,spd:95,spe:29},abilities:

{0:"Forewarn",1:"Synchronize",DW:"Telepathy"},heightm:1.1,weightkg:60.5,color:"Pink",prevo:"munna",evoLevel:1,eggGroups:["Flying"]},
pidove:{num:519,species:"Pidove",types:["Ground","Ghost"],baseStats:{hp:50,atk:55,def:50,spa:36,spd:30,spe:43},abilities:{0:"Big Pecks",1:"Super Luck",DW:"Rivalry"},heightm:0.3,weightkg:2.1,color:"Gray",evos:["tranquill"],eggGroups:

["Flying"]},
tranquill:{num:520,species:"Tranquill",types:["Ground","Ghost"],baseStats:{hp:62,atk:77,def:62,spa:50,spd:42,spe:65},abilities:{0:"Big Pecks",1:"Super Luck",DW:"Rivalry"},heightm:0.6,weightkg:15,color:"Gray",prevo:"pidove",evos:

["unfezant"],evoLevel:21,eggGroups:["Flying"]},
unfezant:{num:521,species:"Unfezant",types:["Ground","Ghost"],baseStats:{hp:80,atk:105,def:80,spa:65,spd:55,spe:93},abilities:{0:"Big Pecks",1:"Super 

Luck",DW:"Rivalry"},heightm:1.2,weightkg:29,color:"Gray",prevo:"tranquill",evoLevel:32,eggGroups:["Flying"]},
blitzle:{num:522,species:"Blitzle",types:["Electric"],baseStats:{hp:45,atk:60,def:32,spa:50,spd:32,spe:76},abilities:{0:"Lightningrod",1:"Motor Drive",DW:"Sap Sipper"},heightm:0.8,weightkg:29.8,color:"Black",evos:

["zebstrika"],eggGroups:["Flying"]},
zebstrika:{num:523,species:"Zebstrika",types:["Electric"],baseStats:{hp:75,atk:100,def:63,spa:80,spd:63,spe:116},abilities:{0:"Lightningrod",1:"Motor Drive",DW:"Sap 

Sipper"},heightm:1.6,weightkg:79.5,color:"Black",prevo:"blitzle",evoLevel:27,eggGroups:["Flying"]},
roggenrola:{num:524,species:"Roggenrola",types:["Rock"],baseStats:{hp:55,atk:75,def:85,spa:25,spd:25,spe:15},abilities:{0:"Sturdy",DW:"Sand Force"},heightm:0.4,weightkg:18,color:"Blue",evos:["boldore"],eggGroups:["Mineral"]},
boldore:{num:525,species:"Boldore",types:["Rock"],baseStats:{hp:70,atk:105,def:105,spa:50,spd:40,spe:20},abilities:{0:"Sturdy",DW:"Sand Force"},heightm:0.9,weightkg:102,color:"Blue",prevo:"roggenrola",evos:

["gigalith"],evoLevel:25,eggGroups:["Mineral"]},
gigalith:{num:526,species:"Gigalith",types:["Rock"],baseStats:{hp:85,atk:135,def:130,spa:60,spd:70,spe:25},abilities:{0:"Sturdy",DW:"Sand Force"},heightm:1.7,weightkg:260,color:"Blue",prevo:"boldore",evoLevel:25,eggGroups:["Mineral"]},
woobat:{num:527,species:"Woobat",types:["Psychic","Flying"],baseStats:{hp:55,atk:45,def:43,spa:55,spd:43,spe:72},abilities:{0:"Unaware",1:"Klutz",DW:"Simple"},heightm:0.4,weightkg:2.1,color:"Blue",evos:["swoobat"],eggGroups:

["Flying","Ground"]},
swoobat:{num:528,species:"Swoobat",types:["Psychic","Flying"],baseStats:{hp:67,atk:57,def:55,spa:77,spd:55,spe:114},abilities:

{0:"Unaware",1:"Klutz",DW:"Simple"},heightm:0.9,weightkg:10.5,color:"Blue",prevo:"woobat",evoLevel:2,eggGroups:["Flying","Ground"]},
drilbur:{num:529,species:"Drilbur",types:["Flying"],baseStats:{hp:60,atk:85,def:40,spa:30,spd:45,spe:68},abilities:{0:"Sand Rush",1:"Sand Force",DW:"Mold Breaker"},heightm:0.3,weightkg:8.5,color:"Gray",evos:["excadrill"],eggGroups:

["Flying"]},
excadrill:{num:530,species:"Excadrill",types:["Ground","Steel"],baseStats:{hp:110,atk:135,def:60,spa:50,spd:65,spe:88},abilities:{0:"Sand Rush",1:"Sand Force",DW:"Mold 

Breaker"},heightm:0.7,weightkg:40.4,color:"Gray",prevo:"drilbur",evoLevel:31,eggGroups:["Flying"]},
audino:{num:531,species:"Audino",types:["Ghost"],baseStats:{hp:103,atk:60,def:86,spa:60,spd:86,spe:50},abilities:{0:"Healer",1:"Regenerator",DW:"Klutz"},heightm:1.1,weightkg:31,color:"Pink",eggGroups:["Fairy"]},
timburr:{num:532,species:"Timburr",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:75,atk:80,def:55,spa:25,spd:35,spe:35},abilities:{0:"Guts",1:"Sheer Force",DW:"Iron Fist"},heightm:0.6,weightkg:12.5,color:"Gray",evos:

["gurdurr"],eggGroups:["Humanshape"]},
gurdurr:{num:533,species:"Gurdurr",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:85,atk:105,def:85,spa:40,spd:50,spe:40},abilities:{0:"Guts",1:"Sheer Force",DW:"Iron 

Fist"},heightm:1.2,weightkg:40,color:"Gray",prevo:"timburr",evos:["conkeldurr"],evoLevel:25,eggGroups:["Humanshape"]},
conkeldurr:{num:534,species:"Conkeldurr",types:["Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:105,atk:140,def:95,spa:55,spd:65,spe:45},abilities:{0:"Guts",1:"Sheer Force",DW:"Iron 

Fist"},heightm:1.4,weightkg:87,color:"Brown",prevo:"gurdurr",evoLevel:25,eggGroups:["Humanshape"]},
tympole:{num:535,species:"Tympole",types:["Water"],baseStats:{hp:50,atk:50,def:40,spa:50,spd:40,spe:64},abilities:{0:"Swift Swim",1:"Hydration",DW:"Water Absorb"},heightm:0.5,weightkg:4.5,color:"Blue",evos:["palpitoad"],eggGroups:["Water 

1"]},
palpitoad:{num:536,species:"Palpitoad",types:["Water","Ground"],baseStats:{hp:75,atk:65,def:55,spa:65,spd:55,spe:69},abilities:{0:"Swift Swim",1:"Hydration",DW:"Water Absorb"},heightm:0.8,weightkg:17,color:"Blue",prevo:"tympole",evos:

["seismitoad"],evoLevel:25,eggGroups:["Water 1"]},
seismitoad:{num:537,species:"Seismitoad",types:["Water","Ground"],baseStats:{hp:105,atk:85,def:75,spa:85,spd:75,spe:74},abilities:{0:"Swift Swim",1:"Poison Touch",DW:"Water 

Absorb"},heightm:1.5,weightkg:62,color:"Blue",prevo:"palpitoad",evoLevel:36,eggGroups:["Water 1"]},
throh:{num:538,species:"Throh",types:["Fighting"],gender:"M",baseStats:{hp:120,atk:100,def:85,spa:30,spd:85,spe:45},abilities:{0:"Guts",1:"Inner Focus",DW:"Mold Breaker"},heightm:1.3,weightkg:55.5,color:"Red",eggGroups:["Humanshape"]},
sawk:{num:539,species:"Sawk",types:["Fighting"],gender:"M",baseStats:{hp:75,atk:125,def:75,spa:30,spd:75,spe:85},abilities:{0:"Sturdy",1:"Inner Focus",DW:"Mold Breaker"},heightm:1.4,weightkg:51,color:"Blue",eggGroups:["Humanshape"]},
sewaddle:{num:540,species:"Sewaddle",types:["Bug","Grass"],baseStats:{hp:45,atk:53,def:70,spa:40,spd:60,spe:42},abilities:{0:"Swarm",1:"Chlorophyll",DW:"Overcoat"},heightm:0.3,weightkg:2.5,color:"Yellow",evos:["swadloon"],eggGroups:

["Bug"]},
swadloon:{num:541,species:"Swadloon",types:["Bug","Grass"],baseStats:{hp:55,atk:63,def:90,spa:50,spd:80,spe:42},abilities:{0:"Leaf Guard",1:"Chlorophyll",DW:"Overcoat"},heightm:0.5,weightkg:7.3,color:"Green",prevo:"sewaddle",evos:

["leavanny"],evoLevel:20,eggGroups:["Bug"]},
leavanny:{num:542,species:"Leavanny",types:["Bug","Grass"],baseStats:{hp:75,atk:103,def:80,spa:70,spd:70,spe:92},abilities:

{0:"Swarm",1:"Chlorophyll",DW:"Overcoat"},heightm:1.2,weightkg:20.5,color:"Yellow",prevo:"swadloon",evoLevel:21,eggGroups:["Bug"]},
venipede:{num:543,species:"Venipede",types:["Bug","Poison"],baseStats:{hp:30,atk:45,def:59,spa:30,spd:39,spe:57},abilities:{0:"Poison Point",1:"Swarm",DW:"Quick Feet"},heightm:0.4,weightkg:5.3,color:"Red",evos:["whirlipede"],eggGroups:

["Bug"]},
whirlipede:{num:544,species:"Whirlipede",types:["Bug","Poison"],baseStats:{hp:40,atk:55,def:99,spa:40,spd:79,spe:47},abilities:{0:"Poison Point",1:"Swarm",DW:"Quick Feet"},heightm:1.2,weightkg:58.5,color:"Gray",prevo:"venipede",evos:

["scolipede"],evoLevel:22,eggGroups:["Bug"]},
scolipede:{num:545,species:"Scolipede",types:["Bug","Poison"],baseStats:{hp:60,atk:90,def:89,spa:55,spd:69,spe:112},abilities:{0:"Poison Point",1:"Swarm",DW:"Quick 

Feet"},heightm:2.5,weightkg:200.5,color:"Red",prevo:"whirlipede",evoLevel:30,eggGroups:["Bug"]},
cottonee:{num:546,species:"Cottonee",types:["Grass"],baseStats:{hp:40,atk:27,def:60,spa:37,spd:50,spe:66},abilities:{0:"Prankster",1:"Infiltrator",DW:"Chlorophyll"},heightm:0.3,weightkg:0.6,color:"Green",evos:["whimsicott"],eggGroups:

["Fairy","Plant"]},
whimsicott:{num:547,species:"Whimsicott",types:["Grass"],baseStats:{hp:60,atk:67,def:85,spa:77,spd:75,spe:116},abilities:

{0:"Prankster",1:"Infiltrator",DW:"Chlorophyll"},heightm:0.7,weightkg:6.6,color:"Green",prevo:"cottonee",evoLevel:1,eggGroups:["Fairy","Plant"]},
petilil:{num:548,species:"Petilil",types:["Grass"],gender:"F",baseStats:{hp:45,atk:35,def:50,spa:70,spd:50,spe:30},abilities:{0:"Chlorophyll",1:"Own Tempo",DW:"Leaf Guard"},heightm:0.5,weightkg:6.6,color:"Green",evos:

["lilligant"],eggGroups:["Plant"]},
lilligant:{num:549,species:"Lilligant",types:["Grass"],gender:"F",baseStats:{hp:70,atk:60,def:75,spa:110,spd:75,spe:90},abilities:{0:"Chlorophyll",1:"Own Tempo",DW:"Leaf 

Guard"},heightm:1.1,weightkg:16.3,color:"Green",prevo:"petilil",evoLevel:1,eggGroups:["Plant"]},
basculin:{num:550,species:"Basculin",baseForme:"Red-Striped",types:["Water"],baseStats:{hp:70,atk:92,def:65,spa:80,spd:55,spe:98},abilities:{0:"Reckless",1:"Adaptability",DW:"Mold Breaker"},heightm:1,weightkg:18,color:"Green",eggGroups:

["Water 2"],otherFormes:["basculinbluestriped"]},
basculinbluestriped:{num:550,species:"Basculin-Blue-Striped",baseSpecies:"Basculin",forme:"Blue-Striped",formeLetter:"B",types:["Water"],baseStats:{hp:70,atk:92,def:65,spa:80,spd:55,spe:98},abilities:{0:"Rock 

Head",1:"Adaptability",DW:"Mold Breaker"},heightm:1,weightkg:18,color:"Green",eggGroups:["Water 2"]},
sandile:{num:551,species:"Sandile",types:["Ground","Dark"],baseStats:{hp:50,atk:72,def:35,spa:35,spd:35,spe:65},abilities:{0:"Intimidate",1:"Moxie",DW:"Anger Point"},heightm:0.7,weightkg:15.2,color:"Brown",evos:["krokorok"],eggGroups:

["Flying"]},
krokorok:{num:552,species:"Krokorok",types:["Ground","Dark"],baseStats:{hp:60,atk:82,def:45,spa:45,spd:45,spe:74},abilities:{0:"Intimidate",1:"Moxie",DW:"Anger Point"},heightm:1,weightkg:33.4,color:"Brown",prevo:"sandile",evos:

["krookodile"],evoLevel:29,eggGroups:["Flying"]},
krookodile:{num:553,species:"Krookodile",types:["Ground","Dark"],baseStats:{hp:95,atk:117,def:70,spa:65,spd:70,spe:92},abilities:{0:"Intimidate",1:"Moxie",DW:"Anger 

Point"},heightm:1.5,weightkg:96.3,color:"Red",prevo:"krokorok",evoLevel:40,eggGroups:["Flying"]},
darumaka:{num:554,species:"Darumaka",types:["Fire"],baseStats:{hp:70,atk:90,def:45,spa:15,spd:45,spe:50},abilities:{0:"Hustle",DW:"Inner Focus"},heightm:0.6,weightkg:37.5,color:"Red",evos:["darmanitan"],eggGroups:["Flying"]},
darmanitan:{num:555,species:"Darmanitan",baseForme:"Standard",types:["Fire"],baseStats:{hp:105,atk:140,def:55,spa:30,spd:55,spe:95},abilities:{0:"Sheer Force",DW:"Zen 

Mode"},heightm:1.3,weightkg:92.9,color:"Red",prevo:"darumaka",evoLevel:35,eggGroups:["Flying"],otherFormes:["darmanitanzen"]},
darmanitanzen:{num:555,species:"Darmanitan-Zen",baseSpecies:"Darmanitan",forme:"Zen",formeLetter:"Z",types:["Fire","Psychic"],baseStats:{hp:105,atk:30,def:105,spa:140,spd:105,spe:55},abilities:{0:"Sheer Force",DW:"Zen 

Mode"},heightm:1.3,weightkg:92.9,color:"Red",prevo:"darumaka",evoLevel:35,eggGroups:["Flying"]},
maractus:{num:556,species:"Maractus",types:["Grass"],baseStats:{hp:75,atk:86,def:67,spa:106,spd:67,spe:60},abilities:{0:"Water Absorb",1:"Chlorophyll",DW:"Storm Drain"},heightm:1,weightkg:28,color:"Green",eggGroups:["Plant"]},
dwebble:{num:557,species:"Dwebble",types:["Bug","Rock"],baseStats:{hp:50,atk:65,def:85,spa:35,spd:35,spe:55},abilities:{0:"Sturdy",1:"Shell Armor",DW:"Weak Armor"},heightm:0.3,weightkg:14.5,color:"Red",evos:["crustle"],eggGroups:

["Bug","Mineral"]},
crustle:{num:558,species:"Crustle",types:["Bug","Rock"],baseStats:{hp:70,atk:95,def:125,spa:65,spd:75,spe:45},abilities:{0:"Sturdy",1:"Shell Armor",DW:"Weak 

Armor"},heightm:1.4,weightkg:200,color:"Red",prevo:"dwebble",evoLevel:34,eggGroups:["Bug","Mineral"]},
scraggy:{num:559,species:"Scraggy",types:["Dark","Fighting"],baseStats:{hp:50,atk:75,def:70,spa:35,spd:70,spe:48},abilities:{0:"Shed Skin",1:"Moxie",DW:"Intimidate"},heightm:0.6,weightkg:11.8,color:"Yellow",evos:["scrafty"],eggGroups:

["Ground","Dragon"]},
scrafty:{num:560,species:"Scrafty",types:["Dark","Fighting"],baseStats:{hp:65,atk:90,def:115,spa:45,spd:115,spe:58},abilities:{0:"Shed 

Skin",1:"Moxie",DW:"Intimidate"},heightm:1.1,weightkg:30,color:"Red",prevo:"scraggy",evoLevel:39,eggGroups:["Ground","Dragon"]},
sigilyph:{num:561,species:"Sigilyph",types:["Psychic","Flying"],baseStats:{hp:72,atk:58,def:80,spa:103,spd:80,spe:97},abilities:{0:"Wonder Skin",1:"Magic Guard",DW:"Tinted Lens"},heightm:1.4,weightkg:14,color:"Black",eggGroups:

["Flying"]},
yamask:{num:562,species:"Yamask",types:["Ghost"],baseStats:{hp:38,atk:30,def:85,spa:55,spd:65,spe:30},abilities:{0:"Mummy"},heightm:0.5,weightkg:1.5,color:"Black",evos:["cofagrigus"],eggGroups:["Mineral","Indeterminate"]},
cofagrigus:{num:563,species:"Cofagrigus",types:["Ghost"],baseStats:{hp:58,atk:50,def:145,spa:95,spd:105,spe:30},abilities:{0:"Mummy"},heightm:1.7,weightkg:76.5,color:"Yellow",prevo:"yamask",evoLevel:34,eggGroups:

["Mineral","Indeterminate"]},
tirtouga:{num:564,species:"Tirtouga",types:["Water","Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:54,atk:78,def:103,spa:53,spd:45,spe:22},abilities:{0:"Solid Rock",1:"Sturdy",DW:"Swift 

Swim"},heightm:0.7,weightkg:16.5,color:"Blue",evos:["carracosta"],eggGroups:["Water 1","Water 3"]},
carracosta:{num:565,species:"Carracosta",types:["Water","Rock"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:74,atk:108,def:133,spa:83,spd:65,spe:32},abilities:{0:"Solid Rock",1:"Sturdy",DW:"Swift 

Swim"},heightm:1.2,weightkg:81,color:"Blue",prevo:"tirtouga",evoLevel:37,eggGroups:["Water 1","Water 3"]},
archen:{num:566,species:"Archen",types:["Rock","Flying"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:55,atk:112,def:45,spa:74,spd:45,spe:70},abilities:{0:"Defeatist"},heightm:0.5,weightkg:9.5,color:"Yellow",evos:["archeops"],eggGroups:

["Flying","Water 3"]},
archeops:{num:567,species:"Archeops",types:["Rock","Flying"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:140,def:65,spa:112,spd:65,spe:110},abilities:

{0:"Defeatist"},heightm:1.4,weightkg:32,color:"Yellow",prevo:"archen",evoLevel:37,eggGroups:["Flying","Water 3"]},
trubbish:{num:568,species:"Trubbish",types:["Poison"],baseStats:{hp:50,atk:50,def:62,spa:40,spd:62,spe:65},abilities:{0:"Stench",1:"Sticky Hold",DW:"Aftermath"},heightm:0.6,weightkg:31,color:"Green",evos:["garbodor"],eggGroups:

["Mineral"]},
garbodor:{num:569,species:"Garbodor",types:["Poison"],baseStats:{hp:80,atk:95,def:82,spa:60,spd:82,spe:75},abilities:{0:"Stench",1:"Weak 

Armor",DW:"Aftermath"},heightm:1.9,weightkg:107.3,color:"Green",prevo:"trubbish",evoLevel:36,eggGroups:["Mineral"]},
zorua:{num:570,species:"Zorua",types:["Dark"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:40,atk:65,def:40,spa:80,spd:40,spe:65},abilities:{0:"Illusion"},heightm:0.7,weightkg:12.5,color:"Gray",evos:["zoroark"],eggGroups:["Flying"]},
zoroark:{num:571,species:"Zoroark",types:["Dark"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:105,def:60,spa:120,spd:60,spe:105},abilities:{0:"Illusion"},heightm:1.6,weightkg:81.1,color:"Gray",prevo:"zorua",evoLevel:30,eggGroups:

["Flying"]},
minccino:{num:572,species:"Minccino",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:55,atk:50,def:40,spa:40,spd:40,spe:75},abilities:{0:"Cute Charm",1:"Technician",DW:"Skill Link"},heightm:0.4,weightkg:5.8,color:"Gray",evos:

["cinccino"],eggGroups:["Flying"]},
cinccino:{num:573,species:"Cinccino",types:["Ghost"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:75,atk:95,def:60,spa:65,spd:60,spe:115},abilities:{0:"Cute Charm",1:"Technician",DW:"Skill 

Link"},heightm:0.5,weightkg:7.5,color:"Gray",prevo:"minccino",evoLevel:1,eggGroups:["Flying"]},
gothita:{num:574,species:"Gothita",types:["Fighting"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:45,atk:30,def:50,spa:55,spd:65,spe:45},abilities:{0:"Frisk",DW:"Shadow Tag"},heightm:0.4,weightkg:5.8,color:"Purple",evos:

["gothorita"],eggGroups:["Humanshape"]},
gothorita:{num:575,species:"Gothorita",types:["Fighting"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:60,atk:45,def:70,spa:75,spd:85,spe:55},abilities:{0:"Frisk",DW:"Shadow 

Tag"},heightm:0.7,weightkg:18,color:"Purple",prevo:"gothita",evos:["gothitelle"],evoLevel:32,eggGroups:["Humanshape"]},
gothitelle:{num:576,species:"Gothitelle",types:["Fighting"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:70,atk:55,def:95,spa:95,spd:110,spe:65},abilities:{0:"Frisk",DW:"Shadow 

Tag"},heightm:1.5,weightkg:44,color:"Purple",prevo:"gothorita",evoLevel:41,eggGroups:["Humanshape"]},
solosis:{num:577,species:"Solosis",types:["Fighting"],baseStats:{hp:45,atk:30,def:40,spa:105,spd:50,spe:20},abilities:{0:"Overcoat",1:"Magic Guard",DW:"Regenerator"},heightm:0.3,weightkg:1,color:"Green",evos:["duosion"],eggGroups:

["Indeterminate"]},
duosion:{num:578,species:"Duosion",types:["Fighting"],baseStats:{hp:65,atk:40,def:50,spa:125,spd:60,spe:30},abilities:{0:"Overcoat",1:"Magic Guard",DW:"Regenerator"},heightm:0.6,weightkg:8,color:"Green",prevo:"solosis",evos:

["reuniclus"],evoLevel:32,eggGroups:["Indeterminate"]},
reuniclus:{num:579,species:"Reuniclus",types:["Fighting"],baseStats:{hp:110,atk:65,def:75,spa:125,spd:85,spe:30},abilities:{0:"Overcoat",1:"Magic 

Guard",DW:"Regenerator"},heightm:1,weightkg:20.1,color:"Green",prevo:"duosion",evoLevel:41,eggGroups:["Indeterminate"]},
ducklett:{num:580,species:"Ducklett",types:["Water","Flying"],baseStats:{hp:62,atk:44,def:50,spa:44,spd:50,spe:55},abilities:{0:"Keen Eye",1:"Big Pecks",DW:"Hydration"},heightm:0.5,weightkg:5.5,color:"Blue",evos:["swanna"],eggGroups:

["Water 1","Flying"]},
swanna:{num:581,species:"Swanna",types:["Water","Flying"],baseStats:{hp:75,atk:87,def:63,spa:87,spd:63,spe:98},abilities:{0:"Keen Eye",1:"Big 

Pecks",DW:"Hydration"},heightm:1.3,weightkg:24.2,color:"White",prevo:"ducklett",evoLevel:35,eggGroups:["Water 1","Flying"]},
vanillite:{num:582,species:"Vanillite",types:["Ice"],baseStats:{hp:36,atk:50,def:50,spa:65,spd:60,spe:44},abilities:{0:"Ice Body",DW:"Weak Armor"},heightm:0.4,weightkg:5.7,color:"White",evos:["vanillish"],eggGroups:["Mineral"]},
vanillish:{num:583,species:"Vanillish",types:["Ice"],baseStats:{hp:51,atk:65,def:65,spa:80,spd:75,spe:59},abilities:{0:"Ice Body",DW:"Weak Armor"},heightm:1.1,weightkg:41,color:"White",prevo:"vanillite",evos:

["vanilluxe"],evoLevel:35,eggGroups:["Mineral"]},
vanilluxe:{num:584,species:"Vanilluxe",types:["Ice"],baseStats:{hp:71,atk:95,def:85,spa:110,spd:95,spe:79},abilities:{0:"Ice Body",DW:"Weak Armor"},heightm:1.3,weightkg:57.5,color:"White",prevo:"vanillish",evoLevel:47,eggGroups:

["Mineral"]},
deerling:{num:585,species:"Deerling",baseForme:"Spring",types:["Normal","Grass"],baseStats:{hp:60,atk:60,def:50,spa:40,spd:50,spe:75},abilities:{0:"Chlorophyll",1:"Sap Sipper",DW:"Serene 

Grace"},heightm:0.6,weightkg:19.5,color:"Yellow",evos:["sawsbuck"],eggGroups:["Flying"],otherForms:["deerlingsummer","deerlingautumn","deerlingwinter"]},
sawsbuck:{num:586,species:"Sawsbuck",baseForme:"Spring",types:["Normal","Grass"],baseStats:{hp:80,atk:100,def:70,spa:60,spd:70,spe:95},abilities:{0:"Chlorophyll",1:"Sap Sipper",DW:"Serene 

Grace"},heightm:1.9,weightkg:92.5,color:"Brown",prevo:"deerling",evoLevel:34,eggGroups:["Flying"],otherForms:["sawsbucksummer","sawsbuckautumn","sawsbuckwinter"]},
emolga:{num:587,species:"Emolga",types:["Electric","Flying"],baseStats:{hp:55,atk:75,def:60,spa:75,spd:60,spe:103},abilities:{0:"Static",DW:"Motor Drive"},heightm:0.4,weightkg:5,color:"White",eggGroups:["Flying"]},
karrablast:{num:588,species:"Karrablast",types:["Bug"],baseStats:{hp:50,atk:75,def:45,spa:40,spd:45,spe:60},abilities:{0:"Swarm",1:"Shed Skin",DW:"No Guard"},heightm:0.5,weightkg:5.9,color:"Blue",evos:["escavalier"],eggGroups:["Bug"]},
escavalier:{num:589,species:"Escavalier",types:["Bug","Steel"],baseStats:{hp:70,atk:135,def:105,spa:60,spd:105,spe:20},abilities:{0:"Swarm",1:"Shell 

Armor",DW:"Overcoat"},heightm:1,weightkg:33,color:"Gray",prevo:"karrablast",evoLevel:1,eggGroups:["Bug"]},
foongus:{num:590,species:"Foongus",types:["Grass","Poison"],baseStats:{hp:69,atk:55,def:45,spa:55,spd:55,spe:15},abilities:{0:"Effect Spore",DW:"Regenerator"},heightm:0.2,weightkg:1,color:"White",evos:["amoonguss"],eggGroups:["Plant"]},
amoonguss:{num:591,species:"Amoonguss",types:["Grass","Poison"],baseStats:{hp:114,atk:85,def:70,spa:85,spd:80,spe:30},abilities:{0:"Effect 

Spore",DW:"Regenerator"},heightm:0.6,weightkg:10.5,color:"White",prevo:"foongus",evoLevel:39,eggGroups:["Plant"]},
frillish:{num:592,species:"Frillish",types:["Water","Ghost"],baseStats:{hp:55,atk:40,def:50,spa:65,spd:85,spe:40},abilities:{0:"Water Absorb",1:"Cursed Body",DW:"Damp"},heightm:1.2,weightkg:33,color:"White",evos:["jellicent"],eggGroups:

["Indeterminate"]},
jellicent:{num:593,species:"Jellicent",types:["Water","Ghost"],baseStats:{hp:100,atk:60,def:70,spa:85,spd:105,spe:60},abilities:{0:"Water Absorb",1:"Cursed 

Body",DW:"Damp"},heightm:2.2,weightkg:135,color:"White",prevo:"frillish",evoLevel:40,eggGroups:["Indeterminate"]},
alomomola:{num:594,species:"Alomomola",types:["Water"],baseStats:{hp:165,atk:75,def:80,spa:40,spd:45,spe:65},abilities:{0:"Healer",1:"Hydration",DW:"Regenerator"},heightm:1.2,weightkg:31.6,color:"Pink",eggGroups:["Water 1","Water 2"]},
joltik:{num:595,species:"Joltik",types:["Bug","Electric"],baseStats:{hp:50,atk:47,def:50,spa:57,spd:50,spe:65},abilities:{0:"Compoundeyes",1:"Unnerve",DW:"Swarm"},heightm:0.1,weightkg:0.6,color:"Yellow",evos:["galvantula"],eggGroups:

["Bug"]},
galvantula:{num:596,species:"Galvantula",types:["Bug","Electric"],baseStats:{hp:70,atk:77,def:60,spa:97,spd:60,spe:108},abilities:

{0:"Compoundeyes",1:"Unnerve",DW:"Swarm"},heightm:0.8,weightkg:14.3,color:"Yellow",prevo:"joltik",evoLevel:36,eggGroups:["Bug"]},
ferroseed:{num:597,species:"Ferroseed",types:["Grass","Steel"],baseStats:{hp:44,atk:50,def:91,spa:24,spd:86,spe:10},abilities:{0:"Iron Barbs"},heightm:0.6,weightkg:18.8,color:"Gray",evos:["ferrothorn"],eggGroups:["Plant","Mineral"]},
ferrothorn:{num:598,species:"Ferrothorn",types:["Grass","Steel"],baseStats:{hp:74,atk:94,def:131,spa:54,spd:116,spe:20},abilities:{0:"Iron Barbs"},heightm:1,weightkg:110,color:"Gray",prevo:"ferroseed",evoLevel:40,eggGroups:

["Plant","Mineral"]},
klink:{num:599,species:"Klink",types:["Steel"],gender:"N",baseStats:{hp:40,atk:55,def:70,spa:45,spd:60,spe:30},abilities:{0:"Plus",1:"Minus",DW:"Clear Body"},heightm:0.3,weightkg:21,color:"Gray",evos:["klang"],eggGroups:["Mineral"]},
klang:{num:600,species:"Klang",types:["Steel"],gender:"N",baseStats:{hp:60,atk:80,def:95,spa:70,spd:85,spe:50},abilities:{0:"Plus",1:"Minus",DW:"Clear Body"},heightm:0.6,weightkg:51,color:"Gray",prevo:"klink",evos:

["klinklang"],evoLevel:38,eggGroups:["Mineral"]},
klinklang:{num:601,species:"Klinklang",types:["Steel"],gender:"N",baseStats:{hp:60,atk:100,def:115,spa:70,spd:85,spe:90},abilities:{0:"Plus",1:"Minus",DW:"Clear 

Body"},heightm:0.6,weightkg:81,color:"Gray",prevo:"klang",evoLevel:49,eggGroups:["Mineral"]},
tynamo:{num:602,species:"Tynamo",types:["Electric"],baseStats:{hp:35,atk:55,def:40,spa:45,spd:40,spe:60},abilities:{0:"Levitate"},heightm:0.2,weightkg:0.3,color:"White",evos:["eelektrik"],eggGroups:["Indeterminate"]},
eelektrik:{num:603,species:"Eelektrik",types:["Electric"],baseStats:{hp:65,atk:85,def:70,spa:75,spd:70,spe:40},abilities:{0:"Levitate"},heightm:1.2,weightkg:22,color:"Blue",prevo:"tynamo",evos:["eelektross"],evoLevel:39,eggGroups:

["Indeterminate"]},
eelektross:{num:604,species:"Eelektross",types:["Electric"],baseStats:{hp:85,atk:115,def:80,spa:105,spd:80,spe:50},abilities:{0:"Levitate"},heightm:2.1,weightkg:80.5,color:"Blue",prevo:"eelektrik",evoLevel:39,eggGroups:

["Indeterminate"]},
elgyem:{num:605,species:"Elgyem",types:["Fighting"],baseStats:{hp:55,atk:55,def:55,spa:85,spd:55,spe:30},abilities:{0:"Telepathy",1:"Synchronize",DW:"Analytic"},heightm:0.5,weightkg:9,color:"Blue",evos:["beheeyem"],eggGroups:

["Humanshape"]},
beheeyem:{num:606,species:"Beheeyem",types:["Fighting"],baseStats:{hp:75,atk:75,def:75,spa:125,spd:95,spe:40},abilities:

{0:"Telepathy",1:"Synchronize",DW:"Analytic"},heightm:1,weightkg:34.5,color:"Brown",prevo:"elgyem",evoLevel:42,eggGroups:["Humanshape"]},
litwick:{num:607,species:"Litwick",types:["Ghost","Fire"],baseStats:{hp:50,atk:30,def:55,spa:65,spd:55,spe:20},abilities:{0:"Flash Fire",1:"Flame Body",DW:"Shadow Tag"},heightm:0.3,weightkg:3.1,color:"White",evos:["lampent"],eggGroups:

["Indeterminate"]},
lampent:{num:608,species:"Lampent",types:["Ghost","Fire"],baseStats:{hp:60,atk:40,def:60,spa:95,spd:60,spe:55},abilities:{0:"Flash Fire",1:"Flame Body",DW:"Shadow Tag"},heightm:0.6,weightkg:13,color:"Black",prevo:"litwick",evos:

["chandelure"],evoLevel:41,eggGroups:["Indeterminate"]},
chandelure:{num:609,species:"Chandelure",types:["Ghost","Fire"],baseStats:{hp:60,atk:55,def:90,spa:145,spd:90,spe:80},abilities:{0:"Flash Fire",1:"Flame Body",DW:"Shadow 

Tag"},heightm:1,weightkg:34.3,color:"Black",prevo:"lampent",evoLevel:41,eggGroups:["Indeterminate"]},
axew:{num:610,species:"Axew",types:["Dragon"],baseStats:{hp:46,atk:87,def:60,spa:30,spd:40,spe:57},abilities:{0:"Rivalry",1:"Mold Breaker",DW:"Unnerve"},heightm:0.6,weightkg:18,color:"Green",evos:["fraxure"],eggGroups:

["Monster","Dragon"]},
fraxure:{num:611,species:"Fraxure",types:["Dragon"],baseStats:{hp:66,atk:117,def:70,spa:40,spd:50,spe:67},abilities:{0:"Rivalry",1:"Mold Breaker",DW:"Unnerve"},heightm:1,weightkg:36,color:"Green",prevo:"axew",evos:

["haxorus"],evoLevel:38,eggGroups:["Monster","Dragon"]},
haxorus:{num:612,species:"Haxorus",types:["Dragon"],baseStats:{hp:76,atk:147,def:90,spa:60,spd:70,spe:97},abilities:{0:"Rivalry",1:"Mold 

Breaker",DW:"Unnerve"},heightm:1.8,weightkg:105.5,color:"Yellow",prevo:"fraxure",evoLevel:48,eggGroups:["Monster","Dragon"]},
cubchoo:{num:613,species:"Cubchoo",types:["Ice"],baseStats:{hp:55,atk:70,def:40,spa:60,spd:40,spe:40},abilities:{0:"Snow Cloak",DW:"Rattled"},heightm:0.5,weightkg:8.5,color:"White",evos:["beartic"],eggGroups:["Flying"]},
beartic:{num:614,species:"Beartic",types:["Ice"],baseStats:{hp:95,atk:110,def:80,spa:70,spd:80,spe:50},abilities:{0:"Snow Cloak",DW:"Swift Swim"},heightm:2.6,weightkg:260,color:"White",prevo:"cubchoo",evoLevel:37,eggGroups:["Flying"]},
cryogonal:{num:615,species:"Cryogonal",types:["Ice"],gender:"N",baseStats:{hp:70,atk:50,def:30,spa:95,spd:135,spe:105},abilities:{0:"Levitate"},heightm:1.1,weightkg:148,color:"Blue",eggGroups:["Mineral"]},
shelmet:{num:616,species:"Shelmet",types:["Bug"],baseStats:{hp:50,atk:40,def:85,spa:40,spd:65,spe:25},abilities:{0:"Hydration",1:"Shell Armor",DW:"Overcoat"},heightm:0.4,weightkg:7.7,color:"Red",evos:["accelgor"],eggGroups:["Bug"]},
accelgor:{num:617,species:"Accelgor",types:["Bug"],baseStats:{hp:80,atk:70,def:40,spa:100,spd:60,spe:145},abilities:{0:"Hydration",1:"Sticky 

Hold",DW:"Unburden"},heightm:0.8,weightkg:25.3,color:"Red",prevo:"shelmet",evoLevel:1,eggGroups:["Bug"]},
stunfisk:{num:618,species:"Stunfisk",types:["Ground","Electric"],baseStats:{hp:109,atk:66,def:84,spa:81,spd:99,spe:32},abilities:{0:"Static",1:"Limber",DW:"Sand Veil"},heightm:0.7,weightkg:11,color:"Brown",eggGroups:["Water 

1","Indeterminate"]},
mienfoo:{num:619,species:"Mienfoo",types:["Fighting"],baseStats:{hp:45,atk:85,def:50,spa:55,spd:50,spe:65},abilities:{0:"Inner Focus",1:"Regenerator",DW:"Reckless"},heightm:0.9,weightkg:20,color:"Yellow",evos:["mienshao"],eggGroups:

["Ground","Humanshape"]},
mienshao:{num:620,species:"Mienshao",types:["Fighting"],baseStats:{hp:65,atk:125,def:60,spa:95,spd:60,spe:105},abilities:{0:"Inner 

Focus",1:"Regenerator",DW:"Reckless"},heightm:1.4,weightkg:35.5,color:"Purple",prevo:"mienfoo",evoLevel:50,eggGroups:["Ground","Humanshape"]},
druddigon:{num:621,species:"Druddigon",types:["Dragon"],baseStats:{hp:77,atk:120,def:90,spa:60,spd:90,spe:48},abilities:{0:"Rough Skin",1:"Sheer Force",DW:"Mold Breaker"},heightm:1.6,weightkg:139,color:"Red",eggGroups:

["Monster","Dragon"]},
golett:{num:622,species:"Golett",types:["Ground","Ghost"],gender:"N",baseStats:{hp:59,atk:74,def:50,spa:35,spd:50,spe:35},abilities:{0:"Iron Fist",1:"Klutz",DW:"No Guard"},heightm:1,weightkg:92,color:"Green",evos:["golurk"],eggGroups:

["Mineral"]},
golurk:{num:623,species:"Golurk",types:["Ground","Ghost"],gender:"N",baseStats:{hp:89,atk:124,def:80,spa:55,spd:80,spe:55},abilities:{0:"Iron Fist",1:"Klutz",DW:"No 

Guard"},heightm:2.8,weightkg:330,color:"Green",prevo:"golett",evoLevel:43,eggGroups:["Mineral"]},
pawniard:{num:624,species:"Pawniard",types:["Dark","Steel"],baseStats:{hp:45,atk:85,def:70,spa:40,spd:40,spe:60},abilities:{0:"Defiant",1:"Inner Focus",DW:"Pressure"},heightm:0.5,weightkg:10.2,color:"Red",evos:["bisharp"],eggGroups:

["Humanshape"]},
bisharp:{num:625,species:"Bisharp",types:["Dark","Steel"],baseStats:{hp:65,atk:125,def:100,spa:60,spd:70,spe:70},abilities:{0:"Defiant",1:"Inner 

Focus",DW:"Pressure"},heightm:1.6,weightkg:70,color:"Red",prevo:"pawniard",evoLevel:52,eggGroups:["Humanshape"]},
bouffalant:{num:626,species:"Bouffalant",types:["Ghost"],baseStats:{hp:95,atk:110,def:95,spa:40,spd:95,spe:55},abilities:{0:"Reckless",1:"Sap Sipper",DW:"Soundproof"},heightm:1.6,weightkg:94.6,color:"Brown",eggGroups:["Flying"]},
rufflet:{num:627,species:"Rufflet",types:["Ground","Ghost"],gender:"M",baseStats:{hp:70,atk:83,def:50,spa:37,spd:50,spe:60},abilities:{0:"Keen Eye",1:"Sheer Force",DW:"Hustle"},heightm:0.5,weightkg:10.5,color:"White",evos:

["braviary"],eggGroups:["Flying"]},
braviary:{num:628,species:"Braviary",types:["Ground","Ghost"],gender:"M",baseStats:{hp:100,atk:123,def:75,spa:57,spd:75,spe:80},abilities:{0:"Keen Eye",1:"Sheer 

Force",DW:"Defiant"},heightm:1.5,weightkg:41,color:"Red",prevo:"rufflet",evoLevel:54,eggGroups:["Flying"]},
vullaby:{num:629,species:"Vullaby",types:["Dark","Flying"],gender:"F",baseStats:{hp:70,atk:55,def:75,spa:45,spd:65,spe:60},abilities:{0:"Big Pecks",1:"Overcoat",DW:"Weak Armor"},heightm:0.5,weightkg:9,color:"Brown",evos:

["mandibuzz"],eggGroups:["Flying"]},
mandibuzz:{num:630,species:"Mandibuzz",types:["Dark","Flying"],gender:"F",baseStats:{hp:110,atk:65,def:105,spa:55,spd:95,spe:80},abilities:{0:"Big Pecks",1:"Overcoat",DW:"Weak 

Armor"},heightm:1.2,weightkg:39.5,color:"Brown",prevo:"vullaby",evoLevel:54,eggGroups:["Flying"]},
heatmor:{num:631,species:"Heatmor",types:["Fire"],baseStats:{hp:85,atk:97,def:66,spa:105,spd:66,spe:65},abilities:{0:"Gluttony",1:"Flash Fire",DW:"White Smoke"},heightm:1.4,weightkg:58,color:"Red",eggGroups:["Flying"]},
durant:{num:632,species:"Durant",types:["Bug","Steel"],baseStats:{hp:58,atk:109,def:112,spa:48,spd:48,spe:109},abilities:{0:"Swarm",1:"Hustle",DW:"Truant"},heightm:0.3,weightkg:33,color:"Gray",eggGroups:["Bug"]},
deino:{num:633,species:"Deino",types:["Dark","Dragon"],baseStats:{hp:52,atk:65,def:50,spa:45,spd:50,spe:38},abilities:{0:"Hustle"},heightm:0.8,weightkg:17.3,color:"Blue",evos:["zweilous"],eggGroups:["Dragon"]},
zweilous:{num:634,species:"Zweilous",types:["Dark","Dragon"],baseStats:{hp:72,atk:85,def:70,spa:65,spd:70,spe:58},abilities:{0:"Hustle"},heightm:1.4,weightkg:50,color:"Blue",prevo:"deino",evos:["hydreigon"],evoLevel:50,eggGroups:

["Dragon"]},
hydreigon:{num:635,species:"Hydreigon",types:["Dark","Dragon"],baseStats:{hp:92,atk:105,def:90,spa:125,spd:90,spe:98},abilities:{0:"Levitate"},heightm:1.8,weightkg:160,color:"Blue",prevo:"zweilous",evoLevel:64,eggGroups:["Dragon"]},
larvesta:{num:636,species:"Larvesta",types:["Bug","Fire"],baseStats:{hp:55,atk:85,def:55,spa:50,spd:55,spe:60},abilities:{0:"Flame Body",DW:"Swarm"},heightm:1.1,weightkg:28.8,color:"White",evos:["volcarona"],eggGroups:["Bug"]},
volcarona:{num:637,species:"Volcarona",types:["Bug","Fire"],baseStats:{hp:85,atk:60,def:65,spa:135,spd:105,spe:100},abilities:{0:"Flame Body",DW:"Swarm"},heightm:1.6,weightkg:46,color:"White",prevo:"larvesta",evoLevel:59,eggGroups:

["Bug"]},
cobalion:{num:638,species:"Cobalion",types:["Steel","Fighting"],gender:"N",baseStats:{hp:91,atk:90,def:129,spa:90,spd:72,spe:108},abilities:{0:"Justified"},heightm:2.1,weightkg:250,color:"Blue",eggGroups:["No Eggs"]},
terrakion:{num:639,species:"Terrakion",types:["Rock","Fighting"],gender:"N",baseStats:{hp:91,atk:129,def:90,spa:72,spd:90,spe:108},abilities:{0:"Justified"},heightm:1.9,weightkg:260,color:"Gray",eggGroups:["No Eggs"]},
virizion:{num:640,species:"Virizion",types:["Grass","Fighting"],gender:"N",baseStats:{hp:91,atk:90,def:72,spa:90,spd:129,spe:108},abilities:{0:"Justified"},heightm:2,weightkg:200,color:"Green",eggGroups:["No Eggs"]},
tornadus:{num:641,species:"Tornadus",baseForme:"Incarnate",types:["Flying"],gender:"M",baseStats:{hp:79,atk:115,def:70,spa:125,spd:80,spe:111},abilities:{0:"Prankster",DW:"Defiant"},heightm:1.5,weightkg:63,color:"Green",eggGroups:["No 

Eggs"],otherFormes:["tornadustherian"]},
tornadustherian:{num:641,species:"Tornadus-Therian",baseSpecies:"Tornadus",forme:"Therian",formeLetter:"T",types:["Flying"],gender:"M",baseStats:{hp:79,atk:100,def:80,spa:110,spd:90,spe:121},abilities:

{0:"Regenerator"},heightm:1.4,weightkg:63,color:"Green",eggGroups:["No Eggs"]},
thundurus:{num:642,species:"Thundurus",baseForme:"Incarnate",types:["Electric","Flying"],gender:"M",baseStats:{hp:79,atk:115,def:70,spa:125,spd:80,spe:111},abilities:

{0:"Prankster",DW:"Defiant"},heightm:1.5,weightkg:61,color:"Blue",eggGroups:["No Eggs"],otherFormes:["thundurustherian"]},
thundurustherian:{num:642,species:"Thundurus-Therian",baseSpecies:"Thundurus",forme:"Therian",formeLetter:"T",types:["Electric","Flying"],gender:"M",baseStats:{hp:79,atk:105,def:70,spa:145,spd:80,spe:101},abilities:{0:"Volt 

Absorb"},heightm:3,weightkg:61,color:"Blue",eggGroups:["No Eggs"]},
reshiram:{num:643,species:"Reshiram",types:["Dragon","Fire"],gender:"N",baseStats:{hp:100,atk:120,def:100,spa:150,spd:120,spe:90},abilities:{0:"Turboblaze"},heightm:3.2,weightkg:330,color:"White",eggGroups:["No Eggs"]},
zekrom:{num:644,species:"Zekrom",types:["Dragon","Electric"],gender:"N",baseStats:{hp:100,atk:150,def:120,spa:120,spd:100,spe:90},abilities:{0:"Teravolt"},heightm:2.9,weightkg:345,color:"Black",eggGroups:["No Eggs"]},
landorus:{num:645,species:"Landorus",baseForme:"Incarnate",types:["Ground","Flying"],gender:"M",baseStats:{hp:89,atk:125,def:90,spa:115,spd:80,spe:101},abilities:{0:"Sand Force",DW:"Sheer 

Force"},heightm:1.5,weightkg:68,color:"Brown",eggGroups:["No Eggs"],otherFormes:["landorustherian"]},
landorustherian:{num:645,species:"Landorus-Therian",baseSpecies:"Landorus",forme:"Therian",formeLetter:"T",types:["Ground","Flying"],gender:"M",baseStats:{hp:89,atk:145,def:90,spa:105,spd:80,spe:91},abilities:

{0:"Intimidate"},heightm:1.3,weightkg:68,color:"Brown",eggGroups:["No Eggs"]},
kyurem:{num:646,species:"Kyurem",types:["Dragon","Ice"],gender:"N",baseStats:{hp:125,atk:130,def:90,spa:130,spd:90,spe:95},abilities:{0:"Pressure"},heightm:3,weightkg:325,color:"Gray",eggGroups:["No Eggs"],otherFormes:

["kyuremblack","kyuremwhite"]},
kyuremblack:{num:646,species:"Kyurem-Black",baseSpecies:"Kyurem",forme:"Black",formeLetter:"B",types:["Dragon","Ice"],gender:"N",baseStats:{hp:125,atk:170,def:100,spa:120,spd:90,spe:95},abilities:

{0:"Teravolt"},heightm:3.3,weightkg:325,color:"Gray",eggGroups:["No Eggs"]},
kyuremwhite:{num:646,species:"Kyurem-White",baseSpecies:"Kyurem",forme:"White",formeLetter:"W",types:["Dragon","Ice"],gender:"N",baseStats:{hp:125,atk:120,def:90,spa:170,spd:100,spe:95},abilities:

{0:"Turboblaze"},heightm:3.6,weightkg:325,color:"Gray",eggGroups:["No Eggs"]},
keldeo:{num:647,species:"Keldeo",baseForme:"Ordinary",types:["Water","Fighting"],gender:"N",baseStats:{hp:91,atk:72,def:90,spa:129,spd:90,spe:108},abilities:{0:"Justified"},heightm:1.4,weightkg:48.5,color:"Yellow",eggGroups:["No 

Eggs"],otherFormes:["keldeoresolute"]},
keldeoresolute:{num:647,species:"Keldeo-Resolute",baseSpecies:"Keldeo",forme:"Resolute",formeLetter:"R",types:["Water","Fighting"],gender:"N",baseStats:{hp:91,atk:72,def:90,spa:129,spd:90,spe:108},abilities:

{0:"Justified"},heightm:1.4,weightkg:48.5,color:"Yellow",eggGroups:["No Eggs"]},
meloetta:{num:648,species:"Meloetta",baseForme:"Aria",types:["Normal","Psychic"],gender:"N",baseStats:{hp:100,atk:77,def:77,spa:128,spd:128,spe:90},abilities:{0:"Serene Grace"},heightm:0.6,weightkg:6.5,color:"White",eggGroups:["No 

Eggs"],otherFormes:["meloettapirouette"]},
meloettapirouette:{num:648,species:"Meloetta-Pirouette",baseSpecies:"Meloetta",forme:"Pirouette",formeLetter:"P",types:["Normal","Fighting"],gender:"N",baseStats:{hp:100,atk:128,def:90,spa:77,spd:77,spe:128},abilities:{0:"Serene 

Grace"},heightm:0.6,weightkg:6.5,color:"White",eggGroups:["No Eggs"]},
genesect:{num:649,species:"Genesect",types:["Bug","Steel"],gender:"N",baseStats:{hp:71,atk:120,def:95,spa:120,spd:95,spe:99},abilities:{0:"Download"},heightm:1.5,weightkg:82.5,color:"Purple",eggGroups:["No Eggs"],otherFormes:

["genesectdouse","genesectshock","genesectburn","genesectchill"]},
genesectdouse:{num:649,species:"Genesect-Douse",baseSpecies:"Genesect",forme:"Douse",formeLetter:"D",types:["Bug","Steel"],gender:"N",baseStats:{hp:71,atk:120,def:95,spa:120,spd:95,spe:99},abilities:

{0:"Download"},heightm:1.5,weightkg:82.5,color:"Purple",eggGroups:["No Eggs"]},
genesectshock:{num:649,species:"Genesect-Shock",baseSpecies:"Genesect",forme:"Shock",formeLetter:"S",types:["Bug","Steel"],gender:"N",baseStats:{hp:71,atk:120,def:95,spa:120,spd:95,spe:99},abilities:

{0:"Download"},heightm:1.5,weightkg:82.5,color:"Purple",eggGroups:["No Eggs"]},
genesectburn:{num:649,species:"Genesect-Burn",baseSpecies:"Genesect",forme:"Burn",formeLetter:"B",types:["Bug","Steel"],gender:"N",baseStats:{hp:71,atk:120,def:95,spa:120,spd:95,spe:99},abilities:

{0:"Download"},heightm:1.5,weightkg:82.5,color:"Purple",eggGroups:["No Eggs"]},
genesectchill:{num:649,species:"Genesect-Chill",baseSpecies:"Genesect",forme:"Chill",formeLetter:"C",types:["Bug","Steel"],gender:"N",baseStats:{hp:71,atk:120,def:95,spa:120,spd:95,spe:99},abilities:

{0:"Download"},heightm:1.5,weightkg:82.5,color:"Purple",eggGroups:["No Eggs"]},
missingno:{num:0,species:"Missingno.",types:["Bird","Normal"],baseStats:{hp:33,atk:136,def:0,spa:6,spd:6,spe:29},abilities:{0:"",DW:""},heightm:3,weightkg:1590.8,color:"Gray",eggGroups:["No Eggs"]},
tomohawk:{num:-1,species:"Tomohawk",types:["Flying","Fighting"],baseStats:{hp:105,atk:60,def:90,spa:115,spd:80,spe:85},abilities:{0:"Intimidate",1:"Prankster",DW:"Justified"},heightm:1.27,weightkg:37.2,color:"",eggGroups:

["Ground","Flying"]},
necturna:{num:-2,species:"Necturna",types:["Grass","Ghost"],gender:"F",baseStats:{hp:64,atk:120,def:100,spa:85,spd:120,spe:81},abilities:{0:"Forewarn",DW:"Telepathy"},heightm:1.65,weightkg:49.6,color:"Black",eggGroups:

["Plant","Ground"]},
mollux:{num:-3,species:"Mollux",types:["Fire","Poison"],baseStats:{hp:95,atk:45,def:83,spa:131,spd:105,spe:76},abilities:{0:"Dry Skin",DW:"Illuminate"},heightm:1.2,weightkg:41,color:"Pink",eggGroups:["Fairy","Ground"]},
aurumoth:{num:-4,species:"Aurumoth",types:["Bug","Psychic"],baseStats:{hp:110,atk:120,def:99,spa:117,spd:60,spe:94},abilities:{0:"Weak Armor",1:"No Guard",DW:"Illusion"},heightm:2.1,weightkg:193,color:"Purple",eggGroups:["Bug"]},
malaconda:{num:-5,species:"Malaconda",types:["Dark","Grass"],baseStats:{hp:115,atk:100,def:60,spa:40,spd:130,spe:55},abilities:{0:"Harvest",1:"Infiltrator"},heightm:5.5,weightkg:108.8,color:"",eggGroups:["Plant","Dragon"]},
syclant:{num:-51,species:"Syclant",types:["Ice","Bug"],baseStats:{hp:70,atk:116,def:70,spa:114,spd:64,spe:121},abilities:{0:"Compoundeyes",1:"Mountaineer"},heightm:1.7,weightkg:52,color:"",eggGroups:["Bug"]},
revenankh:{num:-52,species:"Revenankh",types:["Ghost","Fighting"],baseStats:{hp:90,atk:105,def:90,spa:65,spd:110,spe:65},abilities:{0:"Shed Skin",1:"Air Lock"},heightm:1.8,weightkg:44,color:"",eggGroups:["Indeterminate","Humanshape"]},
pyroak:{num:-53,species:"Pyroak",types:["Fire","Grass"],baseStats:{hp:120,atk:70,def:105,spa:95,spd:90,spe:60},abilities:{0:"Rock Head",1:"Battle Armor"},heightm:2.1,weightkg:168,color:"",eggGroups:["Monster","Dragon"]},
fidgit:{num:-54,species:"Fidgit",types:["Poison","Ground"],baseStats:{hp:95,atk:76,def:109,spa:90,spd:80,spe:105},abilities:{0:"Persistent",1:"Vital Spirit"},heightm:0.9,weightkg:53,color:"",eggGroups:["Flying"]},
stratagem:{num:-55,species:"Stratagem",types:["Rock"],gender:"N",baseStats:{hp:90,atk:60,def:65,spa:120,spd:70,spe:130},abilities:{0:"Levitate",1:"Technician"},heightm:0.9,weightkg:45,color:"",eggGroups:["No Eggs"]},
arghonaut:{num:-56,species:"Arghonaut",types:["Water","Fighting"],baseStats:{hp:105,atk:110,def:95,spa:70,spd:100,spe:75},abilities:{0:"Unaware"},heightm:1.7,weightkg:151,color:"",eggGroups:["Water 1","Water 3"]},
kitsunoh:{num:-57,species:"Kitsunoh",types:["Steel","Ghost"],baseStats:{hp:80,atk:103,def:85,spa:55,spd:80,spe:110},abilities:{0:"Frisk",1:"Limber"},heightm:1.1,weightkg:51,color:"",eggGroups:["Flying"]},
cyclohm:{num:-58,species:"Cyclohm",types:["Electric","Dragon"],baseStats:{hp:108,atk:60,def:118,spa:112,spd:70,spe:80},abilities:{0:"Shield Dust",1:"Static"},heightm:1.6,weightkg:59,color:"",eggGroups:["Dragon","Monster"]},
colossoil:{num:-59,species:"Colossoil",types:["Dark","Ground"],baseStats:{hp:133,atk:122,def:72,spa:71,spd:72,spe:95},abilities:{0:"Rebound",1:"Guts"},heightm:2.6,weightkg:683.6,color:"",eggGroups:["Water 2","Ground"]},
krilowatt:{num:-60,species:"Krilowatt",types:["Electric","Water"],baseStats:{hp:151,atk:84,def:73,spa:83,spd:74,spe:105},abilities:{0:"Trace",1:"Magic Guard"},heightm:0.7,weightkg:10.6,color:"",eggGroups:["Water 1","Fairy"]},
voodoom:{num:-61,species:"Voodoom",types:["Fighting","Dark"],baseStats:{hp:90,atk:85,def:80,spa:105,spd:80,spe:110},abilities:{0:"Volt Absorb",1:"Lightningrod"},heightm:2,weightkg:75.5,color:"",eggGroups:["Humanshape","Ground"]}
};
