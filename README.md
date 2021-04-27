# electric-rate-engine-api
API Wrapper around the Rate Engine

## Routes

### Health Check
`GET /health`
Returns 200 in the event that the app is running

### Annual Cost Calculation
`POST /calculate/annual_costs`

Request:
[Sample Request](https://github.com/bellawatt/electric-rate-engine-api/blob/master/sample_request.json)

Response
```json
{
    "annualCosts": [
        {
            "id": "inclining-block",
            "name": "Inclining Block",
            "annualCost": 1366179.272645084
        },
        {
            "id": "inclining-block",
            "name": "Inclining Block",
            "annualCost": 1658749.4024976022
        },
        {
            "id": "tou",
            "name": "Time Of Use",
            "annualCost": 1467625.3343375036
        }
    ]
}
```
