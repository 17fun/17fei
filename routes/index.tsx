import { useSignal } from "@preact/signals";

import Footer from '../components/Footer.tsx'

export default function Home() {
  return (
    <div class="p-2 w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold my-16">情侣情趣飞行棋</h1>
        <img src="/logo.png" class="w-16 h-16" />
        <h2 class="my-4">最新自由定制版即将发布</h2>
        <div class="text-left leading-8 font-black mt-8">
          <div>1. 自由定制棋盘内容</div>
          <div>2. 预设不同阶段互动内容 恋爱，情趣，好玩。满足各种口味快速开局。</div>
          <div>3. 获取源码定制，一键接入自有app小程序, 公众号</div>
        </div>
        <div class="text-center mt-8">
          <div class="font-black my-4">游戏列表</div>
          <a href="/fxq/index.html" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">飞行棋</a>
          <a href="/card" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">任务卡牌</a>
          <a href="/position" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">姿势卡牌</a>
          <a href="/positions" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">姿势大全</a>
           
        </div>
        <div class="my-8">支持android，ios，平板，电脑等设备访问</div>
      </div>
      <Footer></Footer>
    </div>
  );
}
