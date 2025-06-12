import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, styled, Toolbar } from '@mui/material'
import React, { useEffect } from 'react'
import TabMenuScroll from '../../components/tab/tabMenuScroll';
import { getSessionAuthInfo, login, openIFrame } from '../../services/kyubit';

function MainPage() {
  const kyubitConfig = {
    URL: "https://mddoc.md.go.th",
    userName: "thanyatorn.ch",
    password: "1234",
  };

  function jsonpRequest(url) {
    return new Promise((resolve, reject) => {
      const callbackFunc = `jsonpCallback_${Date.now()}`;

      window[callbackFunc] = (data) => {
        resolve(data);
        delete window[callbackFunc];
        script.remove();
      };

      const script = document.createElement('script');
      script.src = `${url}${url.includes('?') ? '&' : '?'}callback=${callbackFunc}`;
      script.onerror = (err) => {
        reject(err);
        script.remove();
        delete window[callbackFunc];
      };

      document.body.appendChild(script);
    });
  }

  async function getSessionAuthInfo(callback) {
    const url = `${kyubitConfig.URL}/WebServices/Users.asmx/GetSessionAuthenticationInfoAPI`;
    try {
      const data = await jsonpRequest(url);
      if (callback) callback(data);
    } catch (err) {
      console.error('Error in getSessionAuthInfo', err);
    }
  }

  async function login({ callback }) {
    const params = new URLSearchParams({
      userName: kyubitConfig.userName,
      password: kyubitConfig.password,
    }).toString();

    const url = `${kyubitConfig.URL}/WebServices/Users.asmx/LoginAPI?${params}`;
    try {
      const data = await jsonpRequest(url);
      if (data?.Token) {
        localStorage.setItem('KBTK', data.Token);
      }
      if (callback) callback(data);
    } catch (err) {
      console.error('Login error', err);
    }
  }

  function openIFrame(actionUrl, iframeName) {
    const token = localStorage.getItem('KBTK');
    if (!token) {
      console.error("No token found for Kyubit.");
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = actionUrl;
    form.target = iframeName;
    form.style.display = "none";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "token";
    input.value = token;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  useEffect(() => {
    const authenticateUser = () => {
      getSessionAuthInfo((info) => {
        if (info?.IsAuthenticated) {
          openIFrame(`${kyubitConfig.URL}/Forms/Dashboard.aspx?DashboardID=903&align=center`, 'kyubit-iframe');
        } else {
          handleLogin();
        }
      });
    };

    const handleLogin = () => {
      login({
        callback: (info) => {
          if (info?.IsAuthenticated) {
            openIFrame(`${kyubitConfig.URL}/Forms/Dashboard.aspx?DashboardID=903&align=center`, 'kyubit-iframe');
          } else {
            alert("Authentication problem.");
          }
        }
      });
    };

    authenticateUser();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <iframe
        id="kyubit-iframe"
        name="kyubit-iframe"
        className="w-full"
        height="740px"
        frameBorder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
}

export default MainPage;


//  useEffect(() => {
  //   const checkAuth = () => {
  //     window.$kyu.getSessionAuthInfo((info) => {
  //       if (info.IsAuthenticated) {
  //         showAnalysis();
  //       } else {
  //         window.$kyu.login({
  //           userName: "thanyatorn.ch",
  //           password: "1234",
  //           callback: function (info) {
  //             if (info.IsAuthenticated) {
  //               showAnalysis();
  //             } else {
  //                console.log("Authentication problem.");
  //             }
  //           }
  //         });
  //       }
  //     });
  //   };

  //   checkAuth();
  // }, []);

  // const showAnalysis = () => {
  //   if (window.$kyu) {
  //     window.$kyu.initVisualization("analysisDiv",  {
  //            name: "My Analysis",
  //            analysisId: 251,
  //            chartType: "Column_Chart",
  //            width: "100%",
  //            height: "400px",
  //            allowLargeView: true,
  //            sqlFilters: [{ "parameterName": "@country", "value": "France", "type": "Text" }, { "parameterName": "@shipDate", "value": "20100501", "type": "Date" }],
  //            tableDataBar: 1,
  //            secondaryChart: "Line_Chart",
  //            clickURL: "http://localhost:8181/MDChartWeb/listTable.jsp",
  //        });
  //   }
  // };