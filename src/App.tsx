import { useState } from "react";
import "./App.css";
import {
    Button,
    LinearProgress,
    Box,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { Starter } from "./components/Starter";
import { getDesignTokens } from "./themes/Themes";

function App() {
    const [count, setCount] = useState(0);
    const [questionIndex, setQuestionIndex] = useState<number | null>(null);

    const handleStartQuiz = () => setQuestionIndex(0);
    const theme = createTheme(getDesignTokens());

    return (
        <ThemeProvider theme={theme}>
            {questionIndex !== null ? (
                <div className="App">
                    <header className="App-header">
                        <Box sx={{ width: "70%" }}>
                            <LinearProgress
                                variant="determinate"
                                value={(count * 100) / 7}
                            />
                        </Box>

                        <Button
                            variant="contained"
                            onClick={() =>
                                setCount((count) =>
                                    count <= 6 ? count + 1 : 0
                                )
                            }
                        >
                            count is: {count}
                        </Button>
                    </header>
                </div>
            ) : (
                <Starter onClick={handleStartQuiz} />
            )}
        </ThemeProvider>
    );
}

export default App;
