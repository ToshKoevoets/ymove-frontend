import React from 'react';
import Layout from "@/components/layout";
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
      component = <Landing />;
  }

  return (
    <Layout meta={{
      domain: props.site?.domain,
    }}>
      {component}
    </Layout>
  );
}


