import app from './app.js';
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from "fs";
import yaml from "js-yaml";

const PORT = 3000;

function getPath() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const yamlInSrc = path.join(__dirname, 'hackaton-swagger.yaml');
  const yamlFromDist = path.join(__dirname, '../src/hackaton-swagger.yaml');

  if (fs.existsSync(yamlInSrc)) return yamlInSrc;
  if (fs.existsSync(yamlFromDist)) return yamlFromDist;

  throw new Error('Arquivo hackaton-swagger.yaml não encontrado');
}

const swaggerFile = fs.readFileSync(getPath(), 'utf8');
const swaggerDocument = yaml.load(swaggerFile);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument as object));

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
  console.log(`Docs at http://localhost:${PORT}/api-docs`);
});
