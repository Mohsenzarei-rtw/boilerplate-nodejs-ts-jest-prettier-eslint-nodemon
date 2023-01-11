import express from 'express';
import { port } from './constants';
import type { Application } from 'express';

const app: Application = express();

app.listen(port, () => console.log(`Server is listening on port ${port} !`));
