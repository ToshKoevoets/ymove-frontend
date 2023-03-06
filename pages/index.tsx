import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import Image from "next/image";
import getServerSideProps from "../services/site";

import Ymove from "@/components/site/ymove";
import WaitingList from "@/components/site/waiting";
import Landing from "@/components/site/landing";
import Openstad from "@/components/site/openstad";


export default function Home(props:any) {

  let component = null;

  switch (props.homePageType) {
    case 'Ymove':
      component = <Ymove />;
      break;
    case 'Landing':
      component = <Landing />;
      break;
    case 'Openstad':
      component = <Openstad />;
      break;
    case 'WaitingList':
      component = <WaitingList />;
      break;
    default:
      component = <div />;
  }

  return (
    <Layout meta={{
      domain: props.site?.domain,
    }}>
      {component}
    </Layout>
  );
}

export {
  getServerSideProps
}



