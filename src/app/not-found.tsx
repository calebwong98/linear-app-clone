import Link from "next/link";

import { Home, ShieldQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b bg-muted flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <ShieldQuestion className="mx-auto h-16 w-16 text-gray-400" />
          <h2 className="py-8 text-3xl font-extrabold text-gray-900">404</h2>
          <p className=" text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for has either been moved or
            doesn&apos;t exist.
          </p>
        </div>
        <Button asChild className="w-full">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
