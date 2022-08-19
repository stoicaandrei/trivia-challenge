type Props = {
    headline?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
}

export const QuizLayout = ({ headline, body, footer }: Props) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex h-full max-h-[700px] w-full max-w-[400px] flex-col items-center justify-between bg-slate-200 py-3 px-10">
                {headline}
                {body}
                {footer}
            </div>
        </div>
    );
}