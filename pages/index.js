import NextLink from "next/link";

export default function HomePage() {
  return (
    <div>
      <NextLink href={"/StorePage"} passHref>
        Store
      </NextLink>
    </div>
  );
}
