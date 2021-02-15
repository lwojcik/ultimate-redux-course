// SNA
const logger = param => store => next => action => {
  console.log("Logging", param.destination);
  next(action);
}

export default logger;
