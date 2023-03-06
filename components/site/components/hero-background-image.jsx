import React from "react";

export class HeroBackgroundImage extends React.Component {
  render() {
    return (
      <section className="overflow-hidden pt-5" style={{ background: 'radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)' }}>
        <div className="container pt-3 pt-sm-4 pt-xl-5">
          <div className="row pt-md-2 pt-lg-5">
            <div className="col-md-5 d-flex flex-column mt-md-4 pt-5 pb-3 pb-sm-4 py-md-5">
              {this.props.children}
            </div>
            <div className="col-md-7 align-self-middle">
              <div className="position-relative mt-4 pb-3 pt-4 mx-auto me-md-0" style={{ maxWidth: '632px' }}>
                <div className="ratio ratio-1x1" style={{ marginTopB: '200px' }} />
                <img src="assets/img/landing/app-showcase/hero-phone-1.png" className="rellax position-absolute top-0 start-0 zindex-2" data-rellax-speed="1.6" data-disable-parallax-down="md" alt="Phone" />
                <img src="assets/img/landing/app-showcase/hero-phone-2.png" className="rellax position-absolute top-0 start-0" data-rellax-speed="2.8" data-disable-parallax-down="md" alt="Phone" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};