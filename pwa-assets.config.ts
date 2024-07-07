import {
  createAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config"

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset: {
    ...minimal2023Preset,
    apple: {
      ...minimal2023Preset.apple,
      padding: 0,
    },
    maskable: {
      ...minimal2023Preset.maskable,
      padding: 0,
    },
    appleSplashScreens: createAppleSplashScreens({
      padding: 0,
      resizeOptions: { fit: "contain", background: "white" },
      darkResizeOptions: { fit: "contain", background: "black" },
      linkMediaOptions: {
        log: true,
        addMediaScreen: true,
        xhtml: true,
      },
    }),
  },
  images: ["../public/Logo.png"],
})
