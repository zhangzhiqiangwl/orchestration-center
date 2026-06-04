import {Component} from "react";
import {AlertTriangle, RefreshCw} from "lucide-react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error};
    }

    componentDidCatch(error, errorInfo) {
        console.error("[ErrorBoundary]", error, errorInfo);
    }

    handleReset = () => {
        this.setState({hasError: false, error: null});
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return (
                <div className="flex flex-col items-center justify-center h-full min-h-[320px] gap-4 p-8 text-zinc-500 dark:text-zinc-400">
                    <AlertTriangle className="w-12 h-12 text-rose-500" />
                    <div className="text-center">
                        <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-1">
                            Something went wrong
                        </p>
                        <p className="text-sm max-w-md">
                            {this.state.error?.message || "An unexpected error occurred in this section."}
                        </p>
                    </div>
                    <button
                        onClick={this.handleReset}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-medium transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Try Again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export {ErrorBoundary};
