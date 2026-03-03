import { createElement } from 'react'

/**
 * Lazy-loads @react-pdf/renderer and CvDocument only when the user clicks
 * the download button — keeps the initial JS bundle lean.
 */
export async function downloadCv() {
  const [{ pdf }, { default: CvDocument }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('./CvDocument.jsx'),
  ])

  const blob = await pdf(createElement(CvDocument)).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Grant_Verheul_CV.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
