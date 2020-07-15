import React from 'react';
class TeamCard extends React.Component {
    render() {
        return (

            <div className="team-section text-center my-5">


                <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>

                <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
  eum porro a pariatur veniam.</p>


                <div className="row text-center">


                    <div className="col-md-4">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded z-depth-1-half" alt="Sample avatar" />
                        </div>
                        <h4 className="font-weight-bold dark-grey-text my-4">Maria Kate</h4>
                        <h6 className="text-uppercase grey-text mb-3"><strong>Photographer</strong></h6>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-fb">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-dribbble">
                            <i className="fab fa-dribbble"></i>
                        </a>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-tw">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" className="rounded z-depth-1-half" alt="Sample avatar" width="250px"/>
                        </div>
                        <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
                        <h6 className="text-uppercase grey-text mb-3"><strong>Front-end Developer</strong></h6>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-email">
                           
                        </a>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-fb">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-git">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>



                    <div className="col-md-4 ">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" className="rounded z-depth-1-half" alt="Sample avatar" />
                        </div>
                        <h4 className="font-weight-bold dark-grey-text my-4">Sarah Melyah</h4>
                        <h6 className="text-uppercase grey-text mb-3"><strong>Web Developer</strong></h6>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-li">
                            <i className="fab fa-linkedin-in "></i>
                        </a>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-tw">
                            <i className="fab fa-twitter "></i>
                        </a>

                        <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-pin">
                            <i className="fab fa-pinterest "></i>
                        </a>
                    </div>


                </div>


            </div>

        )
    }
}


export default TeamCard



