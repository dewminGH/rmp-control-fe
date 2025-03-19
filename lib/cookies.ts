"use server";

import { cookies } from "next/headers";

export const setAccessToken = async (tokenAC: string) => {
  const SSC = await cookies();
  SSC.set("accessToken", tokenAC);
};
