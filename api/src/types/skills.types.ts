import { RouteGenericInterface } from 'fastify'

export interface CreateSkillRoute extends RouteGenericInterface {
  Body: {
    name: string
    icon: string
  }
}

export interface UpdateSkillRoute extends RouteGenericInterface {
  Params: {
    id: string
  }
  Body: {
    name?: string
    icon?: string
  }
}

export interface DeleteSkillRoute extends RouteGenericInterface {
  Params: {
    id: string
  }
}
