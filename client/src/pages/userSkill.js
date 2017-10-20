import React from "react";

const userSkill = () =>

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
              <input type="string" class="form-control" placeholder="I want to learn how to..."/>
            </div>
            <div class="form-group">
              <label for="">Do some research, what is your goal?</label>
              <input type="email" class="form-control" placeholder="After 20 hours, I want to..."/>
            </div>
            <div class="form-group">
              <label for="msg">Break your path down into five clear steps.</label>
              <textarea class="form-control" rows="1" placeholder="The first step is..."></textarea>
              <textarea class="form-control" rows="1" placeholder="The second step is..."></textarea>
              <textarea class="form-control" rows="1" placeholder="The third step is..."></textarea>
              <textarea class="form-control" rows="1" placeholder="The fourth step is..."></textarea>
              <textarea class="form-control" rows="1" placeholder="The final step is..."></textarea>
            </div>
            <div class="form-group">
            <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
     </div>
    </div>

</div>
</div>

export default userSkill;
