/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b830f6069a92b4519e799d7d413887f5"
  },
  {
    "url": "assets/css/1.styles.1b55c5ad.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.6ae217f8.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.db07ea34.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.31c8c15b.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.f9aeb77d.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.3e9a27ed.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/8.styles.afcb5503.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.1f4c5924.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/distributed.289ee13f.png",
    "revision": "289ee13ff077319387caa5cb396c6cea"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.1b55c5ad.js",
    "revision": "569d2f95af30463b0bf99b83c91e1f32"
  },
  {
    "url": "assets/js/10.9304edc1.js",
    "revision": "20d83017b83eeaa5c0d69449ca863eb7"
  },
  {
    "url": "assets/js/11.b0efbd24.js",
    "revision": "3241a39761c4a3bd19c130f5d590661e"
  },
  {
    "url": "assets/js/12.1fa48df1.js",
    "revision": "c35e30f8c86b549899d89e9c69940b16"
  },
  {
    "url": "assets/js/13.51516163.js",
    "revision": "49d226e62a10af6632bde59ceedd3e8c"
  },
  {
    "url": "assets/js/14.aeaa44b8.js",
    "revision": "faa069d1432f8f1dcee47664c8733870"
  },
  {
    "url": "assets/js/15.1d9818ba.js",
    "revision": "0a7582030f6313b5d49bd40d9c27054e"
  },
  {
    "url": "assets/js/16.da514935.js",
    "revision": "b91225df667375494d685242c68ebdbb"
  },
  {
    "url": "assets/js/17.06082f62.js",
    "revision": "325209b90a8c52eeb1f3ca67167c09a2"
  },
  {
    "url": "assets/js/18.c866dcec.js",
    "revision": "ff5d5f76554510f2ba1dd49fd929b5a4"
  },
  {
    "url": "assets/js/19.de5cd823.js",
    "revision": "644276905afdeb222a572b3a4a0acb31"
  },
  {
    "url": "assets/js/2.6ae217f8.js",
    "revision": "0d257f4f162f9f7a857c296c2b2f3c4e"
  },
  {
    "url": "assets/js/20.3c4443b5.js",
    "revision": "a4bb588f72184e1fa817eb00f294e738"
  },
  {
    "url": "assets/js/21.d5d505c6.js",
    "revision": "d890769a64cede2e48649bdc9dc36bab"
  },
  {
    "url": "assets/js/22.53b1a555.js",
    "revision": "dad920dd22e8043e3059f30bea1c5f52"
  },
  {
    "url": "assets/js/23.7b54e6c1.js",
    "revision": "fb0b49df9caab3eeb6517a92bdda82f5"
  },
  {
    "url": "assets/js/24.8feb0c3d.js",
    "revision": "826a01f9befb006bb8536c813a400664"
  },
  {
    "url": "assets/js/25.5f56e9ea.js",
    "revision": "9e37daa4b04c89c5c15ebce42b3da394"
  },
  {
    "url": "assets/js/26.ea382e14.js",
    "revision": "5b885036db42cfb8a548b8c6df10e833"
  },
  {
    "url": "assets/js/27.3b06dbd7.js",
    "revision": "768030735334bf6d5849725f9bb90eee"
  },
  {
    "url": "assets/js/28.967007b9.js",
    "revision": "a80d946baa74bb199d9acd2b601d0bc2"
  },
  {
    "url": "assets/js/29.f277e772.js",
    "revision": "dc79ae487d924d622cb4e193c0365ec3"
  },
  {
    "url": "assets/js/3.db07ea34.js",
    "revision": "0420d9d306f81ae887e856cb746d6268"
  },
  {
    "url": "assets/js/30.462708e5.js",
    "revision": "257ebe8d6e18129f0fcfba4e8263c1e4"
  },
  {
    "url": "assets/js/31.1129c83c.js",
    "revision": "f0ae39f208b73ae2a6e793cdfce814f6"
  },
  {
    "url": "assets/js/32.a29e19ec.js",
    "revision": "20f9213f7c39224b952d213c6638f463"
  },
  {
    "url": "assets/js/33.eb91e429.js",
    "revision": "f421715fdc6dd710e106c0e9c5ee7ea9"
  },
  {
    "url": "assets/js/34.65d00873.js",
    "revision": "c03bcbd10a033ab6a6a8f413da61060b"
  },
  {
    "url": "assets/js/35.0dc5071f.js",
    "revision": "22f66dac72f2d0e35641d2b69212a7b8"
  },
  {
    "url": "assets/js/36.93d6f926.js",
    "revision": "464479f9e75243392dc6f4ea2ea837bf"
  },
  {
    "url": "assets/js/37.1802bdef.js",
    "revision": "6aa6f5d52ce28271f4b59d6f370da259"
  },
  {
    "url": "assets/js/38.7468cdfe.js",
    "revision": "eda4b75cc211ec26ebdcec0217708317"
  },
  {
    "url": "assets/js/39.bb9d5748.js",
    "revision": "7c556cc4870cb2b68f4fa10a1918c739"
  },
  {
    "url": "assets/js/4.31c8c15b.js",
    "revision": "8a658edb21d6063e3dbd0f1da2728fdc"
  },
  {
    "url": "assets/js/40.bb099b92.js",
    "revision": "34fda7b6817e5cf56e7db890cca28d53"
  },
  {
    "url": "assets/js/41.331f9c76.js",
    "revision": "e6a8bd9ea7d9f5831224bdb76aa8caae"
  },
  {
    "url": "assets/js/42.197e95ec.js",
    "revision": "9e848d8d8e64642a664e86cfa0ad9e2b"
  },
  {
    "url": "assets/js/43.71a3c312.js",
    "revision": "3a2a9b47d90e41ab04a6b27a263bb5cb"
  },
  {
    "url": "assets/js/44.3e9961c3.js",
    "revision": "2741d06bda626199c161daf37f05455b"
  },
  {
    "url": "assets/js/45.a8aa53b9.js",
    "revision": "5d3993406d2104ddd7013e56858b6e74"
  },
  {
    "url": "assets/js/46.c8fd4d8a.js",
    "revision": "943466eb64b252bef4c11faece5fa7a3"
  },
  {
    "url": "assets/js/47.70faf439.js",
    "revision": "3a2dbd012b9855a548b883e13dcb4082"
  },
  {
    "url": "assets/js/48.633ac83f.js",
    "revision": "4034f6d093ab536a83c71affea6a8dd3"
  },
  {
    "url": "assets/js/49.21a25ca3.js",
    "revision": "4b1b013b84903ac0163db2ad3cb7c30c"
  },
  {
    "url": "assets/js/5.f9aeb77d.js",
    "revision": "96965ca6306d59fa1fee936aec1db332"
  },
  {
    "url": "assets/js/50.bbb6d74d.js",
    "revision": "0b62dd41578d4d12e9f757819c2fcc7c"
  },
  {
    "url": "assets/js/51.e3efbd97.js",
    "revision": "efda41667b9d8137605bddd1c07d7463"
  },
  {
    "url": "assets/js/52.99e8f6f4.js",
    "revision": "d04f99da91486b7a4b04d973a1df622c"
  },
  {
    "url": "assets/js/53.03879ad7.js",
    "revision": "54237fe590725afb0ae5f399ddc6fa77"
  },
  {
    "url": "assets/js/54.fd5a8147.js",
    "revision": "600bbb353c670383c4328800df7fcd9b"
  },
  {
    "url": "assets/js/55.437e13fd.js",
    "revision": "948c295a46d085a2ea57ccef6917aa1b"
  },
  {
    "url": "assets/js/56.3c3a3b94.js",
    "revision": "7b04f44ab1652b96e59f2fb5eb72161d"
  },
  {
    "url": "assets/js/57.5ae10c16.js",
    "revision": "4fd7120169a448cd763fa2107ed4ec49"
  },
  {
    "url": "assets/js/58.493754ef.js",
    "revision": "49d3c7a3203cc2bc6b3fe829ac9cf98b"
  },
  {
    "url": "assets/js/59.48225cac.js",
    "revision": "83331d1cca3730f197d1afab09081ce7"
  },
  {
    "url": "assets/js/6.3e9a27ed.js",
    "revision": "7c8225a0dd1559d255ee9cd107ce2f39"
  },
  {
    "url": "assets/js/60.b67e5a6e.js",
    "revision": "6afb646690b38313ce13eff1a8f851ad"
  },
  {
    "url": "assets/js/61.613f6bb5.js",
    "revision": "6a897712eb09a7ded65e7debd081ad0f"
  },
  {
    "url": "assets/js/62.4944cc1c.js",
    "revision": "87ef005a42b419cb08ce0a561198db7c"
  },
  {
    "url": "assets/js/63.b2e3483b.js",
    "revision": "43c7ae9e5d3885c20a07909cf0eb840f"
  },
  {
    "url": "assets/js/64.2479a37f.js",
    "revision": "c52f1420760f751791dd62ba3b524fc2"
  },
  {
    "url": "assets/js/65.8ab5d068.js",
    "revision": "3ba85426a33a0643615423c75aa84d69"
  },
  {
    "url": "assets/js/66.cca7f0ef.js",
    "revision": "46c2a5c5db5c6ab688ceb99fa40f244f"
  },
  {
    "url": "assets/js/67.ccf93349.js",
    "revision": "aeeb3ed1a7ec6a1d4ca5ae05e20b4c16"
  },
  {
    "url": "assets/js/68.ca445f00.js",
    "revision": "8b581301c0431a1e85af41eae3a25c1d"
  },
  {
    "url": "assets/js/69.86961ac7.js",
    "revision": "4787952caeb18f4183780e41a413a126"
  },
  {
    "url": "assets/js/7.3da97dfb.js",
    "revision": "0e1cd046bfea61ce6da249e2c7f98ab8"
  },
  {
    "url": "assets/js/70.5f3ba047.js",
    "revision": "84b50afd2ca93bdf56a5f9a0331f0f65"
  },
  {
    "url": "assets/js/71.d9cb887c.js",
    "revision": "3dec1fb63df92bf5472239d0de1efb8b"
  },
  {
    "url": "assets/js/8.afcb5503.js",
    "revision": "ea1f272ec965483386398f00c805801c"
  },
  {
    "url": "assets/js/9.5201388d.js",
    "revision": "093f77f9d3f15d35d0c00ee6ab917abd"
  },
  {
    "url": "assets/js/app.1f4c5924.js",
    "revision": "9adbb84eff8765e1e702a2648be25bd5"
  },
  {
    "url": "brush.png",
    "revision": "a6745e16d0d69f02a93013d8bf4571d2"
  },
  {
    "url": "config/index.html",
    "revision": "672a0b659ecd68d05c0001ec04087093"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "863b59eb237267501df9db390a656742"
  },
  {
    "url": "distributed.png",
    "revision": "289ee13ff077319387caa5cb396c6cea"
  },
  {
    "url": "guide/assets.html",
    "revision": "1e59c3d89ad7eb561ebbee8f2e791d9f"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "57470baef73ea22adfdd3305a3d6fc35"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "aab0145cb73ab102d7bb935cf972a24f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "cc6bf03cc6b13fcf05ed95827e39d20e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "586f9bcef81c8864d521dba6e0bdb2a1"
  },
  {
    "url": "guide/i18n.html",
    "revision": "fcdb21bae5e904d6a461a4ad63550499"
  },
  {
    "url": "guide/index.html",
    "revision": "14d15927557eea20ec584a39dd29b345"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ed69ce902bac62f5b3fa213c01962a32"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "2ec8ab3949632d76d161dbe73ed78a2b"
  },
  {
    "url": "head-logo.png",
    "revision": "b247392ecd7fd7ca11625dd4ca229b07"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "0dc458f94efaf1606b555080c3e1f586"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "837aada3ff5c482fbc9ed693ab569da2"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "4515e42eb8dfdb5a87436e65dd8bc050"
  },
  {
    "url": "zh/git/git博客.html",
    "revision": "6cbc897b701a667b7113cfce1debe687"
  },
  {
    "url": "zh/git/index.html",
    "revision": "16e6749cc4b9f58cd2a477104d1b96ef"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "fcffb2ff108815de9c4b91d66a046c1e"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "12c995c1a1436944c895b0bf49d9ec9f"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "aa2c60d1155c9eef632da507d6c2ec63"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "b12574d3c29448dad0aaa96c1010a06b"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "e381b40777ac876055216b2e6c1d6da5"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "4cc643150edf0af2aa9f39548bef133d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "060812aa0a324f0dc7109d7397270b0d"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "14ca0801a6ffb73494914d260855bff2"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "952155e08b8ce61a5b555cc56d7aa1f3"
  },
  {
    "url": "zh/heishi/BlackMarket.html",
    "revision": "4bef23759ca69979152cc32dc6ad8186"
  },
  {
    "url": "zh/index.html",
    "revision": "b9a7f85b25c3d5ede9bc7e491b6fd838"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "83752a6680daaaaeb54426c8e1b37a4f"
  },
  {
    "url": "zh/interview/headline.html",
    "revision": "3f2f4a80848f20e90dbdc324c0edb778"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "f8c0a855052e0200bf93dd1c8ef05a7a"
  },
  {
    "url": "zh/interview/quick.html",
    "revision": "58321d20ded544ed7bc3f41e294acffc"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "41d1b0f2280951d9ebd6cee485f28af5"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "a8b0bb46b4133b6c82bcfa4589d90c91"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "825199a2cf91be1a464540445a1d1860"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "f01d91764fe523bc332ea1df3005935a"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "38525fe2d13c04e8c1bd85f804c55313"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "1f9e746f23392c7e831e7b7cd3a3c438"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "1ff9474689eb9bf4ff981fd511375377"
  },
  {
    "url": "zh/react/index.html",
    "revision": "c546d45c4bc0aee66705817e7bec0eb9"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "2d70f5c8a5fd5797d940280f9d9fb1d9"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "7d02ed80701bb00574ea4cd75f1ff2ca"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "e13bf1327f4451a53be735a5216dcc14"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "8527ad37184173d29b4eaf74f70db4ef"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "7d9a69faaa3e635ad63a2e791723a9ae"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "562284db3da9081afb5be11cc727365f"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "0971bd0e1b5a8f71882d8895ee71b17d"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "9364501bfc36d44ead27bf7889a860ea"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "382ea7b2f98f1a11404e141262531789"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "5e5a5c9dc6400e35eee398e6beaef00e"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "5fde8a0633a51c83ddda12c663333491"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "0cac862c022b6ff9d4fe5dedc250ec70"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "24de14a7e8096aa89b0484a8cad260c6"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "fc41b50eaac1cfff83ea7a9c9cef3872"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "7380b4a6d47d0ad5dc1cf78150e62660"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "cb34a18ef1b7f9427ee0790e706ac5e2"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "a97bdbec89e38d0cea33587b6506fb73"
  },
  {
    "url": "zh/vue/MVVM.html",
    "revision": "21c38ffd0615e735c719cb3e2cbf4b48"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "0f083023e7d63517243293725a602c3d"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "e107b8066b9eff3f690eb8e1a7d4ea44"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "7ed47887e9abbe27b994624aae855a5f"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "b26522fa9f4f3d2858582dafa1a268fb"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "0b071216a9e234ff9e2f70c833dd4d63"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "710caea4fe1373994382e246d25131fc"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "c4c5c3d6981022fd4c30e33a2633de04"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "cc8a41ef1d0d07e9b232b9848a2b3a21"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
