import { Controller, Get, HttpException, HttpStatus, BadRequestException } from "@nestjs/common"

import { ForbiddenException } from "./forbidden.exception"
@Controller()
export class AppController {

    @Get("exception")
    exception() {
        // 当异常是未识别的（既不是 HttpException 也不是继承自 HttpException 的类），
        // 内置的异常过滤器会生成以下默认的 JSON 响应：
        /**
        {
            "statusCode": 500,
            "message": "Internal server error"
        }
         */
        // throw new Error("exception")


        // 标准的内置 HttpException
        // 1) 字符串或者是对象
        // 2）状态码
        // 3）
        // throw new HttpException('Forbidden-apple', HttpStatus.FORBIDDEN)
        // throw new HttpException({
        //     // status: HttpStatus.FORBIDDEN,
        //     code: "10001", // 这还可以自定义code码哈
        //     error: "这是一个自定义的消息" // 自定义的错误消息
        // }, HttpStatus.FORBIDDEN, {
        //     // 第三个构造函数参数（可选）——options——可用于提供错误原因。这个 cause 对象不会被序列化到响应对象中，
        //     // 但它对于日志记录非常有用，提供了有关导致 HttpException 被抛出的内部错误的宝贵信息。
        //     cause: "这块是造成的原因"
        // })


        throw new ForbiddenException()
    }

    @Get("custom")
    custom() {
        throw new ForbiddenException()
    }


    @Get("bad-request")
    badRequest() {
        throw new BadRequestException("error-message", "hello")
    }
}