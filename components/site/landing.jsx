import React from "react";

export default class Landing extends React.Component {
  render () {
    const blocks = [
      {
        type: 'hero',
        display: true,
        props: {
          displayType: 'influencer', // influencer cut out, appimage/video, background image
          gradientColor: '', // doesnt work
          ctaType: '', //newsletter, subscription, read more, wizard 
        }
      },
      {
        type: 'testimonials',
        props: {
        //  displayType: 'influencer',
        //  ctaType: '', //newsletter 
        }
      },


    ];

    return (
      <main className="page-wrapper">
        <section className="pt-5" style={{ background: 'linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)' }}>
          <div className="container ignore-dark-mode pt-5">
            <div className="row align-items-center justify-content-center pt-3 pt-sm-4 mt-sm-3">
              <div className="col-sm-9 col-md-8 col-lg-7 offset-lg-1 order-md-2 pb-3 pb-sm-0 mt-md-n5 mb-4 mb-sm-5">
                <div className="ps-md-4 ps-lg-0 mt-md-n4 mt-lg-n5">
                  <h1 className="display-5 mb-lg-4" data-testid="main-heading">Hi, I'm <span className="text-dark fw-bolder">Jane Cooper</span><br />Wellness &amp; lifestyle influencer</h1>
                  <p className="fs-lg">Workouts designed for optimal results. Start your journey to wellness with me!</p>
                  <div style={{ maxWidth: '24rem' }}>
                    <div className="d-table text-dark mx-auto">
                      <div className="ms-n4">
                        <svg width={41} height={63} viewBox="0 0 41 63" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.70719 1.494C4.5534 1.65395 6.38091 1.98403 8.16644 2.48C10.8498 3.2115 13.4067 4.3456 15.7501 5.84364C17.1305 6.71796 18.332 7.84679 19.2907 9.16996C20.2685 10.6108 20.8107 12.3027 20.8525 14.0434C20.8944 15.8731 20.5198 17.6885 19.757 19.3521C18.9595 21.0449 17.895 22.5984 16.6042 23.9531C15.255 25.3333 13.8311 26.6386 12.3391 27.863C10.6723 29.1991 9.32942 30.8951 8.41109 32.8239C7.5511 34.9578 7.43102 37.3183 8.07004 39.5284C8.34394 40.5746 8.73786 41.5855 9.24394 42.5412C9.71127 43.4532 10.2506 44.3265 10.8568 45.1528C11.9859 46.6778 13.2868 48.0677 14.7338 49.2951C16.0224 50.367 17.3761 51.3581 18.7871 52.2627C22.7031 54.7712 27.0676 56.4981 31.6397 57.3482C33.1241 57.6183 34.6272 57.7729 36.1355 57.8107C35.5871 58.0614 35.0562 58.3005 34.5512 58.5326C33.3243 59.1173 32.1879 59.6778 31.2609 60.1683C29.4152 61.154 28.3207 61.8969 28.4238 62.1529C28.527 62.4088 29.8029 62.1362 31.7936 61.4851C32.7866 61.1637 33.953 60.7405 35.2397 60.2505C35.8644 60.0001 36.5536 59.7324 37.254 59.4548C37.5969 59.3145 37.9527 59.1708 38.3067 59.0205L38.8475 58.7926L39.134 58.6744C39.2949 58.6023 39.4506 58.5189 39.5998 58.425C39.9282 58.225 40.1869 57.9286 40.3408 57.5762C40.4833 57.2187 40.504 56.8241 40.3997 56.4536C40.2868 56.0775 40.0719 55.74 39.7788 55.4786C39.6516 55.3593 39.5176 55.2474 39.3777 55.1434L39.1528 54.9754C38.5324 54.519 37.9461 54.0604 37.4037 53.6109C36.2947 52.7251 35.3016 51.8844 34.4537 51.1985C32.7674 49.8103 31.647 49.0106 31.4837 49.2273C31.3204 49.444 32.1159 50.5798 33.6092 52.2549C34.3574 53.0851 35.2797 54.0486 36.3776 55.048C36.7201 55.3712 37.095 55.6859 37.4715 56.0069C35.6206 55.8144 33.7812 55.5246 31.9608 55.1385C27.6876 54.1971 23.6104 52.5206 19.911 50.1838C18.5912 49.3314 17.3217 48.4035 16.1088 47.4048C14.8 46.3182 13.6218 45.0832 12.5979 43.7247C12.065 43.0114 11.5879 42.2581 11.1709 41.4715C10.7472 40.6775 10.4113 39.8397 10.1694 38.9728C9.65002 37.2861 9.71258 35.4739 10.347 33.827C11.1239 32.1721 12.2585 30.7104 13.669 29.5473C15.1903 28.258 16.6343 26.8801 17.9936 25.4209C19.3924 23.8862 20.5327 22.1346 21.37 20.2343C22.2101 18.2832 22.5893 16.1649 22.4782 14.0436C22.3758 11.9629 21.6677 9.95748 20.441 8.27375C19.335 6.82379 17.9555 5.60472 16.3805 4.68551C13.889 3.21611 11.1745 2.16303 8.34397 1.56774C6.49629 1.15602 4.60615 0.965822 2.71348 1.00117C1.39001 1.04451 0.687315 1.18437 0.706339 1.25537C0.72536 1.32636 1.4313 1.37932 2.74118 1.49181" />
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="pe-3 me-sm-3">
                        <h3 className="h5 fw-bold mb-4">Monthly</h3>
                        <button className="btn btn-lg btn-primary px-4" type="button"><span className="text-light px-sm-2">$14.<sup>99</sup> / month</span></button>
                      </div>
                      <div>
                        <div className="d-table position-relative text-dark mt-n3 mb-2">
                          <h3 className="h5 fw-bold mb-0 position-absolute start-50 top-50 translate-middle">Annual</h3>
                          <svg width={110} height={61} viewBox="0 0 110 61" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M84.1744 8.99242C89.2842 10.1063 93.0376 12.7057 96.7499 15.5341C108.923 24.8193 111.49 36.2909 100.417 45.1189C83.2055 58.8021 48.0114 63.4542 23.087 53.9044C17.5662 51.7947 9.9999 49.4497 5.27855 43.1465C0.886192 37.2853 2.15619 31.4849 5.54649 26.5131C9.00536 21.4124 14.671 17.1643 19.0417 14.5646C38.1454 3.22854 73.5893 -3.82295 102.296 8.41696C102.888 8.65974 103.544 8.54327 103.794 8.16259C104.044 7.78192 103.816 7.28442 103.268 7.04955C73.7178 -5.54836 37.1686 1.59265 17.5063 13.2588C12.0667 16.5023 4.68442 22.2219 1.65573 28.9688C-0.399409 33.5827 -0.451644 38.6676 3.34872 43.7826C8.35983 50.4935 16.3831 53.0743 22.243 55.3175C47.9737 65.1787 84.3664 60.4212 102.113 46.284C114.031 36.7984 111.346 24.4705 98.2543 14.4889C94.2662 11.4272 90.1346 8.65809 84.5879 7.44945C83.9764 7.31649 83.3891 7.55457 83.3114 7.98695C83.1897 8.41142 83.6068 8.86737 84.1744 8.99242Z" />
                          </svg>
                        </div>
                        <button className="btn btn-lg bg-dark px-4" type="button"><span className="text-light px-sm-2">$89.<sup>99</sup> / year</span></button>
                        <div className="d-flex align-items-center pt-2 mt-1"><span className="badge bg-danger text-light rounded-pill me-2">Expires</span><span className="fs-sm">01/12 8:00 pm</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-5 col-md-4 order-md-1"><img src="assets/img/landing/influencer/hero.png" width={416} alt="Influencer" /></div>
            </div>
          </div>
        </section>
        {/* About*/ }
        <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
          <div className="pt-2 pt-sm-3 mt-md-3" style={{ maxWidth: '60rem' }}>
            <h2 className="pb-3 mb-2 mb-sm-3 mb-lg-4">I'm a 32 year old blogger, fitness instructor and content creator. I was recognized as the <span className="text-primary">top 100 sport influencers</span> under the age of 30. Over 25K people have already changed their life for the better with me.</h2>
            <p className="fs-lg">Subscribe to get free webinars:</p>
            <div className="d-flex"><a className="btn btn-outline-secondary btn-icon btn-sm btn-instagram me-3" href="#"><i className="ai-instagram" /></a><a className="btn btn-outline-secondary btn-icon btn-sm btn-facebook me-3" href="#"><i className="ai-facebook" /></a><a className="btn btn-outline-secondary btn-icon btn-sm btn-youtube" href="#"><i className="ai-youtube" /></a></div>
          </div>
        </section>
        {/* Features*/ }
        <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5" data-aos="fade-up" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
          <div className="row align-items-xl-center py-2 py-sm-3 my-md-3 mb-lg-4 mb-xl-5">
            <div className="col-md-6 pb-4 pb-md-0 mb-3 mb-md-0"><img className="rounded-4" src="assets/img/landing/influencer/features.jpg" alt="Influencer" /></div>
            <div className="col-md-6 col-xl-5 offset-xl-1" data-aos="fade-up" data-aos-duration={850} data-aos-offset={180} data-disable-parallax-down="md">
              <div className="ps-md-4 ps-xl-0">
                <h2 className="h1 pb-3 mb-2 mb-md-3 mb-xl-4">Why training with me?</h2>
                <ul className="list-unstyled pb-1 pb-xl-2">
                  <li className="d-flex fs-lg pb-1 mb-3"><i className="ai-fruit text-primary fs-4 mt-n1 me-3" />Nutrition guides for the best overall results.</li>
                  <li className="d-flex fs-lg pb-1 mb-3"><i className="ai-drop text-primary fs-4 mt-n1 me-3" />Individually designed programs and workout plans.</li>
                  <li className="d-flex fs-lg pb-1 mb-3"><i className="ai-stones text-primary fs-4 mt-n1 me-3" />Stretching routines.</li>
                  <li className="d-flex fs-lg pb-1 mb-3"><i className="ai-weight text-primary fs-4 mt-n1 me-3" />Workouts designed for optimal results.</li>
                  <li className="d-flex fs-lg pb-1 mb-3"><i className="ai-heart-alt text-primary fs-4 mt-n1 me-3" />Bonus features like weight history, gratitude journal, ect.</li>
                  <li className="d-flex fs-lg pb-1 mb-3"><i className="ai-chat text-primary fs-4 mt-n1 me-3" />Direct coaching and 24/7 access to support community.</li>
                </ul>
                <h3 className="h5 text-body mb-lg-4">My achievements:</h3><img className="d-dark-mode-none" src="assets/img/landing/influencer/achievements-dark.svg" alt="Achievements" /><img className="d-none d-dark-mode-block" src="assets/img/landing/influencer/achievements-light.svg" alt="Achievements" />
              </div>
            </div>
          </div>
        </section>
        {/* Guides (Carousel on screens < 992px)*/ }
        <section className="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
          <div className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block" style={{ borderTopLeftRadius: '8rem', borderBottomRightRadius: '8rem' }} />
          <div className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block d-xxl-none" style={{ borderTopLeftRadius: '4rem', borderBottomRightRadius: '4rem' }} />
          <div className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-lg-none" style={{ borderTopLeftRadius: '2.25rem', borderBottomRightRadius: '2.25rem' }} />
          <div className="container position-relative zindex-2 py-5 mt-xl-2 mb-lg-2 mb-xl-3 mb-xxl-5 mt-xxl-4">
            <h2 className="h1 pt-xxl-1 pb-4 mb-2 mb-lg-3">Guides</h2>
            {/* Swiper slider*/}
            <div className="swiper" data-swiper-options="
            {
              &quot;spaceBetween&quot;: 24,
              &quot;pagination&quot;: {
                &quot;el&quot;: &quot;.swiper-pagination&quot;,
                &quot;clickable&quot;: true
              },
              &quot;breakpoints&quot;: {
                &quot;576&quot;: { &quot;slidesPerView&quot;: 2 },
                &quot;992&quot;: { &quot;slidesPerView&quot;: 3 }
              }
            }
          ">
              <div className="swiper-wrapper">
                {/* Item*/}
                <div className="swiper-slide h-auto">
                  <div className="card h-100 border-0 rounded-4 pb-3">
                    <div className="position-relative ignore-dark-mode">
                      <div className="card-body position-absolute start-0 bottom-0 py-4">
                        <div className="d-table badge bg-danger rounded-pill mb-2">6 programs</div>
                        <div className="d-table badge bg-light text-nav rounded-pill">&gt; 230 exercises</div>
                      </div><img className="rounded-4 rounded-bottom-0" src="assets/img/landing/influencer/guides/01.jpg" alt="Guide" />
                    </div>
                    <div className="card-body pb-4">
                      <div className="text-primary fw-bold pb-2 mb-1">$125.00</div>
                      <h3 className="h4">Effective weight loss</h3>
                      <ul className="fs-sm ps-4 mb-0">
                        <li className="mb-2">Ut nunc ultricies nibh blandit  odio in.</li>
                        <li className="mb-2">Nibh viverra volutpat viverra.</li>
                        <li className="mb-2">Ac lacus ut viverra iaculis neque scelerisque.</li>
                      </ul>
                    </div>
                    <div className="card-footer border-0 pt-0">
                      <button className="btn btn-outline-primary w-100" type="button">Buy now</button>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="swiper-slide h-auto">
                  <div className="card h-100 border-0 rounded-4 pb-3">
                    <div className="position-relative ignore-dark-mode">
                      <div className="card-body position-absolute start-0 bottom-0 py-4">
                        <div className="d-table badge bg-danger rounded-pill mb-2">12 programs</div>
                        <div className="d-table badge bg-light text-nav rounded-pill">&gt; 400 exercises</div>
                      </div><img className="rounded-4 rounded-bottom-0" src="assets/img/landing/influencer/guides/02.jpg" alt="Guide" />
                    </div>
                    <div className="card-body pb-4">
                      <div className="text-primary fw-bold pb-2 mb-1">$154.99</div>
                      <h3 className="h4">Beginner to expert guide</h3>
                      <ul className="fs-sm ps-4 mb-0">
                        <li className="mb-2">Nutrition guides for the best overall results.</li>
                        <li className="mb-2">Stretching routines.</li>
                        <li className="mb-2">Direct coaching and 24/7 access to community.</li>
                      </ul>
                    </div>
                    <div className="card-footer border-0 pt-0">
                      <button className="btn btn-outline-primary w-100" type="button">Buy now</button>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="swiper-slide h-auto">
                  <div className="card h-100 border-0 rounded-4 pb-3">
                    <div className="position-relative ignore-dark-mode">
                      <div className="card-body position-absolute start-0 bottom-0 py-4">
                        <div className="d-table badge bg-danger rounded-pill mb-2">8 programs</div>
                        <div className="d-table badge bg-light text-nav rounded-pill">&gt; 420 exercises</div>
                      </div><img className="rounded-4 rounded-bottom-0" src="assets/img/landing/influencer/guides/03.jpg" alt="Guide" />
                    </div>
                    <div className="card-body pb-4">
                      <div className="text-primary fw-bold pb-2 mb-1">$121.00</div>
                      <h3 className="h4">Yoga for pregnancy</h3>
                      <ul className="fs-sm ps-4 mb-0">
                        <li className="mb-2">Adipiscing vulputate ever in potenti velit.</li>
                        <li className="mb-2">Non metus orci convallis posuere.</li>
                        <li className="mb-2">Dolor commodo dignissim pharetra tempor.</li>
                      </ul>
                    </div>
                    <div className="card-footer border-0 pt-0">
                      <button className="btn btn-outline-primary w-100" type="button">Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination (bullets)*/}
              <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none" />
            </div>
          </div>
        </section>
        {/* Results*/ }
        <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
          <div className="row py-2 py-sm-3 my-md-3">
            <div className="col-lg-5 col-xl-4 pb-2 pb-sm-0 mb-4 mb-sm-5 mb-lg-0" data-aos="fade-up" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
              <h2 className="h1 pb-3 mb-lg-4">Results after taking the guide</h2>
              <div className="d-flex align-items-center">
                <div className="d-flex me-3">
                  <div className="bg-light flex-shrink-0 rounded-circle position-relative zindex-4" style={{ padding: '3px' }}><img className="rounded-circle" src="assets/img/avatar/07.jpg" width={48} alt="Avatar" /></div>
                  <div className="bg-light flex-shrink-0 rounded-circle position-relative zindex-3 ms-n3" style={{ padding: '3px' }}><img className="rounded-circle" src="assets/img/avatar/09.jpg" width={48} alt="Avatar" /></div>
                  <div className="bg-light flex-shrink-0 rounded-circle position-relative zindex-2 ms-n3" style={{ padding: '3px' }}><img className="rounded-circle" src="assets/img/avatar/05.jpg" width={48} alt="Avatar" /></div>
                  <div className="bg-light flex-shrink-0 rounded-circle position-relative zindex-1 ms-n3" style={{ padding: '3px' }}><img className="rounded-circle" src="assets/img/avatar/11.jpg" width={48} alt="Avatar" /></div>
                </div>
                <p className="mb-0"><strong className="text-dark">400+</strong> got the result</p>
              </div>
            </div>
            <div className="col-lg-7 col-xxl-6 offset-xl-1 offset-xxl-2">
              <div className="row row-cols-1 row-cols-sm-2 gy-4 gy-lg-5">
                <div className="col" data-aos="fade-up" data-aos-offset={280} data-disable-parallax-down="md">
                  <div className="pe-sm-2 pe-md-4 me-xl-3">
                    <div className="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i className="ai-target fs-1" /></div>
                    <h3 className="h5 fw-bold mb-2">Reach your goals</h3>
                    <p className="fs-lg mb-2">Eu pharetra sagittis ornarenam elit scelerisque pellentesque mauris diam outertn.</p>
                  </div>
                </div>
                <div className="col" data-aos="fade-up" data-aos-delay={250} data-aos-offset={280} data-disable-parallax-down="md">
                  <div className="pe-sm-2 pe-md-4 me-xl-3">
                    <div className="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i className="ai-fruit fs-1" /></div>
                    <h3 className="h5 fw-bold mb-2">Healthy eating habits</h3>
                    <p className="fs-lg mb-2">Ultricies at vitae nunc,facilisi sagittis nullam mattis nunc metus suspendisse.</p>
                  </div>
                </div>
                <div className="col" data-aos="fade-up" data-aos-delay={500} data-disable-parallax-down="md">
                  <div className="pe-sm-2 pe-md-4 me-xl-3">
                    <div className="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i className="ai-body fs-1" /></div>
                    <h3 className="h5 fw-bold mb-2">Nice &amp; healthy body</h3>
                    <p className="fs-lg mb-2">Nunc congue dolor sodales faucibus nun faucibus tristique tempor in diam.</p>
                  </div>
                </div>
                <div className="col" data-aos="fade-up" data-aos-delay={700} data-disable-parallax-down="md">
                  <div className="pe-sm-2 pe-md-4 me-xl-3">
                    <div className="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i className="ai-heart-alt fs-1" /></div>
                    <h3 className="h5 fw-bold mb-2">Feel great</h3>
                    <p className="fs-lg mb-2">Lacus neque sed fringilla proin bibendum interdum vivamus verum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials slider*/ }
        <section className="dark-mode w-100 px-sm-4 mx-auto" style={{ maxWidth: '1680px' }}>
          <div className="position-relative zindex-2 pt-2 pb-3 py-sm-3 py-md-4 py-lg-5">
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-sm-block" style={{ backgroundColor: '#171a1e' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-sm-none" style={{ backgroundColor: '#171a1e' }} />
            <div className="container position-relative zindex-2 py-5 my-xl-3 my-xxl-5">
              <div className="row align-items-center justify-content-center">
                <div className="col-11 col-sm-9 col-md-8 col-lg-7 pb-3">
                  {/* Bided images*/}
                  <div className="binded-content">
                    {/* Item*/}
                    <div className="binded-item active" id="image1"><img src="assets/img/landing/influencer/testimonials/01.png" alt="Image" /></div>
                    {/* Items*/}
                    <div className="binded-item" id="image2"><img src="assets/img/landing/influencer/testimonials/02.png" alt="Image" /></div>
                  </div>
                </div>
                <div className="col-11 col-sm-9 col-md-8 col-lg-5 col-xl-4 offset-xl-1">
                  <div className="ps-lg-4 ps-xl-0 mt-lg-n4 mt-xl-n5">
                    {/* Swiper slider*/}
                    <div className="swiper" data-swiper-options="{
                      &quot;spaceBetween&quot;: 30,
                      &quot;loop&quot;: true,
                      &quot;bindedContent&quot;: true,
                      &quot;pagination&quot;: {
                        &quot;el&quot;: &quot;.testimonials-count&quot;,
                        &quot;type&quot;: &quot;fraction&quot;
                      },
                      &quot;navigation&quot;: {
                        &quot;prevEl&quot;: &quot;#prev-testimonial&quot;,
                        &quot;nextEl&quot;: &quot;#next-testimonial&quot;
                      }
                    }">
                      <div className="swiper-wrapper">
                        {/* Item*/}
                        <div className="swiper-slide" data-swiper-binded="#image1">
                          <div className="ai-quotes text-primary display-3 mb-4" />
                          <p className="lead pb-1 pb-sm-2">Odio risus amet amet tincidunt. Turpis nibh ultricies morbi porta ipsum adipiscing. Morbi magnis nunc in facilisis gravida adipiscing in elementum aliquet nunc.</p>
                          <h3 className="h5 fw-bold mb-0">Wade Warren</h3>
                        </div>
                        {/* Item*/}
                        <div className="swiper-slide" data-swiper-binded="#image2">
                          <div className="ai-quotes text-primary display-3 mb-4" />
                          <p className="lead pb-1 pb-sm-2">Blandit facilisi eget feugiat ultricies. Id habitant lectus imperdiet amet elementum lectus lacus sit laoreet. Quis nullam. Gravida pretium iaculis lorem sit in elementum.</p>
                          <h3 className="h5 fw-bold mb-0">Annete Smith</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Swiper controls*/}
              <div className="d-flex align-items-center justify-content-center pt-4 pt-md-5 mt-2 mt-sm-3 mt-md-0 mt-xl-2">
                <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial"><i className="ai-arrow-left" /></button>
                <div className="testimonials-count fw-medium flex-shrink-0 text-center" style={{ width: '2.5rem' }} />
                <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial"><i className="ai-arrow-right" /></button>
              </div>
            </div>
          </div>
        </section>
        {/* Subscription*/ }
        <section className="container position-relative py-5 my-lg-3 my-xl-4 my-xxl-5">
          <div className="position-absolute top-0 end-0 d-none d-md-block" style={{ animation: 'rotate-cw 70s linear infinite', marginTop: '-190px', marginRight: '100px' }}>
            <svg className="text-danger" width={306} height={306} viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150.114 3.79989C150.941 0.89425 155.059 0.894232 155.886 3.7999L168.982 49.8433C170.097 53.7629 175.181 54.7742 177.711 51.5796L207.431 14.0528C209.306 11.6846 213.111 13.2606 212.762 16.2613L207.242 63.8117C206.772 67.8596 211.082 70.7395 214.642 68.7562L256.46 45.4592C259.099 43.989 262.011 46.901 260.541 49.54L237.244 91.3582C235.261 94.9181 238.14 99.2281 242.188 98.7582L289.739 93.2377C292.739 92.8893 294.315 96.694 291.947 98.5695L254.42 128.289C251.226 130.819 252.237 135.903 256.157 137.018L302.2 150.114C305.106 150.941 305.106 155.059 302.2 155.886L256.157 168.982C252.237 170.097 251.226 175.181 254.42 177.711L291.947 207.431C294.315 209.306 292.739 213.111 289.739 212.762L242.188 207.242C238.14 206.772 235.261 211.082 237.244 214.642L260.541 256.46C262.011 259.099 259.099 262.011 256.46 260.541L214.642 237.244C211.082 235.261 206.772 238.14 207.242 242.188L212.762 289.739C213.111 292.739 209.306 294.315 207.431 291.947L177.711 254.42C175.181 251.226 170.097 252.237 168.982 256.157L155.886 302.2C155.059 305.106 150.941 305.106 150.114 302.2L137.018 256.157C135.903 252.237 130.819 251.226 128.289 254.42L98.5695 291.947C96.694 294.315 92.8893 292.739 93.2377 289.739L98.7582 242.188C99.2281 238.14 94.9181 235.261 91.3582 237.244L49.54 260.541C46.901 262.011 43.989 259.099 45.4592 256.46L68.7562 214.642C70.7395 211.082 67.8596 206.772 63.8117 207.242L16.2613 212.762C13.2606 213.111 11.6846 209.306 14.0528 207.431L51.5796 177.711C54.7742 175.181 53.7629 170.097 49.8433 168.982L3.79989 155.886C0.89425 155.059 0.894232 150.941 3.7999 150.114L49.8433 137.018C53.7629 135.903 54.7742 130.819 51.5796 128.289L14.0528 98.5695C11.6846 96.694 13.2606 92.8893 16.2613 93.2377L63.8117 98.7582C67.8596 99.2281 70.7395 94.9181 68.7562 91.3582L45.4592 49.54C43.989 46.901 46.901 43.989 49.54 45.4592L91.3582 68.7562C94.9181 70.7395 99.2281 67.8596 98.7582 63.8117L93.2377 16.2613C92.8893 13.2606 96.694 11.6846 98.5695 14.0528L128.289 51.5796C130.819 54.7742 135.903 53.7629 137.018 49.8433L150.114 3.79989Z" stroke="currentColor" strokeWidth={2} />
            </svg>
          </div>
          <div className="pb-3 pt-2 py-sm-3 my-md-3 my-lg-4" style={{ maxWidth: '40rem' }}>
            <h2 className="h1">Always stay up to date</h2>
            <p className="fs-lg pb-2 pb-sm-3 pb-lg-4">Be the first to hear the latest news and updates!</p>
            <div className="input-group input-group-lg">
              <input className="form-control" type="email" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </section>
        {/* CTA*/ }
        <section className="ignore-dark-mode position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration={600} data-aos-offset={300} data-disable-parallax-down="md">
            <div className="container-start position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block" style={{ transform: 'rotate(-180deg)', borderTopRightRadius: '7rem', borderBottomRightRadius: '7rem', background: 'linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)' }} />
            <div className="container-start position-absolute top-0 start-0 w-100 h-100 d-lg-block d-xxl-none" style={{ transform: 'rotate(-180deg)', borderTopRightRadius: '4rem', borderBottomRightRadius: '4rem', background: 'linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)' }} />
            <div className="container-start position-absolute top-0 start-0 w-100 h-100 d-sm-block d-lg-none" style={{ transform: 'rotate(-180deg)', borderTopRightRadius: '2.25rem', borderBottomRightRadius: '2.25rem', background: 'linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)' }} />
          </div>
          <div className="container position-relative zindex-2 pt-5">
            <div className="row align-items-center justify-content-center pt-1 pt-sm-3 pt-md-4">
              <div className="col-md-6 col-xl-5 offset-md-1 pb-3 pb-sm-0 mt-md-n5 mb-4 mb-sm-5" data-aos="fade-up" data-aos-duration={850} data-aos-offset={180} data-disable-parallax-down="md">
                <div className="mx-auto" style={{ maxWidth: '25rem' }}>
                  <h2 className="display-5 pb-5 mb-2">Jumpstart healthy change in your life today!</h2>
                  <div className="d-flex">
                    <div className="pe-3 me-lg-3">
                      <button className="btn btn-lg btn-primary px-4" type="button"><span className="text-light px-sm-2">$14.<sup>99</sup> / month</span></button>
                    </div>
                    <div>
                      <button className="btn btn-lg bg-dark px-4" type="button"><span className="text-light px-sm-2">$89.<sup>99</sup> / year</span></button>
                      <div className="d-flex align-items-center pt-2 mt-1"><span className="badge bg-danger text-light rounded-pill me-2">Expires</span><span className="fs-sm">01/12 8:00 pm</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8 col-sm-6 col-md-5 col-xl-6 d-flex justify-content-end" data-aos="fade-up" data-aos-duration={600} data-aos-offset={250} data-disable-parallax-down="md"><img src="assets/img/landing/influencer/cta.png" width={457} alt="Influencer" /></div>
            </div>
          </div>
        </section>
        {/* Instagram*/ }
        <section className="pt-2 pt-sm-4 pt-md-5">
          <div className="container pt-5 mt-1 mt-sm-0 mt-lg-2 mt-xl-4 mt-xxl-5">
            <div className="d-flex position-relative align-items-center"><a className="btn btn-icon btn-primary stretched-link me-3 me-sm-4" href="#"><i className="ai-instagram" /></a>
              <h2 className="mb-0">jane_cooper</h2>
            </div>
          </div>
          <div className="overflow-auto" data-simplebar>
            <div className="row row-cols-8 g-0 pt-4 pb-2 pb-xl-0 mt-2 mt-lg-3" style={{ minWidth: '1200px' }}>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">2048</span><i className="ai-message me-1" /><span className="text-light fs-sm">320</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/01.jpg" alt="Image" /></div></a></div>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">1764</span><i className="ai-message me-1" /><span className="text-light fs-sm">283</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/02.jpg" alt="Image" /></div></a></div>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">4560</span><i className="ai-message me-1" /><span className="text-light fs-sm">417</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/03.jpg" alt="Image" /></div></a></div>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">1505</span><i className="ai-message me-1" /><span className="text-light fs-sm">274</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/04.jpg" alt="Image" /></div></a></div>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">3708</span><i className="ai-message me-1" /><span className="text-light fs-sm">198</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/05.jpg" alt="Image" /></div></a></div>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">2925</span><i className="ai-message me-1" /><span className="text-light fs-sm">409</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/06.jpg" alt="Image" /></div></a></div>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">1348</span><i className="ai-message me-1" /><span className="text-light fs-sm">120</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/07.jpg" alt="Image" /></div></a></div>
              <div className="col"><a className="card-hover zoom-effect d-block position-relative" href="#">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-2 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                  <div className="d-flex align-items-center text-light position-relative zindex-2"><i className="ai-heart me-1" /><span className="text-light fs-sm me-3">963</span><i className="ai-message me-1" /><span className="text-light fs-sm">98</span></div>
                </div>
                <div className="zoom-effect-wrapper"><img className="zoom-effect-img" src="assets/img/landing/influencer/instagram/08.jpg" alt="Image" /></div></a></div>
            </div>
          </div>
        </section>
      </main >
    );
  }
}