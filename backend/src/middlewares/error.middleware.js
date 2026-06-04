

import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const errorMiddleware = (err, req, res, next) => {
  if (!(err instanceof ApiError)) {
    console.error(err);

    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }

  return res
    .status(err.statusCode)
    .json(new ApiResponse(err.statusCode, null, err.message));
};

export default errorMiddleware;
