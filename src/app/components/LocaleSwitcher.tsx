import { useLocale } from 'next-intl';
import LocaleSwitcherToggle from './LocaleSwitcherToggle';

export default function LocaleSwitcher() {
    const locale = useLocale();

    return (
        <LocaleSwitcherToggle defaultValue={locale} />
    );
}