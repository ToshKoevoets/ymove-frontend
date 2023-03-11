// pages/api/proxy/[...slug].js
import httpProxy from "http-proxy";
import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
    bodyParser: false,
  },
};

/*
const proxy = createProxyMiddleware({
  target: process.env.BACKEND_URL,
  secure: false,
  pathRewrite: { "^/api/proxy": "" }, // remove `/api/proxy` prefix
});*/

const proxy = createProxyMiddleware({
 // target: 'https://image-server2.openstadsdeel.nl',
  target: process.env.IMAGE_API_URL,
  changeOrigin: true,
  pathRewrite: { "^/api/image": "/image" },
  onProxyReq: (proxyReq, req, res) => {
    console.log('Set header')

    // add custom header to request
    proxyReq.setHeader('Authorization', `Bearer letMeRunThis`);
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