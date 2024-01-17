import { Head } from "$fresh/runtime.ts";

import Footer from "../components/Footer.tsx";

export default function Member() {
    return (
        <>
            <Head>
                <script src="/js/jquery.min.js"></script>
                <title>17fei会员空间</title>
            </Head>
            <div class="w-full leading-8 p-2 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
                <div class="max-w-screen-md mx-auto p-4">
                    <div>提供大家好玩分享空间，共同成长，不露脸不露点，不低俗不越界</div>
                    <div>功能搭建中， 欢迎加个人微信关注和提意见</div>
                </div>
            </div>
        </>
    );
}
