"use client";

import { toast } from "react-hot-toast";

export default function MyToast({ error, message }) {
  if(error) toast.error(error)
  else toast(message)
  return <></>;
}
