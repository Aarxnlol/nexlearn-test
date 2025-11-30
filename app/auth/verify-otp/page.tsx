// app/auth/verify-otp/page.tsx
// Server component — instructs Next to treat this route as dynamic (no prerender)
export const dynamic = "force-dynamic";

import VerifyOtpClient from "./verify-otp-client";

export default function Page() {
  // simple server wrapper that renders the client-only OTP form
  return <VerifyOtpClient />;
}
