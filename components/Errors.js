import { stringifyError } from "next/dist/shared/lib/utils";

export function ErrorBanner(error) {
        console.log(error)
        return (
            <div className="w-full rounded-xl bg-[#e6bf4e] mb-7 p-2 border-[#dec068] z-1">
                <p>{error.children}</p>
            </div>
        )
}