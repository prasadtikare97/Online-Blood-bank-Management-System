import React from 'react';
import { useState } from "react";


  function Content() {
      const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
    
      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
      };
    
      // connect with firebase
      const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;
    
        if (firstName && lastName && phone && email && address && message) {
          const res = fetch(
            "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                address,
                message,
              }),
            }
          );
    
          if (res) {
            setUserData({
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              address: "",
              message: "",
            });
            alert("Data Stored");
            handleClick1();
          } else {
            alert("plz fill the data");
          }
        } else {
          alert("plz fill the data");
        }
      };
   //  Counter logic
      const App = () => {
         //  Counter is a state initialized to 0
       
      }
      const [counter, setCounter] = useState(2000)
         
      // Function is called everytime increment button is clicked
      const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
      }
      
      
        
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">This is a dummy Single page website 
                Write Your Description here
           Write Your Description here
            Write Your Description hereWrite Your Description here
           Write Your Description here
            Write Your Description hereWrite Your Description here
           Write Your Description here
            Write Your Description here</p>
             </div>   
          </div>   
        </section>   

        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Japan</h4>
                          <p class="card-text text-secondary">Write Your Description here
           Write Your Description here
            Write Your Description here.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="button-29">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Tokyo</h4>
                          <p class="card-text text-secondary">Write Your Description here
           Write Your Description here
            Write Your Description here.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="button-29">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">India</h4>
                          <p class="card-text text-secondary">Write Your Description here
           Write Your Description here
            Write Your Description here</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="button-29">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  


       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>

         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            Write Your Description here
           Write Your Description here
            Write Your Description here
           </div>
         </div>
      </div>
      
          
         
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            Write Your Description here
           Write Your Description here
            Write Your Description here
             </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            Write Your Description here
           Write Your Description here
            Write Your Description here.
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>

    
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Details of Your Pics And Description</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="Images/2.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Neha Dhumal</h4>
          <h6 class="font-weight-bold blue-text my-3">USER</h6>
          <p class="font-weight-normal dark-grey-text">
          Write Your Description here
           Write Your Description here
            Write Your Description here.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="Images/2.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Tejas Kodag</h4>
          <h6 class="font-weight-bold blue-text my-3">USER</h6>
          <p class="font-weight-normal dark-grey-text"> Write Your Description here
          Write Your Description here
          Write Your Description here.</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="Images/2.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4"> Reha Swammy</h4>
          <h6 class="font-weight-bold blue-text my-3">USER</h6>
          <p class="font-weight-normal dark-grey-text">
           Write Your Description here
           Write Your Description here
           Write Your Description here.</p>
        </div>
        </div>
      </div>
    </div> 
   
   </section> 

   <section class="bg-light mt-5" id="contactus">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Contact us</h3>
         </div>
          <div className="row">
           
              <div className="row">
                <div className="contact-middle col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br />  Team.
                  </h1>
                  <div style={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             fontSize: '230%',
             position: 'absolute',
             width: '100%',
             height: '108%',
             top: '-15%',
           }}>
             Users Connected with US
             <div style={{
               fontSize: '60%',
               position: 'relative',
               top: '5vh',
             }}>
                <div class="circle">
                <div class="z">
                {counter}
    </div>
                   
                   </div>
               
             </div>
           
           </div>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="number"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                         
                          onChange={postUserData}
                      
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that team may contact me at the
                        email address or phone number above.
                      </label>
                    </div>

                    <button
                      type="submit"
                      class="button-69 w-100"                    
                      onClick={submitData}>
                     
                      Submit
                    </button>
                  </form>
                </div>
              </div>
      </div>
       
      </div>
    </div> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


<div class="icon-bar">
  <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
  <a href="#" class="google"><i class="fa fa-google"></i></a>
  <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
</div>
   </section> 
   </div>
    );
  };

  export default Content;