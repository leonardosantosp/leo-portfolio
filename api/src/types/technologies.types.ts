import { RouteGenericInterface } from 'fastify'

export interface CreateTechnologyRoute extends RouteGenericInterface {
  Body: {
    name: string
    icon: string
    appIcon: string
  }
}

export interface UpdateTechnologyRoute extends RouteGenericInterface {
  Params: {
    id: string
  }
  Body: {
    name?: string
    icon?: string
    appIcon?: string
  }
}

export interface DeleteTechnologyRoute extends RouteGenericInterface {
  Params: {
    id: string
  }
}
