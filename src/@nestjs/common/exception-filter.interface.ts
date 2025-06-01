// 异常过滤器的接口

import { ArgumentHost } from "./arguments-host.interface"

export interface ExceptionFilter<T = any> {
    catch(exception: T, host: ArgumentHost):any 
}