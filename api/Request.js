import axios from 'axios';
import qs from 'qs';

axios.interceptors.response.use(res => res, error => {
  const { response } = error;
  if (!error.status) { // network error
    // alert('network err');
  }
  if (response) {
    const { status } = response;
    if (status === 401) {
      alert('인증실패');
    }
    if (status === 403) {

    }
    if (status === 404) {
      // alert('404');
    }
  }
  return Promise.reject(error.response);
});

class Request {
  constructor(url) {
    this.url = url;
  }

  get(uriParams, query) {
    const URL = query ? `${this.url}/${uriParams}?${qs.stringify(query)}` : `${this.url}/${uriParams}`;
    return axios.get(URL).then(res => res.data);
  }

  post(uri, body) {
    return axios.post(`${this.url}/${uri}`, body, {
      onUploadProgress: e => {
        // const percent = parseInt(Math.round(((Number(e.loaded) * 100) / Number(e.total)));
        // console.log(`${percent}%`);
      }
    }).then(res => res.data);
  }

  put(uri, body) {
    return axios.put(`${this.url}/${uri}`, body, {
      onUploadProgress: e => {
        // const percent = parseInt(Math.round(((Number(e.loaded) * 100) / Number(e.total)));
        // console.log(`${percent}%`);
      }
    });
  }

  delete(uriParams) {
    return axios.delete(`${this.url}/${uriParams}`).then(res => res.data);
  }

  postFiles(uriParams, files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('img', file);
    }
    return axios.post(`${this.url}/${uriParams}`, formData, {
      onUploadProgress: e => {
        // const percent = parseInt(Math.round(((Number(e.loaded) * 100) / Number(e.total)));
        // console.log(`${percent}%`);
      }
    }).then(res => res.data);
  }

  postFilesWithFetch(uriParams, files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('img', file);
    }
    return fetch(`${this.url}/${uriParams}`, {
      method: 'POST',
      body: formData,
    }).then(res => res.ok ? res.json() : reject(res)).then(res => res.data);
  }
}

export default Request;