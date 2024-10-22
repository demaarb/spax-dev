import React from "react";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full absolute bg-zinc-100 text-center text-surface/75">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <span>© 2023 Copyright:&nbsp;</span>
          <a className="font-semibold" href="https://amiplus.co.za/">
            AMI Pty(Ltd)
          </a>
        </div>
      </div>
    </footer>
  );
}
