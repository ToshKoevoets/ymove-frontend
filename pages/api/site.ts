import { getSite } from '../../services/sites';
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "lib/config";

async function handler(req:any, res:any) {
  if (req.method === 'GET') {
    const site:any = await getSite(req);
    const user = req.session.user ? req.session.user : null;;

    const moderator = user && (user.role === 'admin' || user.role === 'moderator');

    if (!site) {
      return {
        notFound: true,
      }
    }

    res.status(200).json({ 
      id: site.id,
      title: site.title,
      cms: site.config?.cms,
      config: moderator ? {
        styling: site.config?.styling ? site.config?.styling : {},
        landing: site.config?.landing ? site.config?.landing : {},
        app: site.config?.app ? site.config?.app : {},
        marketing: site.config?.marketing ? site.config?.marketing : {},
        public: site.config?.public ? site.config?.public : {},
      } : {
        styling: site.config?.styling ? site.config?.styling : {},
          landing: site.config?.landing ? site.config?.landing : {},
        public: site.config?.public ? site.config?.public : {},
      }
    });
  } else {
    res.status(404).json({
      message: "Not found" 
    });
  }
}

export default withIronSessionApiRoute(handler, ironOptions);
