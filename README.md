# Push (EPNS) dApp Mono Repo

<div align="center">
<h1 align="center">
<br>
Push dApp Mono Repo
</h1>

</div>
---

## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [📂 Project Structure](#-project-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)

---




<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## 📂 Project Structure


```bash
repo
├── README.md
├── build.mjs
├── config-overrides.js
├── dump.rdb
├── jsconfig.json.old
├── ledger.manifest.json
├── license-v1
├── package.json
├── public
│   ├── 404.html
│   ├── CNAME
│   ├── DOWNTIME2.png
│   ├── Settings.svg
│   ├── _redirects
│   ├── android-chrome-192x192.png
│   ├── android-chrome-256x256.png
│   ├── apple-touch-icon.png
│   ├── bell.png
│   ├── bell@2x.png
│   ├── bell@3x.png
│   ├── bellball.png
│   ├── bellball@2x.png
│   ├── bellball@3x.png
│   ├── browserconfig.xml
│   ├── copy.svg
│   ├── date.png
│   ├── epns-dapp-loader.gif
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── firebase-messaging-sw.js
│   ├── i.png
│   ├── icon.jpg
│   ├── image-not-available.jpeg
│   ├── index-alpha.html
│   ├── index-dev.html
│   ├── index-prod.html
│   ├── index-staging.html
│   ├── index-w2w.html
│   ├── index.html
│   ├── latest.svg
│   ├── loading.gif
│   ├── loading.png
│   ├── loading2.gif
│   ├── logo192.png
│   ├── logo260.png
│   ├── logo512.png
│   ├── logout.svg
│   ├── mstile-150x150.png
│   ├── people.svg
│   ├── previews
│   │   ├── homepage-alpha.jpg
│   │   ├── homepage-dev.jpg
│   │   ├── homepage-staging.jpg
│   │   ├── homepage-w2w.jpg
│   │   ├── homepage.jpg
│   │   ├── homepagetwitter-alpha.jpg
│   │   ├── homepagetwitter-dev.jpg
│   │   ├── homepagetwitter-staging.jpg
│   │   ├── homepagetwitter-w2w.jpg
│   │   └── homepagetwitter.jpg
│   ├── prod.svg
│   ├── push.svg
│   ├── pushDark.svg
│   ├── ring.png
│   ├── ring@2x.png
│   ├── ring@3x.png
│   ├── robots-alpha.txt
│   ├── robots-dev.txt
│   ├── robots-prod.txt
│   ├── robots-staging.txt
│   ├── robots-w2w.txt
│   ├── robots.txt
│   ├── safari-pinned-tab.svg
│   ├── searchicon.svg
│   ├── site.webmanifest
│   ├── sitemap-alpha.txt
│   ├── sitemap-dev.txt
│   ├── sitemap-prod.txt
│   ├── sitemap-staging.txt
│   ├── sitemap-w2w.txt
│   ├── sitemap.txt
│   ├── subcount.svg
│   ├── svg
│   │   ├── AppStore.svg
│   │   ├── BNB.svg
│   │   ├── Ethereum.svg
│   │   ├── ExpiredTimer.svg
│   │   ├── ExpiresTimer.svg
│   │   ├── GooglePlay.svg
│   │   ├── Optimism.svg
│   │   ├── Polygon.svg
│   │   ├── PolygonZkEVM.svg
│   │   ├── SVG
│   │   │   └── govern_1.svg
│   │   ├── airdrop-icon.svg
│   │   ├── arrow.svg
│   │   ├── bell.svg
│   │   ├── bellball.svg
│   │   ├── channel.svg
│   │   ├── channeladmin.svg
│   │   ├── chats
│   │   │   ├── accept.svg
│   │   │   ├── arrowbendup.svg
│   │   │   ├── attachment.svg
│   │   │   ├── block.svg
│   │   │   ├── cancel.svg
│   │   │   ├── gif.svg
│   │   │   ├── nickname.svg
│   │   │   ├── search.svg
│   │   │   ├── send.svg
│   │   │   ├── send_dark.svg
│   │   │   ├── smiley.svg
│   │   │   └── user.svg
│   │   ├── communicate.svg
│   │   ├── create-channel-icon.svg
│   │   ├── darkbg.svg
│   │   ├── delegate.svg
│   │   ├── developer.svg
│   │   ├── epnsline.svg
│   │   ├── epnslogo.svg
│   │   ├── faucet.svg
│   │   ├── feedbox.svg
│   │   ├── filterIcon.svg
│   │   ├── filterw.png
│   │   ├── gasPump.svg
│   │   ├── govern.svg
│   │   ├── governalt.svg
│   │   ├── gratitude.svg
│   │   ├── incentive.svg
│   │   ├── info.svg
│   │   ├── lightbg.svg
│   │   ├── network.svg
│   │   ├── news.svg
│   │   ├── qna.svg
│   │   ├── ringer.svg
│   │   ├── rockstars-icon.svg
│   │   ├── rockstars.svg
│   │   ├── settings.svg
│   │   ├── share.svg
│   │   ├── spam.svg
│   │   ├── support.svg
│   │   ├── tutorial.svg
│   │   ├── users.svg
│   │   ├── view-tutorial-icon.svg
│   │   ├── walkthrough.svg
│   │   └── yield.svg
│   ├── swatch.png
│   ├── tuts
│   │   ├── aave
│   │   │   ├── aave_dark.png
│   │   │   ├── aave_dark@2x.png
│   │   │   ├── aave_dark@3x.png
│   │   │   ├── aave_light.png
│   │   │   ├── aave_light@2x.png
│   │   │   └── aave_light@3x.png
│   │   ├── aragon
│   │   │   ├── aragon_dark.png
│   │   │   ├── aragon_dark@2x.png
│   │   │   ├── aragon_dark@3x.png
│   │   │   ├── aragon_light.png
│   │   │   ├── aragon_light@2x.png
│   │   │   └── aragon_light@3x.png
│   │   ├── armor
│   │   │   ├── armor_dark.png
│   │   │   ├── armor_dark@2x.png
│   │   │   ├── armor_dark@3x.png
│   │   │   ├── armor_light.png
│   │   │   ├── armor_light@2x.png
│   │   │   └── armor_light@3x.png
│   │   ├── bancor
│   │   │   ├── bancor_dark.png
│   │   │   ├── bancor_dark@2x.png
│   │   │   ├── bancor_dark@3x.png
│   │   │   ├── bancor_light.png
│   │   │   ├── bancor_light@2x.png
│   │   │   └── bancor_light@3x.png
│   │   ├── banklessfr
│   │   │   ├── banklessfr_dark.png
│   │   │   ├── banklessfr_dark@2x.png
│   │   │   ├── banklessfr_dark@3x.png
│   │   │   ├── banklessfr_light.png
│   │   │   ├── banklessfr_light@2x.png
│   │   │   └── banklessfr_light@3x.png
│   │   ├── btctracker
│   │   │   ├── btctracker_dark.png
│   │   │   ├── btctracker_dark@2x.png
│   │   │   ├── btctracker_dark@3x.png
│   │   │   ├── btctracker_light.png
│   │   │   ├── btctracker_light@2x.png
│   │   │   └── btctracker_light@3x.png
│   │   ├── coindesk
│   │   │   ├── coindesk_dark.png
│   │   │   ├── coindesk_dark@2x.png
│   │   │   ├── coindesk_dark@3x.png
│   │   │   ├── coindesk_light.png
│   │   │   ├── coindesk_light@2x.png
│   │   │   └── coindesk_light@3x.png
│   │   ├── cvi
│   │   │   ├── cvi_dark.png
│   │   │   ├── cvi_dark@2x.png
│   │   │   ├── cvi_dark@3x.png
│   │   │   ├── cvi_light.png
│   │   │   ├── cvi_light@2x.png
│   │   │   └── cvi_light@3x.png
│   │   ├── dydx
│   │   │   ├── dydx_dark.png
│   │   │   ├── dydx_dark@2x.png
│   │   │   ├── dydx_dark@3x.png
│   │   │   ├── dydx_light.png
│   │   │   ├── dydx_light@2x.png
│   │   │   └── dydx_light@3x.png
│   │   ├── ens
│   │   │   ├── ens_dark.png
│   │   │   ├── ens_dark@2x.png
│   │   │   ├── ens_dark@3x.png
│   │   │   ├── ens_light.png
│   │   │   ├── ens_light@2x.png
│   │   │   └── ens_light@3x.png
│   │   ├── ethpricetracker
│   │   │   ├── ethpricetracker_dark.png
│   │   │   ├── ethpricetracker_dark@2x.png
│   │   │   ├── ethpricetracker_dark@3x.png
│   │   │   ├── ethpricetracker_light.png
│   │   │   ├── ethpricetracker_light@2x.png
│   │   │   └── ethpricetracker_light@3x.png
│   │   ├── ethtracker
│   │   │   ├── ethtracker_dark.png
│   │   │   ├── ethtracker_dark@2x.png
│   │   │   ├── ethtracker_dark@3x.png
│   │   │   ├── ethtracker_light.png
│   │   │   ├── ethtracker_light@2x.png
│   │   │   └── ethtracker_light@3x.png
│   │   ├── fabwelt
│   │   │   ├── fabwelt_dark.png
│   │   │   ├── fabwelt_dark@2x.png
│   │   │   ├── fabwelt_dark@3x.png
│   │   │   ├── fabwelt_light.png
│   │   │   ├── fabwelt_light@2x.png
│   │   │   └── fabwelt_light@3x.png
│   │   ├── gro
│   │   │   ├── gro_dark.png
│   │   │   ├── gro_dark@2x.png
│   │   │   ├── gro_dark@3x.png
│   │   │   ├── gro_light.png
│   │   │   ├── gro_light@2x.png
│   │   │   └── gro_light@3x.png
│   │   ├── idle
│   │   │   ├── idle_dark.png
│   │   │   ├── idle_dark@2x.png
│   │   │   ├── idle_dark@3x.png
│   │   │   ├── idle_light.png
│   │   │   ├── idle_light@2x.png
│   │   │   └── idle_light@3x.png
│   │   ├── kyber
│   │   │   ├── kyber_dark.png
│   │   │   ├── kyber_dark@2x.png
│   │   │   ├── kyber_dark@3x.png
│   │   │   ├── kyber_light.png
│   │   │   ├── kyber_light@2x.png
│   │   │   └── kyber_light@3x.png
│   │   ├── makerdao
│   │   │   ├── makerdao_dark.png
│   │   │   ├── makerdao_dark@2x.png
│   │   │   ├── makerdao_dark@3x.png
│   │   │   ├── makerdao_light.png
│   │   │   ├── makerdao_light@2x.png
│   │   │   └── makerdao_light@3x.png
│   │   ├── mover
│   │   │   ├── mover_dark.png
│   │   │   ├── mover_dark@2x.png
│   │   │   ├── mover_dark@3x.png
│   │   │   ├── mover_light.png
│   │   │   ├── mover_light@2x.png
│   │   │   └── mover_light@3x.png
│   │   ├── notifs_style_guide.psd
│   │   ├── oasisapp
│   │   │   ├── oasisapp_dark.png
│   │   │   ├── oasisapp_dark@2x.png
│   │   │   ├── oasisapp_dark@3x.png
│   │   │   ├── oasisapp_light.png
│   │   │   ├── oasisapp_light@2x.png
│   │   │   └── oasisapp_light@3x.png
│   │   ├── ooki
│   │   │   ├── ooki_dark.png
│   │   │   ├── ooki_dark@2x.png
│   │   │   ├── ooki_dark@3x.png
│   │   │   ├── ooki_light.png
│   │   │   ├── ooki_light@2x.png
│   │   │   └── ooki_light@3x.png
│   │   ├── pods
│   │   │   ├── pods_dark.png
│   │   │   ├── pods_dark@2x.png
│   │   │   ├── pods_dark@3x.png
│   │   │   ├── pods_light.png
│   │   │   ├── pods_light@2x.png
│   │   │   └── pods_light@3x.png
│   │   ├── poh
│   │   │   ├── poh_dark.png
│   │   │   ├── poh_dark@2x.png
│   │   │   ├── poh_dark@3x.png
│   │   │   ├── poh_light.png
│   │   │   ├── poh_light@2x.png
│   │   │   └── poh_light@3x.png
│   │   ├── pushgov
│   │   │   ├── pushgov_dark.png
│   │   │   ├── pushgov_dark@2x.png
│   │   │   ├── pushgov_dark@3x.png
│   │   │   ├── pushgov_light.png
│   │   │   ├── pushgov_light@2x.png
│   │   │   └── pushgov_light@3x.png
│   │   ├── snapshot
│   │   │   ├── snapshot_dark.png
│   │   │   ├── snapshot_dark@2x.png
│   │   │   ├── snapshot_dark@3x.png
│   │   │   ├── snapshot_light.png
│   │   │   ├── snapshot_light@2x.png
│   │   │   └── snapshot_light@3x.png
│   │   ├── symphony
│   │   │   ├── symphony_dark.png
│   │   │   ├── symphony_dark@2x.png
│   │   │   ├── symphony_dark@3x.png
│   │   │   ├── symphony_light.png
│   │   │   ├── symphony_light@2x.png
│   │   │   └── symphony_light@3x.png
│   │   ├── thedefiant
│   │   │   ├── thedefiant_dark.png
│   │   │   ├── thedefiant_dark@2x.png
│   │   │   ├── thedefiant_dark@3x.png
│   │   │   ├── thedefiant_light.png
│   │   │   ├── thedefiant_light@2x.png
│   │   │   └── thedefiant_light@3x.png
│   │   └── tracerdao
│   │       ├── tracerdao_dark.png
│   │       ├── tracerdao_dark@2x.png
│   │       ├── tracerdao_dark@3x.png
│   │       ├── tracerdao_light.png
│   │       ├── tracerdao_light@2x.png
│   │       └── tracerdao_light@3x.png
│   └── verify.png
├── src
│   ├── App.tsx
│   ├── AppLogin.tsx
│   ├── api
│   │   ├── index.js
│   │   └── ipfs.ts
│   ├── assets
│   │   ├── BellIcon.svg
│   │   ├── Device.js
│   │   ├── Image.svg
│   │   ├── Lock.png
│   │   ├── LockSlash.png
│   │   ├── PushLogo.svg
│   │   ├── RedCircle.svg
│   │   ├── Vector.svg
│   │   ├── XCircle.svg
│   │   ├── chat
│   │   │   ├── QRBackground.svg
│   │   │   ├── arrowleft.svg
│   │   │   ├── chatBox.svg
│   │   │   ├── group-chat
│   │   │   │   ├── addadmin.svg
│   │   │   │   ├── adddark.svg
│   │   │   │   ├── addicon.svg
│   │   │   │   ├── addlight.svg
│   │   │   │   ├── chat.svg
│   │   │   │   ├── close.svg
│   │   │   │   ├── creategroup.svg
│   │   │   │   ├── creategroupfill.svg
│   │   │   │   ├── creategroupicon.svg
│   │   │   │   ├── creategroupicondark.svg
│   │   │   │   ├── dismissadmin.svg
│   │   │   │   ├── info.svg
│   │   │   │   ├── infodark.svg
│   │   │   │   ├── lockdark.svg
│   │   │   │   ├── more.svg
│   │   │   │   ├── moredark.svg
│   │   │   │   ├── profile.svg
│   │   │   │   ├── remove.svg
│   │   │   │   └── removewallet.svg
│   │   │   ├── handwave.svg
│   │   │   ├── search.svg
│   │   │   └── tick.svg
│   │   ├── fonts
│   │   │   ├── Strawford-Black.eot
│   │   │   ├── Strawford-Black.svg
│   │   │   ├── Strawford-Black.ttf
│   │   │   ├── Strawford-Black.woff
│   │   │   ├── Strawford-Black.woff2
│   │   │   ├── Strawford-Bold.eot
│   │   │   ├── Strawford-Bold.svg
│   │   │   ├── Strawford-Bold.ttf
│   │   │   ├── Strawford-Bold.woff
│   │   │   ├── Strawford-Bold.woff2
│   │   │   ├── Strawford-ExtraLight.otf
│   │   │   ├── Strawford-ExtraLight.ttf
│   │   │   ├── Strawford-ExtraLight.woff2
│   │   │   ├── Strawford-Light.otf
│   │   │   ├── Strawford-Light.ttf
│   │   │   ├── Strawford-Light.woff2
│   │   │   ├── Strawford-Medium.otf
│   │   │   ├── Strawford-Medium.ttf
│   │   │   ├── Strawford-Medium.woff2
│   │   │   ├── Strawford-Regular.eot
│   │   │   ├── Strawford-Regular.otf
│   │   │   ├── Strawford-Regular.ttf
│   │   │   ├── Strawford-Regular.woff
│   │   │   └── Strawford-Regular.woff2
│   │   ├── gov
│   │   │   └── delegatees
│   │   │       ├── aiswarya.jpg
│   │   │       ├── aiswarya@2x.jpg
│   │   │       ├── aiswarya@3x.jpg
│   │   │       ├── alex.jpg
│   │   │       ├── alex@2x.jpg
│   │   │       ├── alex@3x.jpg
│   │   │       ├── ashis.jpg
│   │   │       ├── ashis@2x.jpg
│   │   │       ├── ashis@3x.jpg
│   │   │       ├── ashwani.jpg
│   │   │       ├── ashwani@2x.jpg
│   │   │       ├── ashwani@3x.jpg
│   │   │       ├── auryn.jpg
│   │   │       ├── auryn@2x.jpg
│   │   │       ├── auryn@3x.jpg
│   │   │       ├── beler.jpg
│   │   │       ├── beler@2x.jpg
│   │   │       ├── beler@3x.jpg
│   │   │       ├── defi_dad.jpg
│   │   │       ├── defi_dad@2x.jpg
│   │   │       ├── defi_dad@3x.jpg
│   │   │       ├── imvijaygir.jpg
│   │   │       ├── imvijaygir@2x.jpg
│   │   │       ├── imvijaygir@3x.jpg
│   │   │       ├── jaf.jpg
│   │   │       ├── jaf@2x.jpg
│   │   │       ├── jaf@3x.jpg
│   │   │       ├── jude.jpg
│   │   │       ├── jude@2x.jpg
│   │   │       ├── jude@3x.jpg
│   │   │       ├── krishna.jpg
│   │   │       ├── krishna@2x.jpg
│   │   │       ├── krishna@3x.jpg
│   │   │       ├── pranshu.jpg
│   │   │       ├── pranshu@2x.jpg
│   │   │       ├── pranshu@3x.jpg
│   │   │       ├── ray.jpg
│   │   │       ├── ray@2x.jpg
│   │   │       ├── ray@3x.jpg
│   │   │       ├── robin_rrtx.jpg
│   │   │       ├── robin_rrtx@2x.jpg
│   │   │       ├── robin_rrtx@3x.jpg
│   │   │       ├── zaryab.jpg
│   │   │       ├── zaryab@2x.jpg
│   │   │       └── zaryab@3x.jpg
│   │   ├── icons
│   │   │   ├── audio-icon.svg
│   │   │   ├── audio-off-icon.svg
│   │   │   ├── cube.png
│   │   │   ├── end-call-icon.svg
│   │   │   ├── greenBell.svg
│   │   │   ├── index.js
│   │   │   ├── pick-call-icon.svg
│   │   │   ├── redBellSlash.png
│   │   │   ├── swapIcon.svg
│   │   │   ├── userCircleMinus.png
│   │   │   ├── userCirclePlus.png
│   │   │   ├── video-icon.svg
│   │   │   ├── video-off-icon.svg
│   │   │   └── videoCallIcon.svg
│   │   ├── info.svg
│   │   ├── login
│   │   │   ├── ledgerDark.svg
│   │   │   ├── ledgerLight.svg
│   │   │   ├── metamaskDark.svg
│   │   │   ├── metamaskLight.svg
│   │   │   ├── portisDark.svg
│   │   │   ├── portisLight.svg
│   │   │   ├── trezorDark.svg
│   │   │   ├── trezorLight.svg
│   │   │   ├── wcDark.svg
│   │   │   └── wcLight.svg
│   │   ├── moon.svg
│   │   ├── navigation
│   │   │   ├── airdropIcon.svg
│   │   │   ├── channelsOffIcon.svg
│   │   │   ├── channelsOnIcon.svg
│   │   │   ├── chatOffIcon.svg
│   │   │   ├── chatOnIcon.svg
│   │   │   ├── createChannelIcon.svg
│   │   │   ├── faqIcon.svg
│   │   │   ├── govOffIcon.svg
│   │   │   ├── govOnIcon.svg
│   │   │   ├── homeOffIcon.svg
│   │   │   ├── homeOnIcon.svg
│   │   │   ├── inboxOffIcon.svg
│   │   │   ├── inboxOnIcon.svg
│   │   │   ├── incentivesOffIcon.svg
│   │   │   ├── incentivesOnIcon.svg
│   │   │   ├── moreOffIcon.svg
│   │   │   ├── moreOnIcon.svg
│   │   │   ├── olvyIcon.svg
│   │   │   ├── receiveNotifOffIcon.svg
│   │   │   ├── receiveNotifOnIcon.svg
│   │   │   ├── rockstarsIcon.svg
│   │   │   ├── sendNotifOffIcon.svg
│   │   │   ├── sendNotifOnIcon.svg
│   │   │   ├── supportIcon.svg
│   │   │   ├── walkthroughIcon.svg
│   │   │   └── yieldIcon.svg
│   │   ├── pages
│   │   │   ├── darkbg.svg
│   │   │   └── lightbg.svg
│   │   ├── pushDark.svg
│   │   ├── pushLight.svg
│   │   ├── reusables
│   │   │   └── spinners
│   │   │       ├── checkmark.svg
│   │   │       ├── error.svg
│   │   │       ├── spinner.svg
│   │   │       ├── warning.svg
│   │   │       └── whitelist.svg
│   │   ├── searchicon.svg
│   │   └── sun.svg
│   ├── components
│   │   ├── AddDelegateModalContent.tsx
│   │   ├── AddSubgraphModalContent.tsx
│   │   ├── AliasProcessing.js
│   │   ├── AliasSetup.js
│   │   ├── AliasVerificationModal.js
│   │   ├── AllNFTs.js
│   │   ├── AllNFTsV2.js
│   │   ├── Bell.js
│   │   ├── BlockiesIdenticon.js
│   │   ├── ChainIndicator.tsx
│   │   ├── ChainsSelect.tsx
│   │   ├── ChangeNetwork.tsx
│   │   ├── ChannelDeactivateModalContent.tsx
│   │   ├── ChannelDetails.js
│   │   ├── ChannelInfo.tsx
│   │   ├── ChannelLoading.tsx
│   │   ├── ChannelReactivateModalContent.tsx
│   │   ├── ChannelSettings.jsx
│   │   ├── ChannelSettingsDropdown.tsx
│   │   ├── ComingSoon.js
│   │   ├── DelegateInfo.js
│   │   ├── DisplayNotice.js
│   │   ├── Dropdown.tsx
│   │   ├── FaucetInfo.tsx
│   │   ├── Faucets.js
│   │   ├── InboxComponent.js
│   │   ├── InfoTooltip.js
│   │   ├── InitState.tsx
│   │   ├── MetaInfoDisplayer.js
│   │   ├── MobileNavButton.js
│   │   ├── MyNFTs.js
│   │   ├── MyNFTsV2.js
│   │   ├── NavButton.js
│   │   ├── NavigationButton.js
│   │   ├── NavigationLoaderButton.js
│   │   ├── NewTag.tsx
│   │   ├── NotificationToast.js
│   │   ├── Offchain.js
│   │   ├── PoolCard.js
│   │   ├── PreviewNotif.js
│   │   ├── ProcessingInfo.js
│   │   ├── Profile.tsx
│   │   ├── ProfileModal.tsx
│   │   ├── RemoveDelegateModalContent.tsx
│   │   ├── SearchFilter.css
│   │   ├── SearchFilter.jsx
│   │   ├── SendNotifications.tsx
│   │   ├── Settings.tsx
│   │   ├── SharedStyling.js
│   │   ├── ShowDelegates.jsx
│   │   ├── StakingInfo.tsx
│   │   ├── Switch.js
│   │   ├── ThemeToggle.js
│   │   ├── ThemeToggleStyle.css
│   │   ├── TimerItem.js
│   │   ├── TransferNFT.js
│   │   ├── TransferNFTv2.js
│   │   ├── UnderProgressModal.js
│   │   ├── UniswapWidget.tsx
│   │   ├── UpdateChannelTooltipContent.tsx
│   │   ├── UploadLogo.jsx
│   │   ├── VerifiedTooltipContent.tsx
│   │   ├── VerifyAlias.js
│   │   ├── ViewChannelItem.js
│   │   ├── ViewDelegateeItem.js
│   │   ├── ViewInfoItem.js
│   │   ├── ViewNFTItem.js
│   │   ├── ViewNFTsV2Item.js
│   │   ├── ViewNotificationItem.js
│   │   ├── blockies.js
│   │   ├── chat
│   │   │   ├── chatsnap
│   │   │   │   └── ChatSnap.tsx
│   │   │   └── w2wChat
│   │   │       ├── Modal
│   │   │       │   └── Modal.tsx
│   │   │       ├── TypeBar
│   │   │       │   ├── Files
│   │   │       │   │   └── Files.tsx
│   │   │       │   ├── Gifs
│   │   │       │   │   └── GifPicker.tsx
│   │   │       │   └── Typebar.tsx
│   │   │       ├── chatBox
│   │   │       │   ├── ChatBox.tsx
│   │   │       │   └── HeaderMessage.tsx
│   │   │       ├── chatQR
│   │   │       │   ├── chatQR.tsx
│   │   │       │   └── mobileView.tsx
│   │   │       ├── chats
│   │   │       │   ├── Chats.tsx
│   │   │       │   └── MessageWrappers
│   │   │       │       ├── ReceivedMessageWrapper.tsx
│   │   │       │       └── SentMessageWrapper.tsx
│   │   │       ├── groupChat
│   │   │       │   ├── createGroup
│   │   │       │   │   ├── AddWalletContent.tsx
│   │   │       │   │   ├── CreateGroupModalContent.tsx
│   │   │       │   │   ├── GroupDetailsContent.tsx
│   │   │       │   │   ├── GroupModalHeader.tsx
│   │   │       │   │   └── MemberListContainer.tsx
│   │   │       │   └── groupInfo
│   │   │       │       ├── PendingMembers.tsx
│   │   │       │       ├── ProfileCard.tsx
│   │   │       │       └── groupInfoModalContent.tsx
│   │   │       ├── intentFeed
│   │   │       │   └── IntentFeed.tsx
│   │   │       ├── messageFeed
│   │   │       │   └── MessageFeed.tsx
│   │   │       ├── profile
│   │   │       │   ├── Profile.tsx
│   │   │       │   └── index.ts
│   │   │       ├── searchBar
│   │   │       │   └── SearchBar.tsx
│   │   │       ├── stickers
│   │   │       │   ├── stickerHelper.ts
│   │   │       │   └── useFetchHook.tsx
│   │   │       └── w2wIndexeddb.ts
│   │   ├── reusables
│   │   │   ├── SharedStylingV2.js
│   │   │   ├── blurs
│   │   │   │   ├── BlurBG.tsx
│   │   │   │   └── BlurBGClouds.tsx
│   │   │   ├── errorMessageLabel
│   │   │   │   └── errorMessageLabel.tsx
│   │   │   ├── loaders
│   │   │   │   └── LoaderSpinner.tsx
│   │   │   ├── progress
│   │   │   │   └── ProgressBarUnit.tsx
│   │   │   ├── spinners
│   │   │   │   └── SpinnerUnit.tsx
│   │   │   ├── toasts
│   │   │   │   ├── NotifToastUI.tsx
│   │   │   │   ├── toastController.tsx
│   │   │   │   └── toastOverrides.css
│   │   │   ├── toggle
│   │   │   │   └── Toggle.tsx
│   │   │   └── tooltip
│   │   │       └── Tooltip.tsx
│   │   └── video
│   │       ├── CallButton.tsx
│   │       ├── IncomingCall.tsx
│   │       ├── IncomingCallModalContent.tsx
│   │       ├── MediaToggleButton.tsx
│   │       ├── OutgoingOngoingCall.tsx
│   │       ├── UserInfo.tsx
│   │       └── VideoPlayer.tsx
│   ├── config
│   │   ├── Globals.js
│   │   ├── NavigationList.js
│   │   ├── Themization.js
│   │   ├── W2WConfig.ts
│   │   ├── abis
│   │   │   ├── BatchMintNFT.json
│   │   │   ├── EPNS.json
│   │   │   ├── ERC721.json
│   │   │   ├── IERC721.json
│   │   │   ├── IERC721Enumerable.json
│   │   │   ├── IERC721Metadata.json
│   │   │   ├── IERC721Receiver.json
│   │   │   ├── IRockstar.json
│   │   │   ├── MerkleDistributor.json
│   │   │   ├── NFTRewards.json
│   │   │   ├── NFTRewardsV2.json
│   │   │   ├── Rockstar.json
│   │   │   ├── RockstarV2.json
│   │   │   ├── Staking.json
│   │   │   ├── UniswapV2Router02.json
│   │   │   ├── YieldFarm.json
│   │   │   ├── dai.json
│   │   │   ├── epnsCommunicator.json
│   │   │   ├── epnsRopstenCommunicator.json
│   │   │   ├── epnscore.json
│   │   │   ├── erc20.json
│   │   │   ├── ownable.json
│   │   │   └── pushToken.json
│   │   ├── airdrop
│   │   │   └── claims.json
│   │   ├── channelTuts.js
│   │   ├── config-dev.js
│   │   ├── config-general.js
│   │   ├── config-localhost.js
│   │   ├── config-prod.js
│   │   ├── config-staging.js
│   │   ├── custom.d.ts
│   │   ├── delegatees.json
│   │   └── index.js
│   ├── connectors.ts
│   ├── contexts
│   │   ├── AppContext.tsx
│   │   ├── ChatUserContext.tsx
│   │   ├── NavigationContext.tsx
│   │   ├── NavigationContext_old.js
│   │   ├── NotificationContext.tsx
│   │   └── VideoCallContext.tsx
│   ├── firebase.js
│   ├── helpers
│   │   ├── AirdropHelper.ts
│   │   ├── CaipHelper.ts
│   │   ├── ChainHelper.ts
│   │   ├── CryptoHelper.ts
│   │   ├── EPNSCoreHelper.ts
│   │   ├── GaslessHelper.ts
│   │   ├── InputValidation.ts
│   │   ├── IpfsHelper.ts
│   │   ├── LogoSizeHelper.ts
│   │   ├── NFTHelper.ts
│   │   ├── PushTokenContractHelper.ts
│   │   ├── RoutesHelper.ts
│   │   ├── StyleHelper.ts
│   │   ├── TimerHelper.ts
│   │   ├── UtilityHelper.old.js
│   │   ├── UtilityHelper.ts
│   │   ├── ValidationHelper.ts
│   │   ├── WithGasHelper.tsx
│   │   ├── index.ts
│   │   ├── videoCall
│   │   │   └── sendVideoCallNotification.ts
│   │   └── w2w
│   │       ├── aes.ts
│   │       ├── ceramic.ts
│   │       ├── did.ts
│   │       ├── groupChat.ts
│   │       ├── index.ts
│   │       ├── pgp.ts
│   │       ├── twitter.ts
│   │       ├── udResolver.ts
│   │       └── user.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useAsyncOperation.ts
│   │   ├── useBrowserNotification.ts
│   │   ├── useClickAway.ts
│   │   ├── useDeviceWidthCheck.ts
│   │   ├── useEagerConnect.ts
│   │   ├── useInactiveListener.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useModal.tsx
│   │   ├── useModalBlur.tsx
│   │   ├── usePeer.ts
│   │   ├── useResolveWeb3Name.ts
│   │   ├── useSDKSocket.ts
│   │   └── useToast.tsx
│   ├── index.css
│   ├── index.js
│   ├── modules
│   │   ├── airdrop
│   │   │   └── AirdropModule.tsx
│   │   ├── channelDashboard
│   │   │   ├── ChannelOwnerDashboard.tsx
│   │   │   └── channelDashboardModule.tsx
│   │   ├── channels
│   │   │   └── ChannelsModule.tsx
│   │   ├── chat
│   │   │   └── ChatModule.tsx
│   │   ├── createChannel
│   │   │   ├── CreateChannelModule.js
│   │   │   └── createChannel.css
│   │   ├── editChannel
│   │   │   ├── EditChannel.tsx
│   │   │   ├── EditChannelForms.tsx
│   │   │   └── uploadLogoModal.tsx
│   │   ├── faq
│   │   │   └── FaqModule.tsx
│   │   ├── gov
│   │   │   └── GovModule.tsx
│   │   ├── inbox
│   │   │   └── InboxModule.tsx
│   │   ├── internal
│   │   │   ├── DemoModalContent.tsx
│   │   │   └── InternalDevModule.tsx
│   │   ├── nft
│   │   │   └── NftModule.tsx
│   │   ├── receiveNotifs
│   │   │   └── ReceiveNotifsModule.tsx
│   │   ├── sendNotifs
│   │   │   └── SendNotifsModule.tsx
│   │   ├── support
│   │   │   └── SupportModule.tsx
│   │   ├── tutorial
│   │   │   └── TutorialModule.tsx
│   │   └── yield
│   │       └── YieldFarmingModule.tsx
│   ├── pages
│   │   ├── AirdropPage.tsx
│   │   ├── ChannelDashboardPage.js
│   │   ├── ChannelsPage.js
│   │   ├── ChatPage.tsx
│   │   ├── ComingSoonPage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── GovPage.tsx
│   │   ├── InboxPage.js
│   │   ├── InternalDevPage.tsx
│   │   ├── NFTPage.js
│   │   ├── NotAvailablePage.tsx
│   │   ├── ReceiveNotifsPage.js
│   │   ├── SendNotifsPage.tsx
│   │   ├── SpamPage.js
│   │   ├── SupportPage.tsx
│   │   ├── TutorialPage.tsx
│   │   └── YieldFarmingPage.js
│   ├── primaries
│   │   ├── AutoImageClipper.tsx
│   │   ├── Bell.js
│   │   ├── BlockiesIdenticon.js
│   │   ├── DisplayNotice.js
│   │   ├── ImageClipper.js
│   │   ├── InfoTooltip.js
│   │   ├── LoaderSpinner.tsx
│   │   ├── NotificationToast.js
│   │   ├── Profile.tsx
│   │   ├── SharedModalComponents
│   │   │   ├── ModalConfirmButton.tsx
│   │   │   ├── ModalHeader.tsx
│   │   │   └── ModalInput.tsx
│   │   ├── SharedStyling.js
│   │   └── blockies.js
│   ├── react-app-env.d.ts
│   ├── redux
│   │   ├── slices
│   │   │   ├── adminSlice.js
│   │   │   ├── channelCreationSlice.js
│   │   │   ├── channelSlice.js
│   │   │   ├── contractSlice.js
│   │   │   ├── notificationSlice.js
│   │   │   ├── sendNotificationSlice.js
│   │   │   ├── spamSlice.js
│   │   │   └── userJourneySlice.js
│   │   └── store.js
│   ├── sections
│   │   ├── chat
│   │   │   ├── ChatBoxSection.tsx
│   │   │   └── ChatSidebarSection.tsx
│   │   └── video
│   │       └── VideoCallSection.tsx
│   ├── segments
│   │   ├── Airdrop.tsx
│   │   ├── ChannelCreationDashboard.js
│   │   ├── ChannelDashboard.js
│   │   ├── ChannelTutorial.js
│   │   ├── ChatSidebar.tsx
│   │   ├── CreateChannel.js
│   │   ├── DeprecatedViewChannels.tsx
│   │   ├── Feedbox.tsx
│   │   ├── Info.tsx
│   │   ├── Spambox.tsx
│   │   ├── TimerComponent.js
│   │   ├── ViewChannels.tsx
│   │   ├── spam.tsx
│   │   └── userJourneySteps.tsx
│   ├── serviceWorker.js
│   ├── services
│   │   ├── alias
│   │   │   ├── getAliasDetails.ts
│   │   │   └── index.ts
│   │   ├── channels
│   │   │   ├── getChannelDelegates.ts
│   │   │   ├── getChannels.ts
│   │   │   ├── getChannelsSearch.ts
│   │   │   └── index.ts
│   │   ├── chats
│   │   │   ├── getChats.ts
│   │   │   ├── getGroup.ts
│   │   │   ├── getGroupByChatId.ts
│   │   │   ├── getGroupByName.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── ipfs
│   │   │   ├── index.ts
│   │   │   └── ipfsUpload.ts
│   │   └── users
│   │       ├── getUserDelegations.ts
│   │       ├── getUserSubscriptions.ts
│   │       └── index.ts
│   ├── singletons
│   │   ├── ChannelsDataStore.js
│   │   ├── UsersDataStore.js
│   │   └── YieldFarmingDataStore.js
│   ├── structure
│   │   ├── Header.tsx
│   │   ├── MasterInterfacePage.tsx
│   │   ├── MobileNavigation.tsx
│   │   └── Navigation.tsx
│   ├── templates
│   │   ├── ClassTemplate.js
│   │   └── FunctionalTemplate.js
│   └── types
│       ├── chat.ts
│       └── context.ts
├── tsconfig.json
└── yarn.lock

122 directories, 794 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 🧩 Modules

<details closed><summary>Airdrop</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Module                                |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| AirdropModule.tsx | This code snippet is a React component that renders a gratitude drop page. It uses web3 to connect to the Ethereum network and retrieve a user's information on whether they are eligible to claim $PUSH tokens. The page also includes a section of frequently asked questions. Finally, there is an option for the user to claim their $PUSH tokens if they are eligible and if they have not claimed it before. The component contains various different states that impacts its render conditions such as loading, claimable and verified. | src/modules/airdrop/AirdropModule.tsx |

</details>

<details closed><summary>Alias</summary>

| File               | Summary                                                                                                                                                                                                                                          | Module                                |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| getAliasDetails.ts | The provided code implements a function `getAliasDetails`, which takes an account and a chain ID as input and returns information about the specified account's alias.                                                                           | src/services/alias/getAliasDetails.ts |
|                    | The function utilizes the `PushAPI` module to communicate with the server and the `aliasChainIdToChainName` utility function to translate the blockchain version to a readable format.                                                           |                                       |
|                    | If an error occurs, it throws an instance of the Error class.                                                                                                                                                                                    |                                       |
| index.ts           | The code exports all functionality available in the "getAliasDetails" module. This allows any file that imports this "export" statement to access the functions, variables, and other features defined in the original "getAliasDetails" module. | src/services/alias/index.ts           |

</details>

<details closed><summary>Api</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                                                                                     | Module           |
|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| ipfs.ts  | The provided code snippet exports two functions. The'getFromIPFS' function makes a GET request to an IPFS endpoint for a specific CID and returns a formatted message object including the CID. The'postIPFS' function makes a POST request to an IPFS endpoint with the provided data and returns the CID hash. This code also sets the BASE_URL for the API depending on the environment. | src/api/ipfs.ts  |
| index.js | This code snippet exports multiple functions that simplify making HTTP requests using Axios library in a React project, including GET, POST, and tooling POST requests. It uses an API URL provided by a configuration file. It also exports additional functionality related to ipfs implementation.                                                                                       | src/api/index.js |

</details>

<details closed><summary>Blurs</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                                                                                                               | Module                                          |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| BlurBG.tsx       | The code snippet defines a component named BlurBG that generates a blurry background effect using styled-components package and ItemVV2 styled-component. The BlurBG component accepts props including the level of blur, z-index, and additional styles, to adjust certain parameters in generating the effect. It also exports the created module default that could be referenced in other parts of the code base. | src/components/reusables/blurs/BlurBG.tsx       |
| BlurBGClouds.tsx | The code snippets creates a component, BlurBGClouds, that is used for creating a blurred background effect. The component accepts no parameters and returns two overlapping background circles with blurred edges using various style attributes like background color, border-radius, aspect ratio, and filter.                                                                                                      | src/components/reusables/blurs/BlurBGClouds.tsx |

</details>

<details closed><summary>Channeldashboard</summary>

| File                       | Summary                                                                                                                                                                                                                                                                                                                                                                                        | Module                                                  |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
| ChannelOwnerDashboard.tsx  | The code snippet imports and uses various packages and components within a React Web3 application. It defines a functional component called "ChannelOwnerDashboard" which displays various components based on the state of channel details fetched from a database. It includes logic for editing, deleting and updating channels as well as fetching and displaying details such as aliases. | src/modules/channelDashboard/ChannelOwnerDashboard.tsx  |
| channelDashboardModule.tsx | This code defines a React component for a dashboard module that displays a loading screen while any necessary channel data is loaded, then renders the ChannelOwnerDashboard component. Toast notifications can also be triggered, and the component's appearance is responsively styled based on screen size. Additionally, Google Analytics tracking is implemented on component mount.      | src/modules/channelDashboard/channelDashboardModule.tsx |

</details>

<details closed><summary>Channels</summary>

| File                   | Summary                                                                                                                                                                                                                                                                                                                                                                | Module                                       |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| ChannelsModule.tsx     | The provided code is a React component that displays a Channels module in a user interface. It also includes style components to adjust the appearance of the module on different devices and a React-GA package for website analytics. It uses internal components, configs, and constants for the desired behavior.                                                  | src/modules/channels/ChannelsModule.tsx      |
| getChannelDelegates.ts | The code snippet uses the @pushprotocol/restapi library and a configuration file to define a Props type. The function, getChannelDelegates, fetches the channel delegates by calling the Push API with the given channelCaipAddress value and returns the response. If an error occurs, it throws a new error object.                                                  | src/services/channels/getChannelDelegates.ts |
| getChannelsSearch.ts   | The code snippet exports a function that uses an API endpoint to search for channels based on a query string. The function accepts some optional parameters for setting the pagination and sorting options as necessary. It returns an array of channel data if the search is successful, or throws an error otherwise.                                                | src/services/channels/getChannelsSearch.ts   |
| getChannels.ts         | The provided code exports an async function named "getChannels" that receives four optional arguments to include pagination, sorting, and ordering. The function builds an endpoint based on the arguments and calls an HTTP get request to retrieve data. The function returns an array containing the channels data or throws an error message if the request fails. | src/services/channels/getChannels.ts         |
| index.ts               | This code aims to export three modules: "getChannelDelegates", "getChannels", and "getChannelsSearch". These modules enable retrieving information about channels available to users data on the delegates associated with each individual channel. Overall, these exports aim to make gathering channel data more efficient.                                          | src/services/channels/index.ts               |

</details>

<details closed><summary>Chat</summary>

| File                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                        | Module                                   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| ChatSidebarSection.tsx | The provided code snippet contains a React component for the chat sidebar section, which includes various internal and external components, such as a search bar, intent feed, message feed, and profile header. The component also utilizes multiple hooks and functions for handling user interactions and fetching data from APIs, and it includes various styled components for rendering the UI elements. | src/sections/chat/ChatSidebarSection.tsx |
| ChatBoxSection.tsx     | This code snippet is a functional React component that imports a ChatBox from an internal component and displays it within a section called ChatBoxSection. The ChatBoxSection takes in two props, setVideoCallInfo and showGroupInfoModal, and is centered using internal SharedStylingV2.                                                                                                                    | src/sections/chat/ChatBoxSection.tsx     |
| ChatModule.tsx         | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                  | src/modules/chat/ChatModule.tsx          |
|                        | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                       |                                          |

</details>

<details closed><summary>Chatbox</summary>

| File              | Summary                                                                                                                                                                                                                                                 | Module                                                |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| ChatBox.tsx       | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                           | src/components/chat/w2wChat/chatBox/ChatBox.tsx       |
|                   | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                |                                                       |
| HeaderMessage.tsx | This code snippet is a React component for displaying a chat message header. It includes conditional rendering of encryption status based on chat context, and links to encryption documentation. Styling is managed through styled-components package. | src/components/chat/w2wChat/chatBox/HeaderMessage.tsx |

</details>

<details closed><summary>Chatqr</summary>

| File           | Summary                                                                                                                                                                                                                                                                                                                                             | Module                                            |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| chatQR.tsx     | The code defines a React component for generating and displaying a QR code. The QR code contains encrypted user information needed for chat functionality and can be displayed in different layouts and loading states. The component uses various hooks and contexts for data and styling customization.                                           | src/components/chat/w2wChat/chatQR/chatQR.tsx     |
| mobileView.tsx | The code defines a functional React component, MobileView, that renders instructions for users on how to use push chat on their computers. The component imports and uses several other components and features, including styled components, icons, and context. It also utilizes media queries to allow for responsiveness across device screens. | src/components/chat/w2wChat/chatQR/mobileView.tsx |

</details>

<details closed><summary>Chats</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                | Module                                      |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| Chats.tsx           | This is a React component that renders different message types (text, images, Twitter links, etc.) for a chat interface. It uses external packages such as Styled Components and TwitterTweetEmbed. It also includes some helper functions to retrieve the sender's profile information, shorten wallet addresses, and resolve ENS names.                                                                                              | src/components/chat/w2wChat/chats/Chats.tsx |
| getGroup.ts         | The provided code snippet exports a function "getGroup" that takes a string parameter and a function, "setInvalidSearch". The function calls two other helper functions, "getGroupbyChatId" and "getGroupByName", which return an "IGroup" object. If neither helper function yields a result, the setInvalidSearch function is called to handle the missing group. Ultimately, this function returns an "IGroup" object or undefined. | src/services/chats/getGroup.ts              |
| getChats.ts         | This code exports a function'getChats' that takes in various options like the account, pgpPrivateKey, chatId, threadHash and limit in order to retrieve a list of chats. If provided with a threadhash it retrieves details of the conversation and its message history. It then returns chatResponse, lastThreadHash, and lastListPresent variables for the fetched threads except when no conversation threads are available.        | src/services/chats/getChats.ts              |
| getGroupByName.ts   | The provided code snippet defines and exports a function'getGroupByName' which uses the PushProtocol API and provided configuration data to retrieve a specified group's information. The function returns a promise for an object conforming to an interface defining a group object (of type IGroup). The try...catch block ensures the function throws an error if an error occurs during execution.                                | src/services/chats/getGroupByName.ts        |
| getGroupByChatId.ts | The code imports the PushAPI and appConfig modules, and the IGroup type interface. The function getGroupbyChatId takes a chat ID argument, calls the PushAPI to get a group, and returns a Promise containing the retrieved group. If any errors occur, the function logs them and throws a new error with the error message.                                                                                                          | src/services/chats/getGroupByChatId.ts      |
| index.ts            | The code exports all functions and/or variables from the module named "getChats". This allows other modules to import and access all exports within "getChats".                                                                                                                                                                                                                                                                        | src/services/chats/index.ts                 |

</details>

<details closed><summary>Chatsnap</summary>

| File         | Summary                                                                                                                                                                                                                                                                                                                                                                           | Module                                    |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| ChatSnap.tsx | The provided code snippet consists of a React component named ChatSnap that renders individual conversation snaps in a messaging app. Its core functionalities include displaying user profile information, formatting chat messages, displaying timestamps, and providing click functionality. It also uses multiple imported modules and styles to create an attractive layout. | src/components/chat/chatsnap/ChatSnap.tsx |

</details>

<details closed><summary>Components</summary>

| File                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Module                                           |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| Settings.tsx                      | This code is a basic React component that includes the use of styled-components package and the Web3-react core library. It creates a component called Settings which renders an empty styled Container. There is an unused React useEffect hook that is left empty.                                                                                                                                                                                                                                                                                                                                                                                                                                           | src/components/Settings.tsx                      |
| ChannelDeactivateModalContent.tsx | The code snippet contains a React component which displays a modal for deactivating a channel. It uses various external and internal components and packages, including loaders, icons, and styled-components. Upon confirming deactivation, the component sends a transaction and updates the channel details in the state.                                                                                                                                                                                                                                                                                                                                                                                   | src/components/ChannelDeactivateModalContent.tsx |
| NavigationLoaderButton.js         | The code imports React and packages such as'styled-components', and has an internal component named'NavigationLoaderButton'. The component has a function that returns a div containing an image, a span text, and some UI styling; it is used to show that the page is being loaded or fetching resources. Overall, the code snippet defines the UI for this'Loading Button' component that can be included in a larger web application developed using React.                                                                                                                                                                                                                                                | src/components/NavigationLoaderButton.js         |
| AliasSetup.js                     | The provided code snippet is a React component that displays a loading screen message while setting up a channel on the Alias network. It uses external packages like React spinners and styled components and also imports internal components like Button, Item, Section, H3, and Span with shared styling. Redux selectors and configurations are also utilized within the code.                                                                                                                                                                                                                                                                                                                            | src/components/AliasSetup.js                     |
| ViewNotificationItem.js           | This code snippet contains a component called ViewNotificationItem that renders notification data. It uses the React framework and Web3React library. It also includes styled components, a loading animation from an external package, and a time formatting function from the moment.js library.                                                                                                                                                                                                                                                                                                                                                                                                             | src/components/ViewNotificationItem.js           |
| DelegateInfo.js                   | This code defines a React component "DelegateInfo" that displays delegate information. It also includes a "WalletInfoContent" component and several styled components for various display types. The code handles clipping and copying of addresses, as well as hover and click events for the wallet display.                                                                                                                                                                                                                                                                                                                                                                                                 | src/components/DelegateInfo.js                   |
| SearchFilter.jsx                  | The provided code snippet is a React component that allows users to filter notifications by applying various search criteria such as keywords, date range, and channels. It utilizes external packages such as react-multi-select-component and react-datetime-picker to provide a user-friendly UI for filtering notifications. Additionally, it includes constants and a useState hook to manage state changes dynamically.                                                                                                                                                                                                                                                                                  | src/components/SearchFilter.jsx                  |
| NavButton.js                      | The code snippet contains a React component named NavButton that creates a button with icon, link, and other attributes. It also includes some CSS style components such as LeftBarPrimarySectionIcon and LeftBarPrimaryItemIcon that set the styles for specific icons. These can be used in a navigation bar or similar UI.                                                                                                                                                                                                                                                                                                                                                                                  | src/components/NavButton.js                      |
| BlockiesIdenticon.js              | The provided code snippet is a React component that sets up and renders an identicon using blockies library. After importing the Blockies component, users can customize it using options like color and size, and the component will update as needed in response to these changes. Once the component has mounted, blockies are rendered using the provided options.                                                                                                                                                                                                                                                                                                                                         | src/components/BlockiesIdenticon.js              |
| SendNotifications.tsx             | Prompt exceeds max token limit: 4340                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | src/components/SendNotifications.tsx             |
| UpdateChannelTooltipContent.tsx   | The provided code snippet is a TypeScript/React component called UpdateChannelTooltipContent. It showcases a channel update through a tooltip with the channel's name, description, and logo. It uses styled-components to style its child components. The component takes in props for the channel name, description, logo source, and a height value.                                                                                                                                                                                                                                                                                                                                                        | src/components/UpdateChannelTooltipContent.tsx   |
| ViewInfoItem.js                   | The code snippet provides a React component that displays several links and information for using the Push (EPNS) App and Browser Extension. It is styled using the styled-components package and imports configurations from an external appConfig file.                                                                                                                                                                                                                                                                                                                                                                                                                                                      | src/components/ViewInfoItem.js                   |
| VerifiedTooltipContent.tsx        | This code exports a React component called'VerifiedTooltipContent', which accepts props for displaying a verified name and icon. It is styled using styled-components and uses conditional rendering for adjusting the container's border radius based on the height of the component.                                                                                                                                                                                                                                                                                                                                                                                                                         | src/components/VerifiedTooltipContent.tsx        |
| ThemeToggleStyle.css              | The provided code snippet contains CSS code that sets border-box sizing for all elements, declares variables for colors and transitions, and styles a dark mode toggle switch with a sliding circle. The toggle switch has a parent container and uses the clip path property to hide the checkbox input. The switch changes appearance from dark to light mode with a transition animation.                                                                                                                                                                                                                                                                                                                   | src/components/ThemeToggleStyle.css              |
| Switch.js                         | This code snippet defines a reusable Switch component in React that accepts 3 props: a boolean isOn which denotes whether the switch is on or off, a function handleToggle which toggles the boolean value, and a string onColor which is the color when the switch is on. It renders a switch toggle button and a label, styled based on the state of the switch.                                                                                                                                                                                                                                                                                                                                             | src/components/Switch.js                         |
| MetaInfoDisplayer.js              | The code provides a react component for displaying meta information about various URLs. It includes parameters for icon display, text, background color, and click/hover callbacks. The component is styled with styled-components and includes CSS classes for flexbox alignment.                                                                                                                                                                                                                                                                                                                                                                                                                             | src/components/MetaInfoDisplayer.js              |
| UnderProgressModal.js             | The code snippet provides a styled and animated modal component called UnderProgressModal, with a provided image. The modal component has a toggle function and includes a close button. Additionally, it has a social media contact section visible on the footer by default.                                                                                                                                                                                                                                                                                                                                                                                                                                 | src/components/UnderProgressModal.js             |
| ComingSoon.js                     | This code snippet defines a simple functional React component called ComingSoon that renders an h2 element with the text "Coming Soon!!". The component is then exported as a default module for use in other parts of the application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | src/components/ComingSoon.js                     |
| Bell.js                           | The code snippet is a React component called "Bell" which renders an icon of a bell that the user can click, and the bell will ring with a tadaaa animation and show a badge with the number of notifications marked as "badgeCount". It also includes some styling with CSS.                                                                                                                                                                                                                                                                                                                                                                                                                                  | src/components/Bell.js                           |
| ChannelSettings.jsx               | The code snippet defines a React component named "ChannelSettings" which contains a "Settings" icon. When clicked, this icon toggles the display of a dropdown menu. The component also imports styled-components and other necessary components for the dropdown menu.                                                                                                                                                                                                                                                                                                                                                                                                                                        | src/components/ChannelSettings.jsx               |
| FaucetInfo.tsx                    | This code snippet defines a React functional component named'FaucetInfo' that renders a UI as per provided props. The UI contains an anchor link and a minter, which opens yield a modal upon pressing on mint' then checks for the available balance to display information on the screen as per the value. The component uses external packages, such as'styled-components' and'react', and internal components such as ButtonV2, ImageV2, etc.                                                                                                                                                                                                                                                              | src/components/FaucetInfo.tsx                    |
| ChannelDetails.js                 | This is a React component that provides the details and functionalities of a particular channel including channel name, state, creation date, subscribers count and expiry date/time. It also renders buttons for editing or deleting the channel, displays a note in case of channel expiry and shows details of the verifying network.                                                                                                                                                                                                                                                                                                                                                                       | src/components/ChannelDetails.js                 |
| InfoTooltip.js                    | The provided code snippet is a React component that displays an information tooltip using the Material-UI package and the AiFillInfoCircle icon from the react-icons package. The component takes in two props, a title to display in the tooltip and an Infocolor to specify the color of the icon.                                                                                                                                                                                                                                                                                                                                                                                                           | src/components/InfoTooltip.js                    |
| AllNFTsV2.js                      | The code initializes and sets states to fetch and display NFT data using React, Web3 and ethers libraries. It retrieves NFT data from an Ethereum blockchain-based smart contract and fetches NFT metadata using IPFS. It then renders the collected data item(s) using a styled-component and a loading spinner while waiting for the data to be fetched.                                                                                                                                                                                                                                                                                                                                                     | src/components/AllNFTsV2.js                      |
| PreviewNotif.js                   | The provided code snippet defines a React component called `PreviewNotif` which renders a notification preview using data from a Redux store and the Web3React library. It also includes styled components for an overlay and a preview space. The code uses several external packages and internal components including `NotificationItem`, `Item`, and `Span`.                                                                                                                                                                                                                                                                                                                                               | src/components/PreviewNotif.js                   |
| VerifyAlias.js                    | This code is implementing a React component that verifies an alias address on a web3-connected blockchain. It utilizes external packages like react-icons and react-spinners. Additionally, it dispatches some actions and makes calls to smart contracts using a signer from ethers library. Finally, it renders buttons and spans that help facilitate the verification process.`,                                                                                                                                                                                                                                                                                                                           | src/components/VerifyAlias.js                    |
| TransferNFTv2.js                  | The code snippet imports essential React and Web3 elements and several packages and components necessary for building the TransferNFTv2 component. The TransferNFTv2 component accepts tokenId and initiates the transfer of the NFT to a recipient address through the handleTransferNFT function. The function checks that the recipient address field is not empty, sets an appropriate info message, and waits for a transaction to complete before relaying the success or failure of the transfer.                                                                                                                                                                                                       | src/components/TransferNFTv2.js                  |
| MyNFTsV2.js                       | The code snippet imports react components and packages, and defines a MyNFTs function that fetches and displays details of NFTs available in an Ethereum account. The function uses the Web3-react core and ethers.js libraries, as well config and helper functions to connect with the Mainnet blockchain. The NFT data is fetched using IPFS metadata, and displayed using a ViewNFTV2Item bookmark component.                                                                                                                                                                                                                                                                                              | src/components/MyNFTsV2.js                       |
| ChainsSelect.tsx                  | The code defines a ChainsSelect component that renders a dropdown menu with options for different blockchain networks. It fetches network details and logos from internal configs and upon selection updates the corresponding value state. The component also provides button styling via styled-components and dropdown functionality via an internally-defined Dropdown component.                                                                                                                                                                                                                                                                                                                          | src/components/ChainsSelect.tsx                  |
| AliasProcessing.js                | This code snippet is a React component for displaying the progress of alias processing by rendering different components based on the processing state. It uses styled-components for styling and reads the processing state from Redux state store. The component is composed of Tabs and a Step indicating which stage the user is in the processing flow.                                                                                                                                                                                                                                                                                                                                                   | src/components/AliasProcessing.js                |
| ProfileModal.tsx                  | This code provides a React component for a profile modal that displays dropdown values. It includes a button to close the modal, and utilizes styled components for CSS styling. The dropdown values can include icons, links, and functions for interactive elements.                                                                                                                                                                                                                                                                                                                                                                                                                                         | src/components/ProfileModal.tsx                  |
| ViewDelegateeItem.js              | The provided code snippet is a React component that renders a delegatee item. The component interacts with Web3 and various internal/external helper functions to execute delegation and display appropriate messages or loading icons during delegation transactions or Ethereum network requests. The component offers the user two transaction mode options, gasless or withgas.                                                                                                                                                                                                                                                                                                                            | src/components/ViewDelegateeItem.js              |
| TransferNFT.js                    | The code defines a React component for transferring a specific non-fungible token (NFT) between Ethereum addresses. It uses the Web3React library to connect to an Ethereum node via Web3, and triggers a transaction on interaction with the Transfer button, setting the transaction details and handling errors and loading states using conditional rendering.                                                                                                                                                                                                                                                                                                                                             | src/components/TransferNFT.js                    |
| AddDelegateModalContent.tsx       | The code snippet is a React component for an add delegate modal that allows a user to provide a delegate address to send notifications on behalf of a channel. The modal features input validation, error handline, and uses styled-component for custom styling. It also utilizes a toast component to display success/error messages.                                                                                                                                                                                                                                                                                                                                                                        | src/components/AddDelegateModalContent.tsx       |
| ChannelSettingsDropdown.tsx       | This is a React component that displays a dropdown menu with different actions a user can take on a channel. The actions include adding/subtracting delegates, adding a subgraph, and activating/deactivating the channel. The component uses various external packages and internal components, dependencies, and modals.                                                                                                                                                                                                                                                                                                                                                                                     | src/components/ChannelSettingsDropdown.tsx       |
| NotificationToast.js              | This code snippet is a React component named NotificationToast that displays a notification using React Toastify library. The component accepts a notification object and a callback function to clear the toast. It also includes some styling with Styled Components.                                                                                                                                                                                                                                                                                                                                                                                                                                        | src/components/NotificationToast.js              |
| ThemeToggle.js                    | The code is a React component that provides a toggle button to change between light and dark themes. It updates the body's background and foreground CSS variables, modifies the HTML class, and has the state of the toggle button to store whether the theme is enabled or not. The component uses an useEffect hook with its state positioned with a callback within an onClick event listener.                                                                                                                                                                                                                                                                                                             | src/components/ThemeToggle.js                    |
| ChangeNetwork.tsx                 | The provided code is a React component for changing the user's wallet network using Web3. It obtains the current chain ID and library from Web3React, fetches network alias details from Redux store and renders a UI component for changing the network using handleChangeNetwork method. Lastly, it shows a toast message via useToast hook after the network change process is lively completed.                                                                                                                                                                                                                                                                                                            | src/components/ChangeNetwork.tsx                 |
| MobileNavButton.js                | The code snippet defines a React component called MobileNavButton, which creates a navigation button that is responsive and customizable. It uses certain icons and internal and external components, as well as a function that toggles a submenu and various CSS styles.                                                                                                                                                                                                                                                                                                                                                                                                                                     | src/components/MobileNavButton.js                |
| ViewNFTItem.js                    | This code snippet is a React component for rendering an NFT and related actions. It utilizes the Web3 library to interact with the blockchain, external packages such as React Player and styled-components for styling, and internal reusable components. The component includes logic for claiming NFT rewards and renders NFT status and claim badges.                                                                                                                                                                                                                                                                                                                                                      | src/components/ViewNFTItem.js                    |
| Profile.tsx                       | The provided code snippet is a React component that displays a wallet profile consisting of an identicon, an Ethereum Name Service name, and a shortened account address. The component requires the Web3 library and dependencies such as styled components and app context types.                                                                                                                                                                                                                                                                                                                                                                                                                            | src/components/Profile.tsx                       |
| MyNFTs.js                         | The code defines a React component `MyNFTs` that uses the Ethereum Web3 library to fetch, process and display a user's Non-Fungible Tokens (NFTs). It fetches NFT balances and details, from a contract instance, utilizes helper and primitive React components, and uses styled components for styling. The function updates the state to re-render the view upon user interactions.                                                                                                                                                                                                                                                                                                                         | src/components/MyNFTs.js                         |
| Dropdown.tsx                      | The provided code snippet defines a React component called Dropdown that renders a list of dropdown menu items. The component takes an array of dropdownValues as props, each of which must include a title and icon, and optionally a link, textColor, or function. The Dropdown component styles the menu items with CSS and handles copying wallet addresses to the clipboard.                                                                                                                                                                                                                                                                                                                              | src/components/Dropdown.tsx                      |
| ChainIndicator.tsx                | The provided code is a React component designed to display a dropdown menu allowing users to switch between Ethereum Networks. It is connected to the web3 provider through the useWeb3React hook, and dynamically generates dropdown values based on allowed network IDs found in appConfig. The component is styled using styled-components and emoji are utilized in adding visual touches.                                                                                                                                                                                                                                                                                                                 | src/components/ChainIndicator.tsx                |
| blockies.js                       | This code snippet contains functionality to generate icon images with randomly colored pixels using the Xorshift PRNG implementation. It allows customization of the icon's size, color, and background color. The code is modular with the option to use it as a Node.js module or a JavaScript library in a browser.                                                                                                                                                                                                                                                                                                                                                                                         | src/components/blockies.js                       |
| ChannelInfo.tsx                   | The provided code snippet includes a React component called ChannelInfo, which comprises a form for creating a timebound or normal channel on a web application. The component uses various external packages like react-dropdown and react-datetime-picker along with multiple functions and sub-components. The form fields range from basic info like name, description, and URL to more complex ones like network selection and channel expiry date picker. The component also includes validation logic for input fields when clicked on next.                                                                                                                                                            | src/components/ChannelInfo.tsx                   |
| Offchain.js                       | The code snippet uses libraries like ethers and eth-sig-util to create an Ethereum signed message using typed data. It creates typedData, domain, type, and payload objects, and then uses the private key to sign the message. The recovered account can then be verified using eth-sig-util. The code is part of the Epicenter Protocol Notification System application.                                                                                                                                                                                                                                                                                                                                     | src/components/Offchain.js                       |
| AllNFTs.js                        | The provided React code snippet fetches all the details of minted NFTs stored on the Ethereum blockchain and displays them in a ViewNFTItem component. The code utilizes Web3React and ethers.js libraries as well as custom helper functions for blockchain interaction. The NFT fetching process is triggered upon account and contract instances update within useEffect hooks, and a loading spinner is presented while fetching data.                                                                                                                                                                                                                                                                     | src/components/AllNFTs.js                        |
| DisplayNotice.js                  | This code snippet exports a functional React component called DisplayNotice, which takes in a title and theme as props, and uses styled-components library to create a dynamic notice element with customizable color themes based on the props passed in. An animation effect is also included using the react-animation library.                                                                                                                                                                                                                                                                                                                                                                             | src/components/DisplayNotice.js                  |
| StakingInfo.tsx                   | This code snippet defines a component called StakingInfo that allows users to stake tokens for creating a channel. Users can also import and mint tokens as well as view their balance. The component utilizes external packages such as styled-components and internal components such as LoaderSpinner, among others.                                                                                                                                                                                                                                                                                                                                                                                        | src/components/StakingInfo.tsx                   |
| Faucets.js                        | The code includes a React component that renders a dropdown menu containing URLs to faucets for various testnet environments. The dropdown menu is styled using styled-components and also responds to click events.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | src/components/Faucets.js                        |
| ViewNFTsV2Item.js                 | The code is a React component for displaying and interacting with an NFT (non-fungible token). It leverages web3-react and ethers for connecting with the blockchain, and includes functionality for claiming a reward, displaying the NFT, and transferring ownership. It also uses various external packages like Skeleton and React-Toastify to improve user experience.                                                                                                                                                                                                                                                                                                                                    | src/components/ViewNFTsV2Item.js                 |
| SearchFilter.css                  | The provided code snippet contains CSS rules that mainly manipulate the styling of a date and time picker form field. It specifies the size, alignment, positioning, and formatting of different UI components such as buttons, input fields, dropdown menus, and text labels. The CSS code includes media queries to make the design responsive and adjusts the styles according to the screen size and orientation.                                                                                                                                                                                                                                                                                          | src/components/SearchFilter.css                  |
| InboxComponent.js                 | The code is a React component that renders an inbox/spam box interface with search and filter functionality, using styled components and icon packages. The component maintains state for displaying inbox vs spam and toggling the search and filter options. It also uses an external Feedbox and SpamBox component and a GLOBALS config file.                                                                                                                                                                                                                                                                                                                                                               | src/components/InboxComponent.js                 |
| UploadLogo.jsx                    | The code provides a React component named UploadLogo which allows a user to upload an image, crop it, and then submit it. It depends on various internal and external components including ImageClipper and LoaderSpinner, while accessing various libraries like ethers and styled-components. It also uses web3-react functionality for blockchain integration.                                                                                                                                                                                                                                                                                                                                              | src/components/UploadLogo.jsx                    |
| UniswapWidget.tsx                 | The code snippet provides a React component that renders a Uniswap swap widget. It uses the `useWeb3React` hook for web3 integration, external packages such as `styled-components` and `react-use`, and internal configs such as addresses and appConfig. The component receives props, including default token amounts and an onClose callback function. It utilizes references and click away hooks to handle modal closing and applies a custom theme to the widget.                                                                                                                                                                                                                                       | src/components/UniswapWidget.tsx                 |
| TimerItem.js                      | The provided code snippet is a React component that displays a countdown timer for a specified date/time configured in an external file. The component uses hooks to manage state and to update the timer in real-time. It also includes conditional rendering for displaying additional content and a button that links to an external URL.                                                                                                                                                                                                                                                                                                                                                                   | src/components/TimerItem.js                      |
| SharedStyling.js                  | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | src/components/SharedStyling.js                  |
|                                   | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                  |
| InitState.tsx                     | This code consists of React and Web3 essentials with internal and external components to initialize the contract provider and check user ownership in the Channel. It also checks if the user is an alias or not and fetches their delegators. This code snippet has five hooks written in which InitState() initializes contract provider parameters, checkUserForChannelOwnership() checks if the user is the channel admin, and fetches channel information for more details. checkUserForEthAlias() checks if the user is a channel admin for the Ethereum network and also sends channel details for get alias metadata. checkUserForAlias() checks if the user is a previously registered alias to EPNS. | src/components/InitState.tsx                     |
| ShowDelegates.jsx                 | This code snippet is a React component that allows users to manage delegates for a specific channel. The component uses Web3React to obtain user account and chainId information, and allows for removal of delegated users. It also utilizes several external packages, including styled-components and react-icons.                                                                                                                                                                                                                                                                                                                                                                                          | src/components/ShowDelegates.jsx                 |
| RemoveDelegateModalContent.tsx    | The provided code snippet is a React component that renders a modal for removing a delegate. It includes input fields for the delegate's address, confirmation buttons, and styling. Upon validation and execution, the dynamic toast library is called to display success or error alerts.                                                                                                                                                                                                                                                                                                                                                                                                                    | src/components/RemoveDelegateModalContent.tsx    |
| NavigationButton.js               | The provided code snippet includes a React component named NavigationButton, which renders an item in the navigation bar. NavigationButton receives multiple props including item, data, sectionID, active, and bg, and both external and internal dependencies are imported. When rendered, the NavigationButton component conditionally displays various components and applies different styled-components styles depending on the sectionID and other props passed to it.                                                                                                                                                                                                                                  | src/components/NavigationButton.js               |
| NewTag.tsx                        | The code defines a "NewTag" component, which renders a styled "New" label. The styling includes customizations for the font family, size, color, background, padding, and margin, and is based on a shared styling component ("SpanV2") defined in a separate file. The "NewTag" component can be used throughout the project to indicate new content or functionality.                                                                                                                                                                                                                                                                                                                                        | src/components/NewTag.tsx                        |
| ProcessingInfo.js                 | The code provides a React component that displays a LinearProgress bar, and a message indicating the current progress of a certain process, along with a loading spinner. It also uses some third-party packages and internal components and configurations. The appearance of the component varies depending on the screen size.                                                                                                                                                                                                                                                                                                                                                                              | src/components/ProcessingInfo.js                 |
| ChannelReactivateModalContent.tsx | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | src/components/ChannelReactivateModalContent.tsx |
|                                   | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                  |
| AliasVerificationModal.js         | The provided code snippet is a React component that handles the verification of a user's alias on the Ethereum blockchain. It uses Web3 for blockchain interaction, external packages for UI, and internal components and configs for various functionalities such as post requests and contract verification.                                                                                                                                                                                                                                                                                                                                                                                                 | src/components/AliasVerificationModal.js         |
| ChannelLoading.tsx                | This code provides a React component for displaying a loading skeleton while waiting for data to load. The skeleton consists of rectangular shapes created with MUI's Skeleton package and styled with styled-components. Additionally, a LoaderSpinner component is included for displaying a loading spinner with a title during longer loading times.                                                                                                                                                                                                                                                                                                                                                       | src/components/ChannelLoading.tsx                |
| PoolCard.js                       | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | src/components/PoolCard.js                       |
|                                   | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                  |
| ViewChannelItem.js                | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | src/components/ViewChannelItem.js                |
|                                   | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                  |
| AddSubgraphModalContent.tsx       | This is a React component that displays a modal for adding a subgraph. It includes input fields for subgraph ID and poll time, with validation and error messages. The component also handles communication with the parent component to add the subgraph and display success/failure messages.                                                                                                                                                                                                                                                                                                                                                                                                                | src/components/AddSubgraphModalContent.tsx       |

</details>

<details closed><summary>Config</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Module                         |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
| Globals.js          | The code provides constants for device sizes and margin/padding values, global variables for links, storage, and constants, adjustments for box shadow, radius, and blur, and a set of predefined color values.                                                                                                                                                                                                                                                    | src/config/Globals.js          |
| config-dev.js       | The code snippet defines environmental configurations for a decentralized app (dapp), including API calls related settings, allowed networks, core network data, analytics settings, external links, and smart contract-related information, including addresses and chain details. It exports the configurations in two objects-config and addresses.                                                                                                             | src/config/config-dev.js       |
| Themization.js      | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                      | src/config/Themization.js      |
|                     | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                           |                                |
| channelTuts.js      | The code snippet defines an object that lists various partners of the Ethereum Push Notification Service (EPNS) along with their information such as maintainer address, YouTube videos, and articles. The object is exported as "channelsTuts" variable to be used in other parts of the code.                                                                                                                                                                    | src/config/channelTuts.js      |
| config-localhost.js | The code snippet provides environmental configurations for the dapp, including API call details, allowed networks, network-related data, analytics and Firebase settings, external links, smart contract addresses, and chain details. It uses the config and addresses objects to group the related information into separate categories. The CHAIN_DETAILS object contains a label, name, chain ID, RPC URL, and communication address for each allowed network. | src/config/config-localhost.js |
| config-general.js   | The code exports environmental configurations for a decentralized application (dapp) in different environments, which include API keys and internal components' ABI definitions. The components include various smart contract ABIs used for interacting with the Ethereum blockchain such as ERC20, EPNS, staking, Uniswap and more.                                                                                                                              | src/config/config-general.js   |
| index.js            | This code snippet dynamically loads the appropriate configuration based on the value of a specifc environment variable. It combines the dynamic configuration with a separate general configuration and exports these settings with some associated addresses and ABI information.                                                                                                                                                                                 | src/config/index.js            |
| config-prod.js      | The code snippet provides environmental and smart contract configurations for the Ethereum Push Notification Service (EPNS) decentralized application (dapp). The configurations include API URLs, addresses of EPNS-related smart contracts, allowed networks, and Google Analytics configurations, among others, to support communication, notifications, and transaction functionalities in the dapp.                                                           | src/config/config-prod.js      |
| config-staging.js   | The code snippet provides environmental configurations for a dapp, including API endpoints, network details, smart contract addresses, and external links. These configurations are stored in constants and can be easily retrieved whenever needed. Users can switch between different networks seamlessly with the provided chain details.                                                                                                                       | src/config/config-staging.js   |
| NavigationList.js   | The code defines a navigation list component with various menu items, including inbox, channels, chat, send notifications, governance, incentives, and more, based on different global configurations. Each menu item can have properties such as icons, titles, links, new tab, loading, hidden, header tag, and drilldown to sub-menu items. The code also imports a LoaderSpinner component and some themization configurations.                                | src/config/NavigationList.js   |
| custom.d.ts         | This code snippet is defining a module that can import any file with a ".svg" extension. The module sets the variable "content" to be of type "any" and exports it as the default content of the file. This enables importing SVGs as modules in a TypeScript or JavaScript project.                                                                                                                                                                               | src/config/custom.d.ts         |
| W2WConfig.ts        | The code defines an object containing a Giphy API key and a base64-encoded profile picture. It then exports the object as a default.                                                                                                                                                                                                                                                                                                                               | src/config/W2WConfig.ts        |

</details>

<details closed><summary>Contexts</summary>

| File                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Module                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| VideoCallContext.tsx     | This is a React component providing an interface for implementing a video calling feature using Web3 and third-party tools. It sets up a context for holding the state, elements and data of the video call alongside their methods/workflows such as handling incoming calls, initializing the video asynchronously, toggling video/audio states, sending/receiving video meta data, etc.                                                                                                                                                                     | src/contexts/VideoCallContext.tsx     |
| ChatUserContext.tsx      | The code initializes and exports a global chat user context through a ChatUserContextProvider component. It integrates the data from PushAPI, web3-react, ethers, and w2w in order to provide real-time information, decrypt PGP keys, and facilitate the creation of new chat users, and is used in APP.tsx. The context also includes necessary states and hooks, such as blocked loading visibility, QRCode visibility, local and connected peers, and more.                                                                                                | src/contexts/ChatUserContext.tsx      |
| NavigationContext_old.js | The provided code creates a NavigationContext using the createContext hook and a NavigationContextProvider using the useState hook in React. The NavigationContextProvider is exported as a default. The component takes in a single props parameter, creating a value object containing the state and setState derived from the useState hook and rendering it within the NavigationContext.Provider element. This allows for accessing the state and updating it across components within the app that are also subscribed to the created NavigationContext. | src/contexts/NavigationContext_old.js |
| NavigationContext.tsx    | The code exports a context provider for React applications, along with a context object that contains the initial state of null for navigationSetup and a callback function named setNavigationSetup, which sets the state for navigationSetup.                                                                                                                                                                                                                                                                                                                | src/contexts/NavigationContext.tsx    |
|                          | Any child component inside this provider can access these values via the useContext hook.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                       |
| AppContext.tsx           | This code defines a React AppContext and its provider component called AppContextProvider. It creates a state variable called web3NameList, using the useState hook, and provides it to the context via the provider component. This allows any nested component access to this global state variable.                                                                                                                                                                                                                                                         | src/contexts/AppContext.tsx           |
| NotificationContext.tsx  | The code snippet provides a NotificationContext object with its initial value and a setter function. It also defines a NotificationContextProvider component that is used to wrap other components as children and provides them with NotificationContext. The NotificationContext can be used to manage notifications and update their count within the wrapped components.                                                                                                                                                                                   | src/contexts/NotificationContext.tsx  |

</details>

<details closed><summary>Createchannel</summary>

| File                   | Summary                                                                                                                                                                                                                                                                                                                                                             | Module                                           |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| createChannel.css      | The provided code snippet contains several CSS selectors, applying various styles to HTML elements in order to modify their appearance and behavior. These styles include changes to text color, border properties, box shadows, and element positioning. Additionally, there are styles for hover and focus events, an image filter, and the display of a tooltip. | src/modules/createChannel/createChannel.css      |
| CreateChannelModule.js | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                       | src/modules/createChannel/CreateChannelModule.js |
|                        | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                            |                                                  |

</details>

<details closed><summary>Creategroup</summary>

| File                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Module                                                                        |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------|
| AddWalletContent.tsx        | This code snippet imports necessary components for a group chat functionality, including React, Web3, and styled-components, and defines a UI component to handle adding new members to a group chat. It fetches user data based on input, checks if the user is valid, adds the user to a member list, and provides an option to create or add to a group chat. The UI includes input search bar and displays a loading spinner and error message when necessary. | src/components/chat/w2wChat/groupChat/createGroup/AddWalletContent.tsx        |
| GroupDetailsContent.tsx     | The code defines the functional components of a React-based chat application that allows users to create a P2P chatgroup with file-sharing functionalities. It employs external packages including styled-components and a custom useToast hook, and internal reusable components. It also contains helper functions for image and form validation such as file reader, validator, and error messages.                                                             | src/components/chat/w2wChat/groupChat/createGroup/GroupDetailsContent.tsx     |
| CreateGroupModalContent.tsx | The provided code snippet is a React component for creating a group in a chat application. It uses Web3 for blockchain transactions and styled-components for styling, and allows users to add group details and members, before finally creating the group via an API. The component also includes pop-up modal functionality and usage of Toast functionality.                                                                                                   | src/components/chat/w2wChat/groupChat/createGroup/CreateGroupModalContent.tsx |
| GroupModalHeader.tsx        | The provided code snippet imports and exports a component named'GroupModalHeader', which renders a header with customizable title text, a back button (with optional function prop), and a close button (with required function prop). The component uses reusable styling components from the'SharedStylingV2' module, device-width-check and theme hooks, and SVG icon components from under the'assets/chat' directory.                                         | src/components/chat/w2wChat/groupChat/createGroup/GroupModalHeader.tsx        |
| MemberListContainer.tsx     | The code snippet is a React component that generates a member list container with dropdown menus and various options for modifying members of a group chat on a messaging platform. The component uses external packages such as styled-components and react-use, and internal components such as ImageV2 and Dropdown. Some of the main functionalities include dismissing an admin member, adding a new admin member, and removing a member completely.          | src/components/chat/w2wChat/groupChat/createGroup/MemberListContainer.tsx     |

</details>

<details closed><summary>Editchannel</summary>

| File                 | Summary                                                                                                                                                                                                                                                                                                                                               | Module                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| uploadLogoModal.tsx  | This code provides a react component that renders a modal for uploading and cropping images to resize to 128px, and saves the cropped image as channelLogo. It uses the react-use library to implement click-away functionality and the styled-components library for styling. It also provides buttons to crop or upload image based on user action. | src/modules/editChannel/uploadLogoModal.tsx  |
| EditChannel.tsx      | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                         | src/modules/editChannel/EditChannel.tsx      |
|                      | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                              |                                              |
| EditChannelForms.tsx | This code snippet is a React component that defines a form for editing a channel's name, description, and website URL. It uses styled-components and primates/SharedStyling to define the layout and styling of the form. The code also includes functions for validating the inputs and displaying error messages.                                   | src/modules/editChannel/EditChannelForms.tsx |

</details>

<details closed><summary>Errormessagelabel</summary>

| File                  | Summary                                                                                                                                                                                                            | Module                                                           |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|
| errorMessageLabel.tsx | The code snippet exports a react component called "ErrorMessage" that displays an exclamation icon and a given message in red color. It uses internal components for styling and takes one props called "message". | src/components/reusables/errorMessageLabel/errorMessageLabel.tsx |

</details>

<details closed><summary>Faq</summary>

| File          | Summary                                                                                                                       | Module                        |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------|:------------------------------|
| FaqModule.tsx | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions' | src/modules/faq/FaqModule.tsx |
|               | For more information check: https://httpstatuses.com/400                                                                      |                               |

</details>

<details closed><summary>Files</summary>

| File      | Summary                                                                                                                                                                                                                                                                                                                                                                                | Module                                              |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| Files.tsx | The code snippet includes a React component called "Files" which renders a styled file download element. The component receives message content as props which are parsed and displayed as file name, file size, and an icon indicating the type of file downloaded. The element includes a download link and is styled using a scalable vector graphics framework called FontAwesome. | src/components/chat/w2wChat/TypeBar/Files/Files.tsx |

</details>

<details closed><summary>Gifs</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                        | Module                                                 |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
| GifPicker.tsx | The code snippet provides a reusable GifPicker component using React and Web3 with functionality that fetches gifs from GiphyAPI and displays them a 3x3 grid layout, which can be used on any project with an interface for selecting gifs. It includes loader and Search functions and utilizes third-party libraries such as styled-components for styling. | src/components/chat/w2wChat/TypeBar/Gifs/GifPicker.tsx |

</details>

<details closed><summary>Gov</summary>

| File          | Summary                                                                                                                       | Module                        |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------|:------------------------------|
| GovModule.tsx | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions' | src/modules/gov/GovModule.tsx |
|               | For more information check: https://httpstatuses.com/400                                                                      |                               |

</details>

<details closed><summary>Groupinfo</summary>

| File                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                            | Module                                                                    |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------|
| PendingMembers.tsx        | This code snippet defines a React component named "Pending Members". It displays pending member requests within a styled wrapper, with a click-to-toggle button and arrow icon. The number of pending requests are displayed in a rounded label and the requests themselves can be expanded within a scrollable container, which can dynamically switch height. The code also imports and utilizes various styled-components and helper functions. | src/components/chat/w2wChat/groupChat/groupInfo/PendingMembers.tsx        |
| ProfileCard.tsx           | This code snippet provides a React component called ProfileCard, which generates a custom user profile card complete with dropdown menus and admin labels. It imports several external packages such as'styled-components','useWeb3React','ethers' along with several helper functions. The component props come with functions to handle the display of the dropdown menu and which profile card components and data to render.                   | src/components/chat/w2wChat/groupChat/groupInfo/ProfileCard.tsx           |
| groupInfoModalContent.tsx | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                      | src/components/chat/w2wChat/groupChat/groupInfo/groupInfoModalContent.tsx |
|                           | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                           |                                                                           |

</details>

<details closed><summary>Helpers</summary>

| File                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Module                                 |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| UtilityHelper.old.js       | The code provides a set of utility functions to help with Ethereum network (chain) identification, address identification, and environment setup. It checks whether the user is accessing the application from production, staging, development servers, or localhost, and provides a boolean output based on the respective environment. In addition, the code disables browser notifications on Metamask iphone mobile while using Ethereum-based dApps.                                                                                                                                                                                 | src/helpers/UtilityHelper.old.js       |
| RoutesHelper.ts            | The provided code defines several service endpoints with corresponding URL strings for connectivity to different modules, e.g., `users`, `ipfs`, and `channels`. These URLs are dynamic and are based on the version of the `nodeAPIVersion` configured in the app's imported configuration file.                                                                                                                                                                                                                                                                                                                                          | src/helpers/RoutesHelper.ts            |
| AirdropHelper.ts           | The provided code snippet includes essential functions related to an airdrop smart contract, expressed decidedly in TypeScript, and employing both the React and Web3 frameworks. The custom airdrop methods are implemented as a separate module thus being reusable, resolving merkle roots in air drop claims, verifying user claims proving the balance and ensuring roots, account, and amounts have not been tampered with at various levels, and figuring out if a certain address is valid given the Airdrop contract.                                                                                                             | src/helpers/AirdropHelper.ts           |
| ValidationHelper.ts        | The code provides several utility functions for React and web3 integration. It includes functionalities to validate input string length, URL format, and Ethereum addresses. Additionally, there is a function that returns a boolean indicating if the current browser is an iPhone and another to disable browser notifications for Metamask on iPhone mobile.                                                                                                                                                                                                                                                                           | src/helpers/ValidationHelper.ts        |
| ChainHelper.ts             | The provided code snippet uses React and Web3 to handle network change requests related to Ethereum chains. It first checks if the requested chain is allowed, and then tries to switch to it using provider.request(). If the chain is not added to MetaMask, it adds the chain using provider.request() with the new chain details. The function handles errors throughout the process.                                                                                                                                                                                                                                                  | src/helpers/ChainHelper.ts             |
| PushTokenContractHelper.ts | The provided code snippet contains functions that enable fetching and manipulating PushToken, an ERC-20 compatible token. It involves functions for getting the approval amount, checking if a certain amount of tokens are owned by an address, importing the token into a user's wallet, minting the token and also approving a certain amount of funds to be spent by third parties. The functions interact with the Ethereum network via ethers.js and require a provider or signer for execution.                                                                                                                                     | src/helpers/PushTokenContractHelper.ts |
| NFTHelper.ts               | The code defines a TypeScript module that provides helper functions for interacting with contracts in a decentralized app built with React and Web3. The module includes functions for getting balance, total supply, owner, and metadata for a specific token id, as well as for transferring an NFT and getting claimable amount.                                                                                                                                                                                                                                                                                                        | src/helpers/NFTHelper.ts               |
| UtilityHelper.ts           | The code snippet defines utility helper functions and data mapping objects that are useful for various Ethereum and other blockchain-related development tasks. It includes functionality to identify whether a given blockchain instance belongs to the Ethereum Mainnet or another network, to set up masked token channels, and to convert different identifying properties between simplified aliases and their expanded identifier formats. It also includes functionality to perform alphabetical swapping of selected object properties, shorten strings, and obtain or display attractive abbreviated aliases in various contexts. | src/helpers/UtilityHelper.ts           |
| TimerHelper.ts             | This code provides various functionalities related to handling dates and timestamps in JavaScript. These include conversion of timestamps to formatted dates, checking if a tag for showing new content should be visible based on a start date and number of days, calculation of time remaining until a certain timestamp, adding a number of days to a given timestamp to get the date after those days, as well as converting a timestamp to a string that shows the date and time in a human-friendly format.                                                                                                                         | src/helpers/TimerHelper.ts             |
| CryptoHelper.ts            | The code provides a wide range of functions related to encryption and decryption such as encrypting with random public key, decrypting with wallet RPC method, encrypting with ECIES etc. It also has the functionality to output message payloads if required along with creating random strings and public keys. Overall, it is an extensive helper module for crypto-related tasks.                                                                                                                                                                                                                                                     | src/helpers/CryptoHelper.ts            |
| InputValidation.ts         | This code snippet exports two functions. isEmpty tests if a string input is empty or not. isAllFilledAndValid checks if all input fields are filled and valid according to certain conditions specific to the program it's designed for. These conditions include length validation, correct addresses, and valid URLs.                                                                                                                                                                                                                                                                                                                    | src/helpers/InputValidation.ts         |
| GaslessHelper.ts           | The code provides functionalities for creating and calling delegate transactions using React, Web3, the EPNSCoreHelper API, and external packages such as react-toastify. It includes functions for creating transaction objects, checking for delegate errors, and calling the delegate API with necessary details like signatures, accounts, addresses, and expiry times. It also sets up defaults for toast alerts to display success and error messages to the user.                                                                                                                                                                   | src/helpers/GaslessHelper.ts           |
| WithGasHelper.tsx          | This code provides a function to execute a delegate transaction with Ethereum Provider Notification Service (EPNS) Token. It includes error handling and the ability to display loading and completion messages. The function takes in variables including the delegateeAddress, EPNS Token, toast, and library.                                                                                                                                                                                                                                                                                                                           | src/helpers/WithGasHelper.tsx          |
| CaipHelper.ts              | This code provides a set of functions that convert between standard chain and address formats and a format called CAIP designed for use in decentralized systems. The functions allow for the conversion of chain IDs to their respective CAIP format and the conversion of user addresses to their respective address CAIP format. The code also accounts for EIP-155 enabled chains, which require a slightly different format.                                                                                                                                                                                                          | src/helpers/CaipHelper.ts              |
| index.ts                   | The provided code exports all the functionalities of the "PushTokenContractHelper" module, making them available for use in other parts of the codebase as needed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | src/helpers/index.ts                   |
| EPNSCoreHelper.ts          | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | src/helpers/EPNSCoreHelper.ts          |
|                            | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                        |
| IpfsHelper.ts              | The code snippet involves importing external packages like'ipfs-http-client' and internal components like'../services/ipfs' and'../UtilityHelper'. It uses environment-specific configurations based on whether a production environment is being used or not. The function'IPFSupload' uploads a provided string to the IPFS network using Infura and returns the storage pointer (path) of the uploaded content.                                                                                                                                                                                                                         | src/helpers/IpfsHelper.ts              |
| LogoSizeHelper.ts          | The provided code snippet consists of two functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | src/helpers/LogoSizeHelper.ts          |
|                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                        |
|                            | 1. toDataURL(url, callback): This function receives a URL and a callback, and outputs a Base64 representation of an image identified by the URL, returning the data in array buffer format.                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                        |
|                            | 2. handleLogoSizeLimitation(base64): This function takes the inline base64 representation of an image as input and uses the image-size library to return an object containing a success flag (indicating if the image size and extension meet the requirements) and an information string conveying the results of the image checks.                                                                                                                                                                                                                                                                                                       |                                        |
| StyleHelper.ts             | The provided code defines a "StyleHelper" module that contains a single function for changing styles of elements in a web page based on provided input objects with element names, properties, and values. It uses the "map" method to iterate through the provided array of objects and set the style of each matching HTML element accordingly. This module can be used to modify the visual appearance of web pages dynamically.                                                                                                                                                                                                        | src/helpers/StyleHelper.ts             |

</details>

<details closed><summary>Hooks</summary>

| File                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Module                              |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|
| usePeer.ts                | This code snippet contains a custom hook named usePeer, which utilizes the PeerJS library for establishing peer-to-peer connections. It uses the ChatUserContext context and provides several state variables such as myPeer and myPeerID for managing the connection, and it expects to be called inside a functional component.                                                                                                                                                                                                                                  | src/hooks/usePeer.ts                |
| useToast.tsx              | This code defines a custom `useToast` hook in React that provides methods for displaying toast messages and loader notifications. It utilizes external packages like `react-icons` and `styled-components`, and allows customization via props like `autoClose` and `position` for the toast messages. The hook is designed to be used with other React components and can be imported elsewhere.                                                                                                                                                                  | src/hooks/useToast.tsx              |
| useModal.tsx              | The provided code snippet defines a custom hook called "useModal" that creates a modal component, it allows for setting the inner content of the modal or custom styling of the backdrop, and it handles the state of whether the modal is open or closed. It also uses some external libraries and specific types are defined for the modal props.                                                                                                                                                                                                                | src/hooks/useModal.tsx              |
| useAsyncOperation.ts      | The code provides a custom hook for asynchronous operations in React. It utilizes `useState` and `useCallback` hooks from React. The `useAsyncOperation` hook accepts an asynchronous function as a parameter and returns an object containing loading state, error object, and a function to execute the async operation. The hook also handles loading state and error management while executing the async operation.                                                                                                                                           | src/hooks/useAsyncOperation.ts      |
| useMediaQuery.ts          | The code snippet provides a custom React hook called useMediaQuery that enables responsive web development by detecting the match of a specified media query. It utilizes useState and useEffect hooks to track changes in the media query and return a true or false value of whether the query matches the current screen.                                                                                                                                                                                                                                       | src/hooks/useMediaQuery.ts          |
| useInactiveListener.ts    | The provided code snippet sets up a function called useInactiveListener, which listens for several events related to Web3 React and React. When an event occurs, the function logs a message about it. This function could be useful in a scenario where Web3 functionality needs to be maintained throughout an application.                                                                                                                                                                                                                                      | src/hooks/useInactiveListener.ts    |
| useBrowserNotification.ts | The code defines a custom hook'useBrowserNotification' to set up browser notifications triggered by Firebase cloud messaging. The hook receives an'account' parameter, uses Firebase browser functions to initiate it, and listens for notifications upon subsequent trigger. On receiving and processing notifications, the hook establishes whether browser Notification API is available. If true, it displays notifications with specific options; if false, it displays toasts with partially similar functionality based on external react-toastify library. | src/hooks/useBrowserNotification.ts |
| useClickAway.ts           | This code defines a React hook, "useClickAway", which detects clicks outside passed elements and performs callback functions accordingly. It takes in two refs and an onClickAway callback. When either of the ref elements are clicked outside of, the onClickAway function is triggered. The hook is geared towards common uses such as dropdown toggling or modal closing.                                                                                                                                                                                      | src/hooks/useClickAway.ts           |
| useSDKSocket.ts           | The code exports a custom hook `useSDKSocket` that returns the connection details of a socket with a set of components. These details include the connection status, the messages exchanged since the last connection interruption, and the information of any group activity since the last connection interruption. The hook also handles events such as incoming and accepted video calls as well as chat messages and group creation.                                                                                                                          | src/hooks/useSDKSocket.ts           |
| useModalBlur.tsx          | The provided code snippet is a React hook that creates a customizable modal with blurred background, which can be used to prompt user input or display information. The hook also includes functionality to prevent scrolling behind the modal when active, and it provides an option to position the modal either absolutely or fixed to the root element. The code exports the hook as useModalBlur.                                                                                                                                                             | src/hooks/useModalBlur.tsx          |
| index.ts                  | The code snippet exports multiple functions to be used with various devices and features. These functions include checking device width, connecting eagerly, monitoring inactivity, using the SDK socket, and employing asynchronous operations.                                                                                                                                                                                                                                                                                                                   | src/hooks/index.ts                  |
| useEagerConnect.ts        | This code utilizes the Web3React core library to connect to the Ethereum network and execute transactions. If the user is accessing the site through a Ledger app, it uses the Ledger Live connector, otherwise, it uses an injected connector. The `useEagerConnect` hook ensures that the connection is initiated only once upon mounting.                                                                                                                                                                                                                       | src/hooks/useEagerConnect.ts        |
| useResolveWeb3Name.ts     | The code provides React hook (useResolveWeb3Name) that can resolve web3 name (ENS or Unstoppable Domains) based on Ethereum address and Infura API key. The hook uses ethers.js and Web3-to-Web3 translation library (w2w) for resolving the name. The resolved name is then cached in the AppContext.                                                                                                                                                                                                                                                             | src/hooks/useResolveWeb3Name.ts     |
| useDeviceWidthCheck.ts    | This code provides a custom hook in React which allows you to check the width of your device's window. The hook updates the device width whenever there is a window resize, and can be used to determine if the device width falls below a specified threshold `deviceWidth`.                                                                                                                                                                                                                                                                                      | src/hooks/useDeviceWidthCheck.ts    |

</details>

<details closed><summary>Inbox</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                            | Module                            |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| InboxModule.tsx | This is a code snippet for an InboxModule component that handles a variety of functions including fetching user information and setting up contract instances. The code includes various dependencies, constants, and internal components such as theme providers and notification toasts and employs React hooks to handle state. The component ultimately returns a container with an inbox component and feedbox nested within. | src/modules/inbox/InboxModule.tsx |

</details>

<details closed><summary>Intentfeed</summary>

| File           | Summary                                                                                                                                                                                                                                                                 | Module                                                |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| IntentFeed.tsx | The code snippet is a React component that renders a list of chat requests (called "intents"). It makes use of multiple context hooks and external packages such as Waypoint and styled-components. It also includes functionality for pagination and loading spinners. | src/components/chat/w2wChat/intentFeed/IntentFeed.tsx |

</details>

<details closed><summary>Internal</summary>

| File                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                     | Module                                     |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| InternalDevModule.tsx | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                               | src/modules/internal/InternalDevModule.tsx |
|                       | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                    |                                            |
| DemoModalContent.tsx  | This code provides a React component implementing a demo modal window. It features a container with a customizable heading (text-based) and a close button with event listener, via styled-components and reusable UI components. The modal triggers automatically upon code call (i.e. onClick) and closes via both button-click or clicking of modal exterior, bringing users back to background content. | src/modules/internal/DemoModalContent.tsx  |

</details>

<details closed><summary>Ipfs</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                    | Module                          |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| ipfsUpload.ts | The provided code is a function that enables users to upload data to InterPlanetary File System (IPFS) using a post request sent to a specified IPFS endpoint URL. The input data is processed by the post request and then its content identifier (cid) is returned to the user. Any encountered errors are incrementally thrown for effective debugging. | src/services/ipfs/ipfsUpload.ts |
| index.ts      | The code exports all functionality within the "ipfsUpload" file, making them available for use in other files and modules. Essentially, this code enables access to key functions such as uploading files to the IPFS (InterPlanetary File System).                                                                                                        | src/services/ipfs/index.ts      |

</details>

<details closed><summary>Loaders</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                  | Module                                             |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| LoaderSpinner.tsx | The code provides a configurable loader spinner component built using React that can display a spinner and/or progress bar along with optional title and can be displayed with different types and overlay options, and progress bar positioning. It also includes constants and interfaces to define loader properties. | src/components/reusables/loaders/LoaderSpinner.tsx |

</details>

<details closed><summary>Messagefeed</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                            | Module                                                  |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
| MessageFeed.tsx | The provided code defines the MessageFeed component in a React application which handles showing a feed of chat messages. It uses context and state hooks for managing and updating feeds, fetching and filtering messages, and handling pagination and error messaging. It also utilizes various helper functions from external packages to handle tasks such as decryption, fetching chat data, and displaying icons and images. | src/components/chat/w2wChat/messageFeed/MessageFeed.tsx |

</details>

<details closed><summary>Messagewrappers</summary>

| File                       | Summary                                                                                                                                                                                                                                                                                                                                                                | Module                                                                       |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|
| SentMessageWrapper.tsx     | The code provides a React component named'SentMessageWrapper' that contains a styled div named'MessageWrapper' which has default styling attributes such as width, height, padding, and margin. It takes in'props' for alignment and height and returns the component'MessageWrapper' nested with additional elements provided as children in the'SentMessageWrapper'. | src/components/chat/w2wChat/chats/MessageWrappers/SentMessageWrapper.tsx     |
| ReceivedMessageWrapper.tsx | This code defines a component for a received message in a messaging app using the styled-components package. It includes features such as a sender name (if applicable), a profile picture (if in a group chat), and the main text of the message. The component also allows for customizing the alignment, height, and margin of the message wrapper.                 | src/components/chat/w2wChat/chats/MessageWrappers/ReceivedMessageWrapper.tsx |

</details>

<details closed><summary>Modal</summary>

| File      | Summary                                                                                                                                                                                                                                                                                                                                          | Module                                      |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| Modal.tsx | The provided code snippet defines a React modal component. The modal displays an image, date, and a close button on a black overlay. The component is styled using the styled-components library and rendered using the createPortal method. The modal provides functionality for preventing it from being closed by a click event on the image. | src/components/chat/w2wChat/Modal/Modal.tsx |

</details>

<details closed><summary>Nft</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                    | Module                        |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|
| NftModule.tsx | The code snippet provides the implementation of a React component for displaying and interacting with NFTs. It imports various components, packages, and configs necessary for its functionality, including version control buttons, toggle buttons, and NFT display modules depending on version and ownership. The component also features React GA analytics. Finally, it exports the NftModule component as a default. | src/modules/nft/NftModule.tsx |

</details>

<details closed><summary>Pages</summary>

| File                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                    | Module                            |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| InboxPage.js            | This code defines a React component called InboxPage that renders an InboxModule component. It also imports and uses styled-components for styling and SectionV2 for layout configuration. The Container component defined with styled-components sets up the page layout with flex and alignment properties.                                                                                                                              | src/pages/InboxPage.js            |
| TutorialPage.tsx        | The code defines a React component for a tutorial page that imports external packages and internal components. It renders a TutorialModule component within a container styled using styled-components. The Container component is defined using global styling options, including flexbox layout, stretch alignment, and placement of the module component.                                                                               | src/pages/TutorialPage.tsx        |
| ChannelsPage.js         | The code imports and uses React, Styled Components, and an internal ChannelsModule component to create a ChannelsPage. The Container styled component defines page layout settings. The loadTeaser and playTeaser functions are passed to the ChannelsModule as props.                                                                                                                                                                     | src/pages/ChannelsPage.js         |
| InternalDevPage.tsx     | This code snippet defines a component called InternalDevPage that uses an InternalDevModule to render a page. It also defines a Container styling using the styled-components package and an imported section from SharedStyling. The Container is set to display flex with a column direction and items that stretch along with itself.                                                                                                   | src/pages/InternalDevPage.tsx     |
| NFTPage.js              | The provided code snippet includes imports for React, styled-components, and components/reusables/SharedStylingV2. The component composes a page that passes NftModule as props, and defines the page settings. The Container is defined using styled-components and named property.                                                                                                                                                       | src/pages/NFTPage.js              |
| YieldFarmingPage.js     | The code imports React, styled components, and a YieldFarmingModule component. It defines a YieldFarmingPage component that displays the YieldFarmingModule within a styled container. The container properties include flexbox settings controlling alignment and dimensions.                                                                                                                                                             | src/pages/YieldFarmingPage.js     |
| AirdropPage.tsx         | This code snippet defines a functional React component for an AirdropPage containing an AirdropModule. The page settings are defined using styled components with the Container component rendering a flexbox container that also includes React GA analytics.                                                                                                                                                                             | src/pages/AirdropPage.tsx         |
| NotAvailablePage.tsx    | The provided React code comprises of various essential functionalities including importing of external styling packages, rendering of an unavailable page for absent cryptocurrency network, and using Web3React core. The useEffect hooks section constantly replays the window's URL in the event of being redirected to other sections of the platform. The Default Export section enables presentation to other possible applications. | src/pages/NotAvailablePage.tsx    |
| SendNotifsPage.tsx      | This is a code snippet for a React page that includes the SendNotifsModule component and some styling. The Container styled-component defines the positioning and alignment of the SendNotifsModule. The page is exported as SendNotifsPage.                                                                                                                                                                                               | src/pages/SendNotifsPage.tsx      |
| SupportPage.tsx         | The code snippet is a React component for a support page which imports external packages including ReactGA and styled-components. It also imports internal components and configurations, and renders a section containing a SupportModule component. The Container variable is used to define the page settings such as flex layout and alignment.                                                                                        | src/pages/SupportPage.tsx         |
| ChannelDashboardPage.js | The code defines a React functional component called ChannelDashboardPage that renders a wrapper component (styled with default props) that nests the ChannelDashboardModule, for displaying information on channel dashboard. Additional packages (e.g., styled-components and React-GA) and internal configurations (in the GLOBALS file) are imported for use within the component.                                                     | src/pages/ChannelDashboardPage.js |
| ReceiveNotifsPage.js    | The code is a React component that renders a page for receiving notifications. It includes external packages like ReactGA and styled-components, as well as an imported internal component called ReceiveNotifsModule. The component uses flexbox to control and layout the content of its container.                                                                                                                                      | src/pages/ReceiveNotifsPage.js    |
| ComingSoonPage.tsx      | The code provides a ComingSoonPage component with styled heading that displays the text "Coming soon." with additional styling options. It also imports and utilizes styled-components ThemeProvider to assign themes and customized styling options.                                                                                                                                                                                      | src/pages/ComingSoonPage.tsx      |
| FAQPage.tsx             | The code snippet contains a React component that renders a FAQ page using a FaqModule. The component also imports packages from React and styled-components and a global configuration from GLOBALS. The Container style is defined to align and position the faq module within a section.                                                                                                                                                 | src/pages/FAQPage.tsx             |
| ChatPage.tsx            | The code defines a React ChatPage component that imports external and internal packages and configurations. The component utilizes the ChatModule and params to render a chat page. The container is styled using CSS flexbox properties.                                                                                                                                                                                                  | src/pages/ChatPage.tsx            |
| SpamPage.js             | The code snippet imports the necessary packages, styles the interface and creates a React component for the Spambox. The component renders a container with the Spambox interface and invokes ReactGA.pageview to update page views on the request. Finally, the component InboxPage is exported as default for use.                                                                                                                       | src/pages/SpamPage.js             |
| GovPage.tsx             | This code snippet imports the necessary modules and components to construct a government page. The page comprises a GovModule component that is styled using CSS, and renders within a Container that positions the components vertically centered and toward the top of the page.                                                                                                                                                         | src/pages/GovPage.tsx             |

</details>

<details closed><summary>Primaries</summary>

| File                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Module                             |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| BlockiesIdenticon.js | The provided code is a React component, which renders a canvas with an identicon image using data provided by the "blockies" module. The component can be customized with several options including a seed value, foreground and background colors, size and scale, and spot color. The component includes a "getOpts" helper function which returns defaults values if no options are passed through props. The component triggers a canvas redraw when a relevant prop is changed, such as the seed value. | src/primaries/BlockiesIdenticon.js |
| Bell.js              | This code defines a reusable component called Bell that renders a clickable bell icon, which can display a badge count and animate on click. It uses the styled-components library for styling and the react-animation library for animation effects. The bellPressedCB prop allows the component to execute custom functions when clicked.                                                                                                                                                                  | src/primaries/Bell.js              |
| InfoTooltip.js       | The code is a React component for displaying an icon button that, when hovered over, shows a message tooltip. It uses the external packages, `react-icons` and `@material-ui/core`. It is intended to be used for displaying information tooltips in a UI.                                                                                                                                                                                                                                                   | src/primaries/InfoTooltip.js       |
| NotificationToast.js | The code snippet is a functional React component that displays a notification using the react-toastify package. The notification is customized with styled-components and it allows for user interaction by clicking on it to clear the notification. The component exports as default the NotificationToast function.                                                                                                                                                                                       | src/primaries/NotificationToast.js |
| AutoImageClipper.tsx | The provided code snippet defines a React component for image cropping, resizing, and converting. It uses external packages like react-easy-crop and react-image-file-resizer. The component takes in an image source, width, height and onImageCropped callback function as props, and returns the cropped image passed through onImageCropped function.                                                                                                                                                    | src/primaries/AutoImageClipper.tsx |
| Profile.tsx          | This code snippet is a React component that creates a user profile header with a dropdown menu to allow the user to connect or disconnect their wallet, access the production dApp and get their wallet address. The component uses Web3 Context, external packages like styled components and custom hooks like useClickAway to enhance user experience.                                                                                                                                                    | src/primaries/Profile.tsx          |
| blockies.js          | The provided code snippet is a random icon generator that uses pseudorandom functions to create a variety of colorful blocky shapes with user-specified colors, sizes and scaling. The core functionalities include randomizing colors, generating binary data, and rendering icons on a HTML canvas using the randomized data and color codes. The API provides methods for creating and rendering icons. It can be used in Node.js and browser environments.                                               | src/primaries/blockies.js          |
| ImageClipper.js      | The provided code snippet is a React component that enables image cropping and compression. It utilizes the libraries React, react-easy-crop, styled-components, Pica, and Compressor. Images can be resized and compressed using either Pica or Compressor, depending on the browser used. The component uses a canvas element for displaying and cropping images and allows the user to zoom and adjust the position of the crop area.                                                                     | src/primaries/ImageClipper.js      |
| DisplayNotice.js     | This code snippet is a React component that displays a notice with a title that fades in and out when the title changes. It imports packages such as React, styled-components, and react-animation to implement the functional code. It also defines the CSS styles for the notice box container and the notice display.                                                                                                                                                                                     | src/primaries/DisplayNotice.js     |
| LoaderSpinner.tsx    | The provided code snippet exports a React component called LoaderSpinner, which contains a loading spinner from an external package called react-spinners. The spinner displays a fading effect over a specified period. The spinner's height, width, color, and CSS styles have been overridden with props passed down to the component.                                                                                                                                                                    | src/primaries/LoaderSpinner.tsx    |
| SharedStyling.js     | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                | src/primaries/SharedStyling.js     |
|                      | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                    |

</details>

<details closed><summary>Profile</summary>

| File        | Summary                                                                                                                                                                                                                                                                                                                                                                                    | Module                                          |
|:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| Profile.tsx | This is a React component that displays user wallet details, including the user's profile picture and shortening their wallet address. It also has a settings icon that can toggle visibility of a QR code. The component heavily utilizes third-party packages like MUI and MUI-styled for styling and web3-related methods from @web3-react/core are used to connect to a web3 provider. | src/components/chat/w2wChat/profile/Profile.tsx |
| index.ts    | The provided code snippet exports the component'Profile' from'./Profile' to be used in other parts of a React application. Essentially, it allows the'Profile' component to be accessed and utilized in different files within the application.                                                                                                                                            | src/components/chat/w2wChat/profile/index.ts    |

</details>

<details closed><summary>Progress</summary>

| File                | Summary                                                                                                                                                                                                                                                                                   | Module                                                |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| ProgressBarUnit.tsx | This code snippet exports a progress bar component that can render a progress percentage with custom styling options such as color and notice messages. The progress bar is created with styled components and uses shared styling from the'component/reusables/SharedStylingV2' library. | src/components/reusables/progress/ProgressBarUnit.tsx |

</details>

<details closed><summary>Public</summary>

| File                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                              | Module                          |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| index-alpha.html         | The provided code is an HTML template for the Push Alpha App (previously EPNS), a communication protocol of Web3. It includes meta tags and links to resources like icons and a manifest file. It also has a script for single page apps on GitHub pages. The body contains a div for the app's root and a div for portal functionality. Note that some parts are commented out, like a script for an external source.                               | public/index-alpha.html         |
| index.html               | This code snippet is an HTML file that contains various meta tags and links for web app installation, social media sharing, and CSP configuration. It also contains a script for single page apps on GitHub and a div section for the root and portal of the app.                                                                                                                                                                                    | public/index.html               |
| CNAME                    | The provided code snippet is a URL to a website called "autogenerated.epns.io". Without additional information or context, it is not possible to offer a precise and concise summary of its core functionalities.                                                                                                                                                                                                                                    | public/CNAME                    |
| firebase-messaging-sw.js | The code initializes a Firebase app with the provided API key and retrieves the Firebase messaging service. It listens for background messages and upon receipt of a message, displays the notification with relevant information such as the notification title, message body, and launcher image. The code also handles notification click events and opens the desired URL in the appropriate context based on interaction with the notification. | public/firebase-messaging-sw.js |
| 404.html                 | The code snippet is a JavaScript script that helps convert paths and a query string to just a query string while redirecting the browser to a similar URL that only contains a query string and hash fragment. It changes the format of the URL to "www.foo.tld/?/one/two&a=b~and~c=d#qwe". It's particularly useful for Single Page Apps hosted on GitHub Pages without custom domain setup.                                                        | public/404.html                 |
| _redirects               | The provided code snippet indicates that upon requesting the index.html route, the server will respond with a 200 status code. This essentially means that the server is indicating a successful response to the client's request for the specified route.                                                                                                                                                                                           | public/_redirects               |
| index-prod.html          | The provided HTML code snippet establishes the head and body structure for a web page, defining metadata and necessary assets. It includes references to the page's favicon, touch-icon, theme, and description, as well as social media meta tags. The code also contains a script to enable single-page app functionality on GitHub Pages. Finally, it creates an app shell by setting up the root and portal divs.                                | public/index-prod.html          |
| site.webmanifest         | This code snippet provides metadata for the Push App. It includes the app's name and icons of two different sizes. Additionally, it sets theme and background colors and the display type to "standalone".                                                                                                                                                                                                                                           | public/site.webmanifest         |
| index-staging.html       | The provided code is an HTML template file with additional metadata for search engines, social media sharing, and mobile app installation. It includes various link and meta tags for site icons, descriptions, and themes. It also has a script for single-page app routing and a div element for HTML rendering.                                                                                                                                   | public/index-staging.html       |
| index-dev.html           | The provided code snippet is an HTML document with various meta tags added to define the website's metadata, such as its title, description, and social media properties for sharing. Additionally, there are links to various images used throughout the website, address URLs for different endpoint services, and guidelines on how the website behaves with single-page apps for GitHub pages.                                                   | public/index-dev.html           |
| index-w2w.html           | The HTML code defines the basic structure of a web page, with tags for the title, meta descriptions and images used for social media sharing. It also includes script for Single Page Apps for Github Pages. Inside the body tag, there are divs for the root and portal interfaces, and a default message for users without Javascript.                                                                                                             | public/index-w2w.html           |

</details>

<details closed><summary>Receivenotifs</summary>

| File                    | Summary                                                                                                                                                                                                                                                                                 | Module                                            |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| ReceiveNotifsModule.tsx | The code snippet imports necessary packages and components for building a React module for enabling push notifications on a wallet. It creates the header section and includes relevant theme styling for responsiveness. The exported module is designed to contain an Info component. | src/modules/receiveNotifs/ReceiveNotifsModule.tsx |

</details>

<details closed><summary>Redux</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                                                   | Module             |
|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| store.js | This code snippet contains a configuration of Redux global state management. It defines the reducers for various slices of the state, combines them in a root reducer and creates a store using the configured rootReducer and middleware with disabled serializable and immutable checks. This store can be used to manage state across the application. | src/redux/store.js |

</details>

<details closed><summary>Releases</summary>

| File           | Summary                               | Module                        |
|:---------------|:--------------------------------------|:------------------------------|
| yarn-3.4.1.cjs | Prompt exceeds max token limit: 48443 | .yarn/releases/yarn-3.4.1.cjs |

</details>

<details closed><summary>Reusables</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                                  | Module                                      |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| SharedStylingV2.js | The code contains various styled components with customizable properties such as align-items, background, display, flex, font-size, margin, padding, and more. These components include SectionV2, ItemHV2, ItemVV2, H2V2, ButtonV2, SpanV2, ImageV2, and AInlineV2. This code enables the creation of styled UI elements for use in React applications. | src/components/reusables/SharedStylingV2.js |

</details>

<details closed><summary>Root</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Module              |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
| build.mjs           | This code snippet retrieves environmental variables from a text file, prompts for missing values, applies preset rules to modify the contents of text files comprising the application build, and deploys the modified build files based on command line inputs. It integrates the node.js'async/await' method to ensure high performance when processing user data input across different interfaces.                                                                                                       | build.mjs           |
| config-overrides.js | The code sets up a webpack configuration that resolves various JavaScript modules and implements optimizations such as minification through the use of the "terser-webpack-plugin" and measurement of build speed via the "speed-measure-webpack-plugin". Additionally, a ProvidePlugin is utilized to provide global variables to every module.                                                                                                                                                             | config-overrides.js |
| .eslintrc.js        | This code exports an object that configures an ESLint setup. It uses the Babel parser, has import plugins, and includes a sorting rule to ignore capitalization and declarations when importing. Additionally, the setup disables the requirement for a configuration file.                                                                                                                                                                                                                                  | .eslintrc.js        |
| license-v1          | This code provides the Business Source License 1.1, allowing the copying, modifying, and redistribution of the licensed work, subject to compliance with licensing requirements. The Licensor may make additional use grants and after a certain change date, users may need to comply with a GNU General Public License or purchase a commercial license. The license cannot be modified, and the Licensor covenants to specify specified change licenses and in no way restricts the additional use grant. | license-v1          |

</details>

<details closed><summary>Scripts</summary>

| File             | Summary                                                                                                                                                                                   | Module                                     |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| version-check.sh | This code snippet does the following:                                                                                                                                                     | .github/workflows/scripts/version-check.sh |
|                  | 1. Parses json and captures local version successfully                                                                                                                                    |                                            |
|                  | 2. Creates and cleans up tmp_dir folder                                                                                                                                                   |                                            |
|                  | 3. Checks version between main and current branch assuming that the developer always creates a feature branch to make any changes and does not touch the main branch.                     |                                            |
|                  | 4. Compares the version between the main and current branch, outputs a success message if the main branch is more recent and an error message if the version number has not been updated. |                                            |

</details>

<details closed><summary>Searchbar</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                                                      | Module                                              |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| SearchBar.tsx | The provided code snippet exports a React component called SearchBar. It utilizes various external libraries and packages to enable searching for users or groups based on their Ethereum wallet address, ENS names, or user handles. It also renders a search input field, loads and displays search results, and offers related options such as clearing the input and creating new chats. | src/components/chat/w2wChat/searchBar/SearchBar.tsx |

</details>

<details closed><summary>Segments</summary>

| File                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Module                                   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| Spambox.tsx                 | The provided code snippet is a React function component'Spambox' that sets the header components of a spambox UI, by importing other components and using styled-components. It takes props and returns a styled container with a SpamBox component including features like a filterbar and search capability. All these are exported to be used elsewhere as a package.                                                                                                                                              | src/segments/Spambox.tsx                 |
| spam.tsx                    | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                         | src/segments/spam.tsx                    |
|                             | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                          |
| Feedbox.tsx                 | The code snippet includes a React functional component that renders a notification feedbox with external package imports such as React-Redux, React-use and styled-components as well as several internal components. The feedbox displays notifications fetched from an API and can be filtered, searched, paginated, and decrypted. The code includes state management, asynchronous API calls, and conditional rendering, among other functionalities.                                                             | src/segments/Feedbox.tsx                 |
| Airdrop.tsx                 | The code snippet is a React component that allows a user to claim a token airdrop by interacting with a Solidity smart contract on the Ethereum blockchain. It checks whether the user is eligible and if so, prompts them to claim their tokens. The component also includes a FAQs section and customizable toasts for transaction updates.                                                                                                                                                                         | src/segments/Airdrop.tsx                 |
| Info.tsx                    | This code snippet is for a React component that imports styled components and dotenv, and displays a ViewInfoItem component inside a container div with a maximum height of 80vh and centered alignment.                                                                                                                                                                                                                                                                                                              | src/segments/Info.tsx                    |
| ViewChannels.tsx            | This code snippet is for a React component called "ViewChannels" that renders a list of channels with pagination and search functionality. It retrieves data from API services, updates the state with users subscription information and chains network ID. The component also makes use of external packages such as React-Redux and react-waypoint.                                                                                                                                                                | src/segments/ViewChannels.tsx            |
| CreateChannel.js            | The provided code is a React component used to create a channel using IPFS and Ethereum blockchain. It has functionalities to upload an image using the react-dropzone-uploader package, handle form submission, and send a transaction to approve DAI and create an Ethereum smart contract for a channel, along with its required inputs such as a channel name, description, and URL. The component also shows a LoaderSpinner during processing.                                                                  | src/segments/CreateChannel.js            |
| ChannelDashboard.js         | The provided code snippet is a React component that creates a user interface for sending encrypted messages via the Ethereum Push Notification Service (EPNS) using web3 functionality. It takes inputs like recipient, subject, message, and cTA and renders them in the form of styled input fields. The user can select the message type (normal, secret, or targeted), and upon sending a transaction is executed using the EPNSCore contract with specific parameters of recipient, message type, hash, and DAI. | src/segments/ChannelDashboard.js         |
| ChannelTutorial.js          | The provided code snippet includes functions and components for a channel tutorial feature using React and styled-components. It checks if the channel has a tutorial, renders a tutorial item with relevant data, and opens the tutorial video or article upon clicking its button. It also displays metadata information using a MetaInfoDisplayer component.                                                                                                                                                       | src/segments/ChannelTutorial.js          |
| ChannelCreationDashboard.js | The code imports React and some components for styling and creating channels. The main function, ChannelCreationDashboard, renders the CreateChannel component and returns it with some styling components. It fires an empty React.useEffect() on mount. Being a React component, the code can easily be integrated into a larger application for creating channels on a dashboard.                                                                                                                                  | src/segments/ChannelCreationDashboard.js |
| TimerComponent.js           | This code snippet imports React and styled-components packages and an internal TimerItem component. The TimerComponent function returns a Wrapper that displays the TimerItem component with a styled background of a png image. The component is exported as a default.                                                                                                                                                                                                                                              | src/segments/TimerComponent.js           |
| DeprecatedViewChannels.tsx  | The provided code is a React component that implements a user interface for viewing and searching for channels. It uses various external packages and web3 essentials to achieve this. The component includes features such as pagination, dynamic search filtering, and conditional rendering of elements based on search results.                                                                                                                                                                                   | src/segments/DeprecatedViewChannels.tsx  |
| userJourneySteps.tsx        | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                                                         | src/segments/userJourneySteps.tsx        |
|                             | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                          |
| ChatSidebar.tsx             | The provided code considers React and Web3 frameworks to build a chat UI feature. It includes an interface with two tabs ('chats' and'requests'), a search bar, message containers, profile cards, and a bottom bar. Styling is done with Material-UI and Styled-components. The functionality includes handling events such as clicking and typing, indicating unread messages status and rendering dynamic UI content based on user interactions.                                                                   | src/segments/ChatSidebar.tsx             |

</details>

<details closed><summary>Sendnotifs</summary>

| File                 | Summary                                                                                                                                                                                                                                                                                                  | Module                                      |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| SendNotifsModule.tsx | The code snippet sets up a React component for the channel dashboard page, with functions to fetch channel and user information from Ethereum contracts and APIs. It also renders a SendNotifications component when the user is a channel admin. The component includes styled CSS for the page layout. | src/modules/sendNotifs/SendNotifsModule.tsx |

</details>

<details closed><summary>Services</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                      | Module                |
|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|
| index.ts | The provided code exports modules related to various functionalities of a chat application including channels, chats, IPFS, users, and aliases. The'export' keyword allows the code to make these modules available for use in other parts of the application or for external consumption by other programs. | src/services/index.ts |

</details>

<details closed><summary>Sharedmodalcomponents</summary>

| File                   | Summary                                                                                                                                                                                                                                                                                                                                 | Module                                                     |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
| ModalInput.tsx         | The code provides a reusable React component called ModalInput that utilizes styled-components for dynamic rendering. The component receives a title prop and a ref for a custom input field, which is styled with preset dimension and color values from a pre-existing theme. The code exports the ModalInput for easy accessibility. | src/primaries/SharedModalComponents/ModalInput.tsx         |
| ModalHeader.tsx        | This is a React component that displays a modal header with a heading and subheading. It uses the styled-components library to implement styling. The color scheme for the component can be customized through a theme.                                                                                                                 | src/primaries/SharedModalComponents/ModalHeader.tsx        |
| ModalConfirmButton.tsx | The code provides a React component for a button with an option for displaying a loader when in the loading state, with customizable text, color, and background color. The spinner component is imported from an external library and the styling is done with Styled Components.                                                      | src/primaries/SharedModalComponents/ModalConfirmButton.tsx |

</details>

<details closed><summary>Singletons</summary>

| File                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Module                                  |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| YieldFarmingDataStore.js | This code defines a YieldFarmingDataStore class that contains various functions for retrieving data related to yield farming pools, including pool stats, user data, and rewards distributed. It also includes calculations for staking APR and LP pool APR. The class is initialized with account, token, staking, yield farming, and uniswap information, and uses web3 and ethers.js.                                                                                      | src/singletons/YieldFarmingDataStore.js |
| UsersDataStore.js        | The code provides a User Data Store class and a static singleton for User events that can be listened to. The class includes functions for initializing listeners, reseting them, adding and removing callbacks, and retrieving user metadata. The implementation includes calls to other helper functions from the external EPNSCoreHelper module. Finally, the code includes some unused but implemented code for listening to subscribe/unsubscribe and public key events. | src/singletons/UsersDataStore.js        |
| ChannelsDataStore.js     | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                                 | src/singletons/ChannelsDataStore.js     |
|                          | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                                      |                                         |

</details>

<details closed><summary>Slices</summary>

| File                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Module                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| notificationSlice.js     | This code defines a Redux slice for managing notifications. It includes initial state properties for the current page, the notifications themselves, a completed status indicator, and a toggler. It also includes reducer functions for managing these properties, such as incrementing the current page and adding new notifications.                                                                                                                                                | src/redux/slices/notificationSlice.js     |
| channelCreationSlice.js  | This code defines a Redux slice called "channelCreation" with initial state containing a null "processingState". It provides two reducers: setProcessingState updates "processingState" with a given payload, while resetChannelCreationSlice resets the state to its initial value. By exporting the slice and associated actions, they can be imported into other parts of a larger Redux store to enable creation and management of new independent information streams (channels). | src/redux/slices/channelCreationSlice.js  |
| sendNotificationSlice.js | This code exports a Redux slice named "contractSlice" with initial state that includes a loading notification state. It provides 2 action creators to reset the state to the initial value, and to update the "canSend" notification state. Additionally, the code exports an object that lists the notification states.                                                                                                                                                               | src/redux/slices/sendNotificationSlice.js |
| userJourneySlice.js      | The provided code snippet defines a redux slice called "tutorial" that helps in keeping track of the state of a user journey tutorial. It initializes various states including the welcome notifications, whether the tutorial is continuous, and toggles for different components. The slice also contains reducers for updating the tutorial state, which can be called from other parts of the application.                                                                         | src/redux/slices/userJourneySlice.js      |
| spamSlice.js             | The provided code snippet defines a Redux slice for managing a "spam" state. The slice contains functions to add and update notifications, toggle a flag, and reset the state. The state includes information about the page, notifications, and whether fetching is completed.                                                                                                                                                                                                        | src/redux/slices/spamSlice.js             |
| contractSlice.js         | The code defines and exports a Redux slice to maintain a global state of all contracts to be used across a React application. This prevents duplication of logic and passing props everywhere. The slice contains initialization code, creates action creators for setting contract providers, and exports a reducer function to manage the state updates.                                                                                                                             | src/redux/slices/contractSlice.js         |
| adminSlice.js            | This code maintains the logged-in user's state, channel details, privileges, alias information, and delegatees in a Redux store using the createSlice function from Redux Toolkit. It provides a set of action creators to set or reset these states.                                                                                                                                                                                                                                  | src/redux/slices/adminSlice.js            |
| channelSlice.js          | The provided code defines a Redux slice for managing channel metadata and related functions. It maintains the state including channel active, deactivated and blocked states, a list of channel addresses, channel metadata, and user subscriptions and statuses. It further provides functions to manipulate and update states accordingly and exports the slice for external use.                                                                                                    | src/redux/slices/channelSlice.js          |

</details>

<details closed><summary>Spinners</summary>

| File            | Summary                                                                                                                                                                                                                                                                                 | Module                                            |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| SpinnerUnit.tsx | This code snippet defines a Spinner component that can show different types (processing, completed, error, etc.) using SVG images. It uses styled-components to control the appearance and animations. Overall, it provides visual feedback to the user while tasks are being executed. | src/components/reusables/spinners/SpinnerUnit.tsx |

</details>

<details closed><summary>Src</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Module                 |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|
| App.tsx            | The code snippet is a React app that integrates with Web3 for Ethereum blockchain functionality. It includes packages for UI effects, routing, style theming, and context provisioning. The app provides access and management of user wallets, and includes a user tutorial. CSS styles are also provided for numerous UI components.                                                                                                                                                                                                                 | src/App.tsx            |
| index.js           | This code snippet is a configuration file for a React application that includes functionalities such as connecting to the Web3 wallet provider through the Web3React library, integrating with an Apollo GraphQL API via ApolloClient for data fetching, utilizing a Redux store for state management, and providing routing with BrowserRouter from within a main App component. It also sets up environmental variables with dotenv and registers a service worker for a progressive web app (PWA) approach.                                         | src/index.js           |
| index.css          | The code snippet provides the popular normalize.css stylesheet with core CSS rules for developing consistent styles across different browsers. It includes specific rules for document sections, grouping content, text-level semantics, forms, interactive elements, and additional custom CSS rules. It also provides custom font styles using @font-face rules and styles for various components such as buttons, headings, video wrappers, and scrollbars.                                                                                         | src/index.css          |
| AppLogin.tsx       | The code snippet consists of a login page component for a web app, which enables users to connect their wallets to the app through a selection of web3 connectors. The component uses several external packages, imports pre-defined configurations, and defines a few helper functions for error handling and network change. The login buttons change appearance depending on the selected connector and theme, and an animation guides new users through the process. The component also includes legal notices, certifications, and discord links. | src/AppLogin.tsx       |
| serviceWorker.js   | This code snippet registers and unregisters a service worker which enables the app to load faster and provide offline capabilities. The code includes various checks to ensure the service worker is registered correctly and logs messages depending on whether it's running in production or on localhost. It also provides options for developers to execute callbacks when the content is updated or stored for offline use.                                                                                                                       | src/serviceWorker.js   |
| react-app-env.d.ts | The code creates an interface called'Window' with a single property'ethereum' of'any' type. This is used to resolve an error associated with'ethereum' not being recognized as a property of the global window object in TypeScript.                                                                                                                                                                                                                                                                                                                   | src/react-app-env.d.ts |
| connectors.ts      | The code snippet includes packages and connectors that allow for communication with external blockchain networks like Ethereum. The functionalities provided include connecting to wallets, polling transactions, and retrieving data from the blockchain networks. A set of default chain IDs and polling intervals are predefined. Specific areas of use include working with Ethereum wallets and fetching data stored on a blockchain.                                                                                                             | src/connectors.ts      |
| firebase.js        | This code initializes the Firebase app and messenger service in the service worker and provides functions to get the push notification token, listen for incoming messages and register a user's push token with the server using API requests. The code also includes methods to retrieve and set the token in local storage to avoid excessive requests for the same token.                                                                                                                                                                          | src/firebase.js        |

</details>

<details closed><summary>Stickers</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                                             | Module                                                |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| stickerHelper.ts | The code defines a collection of constants, including API endpoints for stickers, image proxies, file icons, reactions UI, and custom emoji. It also includes a regular expression for matching extended pictographic characters and a list of color themes.                                                                                        | src/components/chat/w2wChat/stickers/stickerHelper.ts |
| useFetchHook.tsx | The provided code snippet defines a custom hook, useFetch, which accepts two arguments: a key and a function. It returns an object containing the response data, loading state, and error state. It uses useState and useEffect hooks from React to update the state and cache data while fetching data using the provided function asynchronously. | src/components/chat/w2wChat/stickers/useFetchHook.tsx |

</details>

<details closed><summary>Structure</summary>

| File                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Module                                |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| MasterInterfacePage.tsx | The code is a React component that renders a web application interface with various internal components and routes that dynamically load their content using lazy loading. It also has logic to control the playing of YouTube teaser videos and displays toast containers on the page. Additionally, the component uses styled components to define custom CSS styles for various elements on the page.                                                          | src/structure/MasterInterfacePage.tsx |
| MobileNavigation.tsx    | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                     | src/structure/MobileNavigation.tsx    |
|                         | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                          |                                       |
| Header.tsx              | The provided code defines and exports a Header component with several functionalities, including getting user Web3 context and displaying navigation menus for both desktop and mobile devices. Additionally, it handles error scenarios when a user is unable to connect to Web3 networks and facilitates switching between light and dark mode. The component is built using React and styled-components and imports external packages and internal components. | src/structure/Header.tsx              |
| Navigation.tsx          | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions'                                                                                                                                                                                                                                                                                                                                     | src/structure/Navigation.tsx          |
|                         | For more information check: https://httpstatuses.com/400                                                                                                                                                                                                                                                                                                                                                                                                          |                                       |

</details>

<details closed><summary>Support</summary>

| File              | Summary                                                                                                                                                                                                                                                                               | Module                                |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| SupportModule.tsx | The code is a React component that renders a form for users to contact the site's support team. It includes form validation and error handling, as well as integration with external packages (Dropbox, styled-components). The form is responsive across mobile and desktop devices. | src/modules/support/SupportModule.tsx |

</details>

<details closed><summary>Templates</summary>

| File                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                   | Module                              |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|
| FunctionalTemplate.js | The code imports React and styled-components. It defines a single React component called "module" that uses state and effect hooks, but doesn't have any particular functionality implemented yet. It returns a styled container component with an internal dummy element.                                                                                                                                | src/templates/FunctionalTemplate.js |
| ClassTemplate.js      | The provided code snippet is a React ES6 class component that implements local storage functionality to retain previously entered data. The component includes a text input and a styled Text component that displays the saved value in local storage. When the user enters text, the onChange event is fired to update the state and syncs the latest data with local storage using componentDidUpdate. | src/templates/ClassTemplate.js      |

</details>

<details closed><summary>Toasts</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Module                                              |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| toastOverrides.css  | The code snippet provides CSS styles for overriding the default behavior of toast notifications. The styles disable background color, shadow, and set a higher z-index to stack them on top of other elements. It also sets specific positioning and scaling for up to three simultaneous toasts. Finally, it disables mouse events for the main content of each toast.                                                                                    | src/components/reusables/toasts/toastOverrides.css  |
| NotifToastUI.tsx    | The provided code is a React JS component that handles notifications by receiving data via props and displaying it on the user interface using pre-defined interfaces of `NotificationItem` and `ToastContainer`. The code retrieves the application's theme and notification count, then sets the count to appear in notifications. It also overrides the existing toast appearance and container styles to suit the application's desired look and feel. | src/components/reusables/toasts/NotifToastUI.tsx    |
| toastController.tsx | The code comprises a function that defines the options and behavior of toast notifications displayed on the user's screen. It makes use of the'react-toastify' package to render the notification and'toastOverrides.css' style to customize it. The displayed notification includes a payload and validation for testing input.                                                                                                                           | src/components/reusables/toasts/toastController.tsx |

</details>

<details closed><summary>Toggle</summary>

| File       | Summary                                                                                                                                                                                                                                                                                                                                     | Module                                     |
|:-----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| Toggle.tsx | The provided code snippet is a React component that renders a toggle switch that can take in two props: `isToggleOn` and `onToggle`. The styling is done through styled-components, creating a container, label and input that all come together to create the toggle switch. The switch can be turned on and off through user interaction. | src/components/reusables/toggle/Toggle.tsx |

</details>

<details closed><summary>Tooltip</summary>

| File        | Summary                                                                                                                                                                                                                                                                                                                                         | Module                                       |
|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| Tooltip.tsx | The code defines a tooltip component with features such as on-hover display after 500ms, customization of tooltip placement, and ability to disable the tooltip based on a boolean value. It leverages React hooks such as useState and useEffect for state management, and utilizes styled-components for styling the tooltip and its wrapper. | src/components/reusables/tooltip/Tooltip.tsx |

</details>

<details closed><summary>Tutorial</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Module                                  |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| TutorialModule.tsx | This is a React web application that uses Web3, Redux, and styled-components libraries. The code snippet defines a function called TutorialModule that renders a UI component with a live walkthrough section to guide the user on using the EPNS Web3 communication protocol. The component contains a QnA item with a question and answer section, and a button to trigger a function that sets the'Run' property in the userJourney state to true. The responsive UI adjusts its style based on the viewport size. | src/modules/tutorial/TutorialModule.tsx |

</details>

<details closed><summary>Typebar</summary>

| File        | Summary                                                                                                                                                                                                                                                                                                                                                                                                    | Module                                          |
|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| Typebar.tsx | This code snippet contains the implementation of a chat input box with various functionalities, such as sending text, emojis, GIFs, and files; filtering malicious script with filterXSS; and handling video call requests. The input box also displays a loading spinner and a snack bar for file uploads, has dynamic text area resizing, and is customizable with styled-components according to theme. | src/components/chat/w2wChat/TypeBar/Typebar.tsx |

</details>

<details closed><summary>Types</summary>

| File       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Module               |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|
| context.ts | The code snippet defines two interfaces: Web3NameListType and AppContextType. The Web3NameListType is an object with string keys and string values. The AppContextType defines an interface for the app's context, including the web3NameList and a setter function setWeb3NameList for updating the web3NameList.                                                                                                                                                                                    | src/types/context.ts |
| chat.ts    | The provided code snippet includes several interfaces that define the structure of different types of objects used in the application, such as messages, users, chat metadata, and feed information. Additionally, the code includes an AppContext interface, which outlines the values and functions available within the application's context. Lastly, the code includes a VideoCallInfoI interface used to define the necessary information for establishing a video call within the application. | src/types/chat.ts    |

</details>

<details closed><summary>Users</summary>

| File                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                | Module                                     |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| getUserSubscriptions.ts | This code snippet defines a function `getUserSubscriptions` that takes in an object containing a user's CAIP address and fetches their subscriptions data from the specified endpoint using an HTTP GET request via `getReq`. A try-catch block handles errors and throws a custom error message if an exception is caught. The function `getUserSubscriptions` returns the subscriptions property of the response data, if it exists. | src/services/users/getUserSubscriptions.ts |
| getUserDelegations.ts   | This code snippet defines a function called getUserDelegations that takes a user's address and retrieves their delegations using an API called PushAPI, passing the app environment's configuration settings. Any potential errors thrown are caught and returned as an Error.                                                                                                                                                         | src/services/users/getUserDelegations.ts   |
| index.ts                | The code snippet consists of a re-export statement where all the functionalities of two modules "./getUserSubscriptions" and "./getUserDelegations" are being exported. These modules are likely related to retrieving subscription and delegation information of a user.                                                                                                                                                              | src/services/users/index.ts                |

</details>

<details closed><summary>Video</summary>

| File                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Module                                            |
|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| VideoCallSection.tsx         | This code is a React component for initiating a video call. It uses Web3 for authentication and the VideoCallContext for managing the video stream. It also includes UI elements for incoming and outgoing calls, and allows for connecting to other users and leaving the call.                                                                                                                                                                                      | src/sections/video/VideoCallSection.tsx           |
| CallButton.tsx               | The provided code snippet exports a CallButton component that takes in parameters for styles, an icon image source, and a onClick callback function. It renders a styled button containing an icon image that triggers the onClick function when clicked. The button's responsive styles are based on media queries.                                                                                                                                                  | src/components/video/CallButton.tsx               |
| MediaToggleButton.tsx        | The provided code snippet is a functional React component that renders a toggle button that switches media on or off. It accepts four props, including the media icon source, width, onClick function, and an optional background color. The component is styled using the styled-components package.                                                                                                                                                                 | src/components/video/MediaToggleButton.tsx        |
| IncomingCall.tsx             | This code defines a functional React component called "IncomingCall" for rendering an incoming video call. It defines an internal state for minimizing the call interface, handles click events for answering and ending the call, and conditionally renders a video player, user info, and call control buttons based on the state of the call. The component also imports various dependencies, plugins, and settings.                                              | src/components/video/IncomingCall.tsx             |
| OutgoingOngoingCall.tsx      | This code snippet represents a React component that renders the UI of an outgoing or ongoing video call. It contains controls for toggling audio and video, displaying user info and a video player, ending the call, and a loader. It adjusts its styles based on device width and whether or not the call is immersive.                                                                                                                                             | src/components/video/OutgoingOngoingCall.tsx      |
| UserInfo.tsx                 | The code snippet is a TypeScript and styled-components implementation of a UserInfo component that takes in defined props and returns a reusable styled container that displays user information (profile picture, username, address, and call status). The component utilizes media queries to adjust the font size and style for better mobile responsiveness.                                                                                                      | src/components/video/UserInfo.tsx                 |
| VideoPlayer.tsx              | The code defines a VideoPlayer component that displays a local video stream and an incoming video stream within specified styled containers. The streams are received and managed by a context API, while ref hooks are used within the component to manipulate the DOM nodes. Additionally, placeholders are shown if video is disabled or if the video call has ended. The component makes use of the React and Web3 libraries to achieve its core functionalities. | src/components/video/VideoPlayer.tsx              |
| IncomingCallModalContent.tsx | The code exports a React functional component called IncomingCallModalContent. It contains two internal styled-components: Container and ContentContainer, and an imported BlurBG component. The IncomingCallModalContent component takes one prop, isIncomingCallMinimized, and conditionally styles the Container and ContentContainer components based on the state of this prop.                                                                                  | src/components/video/IncomingCallModalContent.tsx |

</details>

<details closed><summary>Videocall</summary>

| File                         | Summary                                                                                                                                                                                                                                                                                                                                                                                             | Module                                             |
|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| sendVideoCallNotification.ts | The code snippet defines a function named `sendVideoCallNotification` that sends a video call notification using the PushAPI library. The function takes in three types of input arguments-`VideoCallInfoType`, `UserInfoType`, and `NotifInfoType` and uses these to construct the video payload to be sent along with the notification. This function exports using default export functionality. | src/helpers/videoCall/sendVideoCallNotification.ts |

</details>

<details closed><summary>W2w</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                           | Module                        |
|:--------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|
| twitter.ts    | The code snippet provides a function, checkTwitterUrl, which is designed to identify Twitter URLs within text passed to the function as'message' via props. If a Twitter URL is found, the function returns an object containing the tweet ID and a message type (either "TwitterFeedLink" or "Text").                                                                                                                                            | src/helpers/w2w/twitter.ts    |
| ceramic.ts    | The provided code snippet imports the required npm modules and defines two functions. The `createCeramic` function creates a `CeramicClient` instance, while `getDIDFromWallet` retrieves a decentralized identifier using the `Caip10Link.fromAccount` method from the `@ceramicnetwork/stream-caip10-link` package. This method employs the passed `CeramicClient` instance to generate the decentralized identifier.                           | src/helpers/w2w/ceramic.ts    |
| did.ts        | This code snippet provides functions to create, encrypt, and decrypt DIDs using the did-jwt and dds libraries. The'CreateDID' function creates a new DID, while the'encrypt' and'decrypt' functions use the DID to respectively encrypt and decrypt data. The code also makes use of external packages like'@3id/connect' and'@ceramicnetwork/common'.                                                                                            | src/helpers/w2w/did.ts        |
| udResolver.ts | The code snippet establishes a connection to Unstoppable Domains' Resolution library and returns a Resolution object that derives data from specified providers for Layer 1 and Layer 2 networks. The ethers library is used to create an Infura provider for both chains based on the IDs passed through appConfig. The core objective of the code is to enable querying Unstoppable Domain's Domain Name System to resolve Ethereum addresses.  | src/helpers/w2w/udResolver.ts |
| groupChat.ts  | The provided code snippet has various helper functions for commonly used functionalities in a chat application, such as checking if a chat is a group, getting group information like name and image, getting member details, rearranging member lists, validating wallet addresses, and updating groups. It uses PushAPI for updating groups and also imports types and helper functions from external modules.                                  | src/helpers/w2w/groupChat.ts  |
| aes.ts        | This code includes three separate functions related to encryption and generation of secure keys. The first two functions encrypt and decrypt input text using the Advanced Encryption Standard (AES) algorithm from the CryptoJS library, while the third function generates a random secret key using letters and numbers. These functions can be used together to store and retrieve secure data.                                               | src/helpers/w2w/aes.ts        |
| index.ts      | The provided code snippet includes functions for encrypting and decrypting messages using AES and PGP encryption, for verifying message signatures and formatting file sizes. There are also helper functions aiding the decryption and formatting of individual messages and feeds in a chat, as well as exporting internal components for use in other parts of the application.                                                                | src/helpers/w2w/index.ts      |
| pgp.ts        | The provided code snippet exports functions for generating a key pair, encrypting and decrypting messages using PGP encryption, signing messages with a private key, and verifying message signatures using a public key. These functionalities are performed using the'openpgp' and'openpgp/lightweight' packages.                                                                                                                               | src/helpers/w2w/pgp.ts        |
| user.ts       | The provided code snippet includes various utility functions related to a chat application. These functions perform tasks such as checking if a user is already connected, checking if a chat exists, getting the latest thread hash, displaying a default user, fetching the inbox, fetching intent, updating chat/inbox/intent, and checking if a chat is an intent. The functions use modules such as PushAPI, w2wHelper, openpgp, and config. | src/helpers/w2w/user.ts       |

</details>

<details closed><summary>W2wchat</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                            | Module                                      |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| w2wIndexeddb.ts | The provided code snippet contains functions to initialize, write to and read from an indexedDB database. A database with three object stores (Inbox, Intent and CID_store) are created, and the appropriate store is accessed depending on the state and dbName parameters passed to the intitializeDb function. The addData function is used to write data to the database and the viewData function is used to retrieve data from the database. | src/components/chat/w2wChat/w2wIndexeddb.ts |

</details>

<details closed><summary>Yield</summary>

| File                   | Summary                                                                                                                       | Module                                   |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| YieldFarmingModule.tsx | Error generating file summary. Exception: Client error '400 Bad Request' for url 'https://api.openai.com/v1/chat/completions' | src/modules/yield/YieldFarmingModule.tsx |
|                        | For more information check: https://httpstatuses.com/400                                                                      |                                          |

</details>

---

## 🚀 Getting Started

### 🖥 Installation

1. Clone the push-dapp repository:
```sh
git clone https://github.com/ethereum-push-notification-service/push-dapp
```

2. Change to the project directory:
```sh
cd push-dapp
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Using push-dapp

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```


## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a pull request to the original repository.
Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

---- old Readme----

The dApp that powers Push Protocol

# Local Dev

```bash
git clone https://github.com/ethereum-push-notification-service/push-dapp.git
```

```bash
cd push-dapp
yarn install
```
Open up localhost:3000 by

```bash
yarn start
```
Make sure to have the generate the `.env` file from the .env.sample file.
You can set up on different environments depending on the REACT_APP_DEPLOY_ENV variable(DEV or STAGING or PROD). 

