import { Button } from "@mui/material";
import { FC } from "react";

type Props = {
    onClick: () => void;
};

export const Starter: FC<Props> = ({ onClick }) => {
    return (
        <div className="App App-header">
            <h1>Start Quiz</h1>
            <p>
                This quiz intends to help you find the most suitable major based
                on the responses to the questions
            </p>
            <Button onClick={onClick} variant="contained">
                Start Quiz
            </Button>
        </div>
    );
};
