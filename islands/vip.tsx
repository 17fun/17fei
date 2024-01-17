import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

import { IS_BROWSER } from "$fresh/runtime.ts";

interface Props {
  children: ComponentChildren;
}

export default function VipIsland({ children }: Props) {
   useEffect(()=>{

    if(IS_BROWSER){
      localStorage.setItem('lockVip', JSON.stringify({"type":"boolean","data":true}));
      localStorage.setItem('vip', true);
      location.href = '/'
    }
      return ()=>{}
   },[])

  return (
    <div>
       ...
    </div>
  );
}