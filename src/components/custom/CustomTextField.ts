import { styled, TextField } from "@mui/material";

const CustomTextField = styled(TextField) ({
    "& .MuiOutlinedInput-root": {
        borderRadius: 8,
        "& fieldset": {
            borderColor: "#ccc",
        },
        "&:hover fieldset": {
            borderColor: "#1976d2",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#4caf50",
        },
    },
    "& .MuiInputLabel-root": {
        color: "#666",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#4caf50",
    },
    "& ::placeholder": {
        fontSize: "12px"
    },
    "& input::placeholder": {
        fontSize: "11px",
        color: "#999",
        opacity: 1,
    },
});

export default CustomTextField;