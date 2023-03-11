// pages/api/proxy/[...slug].js
import httpProxy from "http-proxy";

import { createProxyMiddleware } from "http-proxy-middleware"; // @2.0.6

const proxy = createProxyMiddleware({
  target: process.env.API,
  secure: false,
  //pathRewrite: { "^/api/proxy": "" }, // remove `/api/proxy` prefix
});

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
    bodyParser: false,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) =>
  new Promise((resolve, reject) => {
    const proxy = httpProxy.createProxy();

    proxy.once("proxyRes", resolve).once("error", reject).web(req, res, {
      changeOrigin: true,
      target: process.env.API,
    });
  });