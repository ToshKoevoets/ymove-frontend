import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { cookies } from 'next/headers';
import useSWR from 'swr';



export default function Layout(props) {
  const scrolled = useScroll(50);

  const {
    meta,
    site,
    user,
    children
  }  = props;

  console.log('user propspropspropsprops', props)

  if (!user) {
    return <div>Auth Reuquired</div>;
  }

  return (
    <>
      <Meta {...meta} />
      <main className="page-wrapper ">
        {/* Navbar. Remove 'fixed-top' class to make the navigation bar scrollable with the page*/}
        <header className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link href="/" className="navbar-brand pe-sm-3">
              <span className="text-primary flex-shrink-0 me-2">
                {site ? site.info.logo : site?.title ? site?.title : 'Dashboard'}
              </span>
            </Link>

            {/* User signed in state. Account dropdown on screens > 576px*/}
            <div className="dropdown nav d-none d-sm-block order-lg-3">
              <a className="nav-link d-flex align-items-center p-0" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                {user.profileImage ? 
                  <img className="border rounded-circle" src="assets/img/avatar/01.jpg" width={48} alt={user.profileImage} />
                  :
                  <span className="border rounded-circle" style={{
                    height: '48px',
                    width: '48px',
                    color:'var(--ar-primary)',
                    textAlign: 'center',
                    lineHeight: 1,
                    lineHeight: '48px',
                    fontWeight: 'bold'
                  }}>
                    {user.firstName ? user.firstName.charAt(0) : ''}
                  </span>
                }
                <div className="ps-2">
                  <div className="fs-xs lh-1 opacity-60">Hello,</div>
                  <div className="fs-sm dropdown-toggle">{user.firstName}</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end my-1">
                <h6 className="dropdown-header fs-xs fw-medium text-muted text-uppercase pb-1">
                  Site   
                </h6>
                  <a className="dropdown-item" href="account-overview.html">
                    <i className="ai-user-check fs-lg opacity-70 me-2" />
                    Overview
                  </a>

                  <a className="dropdown-item" href="account-overview.html">
                    <i className="ai-user-check fs-lg opacity-70 me-2" />
                    Events
                  </a>

                  <a className="dropdown-item" href="account-overview.html">
                    <i className="ai-user-check fs-lg opacity-70 me-2" />
                    Actions
                  </a>


                  <a className="dropdown-item" href="account-overview.html">
                    <i className="ai-user-check fs-lg opacity-70 me-2" />
                    Markting Guide
                  </a>


                    <a className="dropdown-item" href="account-settings.html">
                      <i className="ai-settings fs-lg opacity-70 me-2" />
                      Site Settings
                    </a>
                    <a className="dropdown-item" href="account-billing.html">
                      <i className="ai-wallet fs-base opacity-70 me-2 mt-n1" />
                      App Settings
                    </a>
                  <div className="dropdown-divider" />
                <h6 className="dropdown-header fs-xs fw-medium text-muted text-uppercase pb-1">Knowledge & Support</h6>
                <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/billing">
                  <i className="ai-user-check fs-5 opacity-60 me-2" />
                  Marketing Guides
                </a>   
                <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/billing">
                  <i className="ai-user-check fs-5 opacity-60 me-2" />
                  App Editor Documentation
                </a>   
                <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/billing">
                  <i className="ai-user-check fs-5 opacity-60 me-2" />
                  Support
                </a>   

                <div className="dropdown-divider" />
                  <a className="dropdown-item" href="account-signin.html">
                    <i className="ai-logout fs-lg opacity-70 me-2" />Sign out
                  </a>
                <div className="dropdown-divider" />
                <h6 className="dropdown-header fs-xs fw-medium text-muted text-uppercase pb-1">Account</h6>
                <a className="dropdown-item" href="account-orders.html"><i className="ai-cart fs-lg opacity-70 me-2" />Orders</a><a className="dropdown-item" href="account-earnings.html"><i className="ai-activity fs-lg opacity-70 me-2" />Earnings</a><a className="dropdown-item d-flex align-items-center" href="account-chat.html"><i className="ai-messages fs-lg opacity-70 me-2" />Chat<span className="badge bg-danger ms-auto">4</span></a><a className="dropdown-item" href="account-favorites.html"><i className="ai-heart fs-lg opacity-70 me-2" />Favorites</a>

              
              </div>
            </div>
            <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon" /></button>

          </div>
        </header>
        {/* Page content*/}
        <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
          <div className="row pt-sm-2 pt-lg-0">
            {/* Sidebar (offcanvas on sreens < 992px)*/}
            <aside className="col-lg-3 pe-lg-4 pe-xl-5 mt-n3">
              <div className="position-lg-sticky top-0">
                <div className="d-none d-lg-block" style={{ paddingTop: '105px' }} />
                <div className="offcanvas-lg offcanvas-start" id="sidebarAccount">
                  <button className="btn-close position-absolute top-0 end-0 mt-3 me-3 d-lg-none" type="button" data-bs-dismiss="offcanvas" data-bs-target="#sidebarAccount" />
                  <div className="offcanvas-body">
                    <nav className="nav flex-column pb-2 pb-lg-4 mb-3">
                      <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Dashboard</h4>
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Overview
                      </Link>
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard/events">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Activity
                      </Link>
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard/actions">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Actions
                      </Link>
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard/site-settings">
                        <i className="ai-settings fs-5 opacity-60 me-2" />Site Settings
                      </Link>
                      
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard/app-settings">
                        <i className="ai-settings fs-5 opacity-60 me-2" />App Settings
                      </Link>    
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard/chat">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Chat
                      </Link>   
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard/blog">
                        <i className="ai-quotes fs-5 opacity-60 me-2" />Blog
                      </Link> 
                      <Link className="nav-link fw-semibold py-2 px-0" href="/dashboard/app-settings">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Subscriptions & Products
                      </Link>   
                    </nav>
                    <nav className="nav flex-column pb-2 pb-lg-4 mb-1">
                      <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Account</h4>

                      <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/billing">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />
                        Billing
                      </a>   
                    </nav>
                    <nav className="nav flex-column pb-2 pb-lg-4 mb-1">
                      <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Knowledge & Support</h4>
                      <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/app-settings">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Marketing Guides
                      </a>     
                      <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/app-settings">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Documentation
                      </a>     
                      <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/app-settings">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />Support
                      </a>     


                    </nav>
                    <nav className="nav flex-column pb-2 pb-lg-4 mb-1">
                      <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Admin</h4>
                      <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/billing">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />
                        Admin Settings
                      </a>   

                      <a className="nav-link fw-semibold py-2 px-0" href="/dashboard/billing">
                        <i className="ai-user-check fs-5 opacity-60 me-2" />
                        Prepare App Submission
                      </a>   
                    </nav>                   
                  </div>
                </div>
              </div>
            </aside>
            {/* Page content*/}
            <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
              {children}
            </div>
          </div>
        </div>
       
      </main>
    </>
  );
}
