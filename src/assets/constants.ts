export type ANSWER = {
    answer: string;
};

export const YES: ANSWER = "yes" as unknown as ANSWER;
export const NO: ANSWER = "no" as unknown as ANSWER;

type Question = {
    text: string;
    answer: ANSWER | "";
    majors: string[];
};

export let questions: Question[] = [
    {
        text: "Are you Social?",
        answer: "",
        majors: ["Dog Person", "No animal"],
    },
    {
        text: "Do you enjoy playing with animals?",
        answer: "",
        majors: ["Dog Person", "Lion", "Cat Person", "Sloth"],
    },
    {
        text: "Do you like not having the responsability of taking care of an animal?",
        answer: "",
        majors: ["Dog Person", "Lion", "Cat Person", "Sloth", "Fish"],
    },
    {
        text: "Do you like big animals?",
        answer: "",
        majors: ["Dog Person", "Lion", "Sloth"],
    },
    {
        text: "Do you like cats?",
        answer: "",
        majors: ["Cat Person"],
    },
    {
        text: "Do you like dogs?",
        answer: "",
        majors: ["Dog Person"],
    },
    {
        text: "Do you like wild animals?",
        answer: "",
        majors: ["Lion", "Fish", "Sloth"],
    },
];

type MajorScore = {
    score: number;
    questions: number;
};

type Major = {
    [index: string]: MajorScore;
};

const averageScore: number = 2;

export let majors: Major = {
    "Dog Person": {
        score: averageScore,
        questions: 0,
    },
    "Cat Person": {
        score: averageScore,
        questions: 0,
    },
    Fish: {
        score: averageScore,
        questions: 0,
    },
    "No animal": {
        score: averageScore,
        questions: 0,
    },
    Lion: {
        score: averageScore,
        questions: 0,
    },
    Sloth: {
        score: averageScore,
        questions: 0,
    },
};

for (let i = 0; i < questions.length; i++) {
    let associatedMajorNames = questions[i].majors;
    for (let j = 0; j < associatedMajorNames.length; j++) {
        // also increment the number of questions for this major
        let majorName = associatedMajorNames[j];
        if (majors.hasOwnProperty(majorName)) {
            majors[majorName].questions++;
        } else {
            console.error(
                "Major ",
                majorName,
                "found in list of questions but not list of majors"
            );
        }
    }
}

export const SORTED_MAJORS = Object.keys(majors);

export const SCORE_WEIGHTS: number[] = [1.3, 0.8, 0.6, 0.4, 0.3, 0.25];
export const DEFAULT_WEIGHT: number = 0.2;

export const answerQuestion = (i: number, answer: ANSWER) => {
    // validate inputs
    if (!questions[i]) {
        console.error("Question with index", i, "not found");
        return;
    }
    // if (answer !== "yes" && answer !== "no") {
    //     console.error(
    //         "Invalid answer",
    //         answer,
    //         "provided to question with index",
    //         i,
    //         ":",
    //         questions[i].text
    //     );
    //     return;
    // }

    // list of major names associated with current question.
    var associatedMajorNames = questions[i].majors;

    // amount to change score for each major depending on number of questions it's associated with.
    // if it's associated with more than 6 questions, it defaults to .2
    // var scoreChangeAmounts = [1.3, 0.8, 0.6, 0.4, 0.3, 0.25];
    // var scoreChangeDefault = 0.2;

    // add or subtract score changes based on answer to question
    var scoreMultiplier;
    // if question is unanswered, simply add/subtract scorechange
    if (questions[i].answer === "") {
        scoreMultiplier = answer === YES ? 1 : -1;
    }
    // if question's answer changed, we'll have to add/subtract twice to compensate for past answer
    else {
        scoreMultiplier = answer === YES ? 2 : -2;
    }

    // update answer
    questions[i].answer = answer;

    // keep track of the total score change for normalization later on
    var totalScoreChange = 0;

    // update scores of associated majors
    for (var i = 0; i < associatedMajorNames.length; i++) {
        // get major object
        var major = majors[associatedMajorNames[i]];
        var scoreChange;
        // change it's score
        if (major.questions < SCORE_WEIGHTS.length) {
            scoreChange = SCORE_WEIGHTS[major.questions] * scoreMultiplier;
        } else {
            scoreChange = DEFAULT_WEIGHT * scoreMultiplier;
        }
        major.score += scoreChange;
        totalScoreChange += scoreChange;
    }

    console.log({
        associatedMajorNames,
        scoreMultiplier,
        answer,
        totalScoreChange,
        majors,
    });

    // normalize all scores so that they continue to add up to the initial sum of scores
    // by subtracting a fraction of totalScoreChange from all other majors
    var scoreFraction =
        totalScoreChange / (SORTED_MAJORS.length - associatedMajorNames.length);

    for (var i = 0; i < SORTED_MAJORS.length; i++) {
        var score = majors[SORTED_MAJORS[i]].score;
        // only subtract scoreFraction from non-associated majors
        if (associatedMajorNames.indexOf(SORTED_MAJORS[i]) === -1) {
            score -= scoreFraction;
        }
        // keep all scores in 0-4 bound
        score = score < 0 ? 0 : score > 4 ? 4 : score;
        // update object
        majors[SORTED_MAJORS[i]].score = score;
        // update chart's data set
    }
};
