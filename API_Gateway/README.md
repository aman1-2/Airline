FRONTEND -> MIDDLE-END -> BACKEND<br>
You must be wondering that why not the frontend cann't communicate directly to the backend.

**There are Multiple reasons for it:-**

1. We need an intermediate layer bettwen the client side and microservice.

2. Using this middle end, when client sends request we will be able to make decision that which microservice should actually respond to this request.

3. Apart from this we can do message validation, response transformation, rate limiting.

4. We try to prepare an API Gateway that acts as a middle end.