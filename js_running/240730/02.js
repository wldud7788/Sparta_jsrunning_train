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
};

async function callgetData() {
  try {
    const result1 = await getData(API_URL);
    console.log("result1:", result1);
  } catch (error) {
    console.log("Error:", error);
  }

  try {
    const result2 = await getData(WRONG_URL);
    console.log("result2:", result2);
  } catch (error) {
    console.log("Error:", error);
  }
};

callgetData();