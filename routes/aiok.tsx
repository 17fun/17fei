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
                    <div>感谢订阅, 功能上线后会收到邮件通知， 请留意邮箱。</div>
                    <a href="/" class="text-pink-800 underline">回首页</a>
                </div>
            </div>
        </>
    );
}
