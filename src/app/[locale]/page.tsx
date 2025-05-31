import { useTranslations } from "next-intl";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import Hero from "@/components/layout/Hero";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const heroContent = {
    eyebrown: t("hero.eyebrown"),
    title: t("hero.title"),
    subtitle: t("hero.subtitle"),
    paragraph: t("hero.paragraph"),
    image: "/images/profile.png",
  };

  return (
    <div className="bg-primary h-dvh w-dvw py-3 px-5">
      <Hero {...heroContent} />
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  );
}
