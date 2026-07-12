type Props = {
  className?: string;
};

export function BrandMark({ className = "" }: Props) {
  return (
    <span className={`brand-mark ${className}`.trim()} aria-hidden="true">
      <i className="c1" />
      <i className="c2" />
      <i className="c3" />
      <i className="c4" />
    </span>
  );
}
