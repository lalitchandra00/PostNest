import { LoaderCircle } from "lucide-react"

function Loading({ message = "Loading..." }) {
	return (
		<div
			className="flex min-h-screen w-full items-center justify-center bg-white"
			role="status"
			aria-live="polite"
		>
			<div className="flex flex-col items-center gap-3 text-gray-600">
				<LoaderCircle className="h-8 w-8 animate-spin text-indigo-600" aria-hidden="true" />
				<span className="text-sm font-medium">{message}</span>
			</div>
		</div>
	)
}

export default Loading
