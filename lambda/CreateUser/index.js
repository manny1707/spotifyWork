const awsSDK = require('aws-sdk');
const databaseConnection = new awsSDK.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    let username = JSON.stringify(`${event.username}`);
    let userPass = JSON.stringify(`${event.password}`)
    let parameters = {
        TableName: 'tb_users',
        Item: {
            'username': username,
            'user_password': userPass
        }
    }
        
    await databaseConnection.put(parameters).promise();
    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Successfully created user record.'),
    };
    
    return response;
}; 