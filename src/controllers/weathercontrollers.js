const weatherModel = require('/models/weathermodel');

const saveSnap = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ error: "Save snap error: data is required" });
  }

  try {
    await weatherModel.saveSnapData(data);
    res.status(200).json({ message: 'Data received sucesfully' });


  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};

module.exports = {
  saveSnap
}