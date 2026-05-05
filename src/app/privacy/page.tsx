export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <div className="space-y-3">
        <div className="text-xs font-semibold text-muted-foreground">Legal</div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-sm leading-7 text-muted-foreground">
          This is a placeholder privacy policy. Replace with your real policy.
        </p>
      </div>

      <div className="mt-8 space-y-4 text-sm leading-7 text-foreground/80">
        <p>
          We collect the information you submit in the enquiry form (such as
          name and phone number) only to respond to your enquiry.
        </p>
        <p>
          If you want your data removed, contact us and we will take care of it.
        </p>
      </div>
    </div>
  );
}

