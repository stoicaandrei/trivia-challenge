type Props = {
  children: React.ReactNode;
};

export const QuizLayout = ({ children }: Props) => {
  return (
    <div className='flex h-screen w-screen items-center justify-center text-2xl'>
      <div className='flex h-full max-h-[700px] w-full max-w-[400px] flex-col items-center justify-between bg-slate-200 py-3 px-10'>
        {children}
      </div>
    </div>
  );
};
