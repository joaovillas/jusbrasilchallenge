import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import HackathonLiberty from '../../assets/liberty.jfif';
import Solutis from '../../assets/solutis.jpg';
import Temet from '../../assets/temet.jpg';
import VicentFawkes from '../../assets/vicentfawkes.PNG';
import SOSLixeiraseCia from '../../assets/soslixeirasecia.PNG';
import Data4Good from '../../assets/data4good.jpg';
import { Divider } from '@material-ui/core';
import Chip from '../Chip';
import Grid from '@material-ui/core/Grid';
import NotFound from '../../assets/notfound.jfif';
const style = {
    divider: {
        marginBottom: "2vh",
        marginTop: "2vh"
    }
}

const languages = [
    [{ text: "Python", color: "default" }, { text: "ReactJS", color: "default" }, { text: "Material UI", color: "default" }],
    [{ text: "Java", color: "default" }, { text: "Angular", color: "default" }, { text: "SpringBoot", color: "default" }],
    [{ text: "PHP", color: "default" }, { text: "Laravel", color: "default" }, { text: "JQuery", color: "default" }],
    [{ text: "Python", color: "default" }, { text: "Meteor JS", color: "default" },{ text: "R Language", color: "default" }],
    [{ text: "PHP", color: "default" }, { text: "WordPress", color: "default" }],
    [{ text: "PHP", color: "default" }, { text: "HTML5", color: "default" },{ text: "MYSQL", color: "default" } ],
    [{ text: "HTML5", color: "default" }, { text: "CSS3", color: "default" },{ text: "Bootstrap4", color: "default" } ],

]

const TimeLine = () => {
    return (

        <Timeline lineColor={'#9fac5c'}>
            <TimelineItem
                key="001"
                dateText="02/2019 – Present"
                style={{ color: "#b88262" }}
                dateInnerStyle={{ background: '#9fac5c', color: 'white' }}

            >
                <h2>Liberty Seguros Hackathon</h2>
                <h3>3º Place against 20 Teams</h3>
                <Divider style={style.divider} />

                <img src={HackathonLiberty} className="img-timeline" alt="" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="stretch"
                            direction="row"

                        >
                            {languages[0].map((lang) => {
                                return < Chip {...lang} key={lang.text} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </TimelineItem>
            <TimelineItem
                key="001"
                dateText="12/2018"
                style={{ color: "#b88262" }}
                dateInnerStyle={{ background: '#9fac5c', color: 'white' }}
            >
                <h2>Start Working at Solutis SA</h2>
                <h3>Full Stack Developer</h3>
                <Divider style={style.divider} />

                <img src={Solutis} className="img-timeline" alt="" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="stretch"
                            direction="row"

                        >
                            {languages[1].map((lang) => {
                                return < Chip {...lang} key={lang.text} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </TimelineItem>
            <TimelineItem
                key="001"
                dateText="05/2018"
                style={{ color: "#b88262" }}
                dateInnerStyle={{ background: '#9fac5c', color: 'white' }}
            >
                <h2>Start Working at Temet Dev Ágil</h2>
                <h3>Back End Developer </h3>
                <Divider style={style.divider} />

                <img src={Temet} className="img-timeline" alt="" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="stretch"
                            direction="row"

                        >
                            {languages[2].map((lang) => {
                                return < Chip {...lang} key={lang.text} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </TimelineItem>

            <TimelineItem
                key="001"
                dateText="05/2018"
                style={{ color: "#b88262" }}
                dateInnerStyle={{ background: '#9fac5c', color: 'white' }}
            >
                <h2> Data4Good Hackathon </h2>
                <h3>1º Place against 8 Teams</h3>
                <Divider style={style.divider} />

                <img src={Data4Good} className="img-timeline" alt="" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="stretch"
                            direction="row"

                        >
                            {languages[3].map((lang) => {
                                return < Chip {...lang} key={lang.text} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </TimelineItem>

            <TimelineItem
                key="001"
                dateText="04/2018"
                style={{ color: "#b88262" }}
                dateInnerStyle={{ background: '#9fac5c', color: 'white' }}
            >
                <h2>Developed WebSite for Vicent Fawkes(Youtuber)</h2>
                <h3>Got this freela at Workana</h3>
                <Divider style={style.divider} />

                <img src={VicentFawkes} className="img-timeline" alt="" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="stretch"
                            direction="row"

                        >
                            {languages[4].map((lang) => {
                                return < Chip {...lang} key={lang.text} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </TimelineItem>

            <TimelineItem
                key="001"
                dateText="04/2018"
                style={{ color: "#b88262" }}
                dateInnerStyle={{ background: '#9fac5c', color: 'white' }}
            >
                <h2>Developed WebSite for SOS Lixeiras e Cia</h2>
                <h3>Got this as freelancer</h3>
                <Divider style={style.divider} />

                <img src={SOSLixeiraseCia} className="img-timeline" alt="" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="stretch"
                            direction="row"

                        >
                            {languages[5].map((lang) => {
                                return < Chip {...lang} key={lang.text} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </TimelineItem>

            <TimelineItem
                key="001"
                dateText="01/2018"
                style={{ color: "#b88262" }}
                dateInnerStyle={{ background: '#9fac5c', color: 'white' }}
            >
                <h2>Developed WebSite for Clinica NutriSaude</h2>
                <h3>But not in the Air (OffLine) <a href="https://github.com/joaovillas/ClinicaNutriSaude">find on my github</a></h3>
                <Divider style={style.divider} />

                <img src={NotFound} className="img-timeline" alt="" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="stretch"
                            direction="row"

                        >
                            {languages[6].map((lang) => {
                                return < Chip {...lang} key={lang.text} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </TimelineItem>
        </Timeline>

    );
};

export default TimeLine