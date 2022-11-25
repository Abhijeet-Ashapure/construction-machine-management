import { requestTimeout, requestTimeoutMessage } from "../utils/Constants";
import { getBaseUrl } from "./appConfig";

// Handling the error in case of network fail
function timeoutPromise(promise) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error(requestTimeoutMessage));
        }, requestTimeout);
        promise.then(
            (response) => {
                clearTimeout(timeoutId);
                resolve(response);
            },
            (error) => {
                clearTimeout(timeoutId);
                reject(error);
            }, 
        );
    });
}


// Defined the interface for GET API
export const secureGet = (path) => {
    return (
        timeoutPromise(fetch(getBaseUrl() + path))
            .then((response) => response)
            .catch((error) => error)
    );
};
