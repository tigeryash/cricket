export const getServerSideURL = () => {
  return process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
}

export const getClientSideURL = () => {
  if (typeof window !== 'undefined') {
    const { protocol, hostname, port } = window.location
    return `${protocol}//${hostname}${port ? `:${port}` : ''}`
  }

  return getServerSideURL()
}