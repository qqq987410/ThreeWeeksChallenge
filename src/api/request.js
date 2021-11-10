/* eslint-disable */
import axios from 'axios';
import jsSHA from 'jssha';
import config from '../config';

const base = 'https://ptx.transportdata.tw/';

function getAuthorizationHeader() {
  const UTCString = new Date().toUTCString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(config.APP_KEY, 'TEXT');
  ShaObj.update('x-date: ' + UTCString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization =
    'hmac username="' +
    config.APP_ID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, 'X-Date': UTCString };
}

const request = async (method, apiName, query) => {
  const url = new URL(base);
  url.pathname = `MOTC/v2/${apiName}`;
  url.search = query;
  const req = { url, method, headers: getAuthorizationHeader() };
  const json = await axios(req);
  return json;
};

export default request;
