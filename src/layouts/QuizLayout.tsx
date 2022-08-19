type Props = {
    headline?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
}

export const QuizLayout = ({ headline, body, footer }: Props) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full h-full max-h-[700px] max-w-[400px] bg-slate-200 flex flex-col justify-between items-center py-3 px-10">
                {headline}
                {body}
                {footer}
            </div>
        </div>
    );
}