import { Button, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
    onClick: () => void;
};

export const Starter: FC<Props> = ({ onClick }) => {
    return (
        <div className="App App-header">
            <Typography variant="h1" color="text.primary">
                Start Quiz
            </Typography>
            <Typography variant="body1" color="text.primary">
                This quiz intends to help you find the most suitable major based
                on the responses to the questions
            </Typography>
            <Button onClick={onClick} variant="contained">
                Start Quiz
            </Button>
        </div>
    );
};
