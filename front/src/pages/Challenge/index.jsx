import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Root from '../../components/Root';
import Divider from '@material-ui/core/Divider';
import AutoCompleteInput from '../../components/AutoCompleteInput';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


class Home extends Component {
    render() {
        return (
            <div>
                <Root>
                    <div align="center" style={{ marginTop: "5vh" }}>
                        <Typography style={{ marginBottom: 16, marginTop: 16, color: "#9fac5c", fontFamily: "Bree Serif', serif" }}
                            variant="h3" align="center" gutterBottom>
                            The challenge
                        </Typography>
                        <Divider style={{ marginBottom: "5vh", marginLeft: 32, marginRight: 32 }} />
                    </div>

                    <div align="left" style={{ marginTop: "5vh" }}>
                        <AutoCompleteInput/>

                    </div>

                </Root>
            </div>
        );
    }
}

export default Home;
