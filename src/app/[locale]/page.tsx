import { useTranslations } from "next-intl";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-primary h-dvh py-3 px-5">
      <h1 className="text-text text-9xl text-center">{t("title")}</h1>
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  );
}
