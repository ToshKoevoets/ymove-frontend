export const getSite = async (req:any) => {
  let domain = process.env.OVERWRITE_DOMAIN ? process.env.OVERWRITE_DOMAIN : req.headers.host;
  domain = domain.replace(['http://', 'https://'], ['']);
  domain = domain.replace(['www'], ['']);

  const sites = await fetchAllSites();
  const site = sites[domain] = sites[domain] || undefined;

  return site;
}

let sites: any = undefined;

// const aposStartingUp = {};
// const REFRESH_SITES_INTERVAL = 60000 * 5;

async function fetchAllSites() {
  const apiUrl = process.env.API;

  console.log('apiUrl', apiUrl)

  if (!process.env.SITE_API_KEY) {
    console.error('Site api key is not set!');
    return [];
  }

  if (sites) {
    return sites;
  }

  const siteOptions = {
    uri: `${apiUrl}/api/site`, //,
    headers: {
      'Accept': 'application/json',
      "Cache-Control": "no-cache",
      "X-Authorization": process.env.SITE_API_KEY
    },
    json: true // Automatically parses the JSON string in the response
  };

  const sitesResponse = await fetch(siteOptions.uri, siteOptions);
  const sitesData = await sitesResponse.json();
  const newSites: any = {};

  console.log('sitesResponse', sitesResponse)

  sitesData.forEach((site: any) => {
    // for convenience and speed we set the domain name as the key
    newSites[site.domain] = site;
  });

  sites = newSites;
  return sites;
}