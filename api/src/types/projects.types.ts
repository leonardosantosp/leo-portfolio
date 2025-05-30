import { RouteGenericInterface } from 'fastify'

export interface DeleteProjectRoute extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export interface UpdateProjectRoute extends RouteGenericInterface {
  Params: {
    id: string
  }
  Body: {
    title?: string
    logo?: string
    mockup?: string
    repository?: string
    siteUrl?: string
    videoUrl?: string
    stack?: string[]
  }
}

export interface CreateProjectRoute extends RouteGenericInterface {
  Body: {
    title: string
    logo: string
    mockup: string
    repository: string
    siteUrl: string
    videoUrl: string
    stack: string[]
  }
}
