import { getSite } from '../../services/sites';

export default async function handler(req:any, res:any) {
  if (req.method === 'GET') {
    const site:any = await getSite(req);

    if (!site) {
      return {
        notFound: true,
      }
    }

    res.status(200).json({ 
      id: site.id,
      title: site.title,
      cms: site.config?.cms,
      info: site.config?.info ? site.config?.info : {},
      app: site.config?.app,
    });
  } else {
    res.status(404).json({
      message: "Not found" 
    });
  }
}
