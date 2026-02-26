import { Head, Html, Main, NextScript } from 'next/document'

const isProduction = process.env.NODE_ENV === 'production'

export default function Document() {
  return (
    <Html>
      <Head>
        {/*{isProduction && (*/}
        {/*  <>*/}
        {/*    /!* <!-- Google tag manager --> *!/*/}
        {/*    /!* eslint-disable-next-line @next/next/next-script-for-ga *!/*/}
        {/*    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7V5GZ1D2LL" />*/}
        {/*    <script*/}
        {/*      dangerouslySetInnerHTML={{*/}
        {/*        __html: `window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-7V5GZ1D2LL');`*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </>*/}
        {/*)}*/}
      </Head>
      <body>
        <Main />
        <NextScript />
        {isProduction && (
          <>
            {/* <!-- Yandex.Metrika counter --> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(e,t,c,n,r,a,s){e[r]=e[r]||function(){(e[r].a=e[r].a||[]).push(arguments)},e[r].l=1*new Date;for(var i=0;i<document.scripts.length;i++)if(document.scripts[i].src===n)return;a=t.createElement(c),s=t.getElementsByTagName(c)[0],a.async=1,a.src=n,s.parentNode.insertBefore(a,s)}(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym"),ym(97106749,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});`
              }}
            />
            <noscript>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://mc.yandex.ru/watch/97106749"
                  style={{ position: 'absolute', left: '-9999px ' }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </body>
    </Html>
  )
}
