import { getSite } from '../../services/sites';
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "lib/config";

async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const user = req.session.user;

    if (user && user.id) {
      res.status(200).json(user);
    } else {
      res.status(400).json({
        message: "User not authenticated"
      });
    }
  } else {
    res.status(404).json({
      message: "Route not found"
    });
  }
}


export default withIronSessionApiRoute(handler, ironOptions);
