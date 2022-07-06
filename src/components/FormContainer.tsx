import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
} from "@mui/material";
import { FC } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { ANSWER, YES, NO } from "../assets/constants";
type Props = {
    handleChange: (answer: ANSWER) => void;
};

export const FormContainer: FC<Props> = ({ handleChange }) => {
    return (
        <Stack direction={"row"} spacing={1}>
            <Button
                onClick={() => handleChange(YES)}
                variant="outlined"
                startIcon={<ThumbUpIcon />}
            >
                Yes
            </Button>
            <Button
                onClick={() => handleChange(NO)}
                variant="outlined"
                startIcon={<ThumbDownIcon />}
            >
                No
            </Button>
        </Stack>
    );
};
