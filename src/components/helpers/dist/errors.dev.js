"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandleErrors = HandleErrors;

function HandleErrors(response) {
  if (!response.ok) {
    if (response.status === 404) {
      // console.log("Connection error2", response.statusText);
      throw new Error(response.status + " Failed Fetch ");
    }

    if (response.status === 400) {
      throw new Error(response.status + " 400 Error");
    }

    throw Error(response.statusText);
  }

  return response;
}