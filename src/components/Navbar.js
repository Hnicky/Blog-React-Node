import React from 'react'


const Navbar = ()=>{
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="nav nav-tabs navbar-nav nav-fill w-100" id="nav-tab" role="tablist">
    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" to="/" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" to="/article" role="tab" aria-controls="nav-profile" aria-selected="false">Sign up</a>
    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Login</a>
  </div>
</nav>
{/* <div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">.</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">..</div>
</div> */}
    </div>
  )
}

export default Navbar
