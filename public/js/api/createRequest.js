/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  let formData = null;
  let url = options.url;

  if (options.data) {
    if (options.method === 'GET') {
      url += '?' + Object.entries(options.data).map(entry => entry.map(encodeURIComponent).join('=')).join('&');
    } else {
      formData = new FormData();
      Object.entries(options.data).forEach(v => formData.append(...v));
    }
  }

  if (options.callback) {
    xhr.onload = () => {
      let err = null;
      let response = null;

      try {
        if (xhr.response && xhr.response.success) {
          response = xhr.response;
        } else {
          err = xhr.response;
        }
      } catch(e) {
        err = e;
      }

      options.callback(err, response);
    };
  }

  xhr.open(options.method, url);
  xhr.send(formData);
};
