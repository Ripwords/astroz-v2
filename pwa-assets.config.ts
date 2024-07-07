import {
  createAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config"

export default defineConfig({
  preset: {
    ...minimal2023Preset,
    appleSplashScreens: createAppleSplashScreens({
      padding: 0.3,
      resizeOptions: { fit: "contain", background: "white" },
      darkResizeOptions: { fit: "contain", background: "black" },
      linkMediaOptions: {
        addMediaScreen: true,
        xhtml: true,
      },
    }),
  },
  images: ["public/Logo.png"],
})
