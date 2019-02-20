import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Root from '../../components/Root';
import Divider from '@material-ui/core/Divider';
import TimeLineComponent from '../../components/TimeLine';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


class TimeLine extends Component {
    render() {
        return (
            <div>
                <Root>
                    <div align="center" style={{ marginTop: "5vh" }}>
                        <Typography style={{ marginBottom: 16, marginTop: 16, color: "#9fac5c", fontFamily: "Bree Serif', serif" }}
                            variant="h3" align="center" gutterBottom>
                            TimeLine
                        </Typography>
                        <Divider style={{ marginBottom: "5vh", marginLeft: 32, marginRight: 32 }} />
                    </div>

                    <div align="center" style={{ marginLeft: 50 }}>
                        <Typography style={{ marginBottom: 16, marginTop: 16, marginRight: 50, color: "#2d301e", fontFamily: "Bree Serif', serif" }}
                            variant="h5" align="left" gutterBottom>
                            Here is my history as a Developer.
                        </Typography>
                        <TimeLineComponent />
                    </div>
                </Root>
            </div>
        );
    }
}

export default TimeLine;
