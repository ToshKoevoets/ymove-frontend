
import Hero from "./components/hero-with-app";

export default function Waiting(props) {
  return (
    <Hero>
      <div className="col-md-5 d-flex flex-column mt-md-4 pt-5 pb-3 pb-sm-4 py-md-5">
        <h1 className="display-4 text-center text-md-start mb-4">
          Busy? But want to stay in shape
        </h1>
        <h3 className="text-md-start mb-4">
          We are launching our app coming weeks
        </h3>
        <p>
          <b> Sign up now and get 25% discount upon launch, available till ...</b>
        </p>
        <p className="fs-lg text-center text-md-start pb-2 pb-md-3 mb-2">
          All that we've learned. We've put our experience from training over 10+ years,
          transformating with over 100+ people.
          <br />
          Now you can have access to all our workouts, programs, nutrition &amp; challenges.
          All our knowledged distilled into one afforable app.
        </p>
        <ul className="list-unstyled pb-3 mb-3">
          <li className="d-flex align-items-center mb-2">
            <i className="bx bx-check-circle fs-xl text-primary me-2" />
            50+ workouts
          </li>
          <li className="d-flex align-items-center mb-2">
            <i className="bx bx-check-circle fs-xl text-primary me-2" />
            Nutritional plans + advice
          </li>
          <li className="d-flex align-items-center mb-2">
            <i className="bx bx-check-circle fs-xl text-primary me-2" />
            One on One guidance
          </li>
        </ul>
        <div>
          <form className="d-flex flex-sm-row flex-column mb-3 needs-validation" noValidate>
            <div className="input-group me-sm-3 mb-sm-0 mb-3">
              <i className="bx bx-envelope position-absolute start-0 top-50 translate-middle-y ms-3 zindex-5 fs-5 text-muted" />
              <input type="email" className="form-control form-control-lg rounded-3 ps-5" placeholder="Your email" required />
              <div className="invalid-tooltip position-absolute start-0 top-0 mt-n4">Please provide a valid email
                address!
              </div>
            </div>
            <button className="btn btn-lg btn-primary">Join *</button>
          </form>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start text-start pt-4 pt-lg-5 mt-xxl-5">
          <div className="d-flex me-3">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: '52px', height: '52px' }}>
              <img src="assets/img/avatar/14.jpg" className="rounded-circle" width={48} alt="Avatar" />
            </div>
            <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3" style={{ width: '52px', height: '52px' }}>
              <img src="assets/img/avatar/08.jpg" className="rounded-circle" width={48} alt="Avatar" />
            </div>
            <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3" style={{ width: '52px', height: '52px' }}>
              <img src="assets/img/avatar/15.jpg" className="rounded-circle" width={48} alt="Avatar" />
            </div>
          </div>
          <div className="text-light"><strong>100+</strong> happy coached </div>
        </div>
        {/*
              <div class="position-relative d-inline-flex align-items-center justify-content-center justify-content-md-start mt-auto pt-3 pt-md-4 pb-xl-2">
                <a href="#features" class="btn btn-icon btn-light bg-white stretched-link rounded-circle me-3" data-scroll data-scroll-offset="120">
                  <i class="bx bx-chevron-down"></i>
                </a>
                <span class="fs-sm">Discover more</span>
              </div>  
              */}
      </div>
    </Hero>
  );
}