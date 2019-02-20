import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Root from '../../components/Root';
import Me from '../../assets/eu.jfif';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

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
                            João Pedro Villas-Bôas
                        </Typography>
                        <Divider style={{ marginBottom: "5vh", marginLeft: 32, marginRight: 32 }} />

                        <img src={Me} className="img-heading" alt="" />
                    </div>

                    <div align="left" style={{ marginLeft: 50 }}>
                        <Typography style={{ marginBottom: 16, marginTop: 16, color: "#898a7c", fontFamily: "Bree Serif', serif" }}
                            variant="h4" align="left" gutterBottom>
                            About Me:
                        </Typography>

                        <Typography style={{ marginBottom: 16, marginTop: 16, marginRight: 50, color: "#2d301e", fontFamily: "Bree Serif', serif" }}
                            variant="h5" align="left" gutterBottom>
                            Hello World, I'm João Pedro, Computer Science Student at <a href="https://www.unifacs.br/"> UNIFACS </a>. Web Developer Lover and Martial Arts Enthusiast and This is my submission to Jusbrasil Challenger for Interniship Job.
                        </Typography>

                    </div>
                    <Divider />
                    <div align="left" style={{ marginLeft: 50 }}>
                        <Typography style={{ marginBottom: 16, marginTop: 16, color: "#898a7c", fontFamily: "Bree Serif', serif" }}
                            variant="h4" align="left" gutterBottom>
                            Contact Me:
                        </Typography>
                        <Typography style={{ marginBottom: 16, marginTop: 16, marginRight: 50, color: "#2d301e", fontFamily: "Bree Serif', serif" }}
                            variant="h5" align="left" gutterBottom>
                            <Icon>call</Icon><a href='https://api.whatsapp.com/send?phone=5571988044044&text=Hey John!'> (71) 98804-4044</a><br />
                            <Icon>mail</Icon><a href='mailto:joaopedrombvboas@gmail.com'> joaopedrombvboas@gmail.com</a><br />
                            <Icon>person</Icon><a href='https://github.com/joaovillas'> my github</a><br />
                        </Typography>
                    </div>




                </Root>
            </div >
        );
    }
}

export default Home;
