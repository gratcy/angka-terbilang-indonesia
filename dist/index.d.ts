type LangKey = 'id' | 'en';
interface ToTerbilangConfig {
    dec?: string;
    lang?: LangKey;
}
export declare function toTerbilang(strAngka: string | number, config?: ToTerbilangConfig): string;
export default toTerbilang;
