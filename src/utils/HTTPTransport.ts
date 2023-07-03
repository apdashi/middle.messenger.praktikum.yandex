import { queryString } from './helpers'
export enum Method {
    Get = 'Get',
    Post = 'Post',
    Put = 'Put',
    Patch = 'Patch',
    Delete = 'Delete'
}

interface Options {
    method: Method
    data?: any
}

type HTTPMethod<Response = Record<string, any>> = (path: string, data?: unknown) => Promise<Response >

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2'
    protected endpoint: string

    constructor (endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
    }

    public get: HTTPMethod = async (path, data) => (
        await this.request(this.endpoint + path, {
            method: Method.Get,
            data
        })
    )

    public post: HTTPMethod = async (path, data) => (
        await this.request(this.endpoint + path, {
            method: Method.Post,
            data
        })
    )

    public put: HTTPMethod = async (path, data) => (
        await this.request(this.endpoint + path, {
            method: Method.Put,
            data
        })
    )

    public patch: HTTPMethod = async (path, data) => (
        await this.request(this.endpoint + path, {
            method: Method.Patch,
            data
        })
    )

    public delete: HTTPMethod = async (path, data) => (
        await this.request(this.endpoint + path, {
            method: Method.Delete,
            data
        })
    )

    private async request<Response>(url: string, options: Options = { method: Method.Get }): Promise<Response> {
        const { method, data } = options

        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            if (method === Method.Get) {
                if (data) {
                    url = `${url}?${queryString(data)}`
                }
            }

            xhr.open(method, url)

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response)
                    } else {
                        reject(xhr.response)
                    }
                }
            }

            xhr.onabort = () => {
                throw new Error('abort')
            }
            xhr.onerror = () => {
                throw new Error('network error')
            }
            xhr.ontimeout = () => {
                throw new Error('timeout')
            }

            xhr.withCredentials = true
            xhr.responseType = 'json'

            if (method === Method.Get || !(data)) {
                xhr.send()
            } else if (data instanceof FormData) {
                xhr.send(data)
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
                xhr.send(JSON.stringify(data))
            }
        })
    }
}
