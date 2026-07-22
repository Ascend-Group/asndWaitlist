/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Apps Script /exec URL that receives waitlist submissions. */
  readonly VITE_WAITLIST_ENDPOINT?: string
  /** Shared token echoed back to the Apps Script to deter casual abuse. Not a secret. */
  readonly VITE_WAITLIST_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
