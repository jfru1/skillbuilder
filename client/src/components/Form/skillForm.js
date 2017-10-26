import React from "react";


const Skillform = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (

<div class="container">
    <div class="row">
      <div class="col-md-8">
       <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="panel-title"><strong>Define your Skill</strong></h1>
            </div>
          <div class="panel-body pItems row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="name">What do you want to learn?</label>
                <input type="string" name = "skill" onChange = {onChange}  value = {user.skill} class="form-control" placeholder="I want to learn how to..."/>
              </div>
              <div class="form-group">
                <label for="">Do some research, what is your goal?</label>
                <input type="string" name = "goal" onChange = {onChange} value = {user.goal} class="form-control" placeholder="After 20 hours, I want to..."/>
              </div>
              <div class="form-group">
                <label for="msg">Break your path down into five clear steps.</label>
                <textarea class="form-control" name = "step1" onChange = {onChange} value = {user.step1} rows="1" placeholder="The first step is..."></textarea>
                <textarea class="form-control" name = "step2" onChange = {onChange}  value = {user.step2} rows="1" placeholder="The second step is..."></textarea>
                <textarea class="form-control" name = "step3" onChange = {onChange}  value = {user.step3} rows="1" placeholder="The third step is..."></textarea>
                <textarea class="form-control" name = "step4" onChange = {onChange}  value = {user.step4} rows="1" placeholder="The fourth step is..."></textarea>
                <textarea class="form-control" name = "step5" onChange = {onChange}  value = {user.step5} rows="1" placeholder="The final step is..."></textarea>
              </div>
              <div class="form-group">
              <button type="submit" onClick = {onSubmit} class="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
       </div>
      </div>

  </div>
  </div>
)


export default Skillform;
