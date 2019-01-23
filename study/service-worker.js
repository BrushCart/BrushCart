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
    "revision": "7f757fa9563167e3fa863093a45de4ae"
  },
  {
    "url": "assets/css/1.styles.7aebf583.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.6ae217f8.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.6ae40793.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.d63f60cc.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.2e05596e.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.0d324a9c.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/8.styles.afcb5503.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.4b2c75fd.css",
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
    "url": "assets/js/1.7aebf583.js",
    "revision": "db276672b39ae672bd94f608ffa01583"
  },
  {
    "url": "assets/js/10.7bf0021e.js",
    "revision": "686ba6de2d7be0fbd5916687a82413a5"
  },
  {
    "url": "assets/js/11.b0efbd24.js",
    "revision": "3241a39761c4a3bd19c130f5d590661e"
  },
  {
    "url": "assets/js/12.26d00ffd.js",
    "revision": "781c617f65f7da8a4d5019f416733950"
  },
  {
    "url": "assets/js/13.57f534da.js",
    "revision": "27de0c62bb086152417d5c937385875f"
  },
  {
    "url": "assets/js/14.56825e5e.js",
    "revision": "f6e2cd6bc77e867fe87f2541d85b17e7"
  },
  {
    "url": "assets/js/15.a6f3dd8f.js",
    "revision": "d61d7a7247d740389a3356b55faac772"
  },
  {
    "url": "assets/js/16.0eedb8d2.js",
    "revision": "a3bd5e50d3543a2a4ef7b02bdefcb14f"
  },
  {
    "url": "assets/js/17.6285a5e7.js",
    "revision": "9f47aad4ec38ee9c664b1ac637aba4ea"
  },
  {
    "url": "assets/js/18.c858342e.js",
    "revision": "3474b2c06617620ae317e6dc3c8d7953"
  },
  {
    "url": "assets/js/19.f2d57494.js",
    "revision": "4b02725d317fd584d620ab27bdfa7f82"
  },
  {
    "url": "assets/js/2.6ae217f8.js",
    "revision": "0d257f4f162f9f7a857c296c2b2f3c4e"
  },
  {
    "url": "assets/js/20.ef443d4f.js",
    "revision": "7f90bdb4e1bafeec8658e60e4941dc37"
  },
  {
    "url": "assets/js/21.8d2c9506.js",
    "revision": "c0a282157bbbf2c4236c73162c6a3ea4"
  },
  {
    "url": "assets/js/22.358db771.js",
    "revision": "fe3b4ba97bb67b61cc999f55463c44d4"
  },
  {
    "url": "assets/js/23.a08f9dfa.js",
    "revision": "10084d6a5de1b29a3793875cb073bba3"
  },
  {
    "url": "assets/js/24.f0c9e6f5.js",
    "revision": "f569db721221ddf69b7bc47504ebb285"
  },
  {
    "url": "assets/js/25.d4a69909.js",
    "revision": "38b93649eb416d070438562242e9d82f"
  },
  {
    "url": "assets/js/26.01890d7e.js",
    "revision": "e722d238f44a2e07f688ed02c31db296"
  },
  {
    "url": "assets/js/27.c623a630.js",
    "revision": "5687493191689c1c57f19d001c97bd65"
  },
  {
    "url": "assets/js/28.a06a232a.js",
    "revision": "e731307e9f536a20c2f3560de69a42bf"
  },
  {
    "url": "assets/js/29.b64f0190.js",
    "revision": "78397023df23e9e437a63fe9e7e09ae5"
  },
  {
    "url": "assets/js/3.6ae40793.js",
    "revision": "26101b314843efaeb6e0ec2ff3d2f64d"
  },
  {
    "url": "assets/js/30.58ea3bbc.js",
    "revision": "3938ecfa6545fbceaefa1ad0d0ad126c"
  },
  {
    "url": "assets/js/31.83a04ab7.js",
    "revision": "f130389ac41a5e9f8337caa914b8182c"
  },
  {
    "url": "assets/js/32.36869e4a.js",
    "revision": "214c612646c04dc0ee842f8833ca1dc2"
  },
  {
    "url": "assets/js/33.05a5fe47.js",
    "revision": "db2ac6c7de680a78a753e5ff63262dad"
  },
  {
    "url": "assets/js/34.2f66215b.js",
    "revision": "3cae583f0f09d484acf99c79bb77ec42"
  },
  {
    "url": "assets/js/35.de98cb10.js",
    "revision": "a56f47cedf6b2c5aa3e3bbb475c11438"
  },
  {
    "url": "assets/js/36.038bd0d2.js",
    "revision": "cfe4020afe3c7e515284a2fd1cd82054"
  },
  {
    "url": "assets/js/37.cfa621e9.js",
    "revision": "1a9eee4fe7b4eb02e927efcff68b67f4"
  },
  {
    "url": "assets/js/38.89c0b301.js",
    "revision": "a09c894e53ea78c29b392b6cfed629a2"
  },
  {
    "url": "assets/js/39.0b1016a1.js",
    "revision": "de48c86baecdd60ce4819f90bdadcec0"
  },
  {
    "url": "assets/js/4.d63f60cc.js",
    "revision": "ef02c73bb6944875096aec7a9f4a375a"
  },
  {
    "url": "assets/js/40.beaf9b4f.js",
    "revision": "2c1ee9c377dd57e1a718a0fa493be31f"
  },
  {
    "url": "assets/js/41.26947f15.js",
    "revision": "26581f1b9e593af3a9f46e80de492939"
  },
  {
    "url": "assets/js/42.7b839bd4.js",
    "revision": "06e6f3dcfcf6e9a2e91f7f1d26407c4d"
  },
  {
    "url": "assets/js/43.f9fb8eda.js",
    "revision": "9ac795c9ea91b7038b0e53833ab52b50"
  },
  {
    "url": "assets/js/44.88b64a31.js",
    "revision": "5ac39779124c6fc9578c06e7cd5c3ea2"
  },
  {
    "url": "assets/js/45.2eb2450d.js",
    "revision": "77602b06fa2cbc781f8bff55869475ca"
  },
  {
    "url": "assets/js/46.332eed8c.js",
    "revision": "aa904d503c8fcab84a1544a1db094cd2"
  },
  {
    "url": "assets/js/47.542c6548.js",
    "revision": "8f705546478bf0d05675f499f60bb218"
  },
  {
    "url": "assets/js/48.95b457b5.js",
    "revision": "d1c3213d945e91ae7896116ae407907d"
  },
  {
    "url": "assets/js/49.73c25ca9.js",
    "revision": "d46aeee3f6ef952382937c756c2cd13a"
  },
  {
    "url": "assets/js/5.2e05596e.js",
    "revision": "17822a993c36f609e73330233ffa1601"
  },
  {
    "url": "assets/js/50.ebf7acc3.js",
    "revision": "e6cc73afc304bf19e20586d1def329f0"
  },
  {
    "url": "assets/js/51.8f1da3df.js",
    "revision": "22f9b318ba3941b77c54215f9d72323a"
  },
  {
    "url": "assets/js/52.0d2acebc.js",
    "revision": "a171973b687218a02e3f3efa11dc22ff"
  },
  {
    "url": "assets/js/53.5461e8d0.js",
    "revision": "ad51ccf8d133b9ca1a1c0dd85e7d9ff7"
  },
  {
    "url": "assets/js/54.e79f0a75.js",
    "revision": "a8f509a44bb43f32ef5642ab46c556e8"
  },
  {
    "url": "assets/js/55.903b8319.js",
    "revision": "471a0d866f31e6ef29b9697207e41f1d"
  },
  {
    "url": "assets/js/56.d2b50b5a.js",
    "revision": "db31855011798237b38f92da7e41651c"
  },
  {
    "url": "assets/js/57.7c75c25a.js",
    "revision": "e57cd563492cfb9502541f71a3dddbc8"
  },
  {
    "url": "assets/js/58.88dfc2c6.js",
    "revision": "d00f74cc8809210f7b009345ed58f5f2"
  },
  {
    "url": "assets/js/59.986cd43e.js",
    "revision": "efef5af366c41afa853cc7c9463c7509"
  },
  {
    "url": "assets/js/6.0d324a9c.js",
    "revision": "3884d19c2252f0b1b9f3f7785b82bf80"
  },
  {
    "url": "assets/js/60.2fdd42a4.js",
    "revision": "db37ccb6aa53116f8e80390aef228336"
  },
  {
    "url": "assets/js/61.c4da2d75.js",
    "revision": "cf142c8778315eebf7eda255807e0b72"
  },
  {
    "url": "assets/js/62.3025b6a3.js",
    "revision": "7b8149c0048a7285c9381f66a65bd74a"
  },
  {
    "url": "assets/js/63.facb9cd5.js",
    "revision": "a956626bf8740a9477045d96ad61d9dc"
  },
  {
    "url": "assets/js/64.39c222ab.js",
    "revision": "626913fdb477d39491a6eb4dc4500426"
  },
  {
    "url": "assets/js/65.a9cb4de6.js",
    "revision": "4882c3a8946d67dd413f6af20924aa4d"
  },
  {
    "url": "assets/js/66.b4707999.js",
    "revision": "24082fce715c137910b8ed5d27f89d24"
  },
  {
    "url": "assets/js/67.76bf2b8b.js",
    "revision": "ac918fd8edbc29fe2fa8e9fac1ef2d1c"
  },
  {
    "url": "assets/js/68.69bc6ea4.js",
    "revision": "db204788683cf7ad120a57d0ef6cf129"
  },
  {
    "url": "assets/js/69.4057b1df.js",
    "revision": "782e8c4ba36fe5ad2dd523626bfdef1e"
  },
  {
    "url": "assets/js/7.b360be70.js",
    "revision": "831f3009e79ea35395bb3b7c35087ee9"
  },
  {
    "url": "assets/js/70.e6419e4f.js",
    "revision": "9d5e77c08c4161c75111d6df4e5c1647"
  },
  {
    "url": "assets/js/8.afcb5503.js",
    "revision": "ea1f272ec965483386398f00c805801c"
  },
  {
    "url": "assets/js/9.58b90397.js",
    "revision": "b9c902513e2a4eff19186020b60b6a83"
  },
  {
    "url": "assets/js/app.4b2c75fd.js",
    "revision": "9a827815e571b1f61af8d28ab6ec002a"
  },
  {
    "url": "avatar.png",
    "revision": "a6745e16d0d69f02a93013d8bf4571d2"
  },
  {
    "url": "config/index.html",
    "revision": "9375b930e1631a1c4c39a89ca68f6e10"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "05a2fc86b2baba1c8c5c130b7d80060e"
  },
  {
    "url": "distributed.png",
    "revision": "289ee13ff077319387caa5cb396c6cea"
  },
  {
    "url": "guide/assets.html",
    "revision": "3188aba3252bb713491d4fba01cb03b1"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e2b8ed42bdcdcd5aa3649c3c09994452"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "f6cfe9017ea5cbf224d2cdac32d021d1"
  },
  {
    "url": "guide/deploy.html",
    "revision": "6a7f3df96542fcf8fa63a86ee9ec31cc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "82f17a152b39e5ddf39383025a2072f6"
  },
  {
    "url": "guide/i18n.html",
    "revision": "f176d95e6c8422a37a9c14e1ca771d86"
  },
  {
    "url": "guide/index.html",
    "revision": "c5280b83647c1a27d9487d2298c38c90"
  },
  {
    "url": "guide/markdown.html",
    "revision": "a1e25de37f328702157a82b345a5f719"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "424e9116fb9391a58451c6e81033a84b"
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
    "revision": "f4207dc8371c5ad4c70bc838da02e0b8"
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
    "revision": "42cf74b1660cb443996d492ec5624bcf"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "c388cbc63e2849a4e06d6e4ecb934ad1"
  },
  {
    "url": "zh/git/git博客.html",
    "revision": "29a8d86e6e3d69a716e70451d6504fae"
  },
  {
    "url": "zh/git/index.html",
    "revision": "abe979d4673668047c2e022b6bf11b72"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a0e73ca2b6b20407e7cfb24ef521e140"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "82e5108ea9e05187e5281e8fa779d12d"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "a071d278106ae262279dd0542c684cdc"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "3fa22a8b12eb6d52cf876280a7ce78f3"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "2856b31e1d8303b66fb0379b335b44f2"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "fdf32794450fa212682faceab0fd939a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ccfc39547d8546a92d79c9e99f8bde49"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "3643a6394d934c896beae9beaefdd134"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "92fcfb7709cfef72c1d3e2e3af1953bc"
  },
  {
    "url": "zh/index.html",
    "revision": "e17cf41eb7ca2b5ed0a773177b2b4845"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "4171040b7935abf742e4c9592c770341"
  },
  {
    "url": "zh/interview/headline.html",
    "revision": "849b982cd064417947fc385107000229"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "06c440f092800bbaf2e4e0343eddd703"
  },
  {
    "url": "zh/interview/quick.html",
    "revision": "ac345e4d75d46989ad92180ef8d02fa1"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "ec22148a14dbb7aa33781472bd988538"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "85f5ef59e8c4716bb9f53c27e8a04f91"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "da98eb0b7ddab286b2fbd025b507444c"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "5a190a5edb69a58876ab73875015bfdb"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "a3eec4733e08c74da246979d522b412b"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "9094ba97993b6ee4e6f2e3b0785a6c95"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "592e1ad4b61f116152852c2572618837"
  },
  {
    "url": "zh/react/index.html",
    "revision": "c986b5ad607dbde785f38b753aa08132"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "b87e7d5181a58b623f05b2b36f901661"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "1be5037f7c4e77062cbb9f026a2ac827"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "8f72de9e6509838805859c11a496853d"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "2887f734ec88610e52a23d2da8dc25a6"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "b86cded686776e9b5d0adcf2fd7a9bc9"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "1729b20215bd3b2e469cf4d421c1d1fc"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "ac21fe1a6c1b6830064e7ff048cec7fe"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "b327dec65d2eefe6e442006b8b8c8ae1"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "c4c12cc5b4278c7fd1bc6492a46be207"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "b4ccb9949f90fd977dda828f4e63f812"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "acc4f9230ecd44ddcb0d0dfe279df650"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "638592d709ccfdf698128d6c17601cb4"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "f6e8ebb03bcae662ecdbcfcfd898c32f"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "b16b75e3709ff5502c4112f16a141e6d"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "349f90e94b6e321423655484ddc2dc19"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "1beb13e661b320196ff4b75bc50e89cb"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "64d054cd55ebf6a3925c5d00be21adda"
  },
  {
    "url": "zh/vue/MVVM.html",
    "revision": "f0126128abd8067fcae8fb600cb685e8"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "e674c6120a47736c5dc2e33537ff3a31"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "17ae0d4f44498c53edf5bbcc8e87bede"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "3cea70a756e1057e14d91411eb27d99d"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "6e555f5d9c428d72e36c1986e1b0b600"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "88489fc95390592017f0200ec71a3a31"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "dbbf4e87cd10f44bf5322a4ab7282f2d"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "6c82a1884b9f5f5a11a82e5353a3e491"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "8352a1b1f03f6d6484344e0c763de0aa"
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
