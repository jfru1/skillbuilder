import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {withRouter} from "react-router-dom";

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (





  <MuiThemeProvider>

<h1 className ="brand">SkillBuilder</h1>


  <Card className="container">
    <form action="/userSkill" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>


      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton  type="submit" label="Log in" primary />

      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Card>
  </MuiThemeProvider>

);



export default LoginForm;
