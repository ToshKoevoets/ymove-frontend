
self.apos.app.post(
  '/bunny-video',
  async (req, res, next) => {
    console.log('req.user', req.openstadUser);

    // if (!req.openstadUser) {
    //  return res.status.json({
    //    forbidden: true
    //  });
    // }
    const BUNNY_API_KEY = process.env.BUNNY_API_KEY ? process.env.BUNNY_API_KEY : 'a1c44bcd-57d3-42e3-8fdd674374b5-009b-4d99';

    console.log('req.body', req.body);

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      AccessKey: BUNNY_API_KEY,
    }

    const response = await axios
      .request({
        method: "POST",
        url: `http://video.bunnycdn.com/library/${req.body.libraryId}/videos`,
        data: JSON.stringify({ title: req.body.fileName }),
        headers
      });


    const videoId = response.data.guid;
    const expirationTime = new Date().getTime() + 3600 * 1000;
    const signature = sha256(req.body.libraryId + BUNNY_API_KEY + expirationTime + videoId);

    return res.json({
      videoId,
      signature: signature,
      expirationTime: expirationTime,
    });
  }
);

self.apos.app.get(
  '/bunny-video/:libraryId/videos/:videoId',
  async (req, res, next) => {
    console.log('req.user', req.user);

    /*if (!req.user) {
      return res.status.json({
        forbidden: true
      });
    }*/

    const BUNNY_API_KEY = process.env.BUNNY_API_KEY ? process.env.BUNNY_API_KEY : 'a1c44bcd-57d3-42e3-8fdd674374b5-009b-4d99';

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      AccessKey: BUNNY_API_KEY,
    }

    const response = await axios
      .request({
        method: "GET",
        url: `http://video.bunnycdn.com/library/${req.params.libraryId}/videos/${req.params.videoId}`,
        headers
      });


    return res.json(response.data);
  }
);

self.apos.app.delete(
  '/bunny-video/:libraryId/:videoId',
  async (req, res, next) => {
    console.log('req.user', req.user);

    if (!req.user) {
      return res.status.json({
        forbidden: true
      });
    }

    const BUNNY_API_KEY = process.env.BUNNY_API_KEY ? process.env.BUNNY_API_KEY : 'a1c44bcd-57d3-42e3-8fdd674374b5-009b-4d99';

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      AccessKey: BUNNY_API_KEY,
    }

    const response = await axios
      .request({
        method: "DELETE",
        url: `http://video.bunnycdn.com/library/${req.params.libraryId}/videos/${req.params.videoId}`,
        headers
      });

    return res.json({
      removed: true
    });
  }
);