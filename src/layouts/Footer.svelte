<script lang="ts">
    import FooterLink from "../components/FooterLink.svelte";
    import FooterPartnerImage from "../components/FooterPartnerImage.svelte";
    import Facebook from "../components/icons/social/Facebook.svelte";
    import Instagram from "../components/icons/social/Instagram.svelte";
    import Linkedin from "../components/icons/social/Linkedin.svelte";
    import X from "../components/icons/social/X.svelte";
    import { t } from "../i18n/store";
</script>

<footer class="text-variant1" aria-labelledby="footer-heading">
    <!-- Funding Partners Section -->
    <section
        class="text-tertiary border-variant1 border-2 border-b-0 bg-[#ffffff] py-6 sm:py-8 md:py-10"
        aria-labelledby="funding-partners-heading"
    >
        <div class="wrapper">
            <div
                class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
            >
                <!-- Funding Partners -->
                <div class="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                    <h3
                        id="funding-partners-heading"
                        class="text-secondary text-sm font-bold sm:text-base"
                    >
                        {$t("footer.funding.title")}
                    </h3>
                    <div
                        class="flex items-center gap-4"
                        role="list"
                        aria-label="Funding partner organizations"
                    >
                        <div class="flex items-center gap-3 sm:gap-4">
                            <FooterPartnerImage
                                src="/imgs/orgs/INTERREG_EU.jpg"
                                alt="Funded by Interreg Euro-MED"
                            />
                        </div>
                    </div>
                </div>

                <!-- Part Of Section -->
                <div class="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <h3 class="text-secondary text-sm font-medium sm:text-base">
                        {$t("footer.funding.partOf")}
                    </h3>
                    <div
                        class="flex items-center gap-2 sm:gap-3"
                        role="list"
                        aria-label="Partner organizations"
                    >
                        <FooterPartnerImage
                            src="/imgs/orgs/b4m.png"
                            alt="Bauhaus 4 Med consortium"
                            href="https://b4m.space"
                            size="medium"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div
        class="bg-secondary relative rounded-t-3xl bg-size-[116%_114%] bg-position-[-127%_42%] bg-no-repeat min-[700px]:bg-size-[64%_108%] min-[700px]:bg-position-[114%]"
        style="background-image: url('/path2.svg');"
    >
        <!-- Main Footer Content -->
        <section
            class="relative z-10 py-6 sm:py-8 md:py-10"
            aria-labelledby="footer-navigation-heading"
        >
            <div class="wrapper">
                <div class="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-8">
                    <!-- Navigation Links -->
                    <nav
                        class="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:flex-row lg:gap-8 xl:gap-10"
                        aria-label="Footer navigation"
                    >
                        <h2 id="footer-navigation-heading" class="sr-only">Footer Navigation</h2>

                        <!-- About Goteo -->
                        <div class="space-y-2">
                            <h4 class="text-purple-soft text-sm leading-6 font-bold sm:text-base">
                                {$t("footer.navigation.about.title")}
                            </h4>
                            <ul class="space-y-1 text-xs leading-5 sm:text-sm sm:leading-6">
                                <li>
                                    <FooterLink href="/about/bauhaus4med">
                                        {$t("footer.navigation.about.crowdvocacy")}
                                    </FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/about">
                                        {$t("footer.navigation.about.crowdfunding")}
                                    </FooterLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <!-- Logo -->
                    <div class="flex justify-center lg:justify-end">
                        <span>Powered by</span>
                        <div class="h-8 w-28 sm:h-10 sm:w-36">
                            <img
                                src="/imgs/goteo-white-logo.svg"
                                alt="Goteo logo"
                                class="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Footer -->
        <section
            class="relative z-10 pb-6 sm:pb-8 md:pb-10"
            aria-labelledby="footer-bottom-heading"
        >
            <div class="wrapper">
                <div
                    class="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between"
                >
                    <!-- Legal Links -->
                    <nav
                        class="flex flex-wrap gap-4 sm:gap-6 lg:gap-8"
                        aria-label="Legal navigation"
                    >
                        <FooterLink href="/about/privacy" class="text-xs leading-4 font-medium">
                            {$t("footer.legal.privacyPolicy")}
                        </FooterLink>

                        <FooterLink href="/about/cookies" class="text-xs leading-4 font-medium">
                            {$t("footer.legal.cookies")}
                        </FooterLink>
                    </nav>

                    <!-- Social Media and Platoniq -->
                    <div class="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center">
                        <!-- Social Media Icons -->
                        <div
                            class="flex items-center justify-center gap-2 lg:justify-start"
                            role="list"
                            aria-label="Social media links"
                        >
                            <a
                                href="https://instagram.com/bauh.aus4med"
                                class="focus:ring-purple-soft focus:ring-offset-secondary rounded-sm transition-all duration-200 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram width="24" height="24" />
                            </a>
                            <a
                                href="https://facebook.com/bauhaus4med"
                                class="focus:ring-purple-soft focus:ring-offset-secondary rounded-sm transition-all duration-200 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook width="24" height="24" />
                            </a>
                            <a
                                href="https://twitter.com/bauhaus4med"
                                class="focus:ring-purple-soft focus:ring-offset-secondary rounded-sm transition-all duration-200 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                aria-label="Follow us on X (formerly Twitter)"
                            >
                                <X width="24" height="24" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/bauhaus4med"
                                class="focus:ring-purple-soft focus:ring-offset-secondary rounded-sm transition-all duration-200 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                aria-label="Connect with us on LinkedIn"
                            >
                                <Linkedin width="24" height="24" />
                            </a>
                        </div>

                        <!-- Platoniq Foundation -->
                        <div class="text-variant1 flex flex-col items-center lg:items-start">
                            <img
                                src="/imgs/platoniq.png"
                                alt="Platoniq Foundation logo"
                                class="h-4 sm:h-5"
                                loading="lazy"
                            />
                            <div class="text-xs leading-normal font-light sm:text-sm">
                                {$t("footer.platoniq.foundation")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</footer>
