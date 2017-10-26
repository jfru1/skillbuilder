import React from "react";

const YourPage = () =>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">SkillBuilder</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.html">About</a></li>
        <li><a href="userskill.html">Your Skill</a></li> 
        <li><a href="contact.html">Contact</a></li> 
      </ul>
    </div>
  </div>
</nav>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
       <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="panel-title"><strong>My Skill is...</strong></h1>
          </div>
          <div class="panel-body row">
            <div class="col-md-12">
              <div align ="center">
              <h1>Programming!</h1>
          	  </div>
            </div>
            <div class="form-group">
            	<div class="col-md-8">
            		<label for="dailylearn"><h2>Today I learned...</h2></label>
            		<textarea class="form-control" row="2" placeholder="Sum up what you've learned in 140 characters or fewer!" maxlength="140"></textarea>
            	</div>
            </div>
          </div>
       </div>
      </div>
      <div class="sidebar col-md-4">
        <div class="panel panel-default">
          <div align="center" class="panel-heading">
            <h3 class="panel-title"><strong>Your Progress So Far</strong></h3>
          </div>
          <div class="panel-body">
              <div class="thumbnail">
                <img src="assets/images/usercurve.png" class="img-responsive" alt="">
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
    </div>
    <div class="sidebar col-md-4">
    	<div class="panel panel-default">
    		<div align="center" class="panel-heading">
    			<h3 class="panel-title"><strong>Step by Step:</strong></h3>
    		</div>
    		<div class="panel-body">
    			<ol>
    				<h3>
    				<li>[User Step 1]</li>
    				<li>[User Step 2]</li>
    				<li>[User Step 3]</li>
    				<li>[User Step 4]</li>
    				<li>[User Step 5]</li>
    				</h3>
    			</ol>
    		</div>
    	</div>
  </div>
    <footer class="footer">
      <div class="navbar navbar-inverse">
      <div class="container">
        <p class="text-muted">
            &copy; Copyright Joe Frew and Michael Megarba 2017
        </p>
      </div>
      </div>
    </footer>

   export default YourPage;