function myCallback() {
  console.log("done");
}

function longRunning(myParm, callback) {
  // do long stuff
  // .....
  // ..then, the callback
  callback();
}

function promiseLongRun(myParam) {
  // do stuff
  const myPromise = new Promise();
  return myPromise;
}

const myResult = promiseLongRun(1);
myResult.then(result, () => {
  console.log(result);
});

const myResult2 = promiseLongRun(1).then(result, () => {
  console.log(result);
});

async function doPromise() {
  const result = await promiseLongRun();
  console.log(result);
}
