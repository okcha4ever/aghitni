"use client";
import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex items-center justify-center py-5 font-bold">
        <Link href="/" className="flex flex-row space-x-3 text-blue-600">
          <ArrowLeftCircleIcon /> <span>Go back home</span>
        </Link>
      </body>
    </html>
  );
}
