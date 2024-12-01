'use client'
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );
  return createPortal(
    <div
      ref={overlay}
      className="fixed top-0 right-0 left-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-8/12 lg:left-1/2 p-6"
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}
