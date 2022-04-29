import en from '../lang/en-US.js'
import fr from '../lang/fr-FR.js'
import ru from '../lang/ru-RU.js'

export const I18N = {
    locales: [
        { code: 'en', iso: 'en-US', name: 'English' },
        { code: 'fr', iso: 'fr-FR', name: 'Français' },
        { code: 'ru', iso: 'ru-RU', name: 'Русский' }
    ],
    defaultLocale: 'en',
    pages: {
        index: {
            en: '/home',
            fr: '/page-d\'accueil',
            ru: '/home'
        },
        movies: {
            en: '/movies',
            fr: '/films',
            ru: '/films'
        },
        tv: {
            en: '/tv-shows',
            fr: '/tv-shows',
            ru: '/tv-shows'
        }
    },
    vueI18n: {
        fallbackLocale: 'en',
        messages: { en, fr, ru }
    }
}