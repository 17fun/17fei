import { Head } from "$fresh/runtime.ts";
import { render } from "preact";

import Footer from "../components/Footer.tsx";

export const handler = {
    async GET(req, ctx) {
        return await ctx.render();
    },
    async POST(req: Request, ctx) {
        const form = await req.formData();

        const subuser = {
            email: form.get("email").toString(),
            aisex: form.get("aisex").toString(),
        };
        let kv = await Deno.openKv();
        await kv.set(["subusers", subuser.email], subuser.aisex);
        return Response.redirect(req.headers.get("origin") + "/aiok");
    },
};
export default function AI() {
    return (
        <>
            <Head>
                <title>17fei会员空间</title>
            </Head>
            <div class="w-full leading-8 p-2 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
                <div class="max-w-screen-md mx-auto p-4">
                    <div class="p-2 text-center w-full">
                        <a class="block mx-auto" href="/">
                            <img src="/logo.png" class="w-12 h-12" />
                        </a>

                        <div class="text-xs">
                            一个AI情侣，懂你，可撩，力所能及的满足各种需求。
                        </div>
                    </div>
                    <form
                        class="max-w-md mx-auto border rounded p-4 text-xs bg-blue-50 text-gray-700 mt-4"
                        method="POST"
                    >
                        <div class="flex items-center">
                            <div class="w-20">订阅邮箱：</div>
                            <input
                                name="email"
                                class="border rounded p-1"
                                placeholder="邮箱"
                            ></input>
                        </div>
                        <div class="flex items-center">
                            <div class="w-20">希望获得：</div>
                            <select name="aisex" class="text-gray-700 p-1 mt-2">
                                <option value="1" checked>
                                    女伴侣
                                </option>
                                <option value="2">男伴侣</option>
                            </select>
                        </div>
                        <div class="mt-2 flex items-center">
                            <div class="w-20"></div>
                            <button
                                class="bg-blue-600 rounded p-1 text-white"
                                type="submit"
                            >
                                登记试用
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
