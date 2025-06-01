- 异常过滤器，
    - nestjs内置了一个异常层，负责处理应用程序，当应用程序代码没有处理异常的时候，此层就会捕获该异常，
    - 然后自动发送适当的用户友好响应

- 默认情况下，这个操作是由一个内置的全局异常过滤器来执行的，该过滤器的处理类型为HttpException(及其子类)的异常，当异常是
- 未识别的（既不是HttpException也不是继承自HttpException的类），内置的异常过滤器会生成以下默认的JSON响应
```javascript
{
    "statusCode": 500,
    "message": "Internal server error"
}
```


- @Catch
    - @Catch(HttpException) 装饰器将所需的元数据绑定到异常过滤器，告诉 Nest 此特定过滤器正在查找 HttpException 类型的异常，而不是其他类型。
    - @Catch() 装饰器可以接受单个参数或逗号分隔的列表。这使您可以一次为多种类型的异常设置过滤器。

- 内置HTTP异常
    - BadRequestException 标识请求无效的异常，通常用于处理客户端发送的无效或者是错误的请求
    - UnauthorizedException 表示未经授权的异常，用于处理需要身份验证的请求，但客户端未提供有效的身份验证的凭证哈
    - NotAcceptableException
    - GoneException
    - BadGatewayException
    - ......

- 异常过滤器
    - 