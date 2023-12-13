# midjourney-client

Node.js client for the unofficial MidJourney api.


<div align="center">
	<p>
		<a href="https://discord.gg/GavuGHQbV4"><img src="https://img.shields.io/discord/1082500871478329374?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/midjourney"><img src="https://img.shields.io/npm/v/midjourney.svg?maxAge=3600" alt="npm version" /></a>
	</p>
</div>

## What's new

- [face swap](https://github.com/erictik/midjourney-client/blob/main/example/faceswap.ts)
- [niji bot](https://github.com/erictik/midjourney-client/blob/main/example/imagine-niji.ts)
- [custom zoom](https://github.com/erictik/midjourney-client/blob/main/example/customzoom.ts)
- [remix mode](https://github.com/erictik/midjourney-client/blob/main/example/variation-ws.ts)

## Example

To run the included example, you must have [Node.js](https://nodejs.org/en/) installed. Then, run the following commands in the root directory of this project:

2. install dependencies

   ```bash
   yarn
   # or npm
   npm install
   ```

3. set the environment variables (DM Natalie)

- Then, run the example with the following command and images will be automatically downloaded in the example folder.

  ```bash
  npx tsx example/upscale-ws.ts
  ```

  OR

  ```bash
  yarn example:imagine
  # or npm
  npm run example:imagine
  ```

- [more example](./example/)


## route-map

- [x] `/imagine` `variation` `upscale` `reroll` `blend` `zoomout` `vary`
- [x] `/info`
- [x] `/fast ` and `/relax `
- [x] [`/prefer remix`](https://github.com/erictik/midjourney-client/blob/main/example/prefer-remix.ts)
- [x] [`variation (remix mode)`](https://github.com/erictik/midjourney-client/blob/main/example/variation-ws.ts)
- [x] `/describe`
- [x] [`/shorten`](https://github.com/erictik/midjourney-client/blob/main/example/shorten.ts)
- [x] `/settings` `reset`
- [x] verify human
- [x] [proxy](https://github.com/erictik/midjourney-discord/blob/main/examples/proxy.ts)
- [x] [niji bot](https://github.com/erictik/midjourney-client/blob/main/example/imagine-niji.ts)
- [x] [custom zoom](https://github.com/erictik/midjourney-client/blob/main/example/customzoom.ts)
- [x] autoload command payload

---

## Projects

- [midjourney-ui](https://github.com/erictik/midjourney-ui/) next.js + vercel
- [midjourney-discord](https://github.com/erictik/midjourney-discord)-bot
- [phrame](https://github.com/jakowenko/phrame)
- [guapitu](https://www.guapitu.com/zh/draw?code=RRXQNF)

---

## Support

If you find it valuable and would like to show your support, any donations would be greatly appreciated. Your contribution helps me maintain and improve the program.

<span style="word-spacing:20px">
<img src="images/ali.png" height="300"/>  
<img src="images/wechat.png" height="300"/>
<a href='https://ko-fi.com/erictik' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee' /></a>
</span>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=erictik/midjourney-client&type=Date)](https://star-history.com/#erictik/midjourney-client&Date)
