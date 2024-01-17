import { Head } from "$fresh/runtime.ts";

import Footer from '../components/Footer.tsx'
export default function Card() {
  return (
    <>
      <Head>
        <link href="/card.css" rel="stylesheet"></link>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/howler.min.js"></script>
        <script src="/positions.js"></script>
        <title>情趣姿势卡牌游戏</title>
      </Head>
      <div class="w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
        <div class="max-w-screen-md mx-auto ">
          <div class="p-2 flex items-center w-full">
            <a class="flex-1" href="/">
              <img src="/logo.png" class="w-12 h-12" />
            </a>
          </div>
          <div class="flex my-2 justify-center">
            <input type="checkbox" id="card" checked />
            <label for="card">
              <div class="cardWrapper ">
                <div class="cardRandom h-full flex flex-col items-center">

                  <div class="flex-1"></div>
                  <div class="relative p-4 flex-auto font-black text-3xl text-pink-600">
                    <img src="" class="w-full" id="position" />
                  </div>
                  <div class="flex-1"></div>
                </div>
              </div>
            </label>
          </div>
          <div class="text-center">抽一个试试（共<span id="position-count">10</span>个姿势）</div>
          <div class="text-center mt-2" id="goabout">
            <a href="/about" class="border bg-pink-600 px-4 py-2 rounded text-center" >解锁100个姿势</a>
          </div>
        </div>
      </div>
    </>
  )
}
