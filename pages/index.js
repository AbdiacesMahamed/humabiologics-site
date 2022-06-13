import Link from "next/link";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <div>
      <NextLink href={"/StorePage"} passHref>
        <Link>Store</Link>
      </NextLink>
    </div>
  );
}
