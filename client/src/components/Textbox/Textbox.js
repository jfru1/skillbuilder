import React from "react";
import { Link } from "react-router-dom";

const Textbox = props =>
<div>
  <textarea
    value={props.value}
    onChange={props.onChange}
    type="textarea"
    placeholder="Sum up what you've learned in 140 characters or fewer!"
    maxlength ="140"
    name = "post"
  />

  <button type="submit" onClick = {props.onClick} class="btn btn-success">Submit</button>
</div>
export default Textbox;
