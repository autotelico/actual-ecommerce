const { spawn } = require("child_process");

exports.index = async (req, res) => {
  console.log("executing indexController.index");
  const args = req.query.args || "some args";
  const pythonScript = spawn("python", ["scraping/scraper.py", args]);
  let json = { data: "" };

  pythonScript.stdout.on("data", (data) => {
    json.data += data;
  });

  pythonScript.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
  });

  pythonScript.on("close", () => {
    console.log("Python process has closed");
    console.log(json);
    
    json.data = json.data.replace('\\r', '')
    json.data = json.data.replace('\\n', '')
    json.data = json.data.replace('\\', '')
    res.json(json);
  });
};
