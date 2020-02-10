'use strict';

module.exports.topTen = async event => {
  const neighborhood = event.queryStringParameters && event.queryStringParameters.areaID 
                       ? event.queryStringParameters.areaID : null;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `This should be a list of the "top" 10 runners for the neighborhood${neighborhood ? ": " + neighborhood : ""}`,
        input: event,
      },
      null,
      2
    ),
  };
};
