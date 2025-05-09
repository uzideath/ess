interface SectionDividerProps {
    text: string
}

export function SectionDivider({ text }: SectionDividerProps) {
    return (
        <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-6 py-1.5 text-sm font-medium text-slate-500 rounded-full shadow-sm border border-slate-100">
                    {text}
                </span>
            </div>
        </div>
    )
}
