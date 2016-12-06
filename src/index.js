/**
 * This is a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit. 
 * 
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/mixmasteru/alexa-mtz
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetQuote');
    },
    'GetNewQuoteIntent': function () {
        this.emit('GetQuote');
    },
    'GetQuote': function () {
        const quotesArr = this.t('QUOTES');
        const quotesIndex = Math.floor(Math.random() * quotesArr.length);
        const randomQuote = quotesArr[quotesIndex];

        // Create speech output
        const speechOutput = this.t('GET_QUOTE_MESSAGE') + randomQuote;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomQuote);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const languageStrings = {
    'de-DE': {
        translation: {
            QUOTES: [
                "Adam war ein Mensch  das erklärt alles. Er wollte den Apfel nicht des Apfels wegen, sondern nur, weil er verboten war.",
                "Bist du zornig, so zähle bis vier; bist du sehr zornig, so fluche!",
                "Es ist besser, ein junger Maikäfer zu sein als ein alter Paradiesvogel.",
                "Wenn du einen verhungernden Hund aufliest und ihn gesund pflegst, wird er dich nicht beißen. Das ist der Hauptunterschied zwischen Hund und Mensch.",
                "Die Entdeckung von Amerika war schon sehr wunderbar, aber noch viel wunderbarer wäre es gewesen, wenn man es nicht entdeckt hätte.",
                "Oktober. Einer der besonders gefährlichen Monate für Börsenspekulationen. Die anderen sind Juli, Januar, September, April, November, Mai, März, Juni, Dezember, August und Februar.",
                "Nichts bedarf dringender der Verbesserung als die Angewohnheiten anderer Leute.",
                "Als ich jünger war, konnte ich mich an alles erinnern, egal ob es wirklich passiert war oder nicht, aber ich werde alt und mich bald nur noch an Letzteres erinnern.",
                "Bewahre deine Illusionen. Wenn sie verschwunden sind, wirst du weiter existieren, aber nicht weiter leben.",
                "Der Bericht über meinen Tod war eine Übertreibung.",
                "Einige verwechseln Aufgewecktheit mit Scharfsinn; der Unterschied zwischen Aufgewecktheit und Scharfsinn ist derselbe wie zwischen einem Glühwürmchen und dem Blitz.",
                "Ich habe bestimmt keine Rassen, Standes oder religiöse Vorurteile. Es genügt für mich, zu wissen, jemand ist ein Mensch  schlimmer kann er nicht sein.",
                "Unter allen Geschöpfen dieser Erde gibt es nur eines, das sich keiner Versklavung unterwerfen lässt. Dieses ist die Katze.",
                "Wie glücklich Adam gewesen sein muss. Wenn er etwas Gutes sagte, so wusste er, dass das vor ihm noch niemand gesagt hatte.",
                "Ein Dutzend direkter Tadel ist leichter zu ertragen als ein dahergeschenktes Kompliment.",
                "Der Güte Gottes verdanken wir in unserem Lande drei kostbare Dinge: die Freiheit des Gewissens, die Freiheit der Rede und die Klugheit, keine davon in Anspruch zu nehmen.",
                "Der Hunger ist das Dienstmädchen des Genies.",
                "Der Mensch ist das einzige Lebewesen, das erröten kann. Oder sollte.",
                "Der Mensch tut viel, um geliebt zu werden, aber alles, um beneidet zu werden.",
                "Der wesentliche Unterschied zwischen einer Katze und einer Lüge besteht darin, dass eine Katze nur neun Leben hat.",
                "Die einzige Methode, gesund zu bleiben, besteht darin, zu essen, was man nicht mag, zu trinken, was man verabscheut, und zu tun, was man lieber nicht täte.",
                "Die verborgene Quelle des Humors ist nicht Freude, sondern Kummer.",
                "Die Wahrheit ist das kostbarste, was wir besitzen. Gehen wir sparsam damit um.",
                "Die Wirklichkeit ist seltsamer als die Dichtung, aber das liegt daran, daß die Dichtung sich an Wahrscheinlichkeiten halten muss, die Wirklichkeit nicht.",
                "Ein Klassiker ist ein Buch, das die Leute loben, aber nicht lesen.",
                "Es gibt einen Sinn für Moral, und es gibt einen Sinn für Unmoral. Die Geschichte lehrt uns, dass der Sinn für Moral uns befähigt, das Moralische zu erkennen und zu meiden, und dass der Sinn für Unmoral uns befähigt, das Unmoralische zu erkennen und zu genießen.",
                "Es gibt keinen Breitengrad, der nicht glaubt, er wäre der Äquator, wenn alles mit rechten Dingen zugegangen wäre.",
                "Es gibt mancherlei geeigneten Schutz gegen Versuchungen, aber der sicherste ist die Feigheit.",
                "Es gibt zwei Situationen im menschlichen Leben, in denen man nicht spekulieren sollte: Wenn man es sich nicht leisten kann, und wenn man es kann.",
                "Es ist leichter, draußen zu bleiben als auszusteigen.",
                "Gib deine Illusionen nicht auf. Wenn du sie verloren hast, existierst du wohl noch, aber du hast aufgehört zu leben.",
                "Glauben heißt auf etwas zu vertrauen, von dem du weißt, dass es nicht existiert.",
                "In Noahs Arche waren die Betten einfach skandalös. Noah hat die Mode eingeführt und es wird mit unbedeutenden Veränderungen so bleiben bis zur nächsten Flut.",
                "Jeder ist ein Mond und hat eine dunkle Seite, die er niemandem zeigt.",
                "Jemand mit einer neuen Idee gilt so lange als Spinner, bis sich die Sache durchgesetzt hat.",
                "Zuerst schuf Gott die Idioten. Das war zur Übung. Dann schuf er die Schulverwaltung.",
                "Wir sollten darauf achten, einer Erfahrung nur so viel Weisheit zu entnehmen, wie in ihr steckt  mehr nicht; damit wir nicht der Katze gleichen, die sich auf eine heiße Herdplatte setzte. Sie setzt sich nie wieder auf eine heiße Herdplatte  und das ist richtig; aber sie setzt sich auch nie wieder auf eine kalte.",
                "Wahrheit ist unglaublicher als Phantasie. Phantasie muss Sinn ergeben, Wahrheit nicht.",
                "Der Mensch ist ein religiöses Tier. Er ist das einzige Tier, das seinen Nächsten wie sich selber liebt und, wenn dessen Theologie nicht stimmt, ihm die Kehle durchschneidet.",
                "Der Mensch wurde am Ende der Wochenarbeit erschaffen, als Gott bereits müde war.",
                "Würde man Menschen mit Katzen kreuzen, würde dies die Menschen veredeln, aber die Katzen verschlechtern.",
                "Zuerst schuf Gott die Idioten. Das war zur Übung. Dann schuf er die VerlagsLektoren.",
                "Die deutsche Sprache sollte sanft und ehrfurchtsvoll zu den toten Sprachen abgelegt werden, denn nur die Toten haben die Zeit, diese Sprache zu lernen.",
                "Einige deutsche Wörter sind so lang, dass sie eine Perspektive haben.",
                "Geistige Nahrung ist wie jede andere; es ist angenehmer und zuträglicher, sie mit einem Löffel als mit einer Schaufel zu nehmen.",
                "Ich ging oft ins Heidelberger Schloss, um mir das Raritätenkabinett anzusehen, und eines Tages überraschte ich den Leiter mit meinem Deutsch, und zwar redete ich ausschließlich in dieser Sprache. Er zeigte großes Interesse; und nachdem ich eine Weile geredet hatte, sagte er, mein Deutsch sei sehr selten, möglicherweise ein »Unikat«; er wolle es in sein Museum aufnehmen.",
                "Wer niemals Deutsch gelernt hat, kann sich keine Vorstellung davon machen, wie verzwickt diese Sprache ist. Es gibt sicher keine andere Sprache, die so unordentlich und unsystematisch daherkommt, und sich daher jedem Zugriff entzieht.",
                "Ein andrer Bürger zieht vor, mit dem Tod zu spielen und Gesundheit in kleinen Teilchen zu kaufen, den Tod durch Bestechung mit Zuckerpillen fernzuhalten. Bald ist er im Grab und der ganze Zucker wird wieder aus ihm herausgespielt. Dieser Bürger verließ sich auf die Homöopathie und suchte einen homöopathischen Arzt, einen Freund des Todes, auf.",
                "Ein Klassiker ist etwas, das jeder gelesen haben möchte, aber keiner lesen möchte.",
                "Ein Mann, der etwas auf sich hält, sollte seine letzten Worte beizeiten auf einen Zettel schreiben und dazu die Meinung seiner Freunde einholen. Er sollte sich damit keinesfalls erst in seiner letzten Stunde befassen und darauf vertrauen, dass eine geistvolle Eingebung ihn just dann in die Lage versetzt, etwas Brillantes von sich zu geben und mit Größe in die Ewigkeit einzugehen.",
                "Erzähl Leuten, die dich kennen, kein Anglerlatein und schon gar nicht Leuten, die die Fische kennen.",
                "Ich glaube nicht, dass es irgendetwas auf der ganzen Welt gibt, was man in Berlin nicht lernen könnte  außer der deutschen Sprache!",
                "Ich habe es schon häufig als bedauerlich empfunden, dass Noah und seine Sippe das Boot nicht verpasst haben.",
                "Ich machte mir Sorgen, weil ich als einer der bedeutenden Autoren genannt wurde. Sie haben nämlich die traurige Angewohnheit auszusterben. Chaucer ist tot, Spencer ist tot, ebenso Milton, ebenso Shakespeare, und ich fühle mich auch nicht sehr wohl.",
                "Ich muss eine beträchtliche Menge Verstand haben; manchmal brauche ich eine Woche, um ihn zu ordnen.",
                "Je mehr Vergnügen du an deiner Arbeit hast, desto besser wird sie bezahlt.",
                "Man muss die Tatsachen kennen, bevor man sie verdrehen kann.",
                "Mit anderen Worten: In einer Bevölkerung von 48 Millionen, von denen nur 500.000 als Juden geführt werden, liegt 85 Prozent der Intelligenz und Ehrbarkeit bei den Juden.",
                "Mit Führer zu reisen ist ein Segen, ohne einen zu reisen ist das Gegenteil.",
                "Pflichten werden nicht um ihrer selbst willen erfüllt, sondern weil ihre Mißachtung das Behagen des Menschen beeinträchtigen würde.",
                "Prinzipien  ein anderes Wort für Vorurteile.",
                "Verschiebe nicht auf morgen, was genauso gut auf übermorgen verschoben werden kann.",
                "Was wäre die Menschheit ohne die Frauen? Rar, sehr rar.",
                "Wenn der deutsche Schriftsteller in einen Satz taucht, hat man ihn die längste Zeit gesehen; bis er auf der anderen Seite seines Atlantiks wieder hervorkommt mit seinem Verbum im Mund.",
                "Wir alle sehen es gerne, wenn andere seekrank sind, solange wir es nicht selber sind.",
                "Wir wollen annehmen, daß wir alle teilweise verrückt sind. Das würde uns einander erklären; es würde viele Rätsel lösen.",
                "Zivilisation ist die unablässige Vermehrung unnötiger Notwendigkeiten.",
                "Alles, was man zum Leben braucht, ist Unwissenheit und Selbstvertrauen, dann ist der Erfolg sicher.",
                "Der Unterschied zwischen dem richtigen Wort und dem beinahe richtigen ist derselbe Unterschied wie zwischen dem Blitz und dem Glühwürmchen.",
                "Geld kann dir ausgehen, Freunde dich im Stich lassen, Feinde können dir gleichgültig werden, aber Scharlach bleibt dir immer treu.",
            ],
            SKILL_NAME: 'Mark Twain Zitate',
            GET_QUOTE_MESSAGE: 'Hier ist dein Zitat von Mark Twain: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir ein Zitat von Mark Twain“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};
