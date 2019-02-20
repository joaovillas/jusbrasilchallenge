import React from 'react';
import Typography from '@material-ui/core/Typography';

const Box = ({ children, title, width }) => (


    <div
      style={{
        maxHeight: '83vh',
        paddingRight: 16,
        maxWidth: 830,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20vh"
      }}
    >
      <Typography style={{ marginBottom: 16 }} variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </div>

);

export default Box;