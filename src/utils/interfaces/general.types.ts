import { TFunction } from 'i18next';
import { ChangeEvent, ReactNode } from 'react';

export type TLanguagesOptions = {
    [key: string]: string;
};

export type ITranslate = TFunction<any, undefined>;

export const languages: TLanguagesOptions = {
    en: 'en-US',
    es: 'es-ES',
};

export interface IObject {
    [key: string]: any;
}

export interface Tab {
    label: string;
    value: any;
    width?: number;
}

export interface SelectOption {
    label: string;
    value: string | number | boolean;
}

export type SelectOptionType = SelectOption | undefined | null;

export type InputHTMLEvent = ChangeEvent<HTMLInputElement>;

export interface CarouselSettings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    nextArrow: ReactNode;
    prevArrow: ReactNode;
    autoplay: boolean;
    autoplaySpeed: number;
    cssEase: string;
    pauseOnHover?: boolean;
    dots?: boolean;
}
export type ComplementType = 'color' | 'categoria' | 'marca' | 'talle' | 'tipoTalle';
