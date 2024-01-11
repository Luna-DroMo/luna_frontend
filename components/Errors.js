import { stringifyError } from "next/dist/shared/lib/utils";

export function ErrorBanner(error) {

    return (
        <div className="w-full flex rounded-xl bg-[#FFF0CB] mt-7 p-2 border-[#FFF0CB] z-1">
            <img src="/warning.svg" className="inline-block w-6 mr-4" />
            <p className="left mt-1">{error.children}</p>
        </div>
    )
}