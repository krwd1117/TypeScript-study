function helloBasic<T, U>(message: T, comment: U): T {
    return message
}

// T를 'string' 타입으로 지정
helloBasic<string, number>("mark", 16);
// T를 추론
helloBasic(36, 13);