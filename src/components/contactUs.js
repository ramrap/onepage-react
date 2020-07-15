import React from 'react';
import { Style } from "react-style-tag";



class ContactUs extends React.Component {
    render() {
        return (
            <div class="my-5">

                
                <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
                
                <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

               
                <div class="row">

                    
    <div class="col-lg-5 mb-lg-0 mb-4">

                        
      <div class="card">
                            <div class="card-body">
                               
          <div class="form-header blue accent-1">
                                    <h3 class="mt-2"><i class="fas fa-envelope"></i> Write to us:</h3>
                                </div>
                                <p class="dark-grey-text">We'll write rarely, but only the best content.</p>
                             
          <div class="md-form">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <input type="text" id="form-name" class="form-control" placeholder="Your Name"/>
                                       
          </div>
                                    <div class="md-form">
                                        <i class="fas fa-envelope prefix grey-text"></i>
                                        <input type="text" id="form-email" class="form-control" placeholder="Your email"/>
                                            
          </div>
                                        <div class="md-form">
                                            <i class="fas fa-tag prefix grey-text"></i>
                                            <input type="text" id="form-Subject" class="form-control" placeholder="Subject"/>
          </div>
                                            <div class="md-form">
                                                <i class="fas fa-pencil-alt prefix grey-text"></i>
                                                <textarea id="form-text" class="form-control md-textarea" rows="3" placeholder="Send Message"></textarea>
                                               
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-light-blue">Submit</button>
                                            </div>
                                        </div>
                                    </div> 
                                   

    </div>
                                

   
    <div class="col-lg-7">

                                   
      <div id="map-container-section" class="z-depth-1-half map-container-section mb-4" style={{height:"400px"}}>
                                        <iframe src="https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0"
                                            style={{border:"0",}} allowfullscreen></iframe>
                                    </div>
                                   
      <div class="row text-center">
                                        <div class="col-md-4">
                                            <a class="btn-floating blue accent-1">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </a>
                                            <p>New York, 94126</p>
                                            <p class="mb-md-0">United States</p>
                                        </div>
                                        <div class="col-md-4">
                                            <a class="btn-floating blue accent-1">
                                                <i class="fas fa-phone"></i>
                                            </a>
                                            <p>+ 01 234 567 89</p>
                                            <p class="mb-md-0">Mon - Fri, 8:00-22:00</p>
                                        </div>
                                        <div class="col-md-4">
                                            <a class="btn-floating blue accent-1">
                                                <i class="fas fa-envelope"></i>
                                            </a>
                                            <p>info@gmail.com</p>
                                            <p class="mb-0">sale@gmail.com</p>
                                        </div>
                                    </div>

                                </div>
                               

  </div>
  <Style>{`
  .my-5{}
  .map-container-section {
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
  }
  .map-container-section iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
  `}</Style>

                            

</div>
                     
        )
    }
}

export default ContactUs;