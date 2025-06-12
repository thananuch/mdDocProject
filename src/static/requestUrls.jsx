import axios from "axios";
import { handleApiRequestError } from "./errorHandler";
import secureLocalStorage from "react-secure-storage";

export const API_REQUEST_URL = {
  URL_POST_XXX: "/api/XXX",
};

const getToken = () => {
  const token = JSON.parse(secureLocalStorage.getItem("token")); // FROM STORAGE
  return token;
};

export const setToken = (token) => {
  secureLocalStorage.setItem("token", JSON.stringify(token));
};


//POST REQUEST
export const postRequest = (
  url,
  data,
  sucessCallback,
  errorCallback,
  finallyCallback
) => {
  const token = getToken(); // FROM STORAGE
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  axios
    .post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((response) => {
      // if (response.data && JSON.stringify(response.data).indexOf("+0700") > -1) {
      //   alert(url);
      // }
      sucessCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finallyCallback();
    });
};

//GET REQUEST
export const getRequest = (
  url,
  sucessCallback,
  errorCallback,
  finallyCallback
) => {
  const token = getToken(); // FROM STORAGE
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((response) => {
      sucessCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finallyCallback();
    });
};

//POST FILE REQUEST
export const postFileRequest = (
  url,
  data,
  sucessCallback,
  errorCallback,
  finallyCallback
) => {
  // debugger;
  const token = getToken(); // FROM STORAGE
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      responseType: "blob",
    })
    .then((response) => {
      // if (response.data && JSON.stringify(response.data).indexOf("+0700") > -1) {
      //   alert(url);
      // }
      sucessCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finallyCallback();
    });
};

//PUT REQUEST
export const putRequest = async (
  url,
  data,
  sucessCallback,
  errorCallback,
  finallyCallback
) => {
  const token = getToken(); // FROM STORAGE
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .put(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((response) => {
      sucessCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finallyCallback();
    });
};

//POST REQUEST
export const postRequestForBlob = (
  url,
  data,
  sucessCallback,
  errorCallback,
  finallyCallback
) => {
  const token = getToken(); // FROM STORAGE
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      responseType: "blob",
    })
    .then((response) => {
      sucessCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finallyCallback();
    });
};

//GET REQUEST AWAIT
export const getRequestAwait = async (url) => {
  const token = getToken(); // FROM STORAGE
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return response;
};

//POST REQUEST AWAIT
export const postRequestAwait = async (url, data) => {
  const token = getToken(); // FROM STORAGE
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const response = await axios.post(url, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return response;
};

//PUT REQUEST AWAIT
export const putRequestAwait = async (url, data) => {
  const token = getToken(); // FROM STORAGE
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const response = await axios.put(url, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return response;
};

export const fetchImage = async (url, data, setImgCallback) => {
  const token = getToken(); // FROM STORAGE
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      responseType: "blob",
    });
    const imageObjectURL = window.URL.createObjectURL(new Blob([res.data]));
    setImgCallback(imageObjectURL);
    console.log(imageObjectURL);
  } catch (error) {
    console.log(error);
  }
};

export const fetchVideo = async (url, data, setVdoCallback) => {
  try {
    const token = getToken(); // FROM STORAGE
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      responseType: "blob",
    });
    const videoObjectURL = window.URL.createObjectURL(new Blob([res.data]));
    setVdoCallback(videoObjectURL);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFile = async (url, data, setFileCallback) => {
  try {
    const token = getToken(); // FROM STORAGE
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      responseType: "blob",
    });
    const blob =
      data.fileType.toLowerCase() === "pdf"
        ? new Blob([res.data], { type: "application/pdf" })
        : new Blob([res.data]);
    const fileObjectURL = URL.createObjectURL(blob);
    setFileCallback(fileObjectURL);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFileAsync = async (url, data) => {
  try {
    const token = getToken(); // FROM STORAGE
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      responseType: "blob",
    });
    const blob =
      data.fileType.toLowerCase() === "pdf"
        ? new Blob([res.data], { type: "application/pdf" })
        : new Blob([res.data]);
    const fileObjectURL = URL.createObjectURL(blob);
    return fileObjectURL;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const fetchFileAsyncAsBlob = async (url, data) => {
  try {
    const token = getToken(); // FROM STORAGE
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      responseType: "blob",
    });
    const blob =
      data.fileType.toLowerCase() === "pdf"
        ? new Blob([res.data], { type: "application/pdf" })
        : new Blob([res.data]);
    return blob;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };
    reader.onerror = () => {
      reject(new Error("Error reading the Blob as Base64."));
    };
    reader.readAsDataURL(blob);
  });
}

export const fileUpload = async (token, url, file, callbackInfo) => {
  // create a new FormData object and append the file to it
  const formData = new FormData();
  formData.append("file", file);

  // make a POST request to the File Upload API with the FormData object and Rapid API headers
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-rapidapi-host": "file-upload8.p.rapidapi.com",
        "x-rapidapi-key": "your-rapidapi-key-here",
      },
    })
    .then((response) => {
      if (callbackInfo.sucessCallback) callbackInfo.sucessCallback(response);
    })
    .catch((error) => {
      if (callbackInfo.sucessCallback) callbackInfo.failureCallback(error);
    })
    .finally(() => {
      if (callbackInfo.finallyCallback) callbackInfo.finallyCallback();
    });
};

export const fileUploadAndJson = async (
  token,
  url,
  file,
  data,
  sucessCallback,
  errorCallback,
  finallyCallback
) => {
  // create a new FormData object and append the file to it
  const formData = new FormData();
  formData.append("file", file);
  formData.append("json", JSON.stringify(data));

  // make a POST request to the File Upload API with the FormData object and Rapid API headers
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-rapidapi-host": "file-upload8.p.rapidapi.com",
        "x-rapidapi-key": "your-rapidapi-key-here",
      },
    })
    .then((response) => {
      sucessCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finallyCallback();
    });
};

export const fetchPageDataComplaintAdmins = (
  pageNo,
  criteria,
  loading = false,
  callbackInfo
) => {
  const url =
    API_REQUEST_URL.URL_POST_queryComplaintAdminsForPaging +
    "?pageNo=" +
    pageNo +
    "&pageSize=" +
    callbackInfo.pageSize +
    "&sortBy=" +
    callbackInfo.sortBy;

  fetchPageData(url, criteria, loading, callbackInfo);
};

const fetchPageData = (url, criteria, loading = false, callbackInfo) => {
  if (loading && callbackInfo.showLoading) callbackInfo.showLoading();
  const token = getToken(); // FROM STORAGE
  postRequest(
    token,
    url,
    criteria,
    // (response) => {
    //  // console.log("xxxxx");
    //  // console.log("Response data : " + JSON.stringify(response.data));
    //   if (response.data.data.length > 0) {
    //     const val = response.data.data;
    //     callbackInfo.setData(typeof val === "string" ? JSON.parse(val) : val);
    //   }
    // },
    (response) => {
      if (response.data.data) {
        if (response.data.data instanceof Array) {
          //if (response.data.data.length > 0) {
          callbackInfo.setData(response.data.data);
          //}
        } else {
          callbackInfo.setData(response.data.data);
        }
      } else if (response.data) {
        if (response.data instanceof Array) {
          //if (response.data.length > 0) {
          callbackInfo.setData(response.data);
          //}
        } else {
          callbackInfo.setData(response.data);
        }
      }
    },
    (error) => {
      if (error.response) {
        //callbackInfo.setData([]);
      }
      if (callbackInfo.onApiErrorCallback)
        callbackInfo.onApiErrorCallback(error);
      else {
        if (callbackInfo.hideLoading) callbackInfo.hideLoading();
        handleApiRequestError(error);
      }
    },
    () => {
      if (loading && callbackInfo.hideLoading) callbackInfo.hideLoading();
      if (callbackInfo.endProc) callbackInfo.endProc();
    }
  );
};
