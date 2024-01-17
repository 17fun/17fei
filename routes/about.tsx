export default function About() {
    return (
        <div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <div class="p-2 flex items-center w-full">
                    <a class="flex-1" href="/">
                        <img src="/logo.png" class="w-12 h-12" />
                    </a>
                </div>
                <div class="leading-8 text-gray-900 max-w-lg mt-8 max-auto">
                    <div class="text-lg text-gray-500">关于本站</div>
                    <div class="my-4">网站目前只接收客服人工收款</div>
                    <div>10元开通单月会员</div>
                    <div>
                        <span class="line-through">99</span>49元开通终身会员
                    </div>
                    <div>支付后添加微信[ wbot10 ] 1~12小时内响应</div>
                    <div class="mt-4">
                        如需其他定制开发， 欢迎联系合作。
                        <a href="/custom" class="underline">如何制作一个相同的网站赚钱</a>
                    </div>
                </div>
                <div>
                    <img src="/qrcode.JPG" class="max-w-xs rounded-lg my-4" />
                </div>
            </div>
        </div>
    );
}
