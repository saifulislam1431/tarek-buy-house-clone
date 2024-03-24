import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    display: "fallback"
});


export const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ['300', "400", "500", "700", "900"]
});