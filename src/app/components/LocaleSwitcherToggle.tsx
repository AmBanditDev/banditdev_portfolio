'use client';

import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/src/i18n/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {
    defaultValue: string;
};

export default function LocaleSwitcherToggle({
    defaultValue,
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onLanguageToggle() {
        const nextLocale = currentLocale === 'en' ? 'th' : 'en';
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }

    const currentLocale = (params.locale || defaultValue) as Locale;

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={onLanguageToggle}
            disabled={isPending}
            className="cursor-pointer rounded-full !p-1">
            {currentLocale === 'en' ? (
                <Image src="/assets/images/th-icon.png" alt="TH Language Icon" width={50} height={50} />
            ) : (
                <Image src="/assets/images/us-icon.png" alt="EN Language Icon" width={50} height={50} />
            )}
            <span className="sr-only">Toggle language</span>
        </Button>
    );
}