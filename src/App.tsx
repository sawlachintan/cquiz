import { ChangeEvent, useState } from "react";
import "./App.css";
import {
    Button,
    LinearProgress,
    Box,
    ThemeProvider,
    createTheme,
    Typography,
    IconButton,
    Stack,
    Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Starter } from "./components/Starter";
import { getDesignTokens } from "./themes/Themes";
import { questions, majors, answerQuestion, ANSWER } from "./assets/constants";
import { FormContainer } from "./components/FormContainer";

function App() {
    const TOTAL_QUESTIONS = questions.length;
    const [count, setCount] = useState(-1);
    const [questionIndex, setQuestionIndex] = useState<number | null>(null);
    const [answers, setAnswers] = useState(questions);

    const handleStartQuiz = () => setCount(0);
    const theme = createTheme(getDesignTokens());
    const handleNext = () => {
        setCount((count) => (count <= 5 ? count + 1 : 0));
    };
    const handlePrev = () => {
        setCount((count) => (count >= 1 ? count - 1 : 0));
    };
    const handleOptions = (answer: ANSWER) => {
        answers[count].answer = answer;
        console.log(count);
        answerQuestion(count, answer);
        setAnswers(answers);
        handleNext();
    };

    console.log({ majors, questions });

    return (
        <ThemeProvider theme={theme}>
            {count !== -1 ? (
                <div className="App">
                    <header className="App-header">
                        <Box sx={{ width: "80%" }}>
                            <LinearProgress
                                variant="determinate"
                                value={(count * 100) / TOTAL_QUESTIONS}
                                sx={{
                                    backgroundColor: "#555960",
                                    borderRadius: 2,
                                    height: 10,
                                }}
                            />
                        </Box>
                        <Grid
                            container
                            direction="row"
                            justifyContent={"space-around"}
                            alignItems="center"
                            spacing={2}
                            width="80%"
                        >
                            <Grid item>
                                <Stack spacing={2}>
                                    <Typography
                                        variant="h3"
                                        color="text.primary"

                                    >
                                        {questions[count].text}
                                    </Typography>

                                    <FormContainer
                                        handleChange={handleOptions}
                                    />
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            startIcon={<ArrowBackIcon />}
                                            variant="contained"
                                            aria-label="previous"
                                            onClick={handlePrev}
                                            disabled={count <= 0}
                                        >
                                            Prev
                                        </Button>
                                        <Button
                                            endIcon={<ArrowForwardIcon />}
                                            variant="contained"
                                            aria-label="next"
                                            onClick={handleNext}
                                            disabled={count === 7}
                                        >
                                            Next
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Typography color="primary">
                                    {" "}
                                    Radar Chart for analysis
                                </Typography>
                            </Grid>
                        </Grid>
                    </header>
                </div>
            ) : (
                <Starter onClick={handleStartQuiz} />
            )}
        </ThemeProvider>
    );
}

export default App;
