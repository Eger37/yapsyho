import React from "react";
import {makeStyles} from "@mui/styles"
import {Paper, Container, Grid, Typography, Button, CircularProgress} from "@mui/material"
import testImg from "../images/test.jpg";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(() => ({
    mainFeaturesPostContent: {
        position: "relative",
        backgroundColor: "rgba(0,0,0,.6)",
        padding: 8,
        marginTop: 16,
        marginBottom: 16
    },
    meinFeaturesPost: {
        position: "relative",
        color: "white",
        marginBottom: 4,
        padding: 16,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }
}))

function TestInfo({title = "", about = "", testId=0,  loading}) {
    const classes = useStyles();
    return (
        <Paper className={classes.meinFeaturesPost}
               style={{backgroundImage: `url(${testImg}`}}>
            <Container fixed>
                <Grid container>
                    <Grid item md={3}>
                    </Grid>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            {loading &&
                                <center>
                                    <CircularProgress/>
                                </center>}
                            <Typography
                                align={"center"}
                                variant={"h5"}
                                color="white">
                                {title}
                            </Typography>
                            <Typography
                                variant={"h6"}
                                color="white">&nbsp;&nbsp;&nbsp;
                                {about}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={3}/>
                    <Grid item md={3}/>
                    <Grid item md={6}
                          container
                          alignItems="center"
                          direction="column"
                          justifyContent="center"
                          rowSpacing={1}

                    >
                        <Grid item md={6}>
                            <NavLink to={`/test/${testId}/testing`}>
                                <Button variant="contained" size={"small"} color={"primary"}>
                                    Скласти тест
                                </Button>
                            </NavLink>
                        </Grid>

                        <Grid item md={6}>
                            <NavLink to={`/`}>
                                <Button variant="contained" size={"small"} color={"primary"}>
                                    На головну сторінку
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Paper>)
};


export default TestInfo;
