import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Root from "../../components/Root";
import Divider from "@material-ui/core/Divider";
import AutoCompleteInput from "../../components/AutoCompleteInput/";
import End from "../../assets/end.jfif";
import { NavLink } from "react-router-dom";



class Home extends Component {
  render() {
    return (
      <div>
        <Root>
          <div align="center" style={{ marginTop: "5vh" }}>
            <Typography
              style={{
                marginBottom: 16,
                marginTop: 16,
                color: "#9fac5c",
                fontFamily: "Bree Serif', serif"
              }}
              variant="h3"
              align="center"
              gutterBottom
            >
              The challenge
            </Typography>
            <Divider
              style={{ marginBottom: "5vh", marginLeft: 32, marginRight: 32 }}
            />
          </div>

          <div align="left" style={{ marginTop: "5vh" }}>
            <AutoCompleteInput />
          </div>

          <div align="left" style={{ marginLeft: 50 }}>
            <Typography
              style={{
                marginBottom: 16,
                marginRight: 50,
                color: "#2d301e",
                fontFamily: "Bree Serif', serif"
              }}
              variant="h5"
              align="left"
              gutterBottom
            >
              I've never used ElasticSearch before, it really challenged me a
              lot, but I finished. Thank you guys for the opportunity and I would love to work with you, I know a lot about
              Jusbrasil, and I'll do my best for help where you need. Here is <NavLink  to="skills">My Skills</NavLink> and <NavLink to="timeline">My TimeLine</NavLink> as a developer.
            </Typography>
          </div>
          <div align="center">
            <img src={End} style={{marginTop:50,height:350,maxWidth:"65%"}} alt="End" />
          </div>
        </Root>
      </div>
    );
  }
}

export default Home;
