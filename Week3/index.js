#!/user/bin/env node

function mockPromiseCall (waitTime, returnValue = "hello World", shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(returnValue)
            }
            else {
                resolve(returnValue);
            }
        }, waitTime);
    });
}

mockPromiseCall(100, "First Promise").then((result) => console.log(result));
mockPromiseCall(50, "Second Promise").then((result) => console.log(result));
mockPromiseCall(10, "Third Promise").then((result) => console.log(result));

for (let i = 0; i < 10000000; i++) {}

console.log("Finished Sync")