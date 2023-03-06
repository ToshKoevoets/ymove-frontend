import rp from "request-promise";

let sites: any = {};
let sitesResponse: any = [];
const aposStartingUp = {};
const REFRESH_SITES_INTERVAL = 60000 * 5;


const getSubscriptions = async (stripeApiKey: string) => {


  console.log('subscriptions', subscriptions.length);

  return subscriptions;
}


function fetchAllSites() {
  const apiUrl = process.env.API;

  console.log('fetchAllSites apiUrl', apiUrl);

  if (!process.env.SITE_API_KEY) {
    console.error('Site api key is not set!');
    return;
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

  return rp(siteOptions)
    .then((response: any) => {
      sitesResponse = response;
      const newSites: any = [];

      response.forEach((site: any) => {
        // for convenience and speed we set the domain name as the key
        newSites[site.domain] = site;
      });

      sites = newSites;


      return sites;
      // cleanUpSites();
    }).catch((e: Error) => {
      console.error('An error occurred fetching the site config:', e);
    });
}

// This gets called on every request
export default async function getServerSideProps(context: any) {
  const req = context.req;

  // make sure all sites data is loaded
  await fetchAllSites();

  // 
  let domain = process.env.OVERWRITE_DOMAIN ? process.env.OVERWRITE_DOMAIN : req.headers.host;
  domain = domain.replace(['http://', 'https://'], ['']);
  domain = domain.replace(['www'], ['']);

  const site = sites[domain] = sites[domain] || {};
  console.log('Find site for domain ', domain);


  if (!site.id) {
    return {
      notFound: true,
    }
  }

  console.log('site.config.payment.stripeApiKey', site.config.payment.stripeApiKey);

  /*
  const Stripe = require('stripe')(site.config.payment.stripeApiKey);

  let isMore = true;
  let starting_after;
  let subscriptions:any = [];
  while (isMore ) {
    const config = {
      limit: 100,
      status: 'canceled',
 //     starting_after: 'sub_1KgEvjIOffcoS9B7QOMfjLTS'
    }

    if (starting_after) {
      config.starting_after  = starting_after;
    }

    const subscriptionResponse = await Stripe.subscriptions.list(config);

    console.log('subscriptionResponse', subscriptionResponse);

    subscriptions = subscriptions.concat(subscriptionResponse.data);

    isMore = subscriptionResponse.has_more;

    console.log('isMore', isMore);

    const lastItem = subscriptionResponse.data[subscriptionResponse.data.length - 1];

    starting_after = lastItem && lastItem.id ? lastItem.id : null;
  }

  console.log('subscriptions length', subscriptions ? subscriptions?.length : 0);




  let counter = 0;
  for (const sub of subscriptions) {
    const orderId = sub.metadata.orderId;

    console.log('sub', sub.id, ' counter ', counter++);

    const orderResponse = await fetch(`https://www.api.makkie.baboom.nl/api/site/53/order/${orderId}`, {
      headers: {
        'Accept': 'application/json',
        "Cache-Control": "no-cache",
        "X-Authorization": process.env.SITE_API_KEY,
      },
    });

    const order = await orderResponse.json();

    console.log('order', order);
    sub.user = {
      email: order  && order.email ? order.email : 'NOT FOUND EMAIL',
      id: order && order.userId ? order.userId : 'NOT FOUND  sub.metadata.orderId: ' + sub.metadata.orderId,
    };

  /*  try {
      const userResponse = await fetch(`https://www.api.makkie.baboom.nl/api/site/53/user/${order.userId}`, {
        headers: {
          'Accept': 'application/json',
          "Cache-Control": "no-cache",
          "X-Authorization": process.env.SITE_API_KEY,
        },
      });
    
      const user = await userResponse.json();

      console.log('user', user);

      sub.user = {
        email: user.email,
        id: user.id,
      };
    } catch (e) {
      sub.user = {
        email: 'NOT FOUND: ' + order.userId,
      };
      console.error('user not found', e);

      console.error('user not found', e);
      break;
    }
  }

  subscriptions = subscriptions.filter((sub: any) => {
    return [38204, 38204, 32955, 32955, 29231, 28241, 27309].includes(sub.user.id);
  });

  */


  // Pass data to the page via props
  return {
    props: {
      site: {
        id: site.id,
        domain: site.domain,
        name: site.name,
        homePageTyoe: site.config.cms.homePageType,
        config: {
          /** IMPORTANT THIS SHOULD ONLY BE PUBLIC / SAFE DATA<**/
          cms: site.config.cms,
          app: site.config.app,
          ideas: site.config.ideas,
          articles: site.config.articles,
          payment: site.config.payment,

    //      cms: site.config.cms,
      //    app: site.config.app,
        }
      }
    }
  }
}