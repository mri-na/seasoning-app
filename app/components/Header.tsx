type HeaderProps = {
  title: string;
  backHref?: string;
};

export default function Header({ title, backHref }: HeaderProps) {
  return (
    <header className="h-[72px]">
      {/* 上段 */}
      <div className="flex items-center justify-between h-[71px] px-4">
        {backHref ? (
          <a href={backHref} className="text-xl">
            <img src="/icons/arrow-left.svg" alt="戻る" className="w-6 h-6" />
          </a>
        ) : (
          <div />
        )}

        <h1 className="text-[24px] tracking-[0.16em] font-normal text-center flex-1 mt-[4px]">
          {title}
        </h1>

        <div className="w-6" />
      </div>

      {/* 下の線 */}
      <div className="px-4">
        <div className="h-[1px] bg-[#999999] rounded-full"></div>
      </div>
    </header>
  );
}