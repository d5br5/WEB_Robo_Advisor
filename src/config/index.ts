// const base = "http://localhost:3000";
const base = "http://robo.tmax.co.kr";
const serverURL = "http://robo.tmax.co.kr:8080";
// const serverURL = "http://192.168.158.141:8080";

const API_BASE_URL = `${serverURL}/api/v1`;
const LOGIN_URL = `${serverURL}/oauth2/authorize/google?redirect_uri=${base}/loginprocess`;

export { API_BASE_URL, LOGIN_URL };
