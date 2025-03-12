


/**
 * Monitora a posição do scroll e atualiza o estado com base em um limite definido.
 * 
 * @param setState - useState que atualiza o estado (true se o scroll for maior ou igual ao `showHeight`, false caso contrário).
 * @param showHeigth - Altura (em pixels) a partir da qual o estado será atualizado para `true`.
 * 
 * @example
 * useEffect(() => showNavWhenScrolled(setNavBg, 90), []);
 */

export const showNavWhenScrolled = (
  setState: (value: boolean) => void, 
  showHeigth: number
) => {
  const handler = () => setState(window.scrollY >= showHeigth)
  window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
}