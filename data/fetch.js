import axios from 'axios';
import * as R from 'ramda';

const authorizedOptions = ({ authHeader, tenantHeader }, options) => {
  return R.compose(
    R.assocPath(['headers', 'X-Crowdlab-Tenant'], tenantHeader),
    R.assocPath(['headers', 'Accept'], 'application/json'),
    R.assocPath(['headers', 'Authorization'], authHeader)
  )(options);
};

const fetch = ({ authHeader, tenantHeader }, endpoint, options = {}) => {
  return axios.get(
    endpoint,
    authorizedOptions({ authHeader, tenantHeader }, options)
  );
};

const post = ({ authHeader, tenantHeader }, endpoint, data, options = {}) => {
  return axios.post(
    endpoint,
    data,
    authorizedOptions({ authHeader, tenantHeader }, options)
  );
};

const patch = ({ authHeader, tenantHeader }, endpoint, data, options = {}) => {
  return axios.patch(
    endpoint,
    data,
    authorizedOptions({ authHeader, tenantHeader }, options)
  );
};

const destroy = ({ authHeader, tenantHeader }, endpoint, options = {}) => {
  return axios.delete(
    endpoint,
    authorizedOptions({ authHeader, tenantHeader }, options)
  );
};

export { fetch, post, patch, destroy };
