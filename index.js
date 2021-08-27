import { getDigimonList } from "./data-extractor.js";
import fs from 'fs';

const digimons = await getDigimonList();

fs.writeFile('result.json', JSON.stringify(digimons), (err) => console.log(err));
