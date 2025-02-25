import { PingRequest, PingResponse } from './ping_pb';
import { PingServiceClient } from './ping_grpc_web_pb';

const client = new PingServiceClient('http://localhost:8000', null, null);

export const pingServer = (message) => {
  const request = new PingRequest();
  request.setMessage(message);

  return new Promise((resolve, reject) => {
    client.ping(request, {}, (err, response) => {
      if (err) {
        reject(err);
      return;
      }
      resolve(response.getMessage());
    });
  });
};