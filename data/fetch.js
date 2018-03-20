import axios from 'axios';
import secrets from './.secrets.json';
import * as R from 'ramda';

const fetchToken = () =>
  axios.post('https://api.crowdlab.io/oauth/token', {
    client_id: secrets.client_id,
    client_secret: secrets.client_secret,
    grant_type: 'password',
    username: secrets.username,
    password: secrets.password,
  });

const authorizeRequest = (options) => {
  return fetchToken().then(({ data }) => {
    return R.compose(
      R.assocPath(['headers', 'X-Crowdlab-Tenant'], 'crowdlab'),
      R.assocPath(['headers', 'Accept'], 'application/json'),
      R.assocPath(['headers', 'Authorization'], `Bearer ${data.access_token}`)
    )(options);
  });
};

const fetch = (endpoint, options = {}) => {
  return authorizeRequest(options).then((authorizedOptions) => {
    return axios.get(endpoint, authorizedOptions);
  });
};

export default fetch;
