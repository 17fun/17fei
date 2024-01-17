import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="情侣情趣飞行棋是一款包含不同尺度适合不同阶段情侣一起玩的情趣游戏" />
        <title>情侣飞行棋 - 情趣私密的情侣小游戏</title>
        <script src="/stat.js"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
