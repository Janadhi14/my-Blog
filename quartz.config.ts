import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Janadhi's Blog 🪼",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F2F4F3",        // Off-white
          lightgray: "#F4A460",    // Sandy brown
          gray: "#FF9B42",         // Orange
          darkgray: "#291720",     // Fuchsia rose
          dark: "#291720",         // Dark magenta-pink
          secondary: "#291720",     // Green
          tertiary: "#FFAD05",      // Teal
          highlight: "#FFCF6A",     // Muted pink
          textHighlight: "#291720", // Dark purple
        },
        darkMode: {
          light: "#00142E",        // background
          lightgray: "#394053",    // outline
          gray: "#F2F4F3",         // Orange
          darkgray: "#BAE0EE",     // Fuchsia rose
          dark: "#F2F4F3",         // Dark magenta-pink
          secondary: "#F2F4F3",     // Green
          tertiary: "#B6F3F4",      // Teal
          highlight: "#394053",     // Muted pink
          textHighlight: "#291720", // Dark purple
        },
        
        // darkMode: {
        //   light: "#F2F4F3",        // White Smoke
        //   lightgray: "#BAE0EE",    // Light Blue
        //   gray: "#394053",         // Charcoal
        //   darkgray: "#00142E",     // Oxford Blue
        //   dark: "#FFAD05",         // Orange (web)
        //   secondary: "#BAE0EE",     // Light Blue
        //   tertiary: "#394053",      // Charcoal
        //   highlight: "#F2F4F3",     // White Smoke
        //   textHighlight: "#FFAD05", // Orange (web)
        // },
        
        
        }
      
      
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
