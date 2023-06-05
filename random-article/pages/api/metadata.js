import ogs from 'open-graph-scraper';

export default async function handler(req, res) {
  const { url } = req.query;

  try {
    const options = { url };
    const data = await ogs(options);
    const { result } = data;

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '문제가 발생했습니다.' });
  }
}
