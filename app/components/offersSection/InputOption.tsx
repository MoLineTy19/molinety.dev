export default function InputOption({text}: {text: string}) {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                className="custom-checkbox appearance-none w-5 h-5 border border-gray-400/50 bg-transparent relative"
                disabled
                defaultChecked={true}
            />
            {text}
        </div>
    )
}