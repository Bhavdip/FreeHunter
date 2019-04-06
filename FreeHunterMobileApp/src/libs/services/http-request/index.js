import { buildHeader, secureHeader, buildBaseUrl } from './request';
import { log } from '@utils';

function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

export const baseCall = async (req, headers) => {
  const method = req.type || 'POST';
  let qs = '';
  let body;
  if (req.body) {
    if (['GET', 'DELETE'].indexOf(method) > -1) {
      qs = `?${getQueryString(req.body)}`;
    } else {
      if (req.formData) {
        // multipart
        body = req.body;
      } else {
        // POST or PUT
        body = JSON.stringify(req.body);
      }
    }
  }
  const baseUrl = await buildBaseUrl();
  const url = req.fullUrl ? req.fullUrl + qs : baseUrl + req.url + qs;
  const prUrl = 'URL:::' + url;
  const prMethod = 'METHOD:::' + method;
  const prHeader = 'HEADER:::' + JSON.stringify(headers);
  const prBody = req.body
    ? 'BODY::: ' + JSON.stringify(req.body)
    : 'BODY::: EMPTY';
  const strLog = prUrl + '\n' + prMethod + '\n' + prHeader + '\n' + prBody;
  log(strLog);
  return fetch(url, {
    method,
    headers,
    body
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data) {
        log('Response:::' + JSON.stringify(data));
        return data;
      }
      throw data;
    });
};

export const fetchCall = req => {
  const headers = buildHeader(req);
  return baseCall(req, headers);
};

export const secureCall = async req => {
  const headers = await secureHeader(req);
  return baseCall(req, headers);
};

// let isTokenRunning = false;
// const refreshTokenCall = async () => {
//   log('refreshTokenCall');
//   if (isTokenRunning) {
//     console.warn('Refresh Token is Running');
//     return;
//   }
//   isTokenRunning = true;
//   const baseUrl = await buildBaseUrl();
//   const headers = await secureHeader({}, true);
//   const url = `${baseUrl}/v1/customer/refresh-token`;
//   log('refreshTokenCall==============>');
//   log(url);
//   log(headers);
//   return fetch(url, {
//     method: 'GET',
//     headers
//   })
//     .then(res => {
//       isTokenRunning = false;
//       return res.json();
//     })
//     .then(response => {
//       isTokenRunning = false;
//       log('Response:::', JSON.stringify(response));
//       // AsyncStorage.setItem('accessToken', tokenResponse.accessToken);
//       if (response.status === 200) {
//         return response.data;
//       }
//       throw response;
//     });
// };
