import React from "react";
import Navbar from "../components/Navbar/Navbar"
import PracticeArc from '../components/Graphs/arcReference'

const About = () =>

<div class="containers">

<Navbar/>
  <div class="row">
    <div class="col-md-8">
     <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="panel-title"><strong>Finding the Mark</strong></h1>
        </div>
        <div class="panel-body row">
          <div class="col-md-3">
            <div class="thumbnail">

              <img src="http://itknowledgeexchange.techtarget.com/writing-for-business/files/2016/11/learning-curve.png" class="img-responsive" alt=""/>
            </div>
          </div>
          <div class="col-md-9">
            <p>
            In 2008, a journalist by the name of Malcolm Gladwell published the book "Outliers" in which he profiled highly successful people. Gladwell constructed a series of case studies built around the central theme of individuals who had attained what he called "mastery" of their respective discipline. His benchmark for mastery was drawn from the work of a man named K. Anders Ericsson who, in his study of world class athletes, constructed a theory of deliberate practice. Ericsson asserted that the threshold to complete domain mastery was 10,000 hours of deliberate practice. You've surely heard this mentioned before. To break it down, that's a time commitment roughly equivalent time spent at a full time job for seven years.
            </p>

            <p>
            So how is a normal person with a life full of regular responsibilities supposed to learn something new? The introduction of this loosely understood popular psychology into the melting pot of public consciousness painted the wrong picture in the minds of the public. We started answering the question of "How long does it take to get good at something?" with "It takes 10,000 hours to become a master." But those ideas do not align. The average person does not need to become a master in something to feel competent. They simply need to reach a "pretty good" mark.
            </p>

            <p>
            But where is that mark? Behavioral scientist Josh Kaufman, motivated by a need to correct the record on this issue, discovered the answer we'd already known. All skill acquisition can be modeled on a standard curve and a person can reach a "pretty good" point, where further practice gives diminishing returns, in roughly 20 hours.
            </p>

            <p>
            Learn a new skill with us in just 45 minutes of deliberate practice a day!
            </p>

          </div>
        </div>
     </div>
    </div>
    <div class="sidebar col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"><strong>Your Progress So Far</strong></h3>
        </div>
        <div class="panel-body">
            <div class="thumbnail">
            <PracticeArc/>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>;


export default About;
