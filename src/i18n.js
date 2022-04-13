import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    EN: {
        translation: {
            "Finnish": 'Finnish',
            'English': 'English',
            'Home': 'Home'
        }
    },
    FI: {
        translation: {
            "Finnish": 'Suomi',
            'English': 'Englanti',
            'Home': 'Koti'
        }
    }
};

i18n 
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'EN',
        interpolation: {
            escapeValue: false
        }
    })