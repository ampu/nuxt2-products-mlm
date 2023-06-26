export const LocalPath = {
  INDEX: `/`,
  CATEGORY: `/categories/:id`,
  PRODUCT: `/products/:id`,
  CART: `/cart`,
}

export const generatePath = (path: string, params: Record<string, unknown>) => {
  return path.replace(/:(\w+)/g, (_, key) => params[key] ?? key)
}
