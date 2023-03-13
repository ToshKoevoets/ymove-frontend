import React from 'react';
import Layout from "../components/layout";
import Ymove from "../components/site/ymove";
import WaitingList from "../components/site/waiting";
import Landing from "../components/site/landing";
import Openstad from "../components/site/openstad";


export default function Home(props:any) {

  let component = null;

  switch (props.homePageType) {
    case 'Ymove':
      component = <Ymove {...props} />;
      break;
    case 'Landing':
      component = <Landing  {...props} />;
      break;
    case 'Openstad':
      component = <Openstad  {...props} />;
      break;
 /*   case 'LinkList':
      component = <LinkList  {...props} />*/
    case 'WaitingList':
      component = <WaitingList  {...props} />;
      break;
    default:
      component = <Landing  {...props} />;
  }

  console.log('site', props.site)

  return (
    <Layout meta={{
      domain: props.site?.title,
    }}>
      {component}
    </Layout>
  );
}


