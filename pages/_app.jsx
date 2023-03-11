import { createContext } from "react";
import "@/styles/theme.min.css";
import "@/styles/globals.css";
import useSWR from 'swr';

const siteFetcher = (...args) => fetch(...args).then((res) => res.json())
const userFetcher = (...args) => fetch(...args).then((res) => res.json())

export const UserContext = createContext(null)
export const SiteContext = createContext(null)

export default function MyApp({
  Component,
  pageProps,
}) {
  let siteResponse = useSWR('/api/site', siteFetcher);
  const userResponse = useSWR('/api/user', userFetcher);
  if (!siteResponse.data) return <div>Loading site...</div>
  if (!userResponse.data) return <div>Loading user...</div>

  console.log('siteResponse.data', userResponse)
  console.log('userResponse.data', siteResponse)

  return <div className={``}>
    <Component {...pageProps} site={siteResponse.data} user={userResponse.data} />
  </div>

  return (
    <SiteContext value={siteResponse.data}>
      <UserContext value={userResponse.data}>
        <div className={``}>
          <Component {...pageProps}  />
        </div>
      </UserContext>
    </SiteContext>
  );
}
