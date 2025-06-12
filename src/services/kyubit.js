import axios from 'axios';

// const kyubitConfig = {
//     URL: "https://mddoc.md.go.th",
//     userName: "thanyatorn.ch",
//     password: "1234"
// };

// export async function getSessionAuthInfo(callback) {
//     try {
//         const response = await axios.get(
//             `${kyubitConfig.URL}/WebServices/Users.asmx/GetSessionAuthenticationInfoAPI`,
//             {
//                 headers: {
//                     'Content-Type': 'application/json; charset=utf-8'
//                 },
//                 params: {
//                     _: new Date().getTime() // prevent caching
//                 }
//             }
//         );
//         callback(response.data);
//     } catch (error) {
//         console.error("Failed to fetch session auth info", error);
//     }
// }

// export async function login({ callback }) {
//     try {
//         const payload = {
//             userName: kyubitConfig.userName,
//             password: kyubitConfig.password
//         };

//         const response = await axios.get(
//             `${kyubitConfig.URL}/WebServices/Users.asmx/LoginAPI`,
//             {
//                 headers: {
//                     'Content-Type': 'application/json; charset=utf-8'
//                 },
//                 params: payload
//             }
//         );

//         localStorage.setItem('KBTK', response.data.Token);
//         if (typeof callback === 'function') {
//             callback(response.data);
//         }
//     } catch (error) {
//         console.error("Login failed", error);
//     }
// }

// export function openIFrame(actionUrl, iframeName) {
//     const form = document.createElement("form");
//     form.method = "POST";
//     form.action = actionUrl;
//     form.style.display = "none";
//     form.target = iframeName;

//     const input = document.createElement("input");
//     input.type = "hidden";
//     input.name = "token";
//     input.value = localStorage.getItem('KBTK');

//     form.appendChild(input);
//     document.body.appendChild(form);
//     form.submit();
//     document.body.removeChild(form);
// }

const kyubitConfig = {
    URL: "https://mddoc.md.go.th",
    userName: "thanyatorn.ch",
    password: "1234"
};

function jsonpRequest(url, callbackName) {
    return new Promise((resolve, reject) => {
        const callbackFunc = `jsonpCallback_${Date.now()}`;

        window[callbackFunc] = (data) => {
            resolve(data);
            delete window[callbackFunc];
            document.body.removeChild(script);
        };

        const script = document.createElement('script');
        script.src = `${url}${url.includes('?') ? '&' : '?'}callback=${callbackFunc}`;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

export async function getSessionAuthInfo(callback) {
    const url = `${kyubitConfig.URL}/WebServices/Users.asmx/GetSessionAuthenticationInfoAPI`;
    try {
        const data = await jsonpRequest(url);
        if (callback) callback(data);
    } catch (err) {
        console.error('Error in getSessionAuthInfo', err);
    }
}

export async function login({ callback }) {
    const params = new URLSearchParams({
        userName: kyubitConfig.userName,
        password: kyubitConfig.password
    }).toString();

    const url = `${kyubitConfig.URL}/WebServices/Users.asmx/LoginAPI?${params}`;
    try {
        const data = await jsonpRequest(url);
        localStorage.setItem('KBTK', data.Token);
        if (callback) callback(data);
    } catch (err) {
        console.error('Login error', err);
    }
}

export function openIFrame(actionUrl, iframeName) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = actionUrl;
    form.style.display = "none";
    form.target = iframeName;

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "token";
    input.value = localStorage.getItem('KBTK');

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}

