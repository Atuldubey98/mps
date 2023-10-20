export default function Container({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return <main className="mx-auto sm:container">{children}</main>;
}
