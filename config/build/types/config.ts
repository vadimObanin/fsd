export type BuildMode = 'production' | 'development'

export interface BuildPats {
  entry: string,
  output: string,
  html: string
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPats
  isDev: boolean
}