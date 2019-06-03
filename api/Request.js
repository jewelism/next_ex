import axios from 'axios';
import qs from 'qs';

axios.interceptors.response.use(res => res, error => {
  const {response} = error;
  // if (!error.status) { // network error
  //   alert('network err');
  // }
  if(response){
    const {status} = response;
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
    return new Promise(resolve => {
      axios.get(URL)
        .then(res => {
          resolve(res.data);
        });
    });
  }

  post(uri, body) {
    return new Promise(resolve => {
      axios.post(`${this.url}/${uri}`, {
        body
      }, {
        onUploadProgress: e => {
          // const percent = parseInt(Math.round(((Number(e.loaded) * 100) / Number(e.total)));
          // console.log(`${percent}%`);
        }
      })
        .then(res => resolve(res.data));
    });
  }

  put(uri, body) {
    return axios.put(`${this.url}/${uri}`,
      {
        body,
      },
      {
        onUploadProgress: e => {
          // const percent = parseInt(Math.round(((Number(e.loaded) * 100) / Number(e.total)));
          // console.log(`${percent}%`);
        }
      }
    );
  }

  delete(uriParams) {
    return new Promise(resolve => {
      axios.delete(`${this.url}/${uriParams}`)
        .then(res => resolve(res.data));
    });
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
    });
  }

  postFilesWithFetch(uriParams, files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('img', file);
    }
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${uriParams}`, {
        method: 'POST',
        body: formData,
      }).then(res => {
        if (res.ok)
          return res.json();
        else
          reject(res);
      })
        .then(resolve)
        .catch(reject);
    });
  }

  // encodedPost(uri, body) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`${this.url}/${uri}`, qs.stringify(body), {
  //       onUploadProgress: e => {
  //         // const percent = parseInt(Math.round(((Number(e.loaded) * 100) / Number(e.total)));
  //         // console.log();
  //       }
  //     })
  //       .then(res => resolve(res.data))
  //       .catch(reject);
  //   });
  // }
  //
  // put(uriParams, body) {
  //   return this.post(uriParams, body, true, null);
  // }
}

export default Request;