export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    try {
      body  = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
        console.log(e);
        body = { error: e.messsage };
        statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
};