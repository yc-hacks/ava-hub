import { MODEL_SERVER_BASE_URL, SERVER_BASE_URL } from '../constants/env';
import Host from '../utils/Host';

const BASE_URL = SERVER_BASE_URL;
export const LOCAL_HOST = new Host(BASE_URL);

export const MODEL_HOST = new Host(MODEL_SERVER_BASE_URL);
