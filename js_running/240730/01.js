const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    return new Promise((resolve, reject)=> {
        if(url == API_URL) {
            resolve("URL이 같습니다!!");
        } else {
            reject("URL이 다릅니다!!");
        }
    })
}

getData(API_URL).then((data) => {
    console.log("성공",data);
}).catch((error) => {
    console.log("에러", error);
});

getData(WRONG_URL).then((data) => {
    console.log("성공",data);
}).catch((error) => {
    console.log("에러", error);
});