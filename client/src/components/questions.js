const questions = [
    {
        question: "In Dragon Ball, who was the original owner of the Power Pole?",
        choices: [
            "Goku",
            "Master Roshi",
            "Grandpa Gohan",
            "Korin"
        ],
        answer: "Korin",
        explanation: "Goku is shown to be in possession of the Power Pole through most of Dragon Ball, however, Korin mentioned in the episode 'Lost and Found' that he had given the Pole to Master Roshi when he had climbed Korin Tower. Master Roshi eventually gave the Pole to Grandpa Gohan, who eventually gave it to Goku."
    },
    {
        question: "In Dragon Ball, how did the fire on Fire Mountain get put out?",
        choices: [
            "Bulma used a Jet Capsule to airlift in water to put it out.",
            "Master Roshi fired a Kamehameha Wave at it.",
            "Ox King put it out by blowing on it with a giant gust of wind.",
            "Puar and Oolong shapeshifted into giant fans and created a tornado that put it out."
        ],
        answer: "Master Roshi fired a Kamehameha Wave at it.",
        explanation: "Ox King sends Goku and Chi-Chi to fetch Master Roshi to help him put the fire out. After arriving, Master Roshi fires a Kamehameha Wave at the fire and actually destroys the entire mountain."
    },
    {
        question: "In Dragon Ball, during Pirate Cave fight, how does Goku escape from General Blue's paralysis attack?",
        choices: [
            "Bulma distracts General Blue by flashing him.",
            "A giant octopus causes a cave-in that falls on General Blue.",
            "General Blue sees a rodent and is freaked out by it.",
            "A Pirate Robot attacks General Blue."
        ],
        answer: "General Blue sees a rodent and is freaked out by it.",
        explanation: "General Blue had a shotgun held to Goku's head, and was about to shoot him. Out of the corner of his eye he spots a mouse and freaks out. This causes him to lose his concentration, and Goku is able to break free of the paralysis and quickly defeat him."
    },
    {
        question: "In Dragon Ball, during 21st World Martial Arts Tournament(Goku and Krillin's first debut), who defeated Krillin?",
        choices: [
            "Jackie Chun",
            "Yamcha",
            "Bacterian",
            "Chiaotzu"
        ],
        answer: "Jackie Chun",
        explanation: "Krillin almost defeats Chun when he kicks him so hard that he flies out of the stadium, but Chun is able to recover by blasting himself back into the ring with a Kamehameha Wave. Finally, Chun goad's Krillin into attacking his afterimage and gets behind Krillin. Knocking him out with a quick blow to the neck."
    },
    {
        question: "In Dragon Ball, What did Master Mutaito use to seal away King Piccolo with the Evil Containment Wave?",
        choices: [
            "A Sacred Jar from Kami's Lookout",
            "An Electric Rice Cooker",
            "A Bento Box",
            "A Conch Shell"
        ],
        answer: "An Electric Rice Cooker",
        explanation: "Rice Cookers seem to be a common vessel for the Evil Containment Wave. After Mutaito seals away King Piccolo, he then passes away himself. Master Roshi then hides the container at the bottom of the ocean, so that King Piccolo can never be released."
    },
    {
        question: "In Dragon Ball Z, during the Saiyan Saga, what causes Vegeta to, finally, decide to leave earth?",
        choices: [
            "He loses to Goku in an Energy Beam showdown.",
            "Yajirobe cuts his tail off.",
            "Piccolo hits him with his Special Beam Cannon.",
            "Gohan, in his Great Ape form, falls on top of him."
        ],
        answer: "Gohan, in his Great Ape form, falls on top of him.",
        explanation: "Gohan transforms into his Great Ape form, when he looks up at Vegeta's energy ball still up in the sky. Vegeta tries to fight him, but is too weakened to be effective. Vegeta does manage to get off an energy disk that cuts Gohan's tail off, but unfortunately for the Saiyan Prince, Gohan does not transform back to normal before landing on top of him."
    },
    {
        question: "In Dragon Ball Z, during the Namek Saga, how does Vegeta recover from being beaten by Zarbon?",
        choices: [
            "Zarbon put Vegeta in a Rejuvenation Chamber.",
            "Gohan finds Vegeta and gives him a Senzu Bean.",
             "Dende heals him.",
            "Vegeta crawls to a nearby cave, where he waits til he is healed."
        ],
        answer: "Zarbon put Vegeta in a Rejuvenation Chamber.",
        explanation: "At first, Zarbon left Vegeta for dead, but came back to collect Vegeta after Frieza ordered him to. Zarbon put Vegeta in a Rejuvenation Chamber, so they could question him about the Dragon Balls and discuss his betrayal of Frieza after he recovered."
    },
    {
        question: "In Dragon Ball Z, during the Android Saga, when Gohan was carrying Bulma, Baby Trunks, and Yajirobe back to Capsule Corp, why did they have to stop?",
        choices: [
            "They stopped so they could have lunch.",
            "Piccolo called out to Gohan telepathically that he was in trouble, so Gohan left to help him.",
            "Baby Trunks peed on Yajirobe.",
            "They stopped so Gohan could help a hunter that had been attacked by Android 20."
        ],
        answer: "Baby Trunks peed on Yajirobe.",
        explanation: "On the way to Capsule Corp, Bulma comments on how quiet Trunks was being and holds him up. At this point, Trunks' diaper leaks all over Yajirobe's head and he freaks out. They stop so Bulma can change Trunks and Yajirobe can clean up."
    },
    {
        question: "In Dragon Ball Z, during the Cell Games Saga, on the day of the Cell Games, who was the first person to fight Cell?",
        choices: [
            "Goku",
            "Mr. Satan",
            "Android 16",
            "Caroni"
        ],
        answer: "Caroni",
        explanation: "Right before Hercule could challenge Cell, students of his fighting dojo, Caroni and Pirozshki, showed up to challenge. Caroni was the first challenger. When Caroni tried to go for an aerial attack at Cell, he was quickly defeated when Cell raised his power to launch Caroni high in sky and landing outside the ring."
    },
    {
        question: "In Dragon Ball Z, during the Buu Saga, how did Krillin and Piccolo break free of Dabura's petrification spit?",
        choices: [
            "Videl's feelings for Gohan made Dabura realize that he wanted to become a good person.",
            "Vegeta grew impatient with Gohan's lack of training, and killed Dabura himself.",
            "Majin Buu turned Dabura into a cookie and ate him.",
            "Goten and Trunks used a vial of Sacred Water given to them by Dende to revive them."
        ],
        answer: "Majin Buu turned Dabura into a cookie and ate him.",
        explanation: "Supreme Kai stated that Dabura would need to die to break the petrification. Later, when Dabura realized that Majin Buu was unstable and tried to attack him, Buu turned Dabura into a cookie and ate him. This caused the petrification on Krillin and Piccolo to be released."
    },
    {
        question: "In Dragon Ball GT, during the Black Star Dragon Ball Saga, who kills Dolltaki?",
        choices: [
            "Goku",
            "Lord Luud",
            "General Rilldo",
            "Bon Para"
        ],
        answer: "General Rilldo",
        explanation: "After escaping from Lord Luud, Dolltaki attempts to report to Dr. Myuu about Luud's destruction, but is confronted by General Rilldo who kills him with a Ki Blast."
    },
    {
        question: "In Dragon Ball GT, during the Baby Saga, how does Mr. Satan avoid being infected by Baby?",
        choices: [
            "Baby delights in turning the world against it's savior.",
            "He hides in an underground bunker in his mansion.",
            "He is absorbed by Majin Buu.",
            "He pretends to be infected and is overlooked by Baby."
        ],
        answer: "He is absorbed by Majin Buu.",
        explanation: "Buu is immune to Baby's mind control infection. In order to protect him, Buu hides Mr. Satan in one of his pods inside his body."
    },
    {
        question: "In Dragon Ball GT, during the Super 17 Saga, who is the first earth fighter to encounter Android 17?",
        choices: [
            "Pan",
            "Goku",
            "Trunks",
            "Goten"
        ],
        answer: "Trunks",
        explanation: "Trunks is riding in a limo on his way to a meeting when Android 17 lands in front of it and quickly blows it up. He then tells Trunks to give a message to Goku to come to Hell alone to stop the Earth invasion."
    },
    {
        question: "In Dragon Ball GT, during the Shadow Dragon Saga, which wish created Oceanus Shenron?",
        choices: [
            "The wish for the most comfortable pair of underwear.",
            "The wish to revive Bora, Upa's father.",
            "The wish to restore King Piccolo's youth.",
            "The wish to revive Goku."
        ],
        answer: "The wish for the most comfortable pair of underwear.",
        explanation: "When they first encounter Oceanus Shenron, Goku insists on knowing which wish created her. At this question, Oceanus Shenron gets embarassed and blurts out that it was the underwear wish. Goku laughs out loud at this, which provokes Oceanus to attakc."
    },
    {
        question: "In Dragon Ball GT, during the Shadow Dragon Saga, who defeats Nuova Shenron the first time?",
        choices: [
            "Syn Shenron",
            "Eis Shenron",
            "Super Saiyan 4 Vegeta",
            "Super Saiyan 4 Goku"
        ],
        answer: "Syn Shenron",
        explanation: "Goku is blinded by a cheap shot by Eis Shenron. Even so, Goku defeats him with a Dragonfist attack. After this, Nuova Shenron, wanting a fair fight, offers to fight Goku after he recovers. At this point, Syn Shenron steps in and tries to blast Goku. Nuova jumps in the way and takes the blast, instead. Nuova fades away shortly after."
    },
    {
        question: "In Dragon Ball Super, during the Beerus Saga, where does Beerus first encounter Goku?",
        choices: [
            "On Bulma's Birthday Cruise",
            "On King Kai's Planet",
            "At Goku's Farm",
            "At Hercule's Mansion"
        ],
        answer: "On King Kai's Planet",
        explanation: "After Hercule gives Gokue 100 million zenni for saving the Earth from Buu, Chi-Chi allows him to give up farming and go train at King Kai's Planet. Beerus and Whis show up asking about the Super Saiyan God. Goku challenges Beerus and is quickly defeated."
    },
    {
        question: "In Dragon Ball Super, during the Golden Frieza Saga, what does Vegeta tell Whis is the tastiest food of all?",
        choices: [
            "Tempura",
            "Strawberry Sundae",
            "Pudding",
            "Instant Ramen"
        ],
        answer: "Instant Ramen",
        explanation: "Vegeta tries to tempt Whis with different foods to get Whis to train him. To his dismay, Bulma has already taken Whis to try all of the foods he suggests. Finally, Vegeta suggests that Bulma has been hiding the tastiest food of all from him, Instant Ramen. After trying it, Whis is shocked and agrees to train Vegeta."
    },
    {
        question: "In Dragon Ball Super, during the Duplicate Vegeta Saga, what does Potage tell Vegeta to do to slow him from phasing out of existance?",
        choices: [
            "To suck on a pacifier",
            "To Hug his son",
            "To stand in ridiculous pose",
            "To sing The Song That Never Ends"
        ],
        answer: "To suck on a pacifier",
        explanation: "When Trunks notices that Vegeta is starting phase out faster, Potage suggests that he suck on the Commeson Key, which looks like a pacifier, to slow the process. Goku makes fun of him for chewing on a pacifier. Later, when Vegeta learns what a pacifier is, he states that he would have rather died than be seen sucking on the key."
    },
    {
        question: "In Dragon Ball Super, during the Duplicate Vegeta Saga, what does Potage tell Vegeta to do to slow him from phasing out of existance?",
        choices: [
            "To suck on a pacifier",
            "To Hug his son",
            "To stand in ridiculous pose",
            "To sing The Song That Never Ends"
        ],
        answer: "To suck on a pacifier",
        explanation: "When Trunks notices that Vegeta is starting phase out faster, Potage suggests that he suck on the Commeson Key, which looks like a pacifier, to slow the process. Goku makes fun of him for chewing on a pacifier. Later, when Vegeta learns what a pacifier is, he states that he would have rather died than be seen sucking on the key."
    },
];

export default questions;