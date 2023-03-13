import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "lib/config";
import { getSite } from '../../services/sites';
const apiUrl = process.env.API;


async function validateJwt(req, res) {
  const jwt = req.query.jwt;
  const site = await getSite(req);


  const siteId = site.id;
  const url = `${apiUrl}/oauth/site/${siteId}/me`;
  
  if (jwt) {
    const userResponse = await fetch(url, {
      method: 'GET',

      headers: {
        'Accept': 'application/json',
        "X-Authorization": `Bearer ${jwt}`,
        "Cache-Control": "no-cache"
      }
    });

    const userData = await userResponse.json();

    console.log('userData', userData)

    req.session.jwt = jwt;
    
    req.session.user = {
      id: userData.id,
      role: userData.role,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      chatToken: userData.chatToken,
      jwt: jwt
    };
    
    await req.session.save();
  }  else {
    return res.redirect(307, '/login')
  }

  const redirectUrl = req.session.returnTo ? req.session.returnTo : '/'
  
  res.redirect(307, redirectUrl)
}

export default withIronSessionApiRoute(validateJwt, ironOptions);
