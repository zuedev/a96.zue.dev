import Link from "next/link";
import { metadata } from "./layout";
import FadeIn from "@/components/animations/FadeIn";

export default () => {
  return (
    <div className="bg-linear-to-br from-green-500 to-emerald-500">
      <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto">
        <div className="flex flex-col space-y-4 p-4">
          <FadeIn props={{ delay: 0.25 }}>
            <h1 className="text-4xl font-bold">{metadata.title}</h1>
          </FadeIn>

          <FadeIn props={{ delay: 0.5 }}>
            <p className="text-lg">{metadata.description}</p>
          </FadeIn>

          <FadeIn props={{ delay: 0.75 }}>
            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-row gap-4">
                {[
                  {
                    href: "https://x.com/area96digital",
                    icon: "https://cdn.simpleicons.org/x/black",
                    title: "X/Twitter",
                  },
                  {
                    href: "https://bsky.app/profile/96.zue.dev",
                    icon: "https://cdn.simpleicons.org/bluesky/black",
                    title: "Bluesky",
                  },
                ].map((social) => (
                  <Link
                    href={social.href}
                    key={social.title}
                    className="transform hover:scale-110 transition-transform"
                  >
                    <img
                      src={`${social.icon}`}
                      className="h-[2rem] w-[2rem] object-contain"
                      alt={social.title}
                      title={social.title}
                    />
                  </Link>
                ))}
              </div>

              <span className="text-xs opacity-50 text-right p-1">
                "96" is made with ❤️ by{" "}
                <a href="https://zue.dev" target="_blank">
                  zue.dev
                </a>
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
