
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Footer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<>
			<div class="text-center mt-8 p-2">
				<a class="bg-red-700 border rounded py-2 px-4 font-black" href="/about">关于</a>
			</div>
			<div class="text-center mt-8 text-pink-100  text-sm">@17fei.fun</div>
		</>
	);
}
