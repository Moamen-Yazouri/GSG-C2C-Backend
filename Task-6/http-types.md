## 1- Http module: It is a core module in Node.js that allows you to create web server that use http/1.1 protocol.
- ## usage:
    - REST APIS.
    - Static file servers.
    - Handling rest methods [GET, POST, PUT, DELETE].

## 2- Https module: It is a core module in Node.js, That allows you to create a secured servers using SSL/TLS protocol,
   It is also based on http/1.1 protocol.
   - Purpose: Add encryption while transmitting data between client and server.
   - ## Usage:
    - For secured APIs
    - Login and payments
    - Sensitive user data.


## 3- Http2 module: It is a core module in Node.js, That allows you to create servers based on modren http/2 protocol.

   - Purpose: 
        - Handle multi request at once over the same connection.
        - Header compression.
        - Better performance if you have a large website.
         
   - ## Usage:
    - Websites with many assets.
    - Hight performance web apps.
    - Modern APIs

## Key Technical differences between Http & Http/1.1:
    - Http/1.1: supports the persistent connection, Http does not support [1 request per connection].
    - Http/1.1: Supports chunked transfer encoding, Http does not [It needs to know the full size].
    - Http/1.1: Supports request pipelining [Multiple requests sent before previous one completed], Http does not support.
    - Http/1.1: Supports more caching header comparing Http that supports only the basic one [Expires].
    - Http/1.1: More advanced in error handling it has more detailed codes and responses. 



