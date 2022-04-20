const BASE_URL = `https://run.mocky.io/v3/`;
const BASE_KEY = `b7d36eea-0b3f-414a-ba44-711b5f5e528e`;

export default function Api() {
  const url = BASE_URL + BASE_KEY;
  return fetch(url).then((response) => response.json());
}
