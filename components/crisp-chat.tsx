"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0523e5b6-28a9-4c70-9cc3-ef3dd208cb49");
  }, []);

  return null;
};
