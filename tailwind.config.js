/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
        extend: {
            spacing: {
                13: "3.2rem",
            },
            animation: {
                "spin-fast": "spin 0.8s linear infinite",
            },
        },
    },
    plugins: [],
};
