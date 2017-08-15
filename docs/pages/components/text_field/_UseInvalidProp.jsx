import React, { PropTypes } from "react";
import Textfield from "../../../../src/Textfield/Textfield";
import { Grid, Cell } from "../../../../src/Grid";

class UseInvalidProp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }

  render() {
    return (
      <Grid>
        <Cell col={12}>
          <Textfield
            floatingLabel="Password"
            type="password"
            useInvalidProp
            invalid={true}
            helptext="Your password is invalid."
            helptextValidation
            value={this.state.password}
            onChange={({ target: { value: password } }) => {
              this.setState({ password });
            }}
          />
        </Cell>
      </Grid>
    );
  }
}
export default UseInvalidProp;
