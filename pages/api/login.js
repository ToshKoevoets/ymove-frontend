import Url from 'url';
import { withIronSessionApiRoute } from "iron-session/next";
import { getSite } from '../../services/sites';
const apiUrl = process.env.API;
const devUrl = process.env.DEV_URL;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const site = await getSite(req);

    if (!site) {
      res.status(404).json({
        message: "Not found"
      });
    }

    const returnUrl = (devUrl ? devUrl : site.config.cms.url) + '/api/validate-jwt';

    if (req.query.returnTo && typeof req.query.returnTo === 'string') {
      //only get the pathname to prevent external redirects
      let pathToReturnTo = Url.parse(req.query.returnTo, true);
      pathToReturnTo = pathToReturnTo.path;

      req.session.returnTo = pathToReturnTo;
      await req.session.save();
    }

    let url = `${apiUrl}/oauth/site/${site.id}/login?redirectUrl=${returnUrl}`;
    url = req.query.useOauth ? url + '&useOauth=' + req.query.useOauth : url;
    url = req.query.loginPriviliged ? url + '&loginPriviliged=1' : url + '&forceNewLogin=1'; // ;
    return res.redirect(url);
  } else {
    res.status(404).json({
      message: "Not found"
    });
  }
}