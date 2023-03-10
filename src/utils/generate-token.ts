import { Response } from "express";
import { SuccessUserResponse } from "../types/auth";
export const saveToCookiesAndSendResponse = (
  res: Response,
  token: string,
  data: SuccessUserResponse,
  status: number
): void => {
  res
    .cookie("user_token", token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    })
    .status(status)
    .json(data);
};
