import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
  // target: 'https://image-server2.openstadsdeel.nl',
  target: process.env.API,
  changeOrigin: true,
 // pathRewrite: { ['^' + apiPath]: '/api' },
  onProxyReq: (proxyReq, req, res) => {

    /**
     * Validate the request with captcha if send by a form
     */
    if (req.body && req.body.areYouABot) {
      const captchData = req.session.captcha;
      const isCaptchaValid = captchData && captchData.text && captchData.text === req.body.areYouABot;

      if (!isCaptchaValid) {
        return res.status(403).json({
          'message': 'Captcha is not correct'
        });
      }

      // clean up key before we send it to the api
      delete req.body.areYouABot;
    }

    // add custom header to request
    proxyReq.setHeader('Accept', 'application/json');
    proxyReq.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (req.session && req.session.user.jwt) {
      proxyReq.setHeader('X-Authorization', `Bearer ${req.session.user.jwt}`);
    }

    //bodyParser middleware parses the body into an object
    //for proxying to worl we need to turn it back into a string
    if (req.method == "POST" || req.method == "PUT" || req.method == "DELETE") {
      //eventEmitter.emit('apiPost');
    }

    if ((req.method == "POST" || req.method == "PUT") && req.body) {
      // emit event
      let body = req.body;
      let newBody = body;
      delete req.body;

      // turn body object  back into a string
      //let newBody = qs.stringify(body, { skipNulls: true })
      try {
        //newBody = JSON.stringify(body);
        console.log('newBody', newBody)

        proxyReq.setHeader('content-length', Buffer.byteLength(newBody, 'utf8'));
        proxyReq.write(newBody);
        proxyReq.end();
      } catch (e) {
        console.log('stringify err', e)
      }
    }

  },
  onError: function (err) {
    console.log('errerrerr newBody', err);
  }
})


export default function handler(req, res) {
  proxy(req, res, (err) => {
    if (err) {
      throw err;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}