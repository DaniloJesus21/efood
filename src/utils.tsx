export const getDescricao = (descricao: string, value: number) => {
  if (descricao.length > value) {
    return `${descricao.substring(0, value - 3)}...`
  }
  return descricao
}
