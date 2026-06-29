import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-black">
            <div className="max-w-md w-full text-center space-y-6">

                <div className="space-y-2">
                    <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">
                        Error
                    </p>
                    <h1 className="text-8xl font-black text-white tracking-tight">404</h1>
                    <div className="h-px w-16 bg-ted-red mx-auto" />
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-white/40 leading-relaxed">
                        The page{' '}
                        <span className="font-medium text-white/60 font-mono">"{pageName}"</span>{' '}
                        could not be found.
                    </p>
                </div>

                <div className="pt-4">
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase px-8 py-4 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/8 transition-all duration-300 font-semibold"
                    >
                        <ArrowLeft size={13} />
                        Back to Home
                    </a>
                </div>

            </div>
        </div>
    );
}