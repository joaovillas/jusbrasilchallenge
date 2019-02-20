import React, { Component } from 'react';
import AppBar from '../../components/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '../Box/Box';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom:30
    },
});


class Root extends Component {
    render() {
        const { classes, children, history } = this.props;
        return (
            <div style={{marginBottom:10}}>
                <AppBar />
                <main className={styles.content}>
                    <React.Fragment>
                        <Box>
                            <Grid container className={styles.root}>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        spacing={16}
                                        alignItems="stretch"
                                        direction="column"
                                        justify="space-between"
                                    >
                                        <Paper style={{marginBottom:50, paddingBottom:"25vh"}}>
                                            {children}
                                        </Paper>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </React.Fragment>
                </main>
            </div>
        );
    }
}

export default Root;
