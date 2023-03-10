export default async function handler(req:any, res:any) {
  if (req.method === 'GET') {
    let domain = process.env.OVERWRITE_DOMAIN ? process.env.OVERWRITE_DOMAIN : req.headers.host;
    domain = domain.replace(['http://', 'https://'], ['']);
    domain = domain.replace(['www'], ['']);

    const sites = await fetchAllSites();
    const site = sites[domain] = sites[domain] || undefined;

    if (!site) {
      return {
        notFound: true,
      }
    }

    res.status(200).json({ 
      id: site.id,
      title: site.title,
      info: site.info,
    });
  } else {
    res.status(404).json({
      message: "Not found" 
    });
  }
}

let sites: any = undefined;

// const aposStartingUp = {};
// const REFRESH_SITES_INTERVAL = 60000 * 5;

async function fetchAllSites()   {
  const apiUrl = process.env.API;  

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
  const sitesData =  await sitesResponse.json();
  const newSites:any = {};

  sitesData.forEach((site: any) => {
    // for convenience and speed we set the domain name as the key
    newSites[site.domain] = site;
  });

  sites = newSites;
  return sites;
}