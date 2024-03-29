import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import "reflect-metadata";


export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}
