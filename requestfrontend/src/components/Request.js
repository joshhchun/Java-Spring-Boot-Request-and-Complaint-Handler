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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
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
        whi: {
            main: "#ffffff",
        },
    },
});

const columns = [
    { id: "type", label: "Type", minWidth: 50, align: "left" },
    { id: "name", label: "Name", minWidth: 50, align: "left" },
    { id: "age", label: "Age", minWidth: 1, maxWidth: 5, align: "left" },
    {
        id: "email",
        label: "Email",
        minWidth: 100,
        align: "left",
    },
    {
        id: "message",
        label: "Message",
        minWidth: 300,
        align: "left",
    },
];

export default function Request() {
    // States for request attributes
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // State for all of the requests in the database
    const [requests, setRequests] = useState([]);

    const ageHandler = (e) => {
        // Handling if user does not input valid age
        const { value } = e.target;
        if (isNaN(value)) {
            setAge("");
        } else {
            if (parseInt(value) > 150 || parseInt(value) < 0) {
                alert(value + " is not a valida age. You must enter a valid age!");
                setAge("")
            }
            else {
                setAge(value);
            }
        }
    }
    // Function to handle the button click (send request data to database)
    const handleClick = async (e) => {
        e.preventDefault();
        const request = { type, name, email, age, message };
        try {
            await fetch("http://localhost:8080/api/v1/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(request),
            });
            console.log("Request added");
        } catch (e) {
            console.log(e);
        }
    };
    // Function to fetch all of the requests from the database
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "http://localhost:8080/api/v1/request"
                );
                const data = await response.json();
                setRequests(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);
    // For the table
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    // For the table
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const paperStyle = {
        padding: "40px 30px 30px",
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
                        align="justify"
                        sx={{
                            mr: 1,
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
                            style={{
                                background: "#606e7b",
                            }}
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            color="neutral"
                        />
                        <TextField
                            style={{
                                background: "#606e7b",
                            }}
                            id="outlined-basic"
                            label="Age"
                            variant="outlined"
                            value={age}
                            onChange= {ageHandler}
                            color="neutral"
                        />
                        <TextField
                            style={{
                                background: "#606e7b",
                            }}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            color="neutral"
                        />
                        <TextField
                            style={{
                                background: "#606e7b",
                            }}
                            id="outlined-basic"
                            label="Message"
                            variant="outlined"
                            multiline
                            minRows={5}
                            maxRows={5}
                            color="neutral"
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
            <Container>
                <Paper
                    style={{
                        padding: "70px 60px 30px",
                        width: "800px",
                        margin: "150px auto",
                    }}
                    elevation = {18}
                    sx={{ backgroundColor: "lightslategray" }}
                >
                    <Typography
                        variant="h5"
                        component="a"
                        align="justify"
                        style = {{
                            padding: "30px",
                        }}
                        sx={{
                            mr: 4,
                            fontFamily: "roboto",
                            fontWeight: 800,
                            letterSpacing: ".2rem",
                            color: "white",
                        }}
                    >
                        ALL REQUESTS AND COMPLAINTS
                    </Typography>
                    <br/>
                    <br/>
                    <TableContainer
                        sx={{
                            maxHeight: 440,
                            background: "#606e7b",
                            margin: "10px",
                        }}
                    >
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                                background: "#302f36",
                                                color: "white",
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {requests
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}
                                            >
                                                {columns.map((column) => {
                                                    const value =
                                                        row[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            {column.format &&
                                                            typeof value ===
                                                                "number"
                                                                ? column.format(
                                                                      value
                                                                  )
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={requests.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>
        </ThemeProvider>
    );
}
