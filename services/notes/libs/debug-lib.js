import util from "util";
import AWS from "aws-sdk";

let logs;

AWS.config.logger = { log: debug };

const debug = () => {
  logs.push({
    date: new Date(),
    string: util.format.apply(null, arguments),
  });
}

const init = (event, context) => {
  logs = [];
  debug("API Event", {
    body: event.body,
    pathParameters: event.pathParameters,
    queryStringParameters: event.queryStringParameters,
  });
}

const flush = (e) => {
  logs.forEach(({date, string}) => console.debug(date, string));
  console.error(e);
}

export default {
  debug,
  flush,
  init,
}

