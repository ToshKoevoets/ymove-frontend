import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";


export default function Home(props: any) {
  let component = null;

  return (
    <Layout 
      meta={{
        title: props.site?.title,
        domain: props.site?.domain,
      }}
      logo={props.site?.logo}
    >
      {component}
    </Layout>
  );
}

export {
  getServerSideProps
}



