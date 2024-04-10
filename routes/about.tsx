export default function About() {
  return (
    <div class="text-shadow min-h-screen w-full bg-pink-300 p-2 text-lg leading-8 text-red-100">
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <div class="flex w-full items-center p-2">
          <a class="flex-1" href="/">
            <img src="/logo.png" class="h-12 w-12" />
          </a>
        </div>
        <div class="max-auto mt-8 max-w-lg leading-8 text-gray-900">
          <div class="text-lg text-gray-500">关于本站</div>
          <div class="my-4">网站目前只接收客服人工收款</div>
          <div>10元开通会员</div>
          <div>99元网站部署服务（含素材，开源库中不含敏感素材）</div>
          <div>支付后添加微信[ wbot10 ] 1~12小时内响应</div>
          <div class="mt-4">
            如需其他定制开发， 欢迎联系合作。
            <a href="/custom" class="underline">
              如何制作一个相同的网站赚钱
            </a>
          </div>
        </div>
        <div>
          <img src="/qrcode.JPG" class="my-4 max-w-xs rounded-lg" />
        </div>
      </div>
    </div>
  );
}
