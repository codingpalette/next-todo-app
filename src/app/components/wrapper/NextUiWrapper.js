'use client'

import {NextUIProvider} from '@nextui-org/react'

export function NextUiWrapper({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
