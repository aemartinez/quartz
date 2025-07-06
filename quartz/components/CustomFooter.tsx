import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
  mainText?: string // Custom main text
}

export default ((opts?: Options) => {
  const CustomFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const mainText = opts?.mainText ?? `${i18n(cfg.locale).components.footer.createdWith} <a href="https://quartz.jzhao.xyz/">Quartz v${version}</a> © ${year}`
    
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p dangerouslySetInnerHTML={{ __html: mainText }} />
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  CustomFooter.css = style
  return CustomFooter
}) satisfies QuartzComponentConstructor 