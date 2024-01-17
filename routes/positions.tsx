import { Head } from "$fresh/runtime.ts";

import Footer from "../components/Footer.tsx";
import PositionList from "../islands/position-list.tsx";
import { positions } from "../lib/positions.ts";

export default function Positions() {
    return (
        <>
            <Head>
                <script src="/js/jquery.min.js"></script>
                <title>情趣姿势大全</title>
            </Head>
            <div class="w-full leading-8 p-2 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
                <div class="max-w-screen-md mx-auto">
                    <PositionList positions={positions}></PositionList>
                </div>
            </div>
        </>
    );
}
