export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const mockHistory = [
    {
      imagePath: "Te-glTr_0000.jpg",
      prediction: "glioma",
      confidence: 0.9542,
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      imagePath: "Te-me_0010.jpg",
      prediction: "meningioma",
      confidence: 0.9123,
      timestamp: new Date(Date.now() - 7200000)
    },
    {
      imagePath: "Te-no_0025.jpg",
      prediction: "notumor",
      confidence: 0.9812,
      timestamp: new Date(Date.now() - 10800000)
    }
  ];

  return res.status(200).json(mockHistory);
}
