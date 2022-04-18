import Head from 'next/head'

export function SEO({ title, image, description }) {
  return (
    <Head>
        <link rel="shortcut icon" href="/YunHang.ico" async/>
      <title>{title}</title>
      <meta property="og:title" content={title}></meta>
      <meta property="og:image" content={image}></meta>
      <meta property="og:description" content={description}></meta>
    </Head>
  )
}
