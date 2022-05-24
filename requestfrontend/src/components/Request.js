import * as React from "react";
import {
    Paper,
    Container,
    Typography,
    Button,
    FormControl,
    FormHelperText,
    MenuItem,
    Select,
    InputLabel,
    TextField,
    Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";

const theme = createTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        primary: {
            main: "#0971f1",
            darker: "#053e85",
        },
        neutral: {
            main: "#302f36",
            contrastText: "#fff",
        },
    },
});

export default function Request() {
    // States
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    // Function to handle the button click (send request data to database)
    const handleClick = async (e) => {
        e.preventDefault();
        const request = { type, name, email, age, message };
        await fetch("http://localhost:8080/api/v1/request", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(request),
        }).then(()=>{
            console.log("student added!");
        }).catch(err=>{
            console.log("errmmm error + " + err);
        });
    };

    const paperStyle = {
        padding: "40px 20px 20px",
        width: "800px",
        margin: "80px auto",
    };
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Paper
                    elevation={20}
                    style={paperStyle}
                    sx={{ backgroundColor: "lightslategray" }}
                >
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        align="justify"
                        sx={{
                            mr: 4,
                            fontFamily: "roboto",
                            fontWeight: 800,
                            letterSpacing: ".2rem",
                            color: "white",
                        }}
                    >
                        SUBMIT A REQUEST OR A COMPLAINT
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            margin: "30px",
                            "& > :not(style)": { m: 1, width: "60ch" },
                        }}
                        noValidate
                    >
                        <FormControl
                            sx={{ m: 1, minWidth: 120, width: "auto" }}
                            color="neutral"
                            focused
                        >
                            <InputLabel
                                id="demo-simple-select-helper-label"
                                color="neutral"
                                focused
                            >
                                Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={type}
                                label="type"
                                onChange={(e) => setType(e.target.value)}
                                color="neutral"
                                focused
                            >
                                <MenuItem value={"Request"}>Request</MenuItem>
                                <MenuItem value={"Complaint"}>
                                    Complaint
                                </MenuItem>
                            </Select>
                            <FormHelperText>
                                Request or Complaint
                            </FormHelperText>
                        </FormControl>
                        <TextField
                            id="filled-basic"
                            label="Name"
                            variant="filled"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            color="neutral"
                            focused
                        />
                        <TextField
                            id="filled-basic"
                            label="Age"
                            variant="filled"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            color="neutral"
                            focused
                        />
                        <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            color="neutral"
                            focused
                        />
                        <TextField
                            id="filled-basic"
                            label="Message"
                            variant="filled"
                            multiline
                            minRows={5}
                            maxRows={5}
                            color="neutral"
                            focused
                            sx={{
                                width: "150ch",
                            }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            elevation={20}
                            color="neutral"
                            sx={{ height: "50px" }}
                            onClick={handleClick}
                        >
                            Submit
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}
