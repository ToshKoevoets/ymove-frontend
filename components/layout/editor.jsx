import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { cookies } from 'next/headers';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function Layout(props) {
  const {
    meta,
    site,
    user,
    children
  }  = props;


  if (!user) {
    window.location.href = '/login';
    return <div>Authentication Required, redirecting... </div>;
  }

  return (
    <>
      <Meta {...meta} />
      <main className="page-wrapper  ">
       {props.children}
      </main>
    </>
  );
}
