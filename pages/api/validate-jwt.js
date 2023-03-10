import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "lib/config";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function validateJwt(req, res) {
  const jwt = req.nextUrl.searchParams.get('jwt');
  const site = await fetch('/api/site');

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

    req.session.user = {
      id: userData.id,
      role: userData.role,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
    };
    
    await req.session.save();
  }  else {
    return res.redirect(307, '/login')
  }

  const redirectUrl = req.session.returnTo ? req.session.returnTo : '/'
  
  res.redirect(307, redirectUrl)
}