# CORS PROXY

CORS PROXY is a simple node JS server to help you solve the CORS issue as a quick solution, are you hitting an api that is giving you CORS issue, but as a UI developer you want quick solution, make this package as your proxy server to get unblocked.

## Installation

1. Clone the project
2. Install the dependencies using:

```bash
npm install
```
3. Start the project as:
```bash
node index.js
```

The server will be started at port 4500 : This is used as the default port.
## Usage

```python
curl --location --request POST 'http://localhost:4005/' \
--header 'Content-Type: application/json' \
--header 'Cookie: Cookie_1=value' \
--data-raw '{
    "url": <YOUR_CORS_ISSUE_URL> : String,
    "headers": <HEADERS_TO_BE_SENT_TO_API> : Object,
    "data": <DATA_FOR_POST/PUT/PATCH> : Object,
    "method": <API_METHOD> : String  // POST/GET/PUT/PATCH
}'
```

Simply call the above api as a post request with --data-raw as the request body from your UI application.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)