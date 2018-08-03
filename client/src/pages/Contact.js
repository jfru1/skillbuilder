import React from "react";
import Navbar from "../components/Navbar/Navbar"

const Contact = () =>

  <div>

  <Navbar/>

  <div class="containers">
     <div class="row">
       <div class="col-md-8">
        <div class="panel panel-default">
           <div class="panel-heading">
             <h1 class="panel-title"><strong>Contact</strong></h1>
           </div>
           <div class="panel-body pItems row">
             <div class="col-md-12">
               <div class="form-group">
                 <label for="name">Name</label>
                 <input type="email" class="form-control" placeholder="Jane Doe"/>
               </div>
               <div class="form-group">
                 <label for="email">Email</label>
                 <input type="email" class="form-control" placeholder="janedoe@protonmail.com"/>
               </div>
               <div class="form-group">
                 <label for="msg">Message</label>
                 <textarea class="form-control" rows="6"></textarea>
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






  </div>;



export default Contact;
