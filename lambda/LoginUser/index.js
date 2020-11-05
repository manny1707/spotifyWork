const awsSDK = require('aws-sdk');

awsSDK.config.update({
    region: "us-east-2",
});

let databaseConnection = new awsSDK.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    let loginUsername = JSON.stringify(`${event.username}`);
    let loginUserPass = JSON.stringify(`${event.password}`);

    let parameters = {
        TableName: "tb_users",
        Key: {
            username: loginUsername
        }
    };

    let apiResponse = null;

    await databaseConnection.get(parameters).promise()
        .then(response => {
            
            let userInfo = response.Item;
            if (userInfo.user_password == loginUserPass) {
                apiResponse = {
                    statusCode: 200,
                    body: userInfo.username,
                };
            }
            else {
                apiResponse = {
                    statusCode: 401,
                    body: "Incorrect password.",
                }; 
            }
        });

    return apiResponse;
};