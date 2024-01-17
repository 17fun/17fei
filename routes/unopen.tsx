import { useSignal } from "@preact/signals";

import Footer from '../components/Footer.tsx'

export default function Page() {
  return (
    <div class="p-2 w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">

        <h1 class="text-4xl font-bold my-16">情侣情趣飞行棋</h1>

        <img src="/logo.png" class="w-16 h-16" />
        <h2 class="my-4">最新自由定制版即将发布</h2>
        <div class="p-4 border-4 rounded bg-pink-500 border-double">
          <div>https://17fei.fun</div>
          <div>支持不同设备访问，不获取隐私信息</div>
        </div>
        <div class="text-left leading-8 font-black mt-8">
          该功能更新维护中(10-26 ~ 10-27)，请使用其他功能
        </div>
        <a class="bg-pink-600 m-8 p-2 border rounded" href="/">返回首页</a>
        <div class="my-8">关注小红书，获取最新发布动态。</div>
        <div><a class="underline" href="https://www.xiaohongshu.com/user/profile/64e8ce860000000001013f7a">小红书官方账号</a></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
