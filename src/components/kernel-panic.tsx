import { randomInt } from "crypto";
import { useState, useEffect } from "react";

const KernelPanic = () => {
  const [renderedSpans, setRenderedSpans] = useState(0);

  const kernelMessages = [
    "[  1.076702] Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)",
    "[  1.077906] CPU: 0 PID: 1 COMM: swapper/0 NOT tainted 3.10.0-327.el7.x86_64 #1",
    "[  1.078429] Hardware name: Egely Inc. Egely Virtual Platform/440BX Desktop Reference Platform. BIOS 6.00 1/3/37",
    "[  1.079429] fffff",
    "[  1.080501] Call Trace:",
    "[  1.081501] [<ffffffff810ff88f>] ? panic+0xa1/0x1f2",
    "[  1.082502] [<ffffffff815372cc>] ? mount_block_root+0x210/0x2bc",
    "[  1.083503] [<ffffffff815374c6>] ? mount_root+0x54/0x58",
    "[  1.084504] [<ffffffff815375fc>] ? prepare_namespace+0x16a/0x1a2",
    "[  1.085505] [<ffffffff81536f25>] ? kernel_init+0x21e/0x221",
    "[  1.086506] [<ffffffff810b1fca>] ? ret_from_fork+0x7a/0xb0",
    "[  1.087507] [<ffffffff81536d07>] ? rest_init+0x77/0x77",
    "[  1.088508] ---[ end Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0) ]---",
    "[  1.088508] Tip: you may be typed wrong slug for blogs."
  ];

  useEffect(() => {
    if (renderedSpans < kernelMessages.length) {
      const interval = setInterval(() => {
        setRenderedSpans((prev) => prev + 1);
      }, (Math.random() * 50) + 5);

      return () => clearInterval(interval);
    }
  }, [renderedSpans, kernelMessages.length]);

  return (
    <div className="w-full flex flex-col gap-1 p-4 h-screen bg-black lg:text-2xl sm:text-base text-xs">
      {kernelMessages.slice(0, renderedSpans).map((message, index) => (
        <span key={index} className="font-mono text-white">
          {message}
        </span>
      ))}
    </div>
  );
};

export default KernelPanic;
