import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => {
    return createStyles({
        bar:{
            width:"100%",
            '& > * + *':{
                marginTop: "16px"
            }
        }
    })
})

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            <LinearProgress />
        </div>
    )
} 