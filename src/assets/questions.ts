type Question = {
    text: string;
    answer: string;
    majors: string[];
};

export const questions: Question[] = [
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

export const majors: Major = {
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
