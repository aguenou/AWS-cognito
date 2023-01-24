import { CognitoUserPool } from "amazon-cognito-identity-js";

//YNOV
// const poolData = {
//   UserPoolId: "eu-west-3_Iekd8jDeb",
//   ClientId: "7llslfb09dtag2h7117og3ku72"
// }


const poolData = {
  UserPoolId: "us-east-1_JGgpUvaXL",
  ClientId: "38nt5jnle029odcn43vngi3gvq"
}


export default  new CognitoUserPool(poolData)
