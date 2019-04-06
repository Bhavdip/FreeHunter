import moment from 'moment';

export function log(message) {
  console.log(
    `%c${message}`,
    'color: blue; background-color: white; border: 1px solid blue; padding: 5px; '
  );
}

export function logWarn(message) {
  console.warn(message);
}

export function logError(error) {
  console.log(
    `%c${error}`,
    'color: #E25353; background-color: white; border: 1px solid #E25353; padding: 5px; '
  );
}

export function logGreen(message) {
  console.log(
    `%c${message}`,
    'color: green; background-color: white; border: 1px solid green; padding: 5px; '
  );
}

export function info(message) {
  console.info(message);
}

export function infoAction(action) {
  console.info(
    '%cINFO:',
    'color: blue',
    `Dispatching a ${action.type} action with payload:`,
    action.payload
  );
}

export function infoState(store) {
  console.info('%cNext State:', 'color: green', store.getState());
}

export function sinceDate(registerDate) {
  //2010-11-11T06:55:01Z
  var registrationDate = moment(registerDate);
  var currentDate = moment();
  let result = currentDate.diff(registrationDate, 'days', true);
  log(`SinceDate:::` + currentDate + `:::` + result);
  return result <= 30;
}
